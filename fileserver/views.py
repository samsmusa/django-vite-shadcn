import hashlib

from django.db.models import Q
from django.utils.decorators import method_decorator
from django_ratelimit.decorators import ratelimit
from drf_spectacular.utils import extend_schema
from rest_framework import viewsets, status, permissions, parsers
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from decom.permissions import IsOwnerOrReadOnly
from fileserver.models import FileUpload, ImageVariant
from fileserver.utils import ImageOptimizer
from .serializers import (
    FileUploadSerializer
)


# Create your views here.
class FileUploadViewSet(viewsets.ModelViewSet):
    queryset = FileUpload.objects.all()
    serializer_class = FileUploadSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
    authentication_classes = viewsets.ModelViewSet.authentication_classes
    parser_classes = [parsers.MultiPartParser]
    # def get_serializer_class(self):
    #     if self.request.method == "POST":
    #         return FileUploadSerializerPost
    #     return self.serializer_class

    def get_queryset(self):
        queryset = FileUpload.objects.all()

        # Filter by user's files unless they have admin permissions
        if not self.request.user.is_staff:
            queryset = queryset.filter(user=self.request.user)

        # Filter by file type
        file_type = self.request.query_params.get('type')
        if file_type:
            queryset = queryset.filter(file_type=file_type)

        # Filter by access level
        access_level = self.request.query_params.get('access_level')
        if access_level:
            queryset = queryset.filter(access_level=access_level)

        # Search functionality
        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(filename__icontains=search) |
                Q(original_filename__icontains=search) |
                Q(mime_type__icontains=search)
            )

        return queryset.order_by('-created_at')

    def create(self, request, *args, **kwargs):
        if 'filename' not in request.FILES:
            return Response({'error': 'No file provided'}, status=status.HTTP_400_BAD_REQUEST)

        file = request.FILES['filename']

        # Check for duplicate files
        file_hash = hashlib.sha256()
        for chunk in file.chunks():
            file_hash.update(chunk)
        file_hash_hex = file_hash.hexdigest()

        existing_file = FileUpload.objects.filter(
            user=request.user,
            file_hash=file_hash_hex
        ).first()

        if existing_file:
            return Response({
                'error': 'File already exists',
                'existing_file': FileUploadSerializer(existing_file, context={'request': request}).data
            }, status=status.HTTP_409_CONFLICT)

        # Create file upload
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        file_upload = serializer.save(user=request.user, file=file, file_hash=file_hash_hex)

        # Create image variants if it's an image
        if file_upload.file_type == 'image':
            variants = ImageOptimizer.create_variants(file_upload.file, file_upload.filename)

            for variant_name, variant_data in variants.items():
                size_name = variant_name.replace('_webp', '')
                format_type = 'WEBP' if variant_name.endswith('_webp') else 'JPEG'

                image_variant = ImageVariant(
                    file_upload=file_upload,
                    size_name=size_name,
                    width=variant_data['width'],
                    height=variant_data['height'],
                    file_size=len(variant_data['file'].read()),
                    format=format_type
                )

                filename = f"{file_upload.id}_{size_name}.{format_type.lower()}"
                image_variant.file.save(filename, variant_data['file'], save=False)
                image_variant.save()


        return Response(
            FileUploadSerializer(file_upload, context={'request': request}).data,
            status=status.HTTP_201_CREATED)

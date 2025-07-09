from rest_framework import serializers

from fileserver.models import ImageVariant, FileUpload


class ImageVariantSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()

    class Meta:
        model = ImageVariant
        fields = ['size_name', 'width', 'height', 'file_size', 'format', 'url']

    def get_url(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.file.url)
        return None


class FileUploadSerializer(serializers.ModelSerializer):
    filename = serializers.FileField()
    variants = ImageVariantSerializer(many=True, read_only=True)
    url = serializers.SerializerMethodField()

    class Meta:
        model = FileUpload
        fields = [
            'id', 'filename', 'file_type', 'file_size',
            'mime_type', 'created_at', 'updated_at', 'is_media_optimized', 'variants', 'url',
        ]
        read_only_fields = ['id', 'file_size', 'mime_type', 'file_type', 'created_at', 'updated_at']

    def get_url(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.file.url)
        return None

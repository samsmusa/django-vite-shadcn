import mimetypes
import uuid

import magic
from django.conf import settings
from django.db import models


class FileUpload(models.Model):
    FILE_TYPES = [
        ('image', 'Image'),
        ('document', 'Document'),
        ('video', 'Video'),
        ('audio', 'Audio'),
        ('other', 'Other'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    file = models.FileField(upload_to='uploads/%Y/%m/%d/')
    filename = models.CharField(max_length=255)
    file_type = models.CharField(max_length=20, choices=FILE_TYPES)
    file_size = models.BigIntegerField()
    mime_type = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_public = models.BooleanField(default=False)
    is_media_optimized = models.BooleanField(default=False)
    file_hash = models.CharField(max_length=64, blank=True, db_index=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['user', 'file_type']),
            models.Index(fields=['created_at']),
        ]

    def __str__(self):
        return f"{self.filename} ({self.file_type})"

    def get_file_type(self):
        """Determine file type based on MIME type"""
        mime_type = self.mime_type.lower()
        if mime_type.startswith('image/'):
            return 'image'
        elif mime_type.startswith('video/'):
            return 'video'
        elif mime_type.startswith('audio/'):
            return 'audio'
        elif mime_type in ['application/pdf', 'application/msword', 'text/plain']:
            return 'document'
        else:
            return 'other'

    def save(self, *args, **kwargs):
        if self.file:
            # Detect MIME type
            file_content = self.file.read()
            detected_mime = magic.from_buffer(file_content, mime=True)
            self.file.seek(0)  # Reset file pointer

            if detected_mime == 'application/x-empty' or not detected_mime:
                guessed_mime, _ = mimetypes.guess_type(self.file.name)
                self.mime_type = guessed_mime or 'application/octet-stream'
            else:
                self.mime_type = detected_mime

            # Set file type
            self.file_type = self.get_file_type()

            # Set file size
            self.file_size = self.file.size

            # Set filename if not provided
            if not self.filename:
                self.filename = self.file.name

        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        # Delete the main file from storage
        if self.file:
            self.file.delete(save=False)

        # Delete all variant files and objects
        for variant in self.variants.all():
            variant.delete()

        super().delete(*args, **kwargs)


class ImageVariant(models.Model):
    file_upload = models.ForeignKey(FileUpload, on_delete=models.CASCADE, related_name='variants')
    size_name = models.CharField(max_length=20)  # thumbnail, small, medium, large
    width = models.IntegerField()
    height = models.IntegerField()
    file = models.ImageField(upload_to='variants/%Y/%m/%d/')
    file_size = models.BigIntegerField()
    format = models.CharField(max_length=10)  # JPEG, PNG, WEBP
    created_at = models.DateTimeField(auto_now_add=True)
    file_hash = models.CharField(max_length=64, blank=True, db_index=True)

    class Meta:
        unique_together = ['file_upload', 'size_name', 'format']
        indexes = [
            models.Index(fields=['file_upload', 'size_name']),
        ]

    def delete(self, *args, **kwargs):
        # Delete the variant image file
        if self.file:
            self.file.delete(save=False)
        super().delete(*args, **kwargs)

from PIL import Image, ImageOps
from django.conf import settings
from django.core.files.base import ContentFile
from io import BytesIO
import os


class ImageOptimizer:
    @staticmethod
    def optimize_image(image_file, quality=None):
        """Optimize image for web delivery"""
        if quality is None:
            quality = getattr(settings, 'IMAGE_QUALITY', 85)

        try:
            img = Image.open(image_file)

            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')

            # Auto-orient based on EXIF data
            img = ImageOps.exif_transpose(img)

            # Optimize
            output = BytesIO()
            img.save(output, format='JPEG', quality=quality, optimize=True)
            output.seek(0)

            return ContentFile(output.read())
        except Exception as e:
            print(f"Error optimizing image: {e}")
            return image_file

    @staticmethod
    def create_variants(image_file, filename):
        """Create multiple size variants of an image"""
        variants = {}
        thumbnail_sizes = getattr(settings, 'THUMBNAIL_SIZES', {})

        try:
            img = Image.open(image_file)
            img = ImageOps.exif_transpose(img)

            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')

            for size_name, (width, height) in thumbnail_sizes.items():
                # Create resized image
                resized_img = img.copy()
                resized_img.thumbnail((width, height), Image.Resampling.LANCZOS)

                # Save as JPEG
                output = BytesIO()
                resized_img.save(output, format='JPEG', quality=85, optimize=True)
                output.seek(0)

                variants[size_name] = {
                    'file': ContentFile(output.read()),
                    'width': resized_img.width,
                    'height': resized_img.height,
                    'format': 'JPEG'
                }

                # Save as WebP if supported
                if 'WEBP' in getattr(settings, 'IMAGE_FORMATS', []):
                    output_webp = BytesIO()
                    resized_img.save(output_webp, format='WEBP', quality=85, optimize=True)
                    output_webp.seek(0)

                    variants[f"{size_name}_webp"] = {
                        'file': ContentFile(output_webp.read()),
                        'width': resized_img.width,
                        'height': resized_img.height,
                        'format': 'WEBP'
                    }

            return variants
        except Exception as e:
            print(f"Error creating variants: {e}")
            return {}
# app/templatetags/vite.py
import json, os
from django import template
from django.conf import settings

register = template.Library()

@register.simple_tag
def vite_asset(path, asset_type="js"):
    manifest_path = os.path.join(settings.BASE_DIR, 'static/js/.vite/manifest.json')
    try:
        with open(manifest_path, 'r') as f:
            manifest = json.load(f)
        entry = manifest.get(path)
        if not entry:
            return ''
        file = entry.get('file' if asset_type == 'js' else 'css', '')
        if isinstance(file, list): file = file[0]
        return f"/static/js/{file}"
    except Exception as e:
        print(e)
        return f"<!-- Vite error: {e} -->"

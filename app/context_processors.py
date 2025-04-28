# context_processors.py
def theme_context(request):
    return {
        'current_theme': getattr(request, 'theme', 'light'),
        'current_theme_color': getattr(request, 'theme_color', 'light'),
    }
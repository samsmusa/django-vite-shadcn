from django.shortcuts import render



def home_view(request):
    context = {
        'user': {
            'id': request.user.id if request.user.is_authenticated else None,
            'username': request.user.username if request.user.is_authenticated else 'Guest'
        }
    }
    return render(request, 'index.html', context)

def settings_view(request):
    # Add any context data needed for the settings page
    return render(request, 'settings.html', {})

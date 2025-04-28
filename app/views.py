from django.shortcuts import render

import json
from django.shortcuts import render


def home_view(request):
    # Sample data to pass to React
    initial_data = [
        {"id": 1, "name": "Item 1"},
        {"id": 2, "name": "Item 2"}
    ]

    context = {
        'initial_data': json.dumps(initial_data),
    }
    return render(request, 'index.html', context)
def settings_view(request):
    # Add any context data needed for the settings page
    return render(request, 'settings.html', {})

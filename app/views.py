import json

from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse


def home_view(request):
    initial_data = [
        {"id": 1, "name": "Item 1"},
        {"id": 2, "name": "Item 2"}
    ]

    context = {
        'initial_data': json.dumps(initial_data),
    }
    return render(request, 'pages/home/index.html', context)


def settings_view(request):
    return render(request, 'settings.html', {})


def switch_theme(request):
    redirect_url = request.META.get('HTTP_REFERER', reverse('home'))

    new_theme = request.GET.get('theme', 'light')
    theme_color = request.GET.get('theme_color', 'Orange')

    print(new_theme, theme_color)
    if new_theme not in ['light', 'dark']:
        new_theme = 'light'

    response = HttpResponseRedirect(redirect_url)

    max_age = 365 * 24 * 60 * 60

    response.set_cookie(
        'theme',
        new_theme,
        max_age=max_age,
        # httponly=True,
        samesite='Lax'
    )
    response.set_cookie(
        'theme_color',
        theme_color,
        max_age=max_age,
        # httponly=True,
        samesite='Lax'
    )

    return response



def nav_items_api(request):
    items = [{"id": 1, "name": "Item 1"}, {"id": 2, "name": "Item 2"}]
    return JsonResponse(list(items), safe=False)

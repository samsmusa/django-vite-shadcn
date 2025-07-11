import asyncio
import json
import time
from datetime import date

from django import forms
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.db import transaction
from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.urls import reverse_lazy
from django.views.decorators.http import require_GET, require_POST
from django.views.generic import CreateView
from rest_framework import viewsets

from account.models import User
from app.models import Discount
from app.serializers import DiscountSerializer
from ecommerce.models import Product, Order, Cart
from ui.models import UI


class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    first_name = forms.CharField(max_length=30, required=False)
    last_name = forms.CharField(max_length=30, required=False)

    class Meta:
        model = User
        fields = ("username", "email", "first_name", "last_name", "password1", "password2")


class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"


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

        samesite='Lax'
    )
    response.set_cookie(
        'theme_color',
        theme_color,
        max_age=max_age,

        samesite='Lax'
    )

    return response


def nav_items_api(request):
    items = [{"id": 1, "name": "Item 1"}, {"id": 2, "name": "Item 2"}]
    return JsonResponse(list(items), safe=False)


def sync_view(request):
    time.sleep(2)
    return JsonResponse({'status': 'done', 'type': 'sync'})


async def async_view(request):
    await asyncio.sleep(2)
    return JsonResponse({'status': 'done', 'type': 'async'})


def add_view(request):
    a = int(request.GET.get("a", 0))
    b = int(request.GET.get("b", 0))
    return JsonResponse({"result": a + b})


@require_GET
def product_detail_view(request, slug):
    product = get_object_or_404(
        Product.objects.only('id', 'slug', 'description', 'price'),
        slug=slug
    )
    offer_icon_url = "/static/icons/offer-badge.png"

    return render(request, 'pages/productDetail/index.html', {
        "product": product,
        "offer_icon_url": offer_icon_url,
    })


@require_GET
def featured_product(request):
    ui_product = UI.objects.filter(featured_product__isnull=False)
    return render(request, 'pages/featured_product/index.html', {"featured": ui_product})


@require_GET
@login_required
@transaction.atomic
def order_cart(request, slug):
    product = get_object_or_404(Product, slug=slug)
    try:
        quantity = int(request.GET.get('quantity', 1))
        if quantity <= 0:
            raise ValueError("Quantity must be positive")
    except (ValueError, TypeError):
        messages.error(request, "Invalid quantity selected.")
        return redirect('product_detail', slug=slug)

    if not request.session.session_key:
        request.session.save()

    cart_filter = {'user': request.user} if request.user.is_authenticated else {
        'session_id': request.session.session_key}
    cart, created = Cart.objects.get_or_create(**cart_filter)

    cart.items.all().delete()

    item, item_created = cart.items.get_or_create(product=product, defaults={'quantity': quantity})
    if not item_created:
        item.quantity += quantity
        item.save()

    messages.success(request, f"{product.name} added to your cart for checkout.")
    return redirect('cart_checkout')


@require_GET
@login_required
@transaction.atomic
def order_review(request, slug):
    product = get_object_or_404(Product, slug=slug)
    try:
        quantity = int(request.GET.get('quantity', 1))
        if quantity <= 0:
            raise ValueError("Quantity must be positive")
    except (ValueError, TypeError):
        messages.error(request, "Invalid quantity selected.")
        return redirect('product_detail', slug=slug)

    messages.success(request, f"{product.name} added to your cart for checkout.")
    return redirect('cart_checkout')


def category_product_list(request, category_slug):
    category = {
        'name': category_slug.replace('-', ' ').title(),
        'slug': category_slug
    }

    sub_categories = [
        {
            'name': 'Wireless Mouse',
            'slug': 'wireless-mouse',
        },
        {
            'name': 'Bluetooth Headphones',
            'slug': 'bluetooth-headphones',
        },
        {
            'name': 'Mechanical Keyboard',
            'slug': 'mechanical-keyboard',
        },
        {
            'name': 'USB-C Hub',
            'slug': 'usb-c-hub',
        },
    ]

    return render(request, 'pages/categoryProducts/index.html', {
        'category': category,
        'categories': sub_categories,
    })


def invoice_view(request):
    order = {
        "order_number": "123-4567890-1234567",
        "date": date.today().strftime("%Y-%m-%d"),
        "customer_name": "John Doe",
        "address": "123 Example St",
        "city": "New York",
        "zip_code": "10001",
        "country": "USA",
        "items": [
            {"name": "Echo Dot", "asin": "B07FZ8S74R", "quantity": 1, "unit_price": 49.99, "total_price": 49.99},
            {"name": "HDMI Cable", "asin": "B014I8UQJY", "quantity": 2, "unit_price": 9.99, "total_price": 19.98},
        ],
        "subtotal": 69.97,
        "shipping_cost": 5.99,
        "total": 75.96,
    }

    return render(request, "pages/invoice/index.html", {"order": order})


def account_view(request):
    context = {
        "order_made": 80,
        "reviews": 80,
        "fav_product": 80,
        "return": 80,
    }
    return render(request, "pages/profile/index.html", context)


def products_page(request):
    return render(request, "pages/productCollections/index.html")


class CheckoutMixin:
    """Mixin to provide common checkout functionality"""

    def get_cart_items(self, request):
        """Helper method to get cart items from session"""
        cart = request.session.get('cart', {})
        cart_items = []
        cart_total = 0

        for product_id, quantity in cart.items():
            product = get_object_or_404(Product, id=product_id)
            subtotal = product.price * quantity
            cart_total += subtotal

            cart_items.append({
                'product': product,
                'quantity': quantity,
                'subtotal': subtotal
            })

        return cart_items, cart_total

    def clear_cart(self, request):
        """Helper method to clear the cart after order completion"""
        if 'cart' in request.session:
            del request.session['cart']
            request.session.modified = True


@login_required
def cart_view(request):
    """View function to display the shopping cart"""
    cart_mixin = CheckoutMixin()
    cart_items, cart_total = cart_mixin.get_cart_items(request)

    context = {
        'cart_items': cart_items,
        'cart_total': cart_total,
    }

    return render(request, 'shop/cart.html', context)


@require_POST
def add_to_cart(request, product_slug):
    """Add a product to the cart"""
    product = get_object_or_404(Product, slug=product_slug)
    quantity = int(request.POST.get('quantity', 1))

    if 'cart' not in request.session:
        request.session['cart'] = {}

    cart = request.session['cart']
    product_id = str(product.id)

    if product_id in cart:
        cart[product_id] += quantity
    else:
        cart[product_id] = quantity

    request.session.modified = True
    messages.success(request, f"Added {product.name} to your cart.")

    return redirect('product_detail', slug=product_slug)


@require_POST
def update_cart(request):
    """Update cart quantities via AJAX"""
    product_id = request.POST.get('product_id')
    quantity = int(request.POST.get('quantity', 1))

    if not product_id:
        return JsonResponse({'status': 'error', 'message': 'Product ID required'})

    if 'cart' not in request.session:
        return JsonResponse({'status': 'error', 'message': 'Cart is empty'})

    cart = request.session['cart']

    if product_id in cart:
        if quantity > 0:
            cart[product_id] = quantity
        else:
            del cart[product_id]

        request.session.modified = True

        cart_mixin = CheckoutMixin()
        _, cart_total = cart_mixin.get_cart_items(request)

        return JsonResponse({
            'status': 'success',
            'cart_total': cart_total,
            'message': 'Cart updated successfully'
        })

    return JsonResponse({'status': 'error', 'message': 'Product not in cart'})


@require_POST
def remove_from_cart(request, product_id):
    """Remove an item from the cart"""
    if 'cart' in request.session and product_id in request.session['cart']:
        del request.session['cart'][product_id]
        request.session.modified = True
        messages.success(request, "Item removed from cart.")

    return redirect('cart')


@login_required
def order_review(request):
    """View function to review order before final submission"""
    cart_mixin = CheckoutMixin()
    cart_items, cart_total = cart_mixin.get_cart_items(request)

    if not cart_items:
        messages.warning(request, "Your cart is empty!")
        return redirect('cart')

    shipping_data = request.session.get('shipping_data', {})

    shipping_cost = 50.00
    tax = cart_total * 0.18
    order_total = cart_total + shipping_cost + tax

    context = {
        'cart_items': cart_items,
        'cart_total': cart_total,
        'shipping_cost': shipping_cost,
        'tax': tax,
        'order_total': order_total,
        'shipping_data': shipping_data,
    }

    return render(request, 'shop/order_review.html', context)


@login_required
def order_confirmation(request, order_id):
    """View function to display order confirmation page"""
    order = get_object_or_404(Order, id=order_id, user=request.user)

    context = {
        'order': order,
        'order_items': order.orderitem_set.all(),
    }

    return render(request, 'shop/order_confirmation.html', context)


@login_required
def checkout(request, cart_id):
    """View function for direct purchase of a product"""
    cart = get_object_or_404(Cart, id=cart_id, user=request.user)
    return render(request, 'pages/order/index.html', {"cart": cart})


@login_required
def order_history(request):
    """View function to display user's order history"""
    orders = Order.objects.filter(user=request.user).order_by('-created_at')

    context = {
        'orders': orders,
    }

    return render(request, 'shop/order_history.html', context)


@login_required
def order_detail(request, order_id):
    """View function to display details of a specific order"""
    order = get_object_or_404(Order, id=order_id, user=request.user)

    context = {
        'order': order,
        'order_items': order.orderitem_set.all(),
    }

    return render(request, 'shop/order_detail.html', context)


class DiscountModelView(viewsets.ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountSerializer
    lookup_field = "name"

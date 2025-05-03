from django.contrib import admin

from ecommerce.models import (
	Address, Category, Brand, ProductAttribute, ProductAttributeValue,
	Product, ProductImage, ProductVariant, ProductVariantAttribute,
	Discount, Cart, CartItem, Order, OrderItem, Payment, ProductReview,
	Wishlist, WishlistItem, CustomerAnalytics, ProductView, SearchQuery,
	Inventory, InventoryLog, Supplier, PurchaseOrder, PurchaseOrderItem,
	Refund, RefundItem, ShippingMethod, ShippingZone, ShippingRate,
	ProductRecommendation, SalesReport, ProductPerformance, UserSegment,
	MarketingCampaign, AbandonedCart, SiteConfiguration
)


for model in [Address, Category, Brand, ProductAttribute, ProductAttributeValue,
	Product, ProductImage, ProductVariant, ProductVariantAttribute,
	Discount, Cart, CartItem, Order, OrderItem, Payment, ProductReview,
	Wishlist, WishlistItem, CustomerAnalytics, ProductView, SearchQuery,
	Inventory, InventoryLog, Supplier, PurchaseOrder, PurchaseOrderItem,
	Refund, RefundItem, ShippingMethod, ShippingZone, ShippingRate,
	ProductRecommendation, SalesReport, ProductPerformance, UserSegment,
	MarketingCampaign, AbandonedCart, SiteConfiguration]:
	admin.site.register(model)
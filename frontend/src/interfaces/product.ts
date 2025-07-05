export interface ProductImage {
    id: number;
    image: string;
    alt_text: string;
    is_primary: boolean;
    sort_order: number;
}

export interface ProductBrand {
    id: number;
    name: string;
}

export interface ProductCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string | null;
    is_active: boolean;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    sku: string;
    brand: ProductBrand;
    category: ProductCategory;
    short_description: string;
    price: string;
    compare_price: string | null;
    is_on_sale: boolean;
    discount_percentage: number;
    images: ProductImage[];
}

export interface IProductReview {
    id: number;
    product: number;
    user: string;
    rating: number;
    title: string;
    comment: string;
    is_verified_purchase: boolean;
    is_approved: boolean;
    created_at: string;
}

export interface Cart {
    id: number;
    user: number;
    session_id: string;
    is_active: boolean;
    discount: number;
    created_at: string;
    updated_at: string;
    items: CartItem[];
    subtotal: string;
    discount_amount: string;
    total: string;
}

export interface CartItem {
    id: number;
    cart: number;
    product: Product;
    variant: ProductVariant;
    quantity: number;
    created_at: string;
}

export interface ProductVariant {
    id: number;
    name: string;
    sku: string;
    price: string;
    stock_quantity: number;
    is_active: boolean;
    image: string;
    attribute_values: string;
}

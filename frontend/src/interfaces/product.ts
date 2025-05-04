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

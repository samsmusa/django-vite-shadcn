export interface UI {
    id: number;
    name: string;
    page: string;
    dest_url: string;
    row: number;
    column: number;
    component: string;
    calling_component: string;
    config: { [key: string]: any };
    featured_product: number
}

export interface Banners {
    banners: UIConfig[]
}

export interface Banner {
    banner: UIConfig
}

export interface UIConfig {
    image: string;
    name: string;
    url: string;
}
import React, {useEffect} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import ProductSlider from "@/components/common/ProductSlider";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import {Product} from "@/interfaces/product";


interface IProps {
    category_name: string
    category_id: string
}

const productSlider1Data = {
    buttonName: "See all deals",
    allProductsData: [
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/31sIEzlmGTL._AC_SY200_.jpg",
            off: 76,
            offerName: "Prime Day Early Deal",
            productTitle: "Branded suitcase trolleys - American Tourist",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/31PHsQXYqrL._AC_SY200_.jpg",
            off: 48,
            offerName: "Deal of the day",
            productTitle: "Bata, Hush Puppies & more",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/31nQtukA3bL._AC_SY200_.jpg",
            off: 80,
            offerName: "Deal of the day",
            productTitle: "Deals on RED TAPE",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/51RwTTvO3IL._AC_SY200_.jpg",
            off: 42,
            offerName: "Deal of the day",
            productTitle: "Best Selling Toys from Einstein box",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/51kdwtY1KvL._AC_SY200_.jpg",
            off: 87,
            offerName: "Deal of the day",
            productTitle: "Wallpapers from wolpin",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/51cJxhsBpaL._AC_SY200_.jpg",
            off: 21,
            offerName: "Deal of the day",
            productTitle: "Best Selling Toys from Smartivity",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/41sx753+kXL._AC_SY200_.jpg",
            off: 75,
            offerName: "Prime day early deal",
            productTitle: "Lowest prices on Smart Bulbs",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/61BH6SaNgzL._AC_SY200_.jpg",
            off: 60,
            offerName: "Deal of the day",
            productTitle: "Best deals from Wonderful Foods",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/31B9dfuJThS._AC_SY200_.jpg",
            off: 64,
            offerName: "Deal of the day",
            productTitle: "Best offers on PUMA",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/41qY1aOu08L._AC_SY200_.jpg",
            off: 68,
            offerName: "Deal of the day",
            productTitle: "Top selling ladders",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/51MTW5OKkUS._AC_SY200_.jpg",
            off: 87,
            offerName: "Deal of the day",
            productTitle: "Wallpapers from Wolpin",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/41LX67HXDkS._AC_SY200_.jpg",
            off: 80,
            offerName: "Deal of the day",
            productTitle: "Prime early deal for French connection",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/315RaKdrF3L._AC_SY200_.jpg",
            off: 57,
            offerName: "Deal of the day",
            productTitle: "Blockbuster deals on Bergner kadhai, tawa and many more",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/31NDLo8vP7L._AC_SY200_.jpg",
            off: 29,
            offerName: "Deal of the day",
            productTitle: "WaterScience best deals Bath Faucets and many more",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/51gZymWcITL._AC_SY200_.jpg",
            off: 64,
            offerName: "Deal of the day",
            productTitle: "Totes & Shoulder Bags Min 70% off",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/71ZP1Ux8uEL._UL1200__AC_SY200_.jpg",
            off: 59,
            offerName: "Deal of the day",
            productTitle: "Best Offers on PUMA Footwear & Clothing and many more",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/31+JUVeDCmL._AC_SY200_.jpg",
            off: 34,
            offerName: "Deal of the day",
            productTitle: "Deals on Layasa",
        },
    ],
};



const Main: React.FC<IProps> = ({category_name}) => {
    const api = useAxios<PaginatedResponse<Product>>({
        baseURL: '/api/public/products/',
        initialState: {
            loading: true,
            error: null,
            data: {
                count: 0,
                next: null,
                previous: null,
                results: [],
            },
        },
    });

    const {list, data, loading, error} = api;
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                await list('');
            } catch (e) {
                console.error('Failed to fetch products', e);
            }
        };
        fetchProducts();
    }, []);
    return (
            <ProductSlider
                title={category_name}
                buttonName={"see all ".concat(category_name)}
                buttonUrl="products"
                allProductsData={data?.results || []}
            />
    );
};
const containers = document.querySelectorAll<HTMLElement>('div[id^="sub-category-slider-"]');

containers.forEach((container) => {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Hydrate<IProps>
                component={Main}
                containerId={container.id}
                propNames={["category_name", "category_id"]}
            />
        </React.StrictMode>
    );
});
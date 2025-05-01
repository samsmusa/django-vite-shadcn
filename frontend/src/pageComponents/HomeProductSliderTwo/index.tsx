import React from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import ProductSlider from "@/components/common/ProductSlider";


interface IProps {
}

const productSlider2Data = {
    title: "Flat 45% off | Furnitures from stores nearby",
    buttonName: "See all offers",
    allProductsData: [
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/31kFu+3RnIL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/61GnO+UavZL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/71FqnBJbzfS._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/81RzcJRbA5L._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/61ncThYRYrL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/51JsqdjgzOL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/71vhSZO3o8L._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/51jKA5vIxBL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/41XynESDsDL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/61onaYlcDDL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/61cP21vjC-L._AC_SY200_.jpg",
        },
    ],
};

const Main: React.FC<IProps> = ({}) => {
    return (
            <ProductSlider
                title={productSlider2Data.title}
                buttonName={productSlider2Data.buttonName}
                allProductsData={productSlider2Data.allProductsData}
            />
    );
};
const containerId = 'home-product-slider-two';
const container = document.getElementById(containerId);

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Hydrate<IProps>
                component={Main}
                containerId={containerId}
                propNames={[]}
            />
        </React.StrictMode>
    );
}

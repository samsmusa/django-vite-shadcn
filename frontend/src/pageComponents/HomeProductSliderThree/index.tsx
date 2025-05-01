import React from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import ProductSlider from "@/components/common/ProductSlider";


interface IProps {
}

const productSlider3Data = {
    title: "Up to 50% off | Women's fashion from stores near by",
    buttonName: "See all offers",
    allProductsData: [
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/61NPBdDBojL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/81lSpbHtVDL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/51j9uND0DQL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/61F6xL4cMYL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/31Dv4PiE8eL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/41asxiEZAnL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/51YkL+O5zQL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/81T8Txq2VGL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/61VmOcTl-uL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/61Jcpqe0hcL._AC_SY200_.jpg",
        },
        {
            imageUrl:
                "https://m.media-amazon.com/images/I/416HPjPH+YL._AC_SY200_.jpg",
        },
    ],
};

const Main: React.FC<IProps> = ({}) => {
    return (
            <ProductSlider
                title={productSlider3Data.title}
                buttonName={productSlider3Data.buttonName}
                allProductsData={productSlider3Data.allProductsData}
            />
    );
};
const containerId = 'home-product-slider-three';
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

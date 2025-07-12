import React from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {createRoot} from "react-dom/client";
import {Hydrate} from "@/lib/Hydrate";
import {ProductCarousel} from "@/components/common/ProductCarousel";

interface IProps {
    product_id: string;
    product_slug: string;
}

const Main: React.FC<IProps> = ({product_id, product_slug}) => {
    const images = Array(5).fill(1).map((_, index) => `https://swiperjs.com/demos/images/nature-${index + 1}.jpg`);


    return (
        <ProductCarousel images={images}/>
    );
}

const containerId = 'details-product-images';
const container = document.getElementById(containerId);

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Hydrate<IProps>
                component={Main}
                containerId={containerId}
                propNames={["product_id", "product_slug"]}
            />
        </React.StrictMode>
    );
}
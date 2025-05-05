import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import type {Swiper as SwiperClass} from 'swiper/types';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {createRoot} from "react-dom/client";
import {Hydrate} from "@/lib/Hydrate";

interface IProps {
    product_id: string;
    product_slug: string;
}

const Main: React.FC<IProps> = ({product_id, product_slug}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {[...Array(10)].map((_, index) => (
                    <SwiperSlide className="group" key={index}>
                        <img className="rounded-lg border-2 border-gray-300 group-[.swiper-slide-thumb-active]:border-blue-500 group-[.swiper-slide-thumb-active]:shadow-lg group-[.swiper-slide-thumb-active]:scale-105 transition-all duration-200" src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {[...Array(10)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <img src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
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
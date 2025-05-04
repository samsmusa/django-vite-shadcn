import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import {Product} from "@/interfaces/product";


interface ProductSliderProps {
    title: string;
    buttonName: string;
    buttonUrl: string;
    allProductsData: Product[];
}

interface SlideProps {
    image?: string;
    off?: number;
    offerName?: string;
    productTitle?: string;
    slug: string
}


const Slide: React.FC<SlideProps> = ({image, slug, off, offerName, productTitle}) => {
    return (
        <a href={`/product/${slug}`} key={slug}>
            <div
                className="cursor-pointer flex flex-col gap-2 h-full w-fit md:min-w-[190px] max-w-[190px] xs:max-w-[250px]">
                {image && (
                    <div className="p-2 h-48">
                        <img
                            className="mx-auto object-center object-contain max-h-full"
                            src={image}
                            alt="product"
                        />
                    </div>
                )}
                {off !== undefined && (
                    <p className="text-red-700 space-x-2 text-[10px] xs:text-xs">
                        <span className="text-white bg-red-700 px-1.5 py-1">
                            Up to {off}% off
                        </span>
                        {offerName && (
                            <span className="capitalize font-bold">{offerName}</span>
                        )}
                    </p>
                )}
                <p className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                    {productTitle}
                </p>
            </div>
        </a>
    );
};


const ProductSlider: React.FC<ProductSliderProps> = ({
                                                         title,
                                                         buttonName,
                                                         buttonUrl,
                                                         allProductsData,
                                                     }) => {
    return (
        <div className="w-full space-y-3">
            <div className="header flex gap-2 items-baseline md:gap-4">
                <h1 className="text-sm font-bold sm:text-base md:text-xl">{title}</h1>
                <a href={buttonUrl} className="cursor-pointer w-fit text-cyan-800 text-xs hover:underline hover:text-orange-700 md:text-sm">
                    {buttonName}
                </a>
            </div>

            <Swiper
                slidesPerView="auto"
                spaceBetween={16}
                navigation
                modules={[Navigation]}
                className="mySwiper"
            >
                {allProductsData.map((product, index) => (
                    <SwiperSlide key={index} style={{width: "auto"}}>
                        <Slide
                            image="https://m.media-amazon.com/images/I/31NDLo8vP7L._AC_SY200_.jpg"
                            off={product.discount_percentage}
                            offerName="in offer"
                            productTitle={product?.name}
                            slug={product?.slug}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSlider;

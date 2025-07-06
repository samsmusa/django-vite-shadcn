import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import {Product} from "@/interfaces/product";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import ProductCard from "@/components/common/ProductCard";


interface ProductSliderProps {
    title?: string;
    buttonName?: string;
    buttonUrl?: string;
    allProductsData: Product[];
}


const ProductSlider: React.FC<ProductSliderProps> = ({
                                                         title,
                                                         buttonName,
                                                         buttonUrl,
                                                         allProductsData,
                                                     }) => {
    return (
        <div className="w-full space-y-3">
            <div className="header flex gap-2 items-baseline md:gap-4">
                {title && <h1 className="text-sm font-bold sm:text-base md:text-xl">{title}</h1>}
                {buttonName && buttonUrl && <a href={buttonUrl}
                                               className="cursor-pointer w-fit text-cyan-800 text-xs hover:underline hover:text-orange-700 md:text-sm">
                    {buttonName}
                </a>}
            </div>


            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {allProductsData.map((product, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                            <ProductCard/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    );
};

export default ProductSlider;

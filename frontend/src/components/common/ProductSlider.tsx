import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import {Product} from "@/interfaces/product";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import ProductCard from "@/components/common/ProductCard";
import Autoplay from "embla-carousel-autoplay"

interface ProductSliderProps {
    title?: string;
    buttonName?: string;
    buttonUrl?: string;
    allProductsData: Product[];
}

const MemoizedProductCard = React.memo(ProductCard);

const ProductSlider: React.FC<ProductSliderProps> = ({
                                                         title,
                                                         buttonName,
                                                         buttonUrl,
                                                         allProductsData,
                                                     }) => {
    return (
        <div className="">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                {title && (
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                        {title}
                    </h1>
                )}
                {buttonName && buttonUrl && (
                    <a
                        href={buttonUrl}
                        className="cursor-pointer w-fit text-cyan-800 text-sm hover:underline hover:text-orange-700 sm:text-base"
                    >
                        {buttonName}
                    </a>
                )}
            </div>

            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {allProductsData.map((product, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/6"
                        >
                            <MemoizedProductCard key={product.id} product={product}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default ProductSlider;

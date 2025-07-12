import React from "react";

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Banner from "@/components/common/Banner";
import Autoplay from "embla-carousel-autoplay"
import {Banners} from "@/interfaces/ui";


const MemoizedBanner = React.memo(Banner);

const BannerSlider: React.FC<Banners> = ({
                                             banners,
                                         }) => {
    return (
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
                {banners.map((banner, index) => (
                    <CarouselItem key={index} className="">
                        <MemoizedBanner key={index} banner={banner}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default BannerSlider;

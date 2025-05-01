import React, {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper as SwiperClass} from "swiper/types";

interface SliderImage {
    img: string;
}

interface SliderProps {
    images: SliderImage[];
}

const Slider: React.FC<SliderProps> = ({images}) => {
    const swiperRef = useRef<SwiperClass | null>(null);

    return (
        <div className="relative mx-auto">
            <div
                className="gradient-effect absolute h-[50%] w-full bottom-0 z-10 bg-gradient-to-t from-[#e3e6e6] md:via-[#e3e6e6]"></div>

            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={false}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper overflow-hidden"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="cursor-pointer">
                        <a href="/products-listing-page">
                            <img
                                className="h-[200px] xs:h-[320px] md:h-[400px] object-top object-cover w-full lg:h-auto md:w-full"
                                src={image.img}
                                alt={`slide-${index}`}
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                className="absolute top-[20%] translate-y-[-80%] z-10 w-full text-3xl md:top-[20%] md:translate-y-[-80%] md:px-6 md:text-4xl">
                <button
                    className="absolute left-4 hover:scale-125 active:scale-50 duration-200"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <i className="fa-solid fa-chevron-right rotate-180"></i>
                </button>
                <button
                    className="absolute right-4 hover:scale-125 active:scale-50 duration-200"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Slider;

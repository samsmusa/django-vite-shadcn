import React from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";


interface IProps {
}

const images = [
    {img: "https://picsum.photos/900/300"},
    {img: "https://picsum.photos/900/300"},
    {img: "https://picsum.photos/900/300"},
    {img: "https://picsum.photos/900/300"},
    {img: "https://picsum.photos/900/300"},
    {img: "https://picsum.photos/900/300"},
];

const Main: React.FC<IProps> = ({}) => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                {images.map((img, index) => (
                    <CarouselItem key={index} className="">
                        <Card className="p-0 m-0 border-0">
                            <CardContent className="p-0 m-0 border-0">
                                <img
                                    src={img.img}
                                    alt="product"
                                    className="w-full object-cover"
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    );
};
const containerId = 'home-nav-slider';
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

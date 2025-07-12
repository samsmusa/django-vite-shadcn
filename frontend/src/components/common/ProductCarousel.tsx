import * as React from "react"
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {cn} from "@/lib/utils";

export function ProductCarousel({images}: { images: string[] }) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [thumbApi, setThumbApi] = React.useState<CarouselApi>()
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    React.useEffect(() => {
        if (!api || !thumbApi) {
            return
        }

        const onMainSelect = () => {
            const index = api.selectedScrollSnap()
            setSelectedIndex(index)
            thumbApi.scrollTo(index)
        }

        const onThumbSelect = () => {
            const index = thumbApi.selectedScrollSnap()
            setSelectedIndex(index)
            api.scrollTo(index)
        }

        api.on("select", onMainSelect)
        thumbApi.on("select", onThumbSelect)

        // Set initial state
        setSelectedIndex(api.selectedScrollSnap())

        return () => {
            api.off("select", onMainSelect)
            thumbApi.off("select", onThumbSelect)
        }
    }, [api, thumbApi]) // Fixed dependencies

    const handleThumbClick = (index: number) => {
        if (api && thumbApi) {
            api.scrollTo(index)
            thumbApi.scrollTo(index)
            setSelectedIndex(index)
        }
    }

    return (
        <div className="mx-auto w-full">
            {/* Main Carousel */}
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {images.map((img, index) => (
                        <CarouselItem key={index}>
                            <img
                                className="rounded-lg border-2 border-gray-300 w-full h-auto object-cover"
                                src={img}
                                alt={`Product image ${index + 1}`}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>

            {/* Thumbnail Carousel */}
            <Carousel setApi={setThumbApi} className="mt-4">
                <CarouselContent className="-ml-1">
                    {images.map((img, index) => (
                        <CarouselItem
                            key={index}
                            className={cn(
                                "basis-1/4 cursor-pointer",
                                selectedIndex === index ? "opacity-100" : "opacity-60"
                            )}
                            onClick={() => handleThumbClick(index)}
                        >
                            <div className="p-1">
                                <img
                                    className={cn(
                                        "rounded-lg border-2 transition-all duration-200 w-full h-auto object-cover",
                                        selectedIndex === index
                                            ? "border-blue-500 shadow-lg scale-105"
                                            : "border-gray-300 hover:border-gray-400"
                                    )}
                                    src={img}
                                    alt={`Product thumbnail ${index + 1}`}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
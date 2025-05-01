import React from "react";

interface ImageData {
    imageUrl: string;
    label: string;
}

interface GridItemProps {
    title: string;
    images: ImageData[] | null;
    buttonName: string | null;
}

const GridItem: React.FC<GridItemProps> = ({title, images, buttonName}) => {
    return (
        <div className="flex flex-col gap-4 h-full">
            {images !== null ? (
                <div className="flex flex-col justify-between gap-2 bg-white p-4 drop-shadow-sm h-full w-full">
                    <h1 className="font-bold text-base md:text-xl">{title}</h1>

                    {images.length !== 1 ? (
                        <div>
                            <a
                                href="/products-listing-page"
                                className="grid grid-cols-2 place-items-center gap-2"
                            >
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="cursor-pointer space-y-1 md:space-y-0 h-full"
                                    >
                                        <img className="w-96" src={image.imageUrl} alt="product"/>
                                        {image.label && <p className="text-sm">{image.label}</p>}
                                    </div>
                                ))}
                            </a>
                        </div>
                    ) : (
                        <a href="/products-listing-page">
                            <img src={images[0].imageUrl} alt="product"/>
                        </a>
                    )}

                    {buttonName && (
                        <a href="/products-listing-page">
                            <p className="cursor-pointer w-fit text-cyan-800 text-sm hover:underline hover:text-orange-700">
                                {buttonName}
                            </p>
                        </a>
                    )}
                </div>
            ) : (
                <>
                    <div className="p-4 bg-white drop-shadow-sm">
                        <h1 className="text-xl font-bold leading-6 mb-3">{title}</h1>
                        <a href="/sign-in">
                            <button
                                className="sign-in-button bg-yellow-300 w-full p-3 md:p-1.5 rounded-lg text-sm duration-200 hover:bg-yellow-400 ">
                                Sign in securely
                            </button>
                        </a>
                    </div>
                    <a href="/products-listing-page">
                        <div className="relative">
                            <img
                                className="object-cover object-center"
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/March23/LR_379X304._SY304_CB595115209_.jpg"
                                alt="Sponsored"
                            />
                            <p className="absolute -bottom-[5.5%] right-0 z-30 text-[12px] text-gray-500">
                                Sponsored
                            </p>
                        </div>
                    </a>
                </>
            )}
        </div>
    );
};
export default GridItem;
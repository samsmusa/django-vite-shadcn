import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {generateRandomImage} from "@/lib/utils";


const ProductCard = () => {
    const imgUrl = generateRandomImage()
    return (
        <a href="#" className="group block overflow-hidden">
            <Card className="w-full max-w-xs mx-auto cursor-pointer border-0">
                {/* Image Section */}
                <CardHeader className="p-0">
                    <img
                        src={imgUrl}
                        alt="product"
                        className="w-full h-[350px] object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />
                </CardHeader>

                {/* Card Content Section */}
                <CardContent className="relative bg-white pt-0.5 px-0">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Basic Tee
                    </h3>

                    <p className="mt-2">
                        <span className="sr-only">Regular Price</span>
                        <span className="tracking-wider text-gray-900">£24.00 GBP</span>
                    </p>
                </CardContent>
            </Card>
        </a>
    );
};

export default ProductCard;

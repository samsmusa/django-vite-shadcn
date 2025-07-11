import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {generateRandomImage, priceNotation, productUrl} from "@/lib/utils";
import {Product} from "@/interfaces/product";
import {StarIcon} from 'lucide-react';
import {Badge} from "@/components/ui/badge";


const ProductCard = ({product}: { product: Product }) => {
    const imgUrl = generateRandomImage()
    const price = priceNotation(product.price);
    const comparedPrice = priceNotation(product.compare_price || 0);
    const name = product.name;
    const detailPage = productUrl(product.slug)
    return (
        <a href={detailPage} className="group block overflow-hidden border-none">
            <Card className="w-full max-w-xs mx-auto gap-y-1 cursor-pointer shadow-none border-none">
                {/* Image Section */}
                <CardHeader className="p-0 border-0 relative">

                    {product?.is_on_sale && <Badge
                        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute top-50 right-0"
                        variant="destructive"
                    >
                        -{product.discount_percentage}%
                    </Badge>}

                    <img
                        src={imgUrl}
                        alt="product"
                        className="w-full h-[150px] object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
                    />
                </CardHeader>

                {/* Card Content Section */}
                <CardContent className="relative bg-white px-0 border-none">
                    <h3 className="text-md font-semibold text-shadow-2xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {name}
                    </h3>

                    <p className="mt-0.5">
                        <span className="sr-only">Regular Price</span>
                        <span className="tracking-wider text-md text-gray-900 font-bold">{price}</span>
                        {product?.is_on_sale && <span
                            className="pl-3 animate-fade text-sm line-through text-gray-400 font-bold">{comparedPrice}</span>}

                    </p>

                </CardContent>
                <CardFooter className="p-0 m-0 border-none">
                    <div className="text-xs text-primary flex justify-start items-center">
                        {Array(5).fill(0).map((_, index) => <StarIcon className="text-xs fill-current text-primary"
                                                                      size={17} key={index}/>)}
                    </div>

                </CardFooter>
            </Card>
        </a>
    );
};

export default ProductCard;
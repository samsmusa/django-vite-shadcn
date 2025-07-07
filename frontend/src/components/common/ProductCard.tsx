import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {generateRandomImage, priceNotation, productUrl} from "@/lib/utils";
import {Product} from "@/interfaces/product";


const ProductCard = ({product}  : {product: Product}) => {
    const imgUrl = generateRandomImage()
    const price = priceNotation(product.price);
    const name = product.name;
    const detailPage = productUrl(product.slug)
    return (
        <a href={detailPage} className="group block overflow-hidden border-0">
            <Card className="w-full max-w-xs mx-auto cursor-pointer border-0">
                {/* Image Section */}
                <CardHeader className="p-0 border-0">
                    <img
                        src={imgUrl}
                        alt="product"
                        className="w-full h-[150px] object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
                    />
                </CardHeader>

                {/* Card Content Section */}
                <CardContent className="relative bg-white pt-0.5 px-0 border-0">
                    <h3 className="text-md text-shadow-2xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {name}
                    </h3>

                    <p className="mt-2">
                        <span className="sr-only">Regular Price</span>
                        <span className="tracking-wider text-gray-900 font-bold">{price}</span>
                    </p>
                </CardContent>
            </Card>
        </a>
    );
};

export default ProductCard;

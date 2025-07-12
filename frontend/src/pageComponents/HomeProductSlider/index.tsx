import React, {useEffect, useMemo} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import ProductSlider from "@/components/common/ProductSlider";
import useAxios from "@/hooks/useAxios";
import {PromotedProduct} from "@/interfaces/product";


interface IProps {
    title: string;
    url: string;
    featured_product: string;
}


const Main: React.FC<IProps> = ({title, url, featured_product}) => {
    const base_url = useMemo(() => {
        return `/api/public/featured-products/${featured_product}`
    }, [featured_product])
    const api = useAxios<PromotedProduct>({
        baseURL: base_url,
    });
    useEffect(() => {
        api.get("").then()
    }, []);
    return (
        <div className="w-full">
            <ProductSlider
                title={title}
                buttonName="see all"
                buttonUrl={url}
                allProductsData={api?.data?.products || []}
            />
        </div>
    );
};
const containers = document.querySelectorAll('[id^="home-product-slider-"]');

if (containers) {
    containers.forEach(container => {
        const containerId = container.id;

        const root = createRoot(container);
        root.render(
            <React.StrictMode>
                <Hydrate<IProps>
                    component={Main}
                    containerId={containerId}
                    propNames={["title", "url", "featured_product"]}
                />
            </React.StrictMode>
        );
    });
}

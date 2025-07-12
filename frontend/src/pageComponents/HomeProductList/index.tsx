import React, {useEffect, useMemo} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import useAxios from "@/hooks/useAxios";
import {PromotedProduct} from "@/interfaces/product";
import {ProductList} from "@/components/common/ProductList";


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
    console.log(api.data)
    return (
        <div className="w-full">
            <div className="flex gap-2 items-baseline md:gap-4">
                {title && <h1 className="text-sm font-bold sm:text-base md:text-xl">{title}</h1>}
                <a href={url}
                   className="cursor-pointer w-fit text-cyan-800 text-xs hover:underline hover:text-orange-700 md:text-sm">
                    see all
                </a>
            </div>
            <ProductList
                products={api?.data?.products || []}
            />
        </div>
    );
};
const containers = document.querySelectorAll('[id^="home-product-list-"]');

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

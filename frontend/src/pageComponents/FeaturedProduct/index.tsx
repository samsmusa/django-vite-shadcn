import React, {useEffect, useMemo} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import useAxios from "@/hooks/useAxios";
import {PromotedProduct} from "@/interfaces/product";
import {ProductList} from "@/components/common/ProductList";

interface IProps {
    featured_product: number
}

const Main: React.FC<IProps> = ({featured_product}) => {

    const base_url = useMemo(() => {
        return `/api/public/featured-products/${featured_product}`
    }, [featured_product])
    const api = useAxios<PromotedProduct>({
        baseURL: base_url,
    });
    useEffect(() => {
        api.get("").then()
    }, []);
    return <ProductList products={api.data?.products || []}/>
};


// const containerId = 'featured-product';
const containers = document.querySelectorAll('[id^="featured-product-"]');

if (containers) {
    containers.forEach(container => {
        const containerId = container.id;

        const root = createRoot(container);
        root.render(
            <React.StrictMode>
                <Hydrate<IProps>
                    component={Main}
                    containerId={containerId}  // Pass the unique ID for this container
                    propNames={["featured_product"]}  // Your prop names for hydration
                />
            </React.StrictMode>
        );
    });
}

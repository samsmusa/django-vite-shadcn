import React, {useEffect} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import {Product} from "@/interfaces/product";
import ProductCompare from "@/components/common/ProductCompare";
import {boolToColor, percentToColor} from "@/lib/utils";

interface IProps {
    product_slug: string;
    product_id: string;
}

const Main: React.FC<IProps> = ({product_id}) => {
    const api = useAxios<PaginatedResponse<Product>>({
        baseURL: `/api/public/products/?limit=3&offset=3`,
        initialState: {
            loading: false,
            error: null,
            data: {
                count: 0,
                next: null,
                previous: null,
                results: [],
            },
        },
    });

    useEffect(() => {
        api.list("").then()
    }, []);


    return (
        <section className="bg-white antialiased dark:bg-gray-900">
            <ProductCompare products={api?.data?.results || []} highlightBy={{
                Discount: (val) => percentToColor(parseFloat(val)),
                "On Sale": (val) => boolToColor(val === true || val === 'Yes'),
            }} />
        </section>
    );
};

const containerId = 'details-product-compare';
const container = document.getElementById(containerId);

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Hydrate<IProps>
                component={Main}
                containerId={containerId}
                propNames={["product_id", "product_slug"]}
            />
        </React.StrictMode>
    );
}

import React, {useEffect} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import ProductSlider from "@/components/common/ProductSlider";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import {Product} from "@/interfaces/product";


interface IProps {
}


const Main: React.FC<IProps> = ({}) => {
    const api = useAxios<PaginatedResponse<Product>>({
        baseURL: '/api/public/products/',
        initialState: {
            loading: true,
            error: null,
            data: {
                count: 0,
                next: null,
                previous: null,
                results: [],
            },
        },
    });

    const {list, data, loading, error} = api;
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                await list('');
            } catch (e) {
                console.error('Failed to fetch products', e);
            }
        };
        fetchProducts().then();
    }, []);
    return (
            <ProductSlider
                buttonUrl="products"
                allProductsData={data?.results || []}
            />
    );
};
const containerId = 'details-product-brought';
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

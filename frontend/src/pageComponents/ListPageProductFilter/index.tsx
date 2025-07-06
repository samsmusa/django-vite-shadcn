import React from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import {Button} from "@/components/ui/button";
import ProductList from "@/components/common/ProductList";
import ListProductFilter from "@/components/common/ListProductFilter";
import {ProductFilterProvider} from "@/contexts/ProductFilterContext";

interface IProps {

}

const Main: React.FC<IProps> = ({}) => {

    return (
        <div className="">

            <div className="mt-8 block lg:hidden">
                <Button
                    className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span className="text-sm font-medium"> Filters & Sorting </span>
                </Button>
            </div>
            <ProductFilterProvider>
                <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                    <ListProductFilter/>

                    <div className="lg:col-span-3">
                        <ProductList/>
                    </div>
                </div>
            </ProductFilterProvider>
        </div>
    );
};


const containerId = 'list-product-filter';
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

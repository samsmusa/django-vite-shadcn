import ProductCard from "@/components/common/ProductCard";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {FilterState, useProductFilter} from "@/contexts/ProductFilterContext";
import InfiniteScroll from "@/components/ui/infinite-scroll";
import LoadingIcon from "@/components/common/LoaderComp";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import {Product} from "@/interfaces/product";

const MemoizedProductCard = React.memo(ProductCard);

const filterUrlBuilder = (filters: FilterState) => {
    const {brands, categories} = filters;
    const brandQuery = brands.length > 0 ? `brand=${brands.join(",")}` : "";
    const categoryQuery = categories.length > 0 ? `category=${categories.join(",")}` : "";

    let queryParams = [brandQuery, categoryQuery].filter(Boolean).join("&");
    if (queryParams.length > 1) {
        queryParams = "?" + queryParams;
    }

    return queryParams;
};


const ProductList = ({}) => {
    const {filter} = useProductFilter(); // filter context contains brands and categories (both are lists of integers)
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [scrollRoot, setScrollRoot] = useState<Element | null>(null);
    const {list, loading, data, error} = useAxios<PaginatedResponse<Product>>({
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

    const next = useCallback(() => {
        if (data?.next) {
            list(data.next).then();
        }
    }, []);

    useEffect(() => {
        const url = filterUrlBuilder(filter);
        list(url).then();
    }, [filter]);
    return (
        <div className="h-[1500px] overflow-auto" ref={scrollContainerRef}>

            <InfiniteScroll
                root={scrollRoot}
                hasMore={true}
                isLoading={false}
                next={next}
                // moveCursorTop={true}
            >
                <div className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {data?.results?.map((product) => (
                        <MemoizedProductCard key={product.id}/>
                    ))}

                </div>
                <div>
                    <LoadingIcon
                        next={true}
                        hasMore={true}
                        noMoreMessage="That's all, thanks for reading!"
                    />
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default ProductList;
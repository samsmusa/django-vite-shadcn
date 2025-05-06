import React, {Suspense, useCallback, useEffect, useMemo, useState} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import {humanizeTime} from "@/lib/utils";
import {FixedSizeList as List} from 'react-window';

interface IProps {
    product_slug: string;
    product_id: string;
}

interface IProductReview {
    id: number;
    product: number;
    user: string;
    rating: number;
    title: string;
    comment: string;
    is_verified_purchase: boolean;
    is_approved: boolean;
    created_at: string;
}

const ITEM_HEIGHT = 150;

const UserReviewCard: React.FC<{ review: IProductReview }> = ({review}) => {
    const createdAt = useMemo(() => humanizeTime(review.created_at), [review.created_at]);

    return (
        <div className="gap-3 py-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                <p className="text-base font-semibold text-gray-900 dark:text-white">{review.user}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{createdAt}</p>
                {review.is_verified_purchase && (
                    <div className="inline-flex items-center gap-1">
                        <p className="text-sm text-gray-900 dark:text-white">Verified purchase</p>
                    </div>
                )}
            </div>
            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                <p className="text-base text-gray-500 dark:text-gray-400">{review.comment}</p>
            </div>
        </div>
    );
};


const Main: React.FC<IProps> = ({product_id}) => {
    const [reviews, setReviews] = useState<IProductReview[]>([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const api = useAxios<PaginatedResponse<IProductReview>>({
        baseURL: `/api/public/products/${product_id}/reviews/`,
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

    const loadReviews = useCallback(async () => {
        const response = await api.list(`?limit=3&offset=${offset}`);
        if (response && Array.isArray(response.results)) {
            setReviews((prev) => [...prev, ...response.results]);
            setHasMore(Boolean(response.next));
        }
    }, [api, offset]);

    useEffect(() => {
        loadReviews();
    }, [offset]);

    const loadMore = () => {
        if (hasMore) setOffset((prev) => prev + 10);
    };

    const Row = ({index, style}: { index: number; style: React.CSSProperties }) => (
        <div style={style}>
            <Suspense fallback={<div>Loading review...</div>}>
                <UserReviewCard review={reviews[index]}/>
            </Suspense>
        </div>
    );

    return (
        <section className="bg-white antialiased dark:bg-gray-900 p-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Reviews</h2>

            <List
                height={600}
                itemCount={reviews.length}
                itemSize={ITEM_HEIGHT}
                width="100%"
            >
                {Row}
            </List>

            {hasMore && (
                <div className="mt-4 flex justify-center">
                    <button
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        onClick={loadMore}
                    >
                        Load More Reviews
                    </button>
                </div>
            )}
        </section>
    );
};

const containerId = 'details-product-review';
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

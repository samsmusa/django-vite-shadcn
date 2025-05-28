import React, {Suspense, useCallback, useEffect, useMemo, useState} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import {humanizeTime} from "@/lib/utils";
import {FixedSizeList as List} from 'react-window';
import {IProductReview} from "@/interfaces/product";

interface IProps {
    product_slug: string;
    product_id: string;
}



const StarRating: React.FC = () => {
    const [hovered, setHovered] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);

    const handleMouseEnter = (index: number) => setHovered(index);
    const handleMouseLeave = () => setHovered(0);
    const handleClick = (index: number) => {
        setRating(index);
        console.log("Selected:", index);
    };

    return (
        <div className="col-span-2">
            <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <i
                        key={star}
                        className={`fa-solid fa-star cursor-pointer text-2xl transition ${
                            (hovered || rating) >= star ? "text-yellow-400" : "text-gray-300"
                        }`}
                        onMouseEnter={() => handleMouseEnter(star)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(star)}
                    />
                ))}
                <span className="ms-2 text-lg font-bold text-gray-900 dark:text-white">
          {rating ? `${rating}.0 out of 5` : "Rate this"}
        </span>
            </div>
        </div>
    );
};

const ITEM_HEIGHT = 150;

const UserReviewCard: React.FC<{ review: IProductReview }> = ({review}) => {
    const createdAt = useMemo(() => humanizeTime(review.created_at), [review.created_at]);

    return (
        <div className="gap-3 py-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                <p className="text-base font-semibold text-gray-900 dark:text-white">{review.user}</p>
                <div>
                    <i className="fa-solid fa-star text-yellow-300"></i>
                    <i className="fa-solid fa-star text-yellow-300"></i>
                    <i className="fa-solid fa-star text-yellow-300"></i>
                    <i className="fa-solid fa-star text-yellow-300"></i>
                    <i className="fa-solid fa-star text-yellow-300"></i>
                </div>
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
                <hr />
            </Suspense>
        </div>
    );

    return (
        <section className="bg-white antialiased dark:bg-gray-900">
            <div className="grid grid-cols-5">
                <div className="col-span-2">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Reviews</h2>

                        <div className="mt-2 flex items-center gap-2 sm:mt-0">
                            <div className="flex items-center gap-0.5">
                                <i className="fa-solid fa-star text-yellow-300"></i>
                                <i className="fa-solid fa-star text-yellow-300"></i>
                                <i className="fa-solid fa-star text-yellow-300"></i>
                                <i className="fa-solid fa-star text-yellow-300"></i>
                                <i className="fa-solid fa-star text-yellow-300"></i>
                            </div>
                            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">(4.6)</p>
                            <a href="#"
                               className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"> 645
                                Reviews </a>
                        </div>
                    </div>
                    <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
                        <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
                            <div className="flex items-center gap-2">
                                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">5</p>
                                <i className="fa-solid fa-star text-yellow-300"></i>
                                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-1.5 rounded-full bg-yellow-300" style={{width: "20%"}}></div>
                                </div>
                                <a href="#"
                                   className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">239 <span
                                    className="hidden sm:inline">reviews</span></a>
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">4</p>
                                <i className="fa-solid fa-star text-yellow-300"></i>
                                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-1.5 rounded-full bg-yellow-300" style={{width: "20%"}}></div>
                                </div>
                                <a href="#"
                                   className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">432 <span
                                    className="hidden sm:inline">reviews</span></a>
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">3</p>
                                <i className="fa-solid fa-star text-yellow-300"></i>
                                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-1.5 rounded-full bg-yellow-300" style={{width: "20%"}}></div>
                                </div>
                                <a href="#"
                                   className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">53 <span
                                    className="hidden sm:inline">reviews</span></a>
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">2</p>
                                <i className="fa-solid fa-star text-yellow-300"></i>
                                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-1.5 rounded-full bg-yellow-300" style={{width: "20%"}}></div>
                                </div>
                                <a href="#"
                                   className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">32 <span
                                    className="hidden sm:inline">reviews</span></a>
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">1</p>
                                <i className="fa-solid fa-star text-yellow-300"></i>
                                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-1.5 rounded-full bg-yellow-300" style={{width: "20%"}}></div>
                                </div>
                                <a href="#"
                                   className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">13 <span
                                    className="hidden sm:inline">reviews</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="rounded-lg bg-white dark:bg-gray-800">
                        <form className="p-2">
                            <div className="mb-4 grid grid-cols-2 gap-4">
                                <StarRating/>
                                <div className="col-span-2">
                                    <label htmlFor="description"
                                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Review
                                        description</label>
                                    <textarea id="description"
                                              className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                    ></textarea>
                                    <button
                                        className="middle none center rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        data-ripple-light="true"
                                    >
                                        Comment
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5">
                <div className="col-span-2"></div>
                <div className="col-span-3">
                    {reviews.length > 0 ? (
                        <List
                            height={Math.min(reviews.length * ITEM_HEIGHT, 600)}
                            itemCount={reviews.length}
                            itemSize={ITEM_HEIGHT}
                            width="100%"
                        >
                            {Row}
                        </List>
                    ) : (
                        <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
                            No reviews yet.
                        </div>
                    )}

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
                </div>
            </div>
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

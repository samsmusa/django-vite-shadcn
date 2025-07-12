import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import {humanizeTime} from "@/lib/utils";
import {IProductReview} from "@/interfaces/product";
import {SubmitHandler, useForm} from "react-hook-form";
import InfiniteScroll from "@/components/ui/infinite-scroll";
import {useDebounce} from "@/hooks/useDebounce";
import LoadingIcon from "@/components/common/LoaderComp";


interface IProps {
    product_slug: string;
    product_id: string;
}


// const StarRating: React.FC = () => {
//     const [hovered, setHovered] = useState<number>(0);
//     const [rating, setRating] = useState<number>(0);
//
//     const handleMouseEnter = (index: number) => setHovered(index);
//     const handleMouseLeave = () => setHovered(0);
//     const handleClick = (index: number) => {
//         setRating(index);
//         console.log("Selected:", index);
//     };
//
//     return (
//         <div className="col-span-2">
//             <div className="flex items-center space-x-1">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                     <i
//                         key={star}
//                         className={`fa-solid fa-star cursor-pointer text-2xl transition ${
//                             (hovered || rating) >= star ? "text-yellow-400" : "text-gray-300"
//                         }`}
//                         onMouseEnter={() => handleMouseEnter(star)}
//                         onMouseLeave={handleMouseLeave}
//                         onClick={() => handleClick(star)}
//                     />
//                 ))}
//                 <span className="ms-2 text-lg font-bold text-gray-900 dark:text-white">
//           {rating ? `${rating}.0 out of 5` : "Rate this"}
//         </span>
//             </div>
//         </div>
//     );
// };

const ITEM_HEIGHT = 150;

const UserReviewCard: React.FC<{ review: IProductReview }> = ({review}) => {
    const createdAt = useMemo(() => humanizeTime(review.created_at), [review.created_at]);

    return (
        <div className="gap-3 py-6 border-b sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                <p className="text-base font-semibold text-gray-900 dark:text-white">{review.user}</p>
                <div>
                    <i className="fa-solid fa-star text-primary"></i>
                    <i className="fa-solid fa-star text-primary"></i>
                    <i className="fa-solid fa-star text-primary"></i>
                    <i className="fa-solid fa-star text-primary"></i>
                    <i className="fa-solid fa-star text-primary"></i>
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


type ReviewFormValues = {
    rating: number;
    comment: string;
};

type StarRatingProps = {
    value: number;
    onChange: (value: number) => void;
};

const StarRating: React.FC<StarRatingProps> = ({value, onChange}) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="flex items-center space-x-1 relative">
            {[1, 2, 3, 4, 5].map((star) => {
                const isActive = hovered !== null ? star <= hovered : star <= value;
                return (
                    <button
                        key={star}
                        type="button"
                        onClick={() => onChange(star)}
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(null)}
                        className={`text-xl transition-colors duration-150 ${
                            isActive ? "text-primary" : "text-gray-300"
                        }`}
                        title={`${star} star${star > 1 ? "s" : ""}`}
                    >
                        ★
                    </button>
                );
            })}
        </div>
    );
};

const ReviewForm: React.FC<{ product_id: string, refetch: (url: string) => void }> = ({product_id, refetch}) => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {errors},
    } = useForm<ReviewFormValues>({
        defaultValues: {
            rating: 0,
            comment: "",
        },
    });
    const api = useAxios<PaginatedResponse<IProductReview>>({
        baseURL: `/api/private/products/${product_id}/reviews/`,
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

    const onSubmit: SubmitHandler<ReviewFormValues> = (data) => {
        console.log("Submitted review:", data);
        api.post("", data).then()
        refetch("")
    };

    const rating = watch("rating");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-2">
            <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                        Rating
                    </label>
                    <StarRating value={rating} onChange={(val) => setValue("rating", val)}/>
                    {errors.rating && <p className="text-red-500 text-sm">Rating is required.</p>}
                </div>

                <div className="col-span-2">
                    <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Review description
                    </label>
                    <textarea
                        id="description"
                        {...register("comment", {required: "Description is required"})}
                        className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    />
                    {errors.comment && (
                        <p className="text-red-500 text-sm">{errors.comment.message}</p>
                    )}
                    <button
                        type="submit"
                        className="middle none center mt-2 rounded-lg bg-primary py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        Comment
                    </button>
                </div>
            </div>
        </form>
    );
};


const Main: React.FC<IProps> = ({product_id}) => {
    const [reviews, setReviews] = useState<IProductReview[]>([]);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [scrollRoot, setScrollRoot] = useState<Element | null>(null);

    const api = useAxios<PaginatedResponse<IProductReview>>({
        baseURL: `/api/public/products/${product_id}/reviews/?limit=5`,
        keepPrevious: true,
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

    const debouncedNext = useDebounce(() => {
        console.log(reviews);
        api.list(api?.data?.next || "");
    }, 300);

    useEffect(() => {
        api.list("").then();

        // Delay to ensure the ref is set
        const timer = setTimeout(() => {
            if (scrollContainerRef.current) {
                console.log(scrollContainerRef.current);
                setScrollRoot(scrollContainerRef.current);
            }
        }, 0);

        return () => clearTimeout(timer);
    }, []);


    return (
        <section className="bg-white antialiased dark:bg-gray-900">
            <div className="grid grid-cols-1  lg:grid-cols-5">
                <div className="lg:col-span-2">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Reviews</h2>

                        <div className="mt-2 flex items-center gap-2 sm:mt-0">
                            <div className="flex items-center gap-0.5">
                                <i className="fa-solid fa-star text-primary"></i>
                                <i className="fa-solid fa-star text-primary"></i>
                                <i className="fa-solid fa-star text-primary"></i>
                                <i className="fa-solid fa-star text-primary"></i>
                                <i className="fa-solid fa-star text-primary"></i>
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
                                <i className="fa-solid fa-star text-primary"></i>
                                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-1.5 rounded-full bg-primary" style={{width: "20%"}}></div>
                                </div>
                                <a href="#"
                                   className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">239 <span
                                    className="hidden sm:inline">reviews</span></a>
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">4</p>
                                <i className="fa-solid fa-star text-primary"></i>
                                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-1.5 rounded-full bg-primary" style={{width: "20%"}}></div>
                                </div>
                                <a href="#"
                                   className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">432 <span
                                    className="hidden sm:inline">reviews</span></a>
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">3</p>
                                <i className="fa-solid fa-star text-primary"></i>
                                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-1.5 rounded-full bg-primary" style={{width: "20%"}}></div>
                                </div>
                                <a href="#"
                                   className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">53 <span
                                    className="hidden sm:inline">reviews</span></a>
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">2</p>
                                <i className="fa-solid fa-star text-primary"></i>
                                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-1.5 rounded-full bg-primary" style={{width: "20%"}}></div>
                                </div>
                                <a href="#"
                                   className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">32 <span
                                    className="hidden sm:inline">reviews</span></a>
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">1</p>
                                <i className="fa-solid fa-star text-primary"></i>
                                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-1.5 rounded-full bg-primary" style={{width: "20%"}}></div>
                                </div>
                                <a href="#"
                                   className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">13 <span
                                    className="hidden sm:inline">reviews</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <div className="rounded-lg bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] dark:bg-gray-800">
                        <ReviewForm product_id={product_id} refetch={api.list}/>
                    </div>

                    <div className="h-[500px] overflow-auto" ref={scrollContainerRef}>
                        <InfiniteScroll
                            root={scrollRoot}
                            hasMore={Boolean(api?.data?.next)}
                            isLoading={api.loading}
                            next={debouncedNext}
                            // moveCursorTop={true}
                        >
                            {api?.data?.results?.map((review) => (
                                <UserReviewCard review={review} key={review.id}/>
                            ))}
                            <div>
                                <LoadingIcon
                                    next={Boolean(api?.data?.next)}
                                    hasMore={Boolean(api?.data?.next)}
                                    noMoreMessage="That's all, thanks for reading!"
                                />
                            </div>
                        </InfiniteScroll>
                    </div>

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

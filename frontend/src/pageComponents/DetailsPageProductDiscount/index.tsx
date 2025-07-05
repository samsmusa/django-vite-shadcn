import React, {useEffect, useMemo, useState} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";

interface IProps {
    product_slug: string;
    product_id: string;
}

interface Discount {
    id: number;
    code: string;
    name: string;
    description?: string;
    discount_type: 'percentage' | 'fixed_amount';
    value: string;
    valid_from: string;
    valid_to?: string;
    maximum_discount_amount?: string;
    minimum_order_amount?: string;
}

const DiscountCard = ({
                          discount,
                          selected,
                          onSelect,
                      }: {
    discount: Discount;
    selected: boolean;
    onSelect: () => void;
}) => {
    const isPercentage = discount.discount_type === 'percentage';
    const valueText = isPercentage
        ? `${discount.value}% off`
        : `৳${parseFloat(discount.value).toFixed(2)} off`;

    return (
        <div
            onClick={onSelect}
            className={`cursor-pointer min-w-[250px] p-4 rounded-2xl shadow-md transition-all border ${
                selected
                    ? 'border-blue-600 ring-2 ring-blue-300 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-400 hover:shadow-lg'
            }`}
        >
            <h3 className="text-lg font-bold text-gray-800">{discount.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{discount.description || 'No description'}</p>
            <div className="text-blue-700 font-semibold mb-1">{valueText}</div>

            {discount.minimum_order_amount && (
                <p className="text-xs text-gray-500">
                    Min Order: ৳{parseFloat(discount.minimum_order_amount).toFixed(2)}
                </p>
            )}

            {discount.maximum_discount_amount && (
                <p className="text-xs text-gray-500">
                    Max Discount: ৳{parseFloat(discount.maximum_discount_amount).toFixed(2)}
                </p>
            )}

            {discount.valid_to && (
                <p className="text-xs text-gray-400 mt-1">
                    Expires on: {new Date(discount.valid_to).toLocaleDateString()}
                </p>
            )}
        </div>
    );
};

const Main: React.FC<IProps> = ({ product_id }) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const api = useAxios<PaginatedResponse<Discount>>({
        baseURL: `/api/public/products/${product_id}/discounts/`,
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

    const { list, data, loading, error } = api;

    useEffect(() => {
        list('').catch((e) => {
            console.error('Failed to fetch discounts', e);
        });
    }, []);

    if (loading) return <p className="text-gray-500">Loading discounts...</p>;
    if (error) return <p className="text-red-500">Failed to load discounts.</p>;

    return (
        data?.results && data?.results.length > 0 && <div>
                <h2 className="text-xl font-semibold mb-4">Available Discounts</h2>
            <div className="flex space-x-4 overflow-x-auto py-4">
                {data?.results && data?.results.length > 0 && (
                    data.results.map((discount) => (
                        <DiscountCard
                            key={discount.id}
                            discount={discount}
                            selected={selectedId === discount.id}
                            onSelect={() => setSelectedId(discount.id)}
                        />
                    ))
                )}
            </div>
            <hr className="my-3"/>
        </div>
    );
};

const containerId = 'data-product-discounts';
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

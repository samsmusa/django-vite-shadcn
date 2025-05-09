import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Hydrate} from "@/lib/Hydrate";
import {createRoot} from "react-dom/client";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";

interface IProps {
    product_slug: string;
    product_id: string;
    product_stock: string;
}

interface Variant {
    id: number;
    name: string;
    sku: string;
    price: number;
    stock_quantity: number;
    is_active: boolean;
    image: string | null;
    attribute_values: string[];
}


function hexToRGBA(hex: string, alpha: number = 0.15): string {
    const colors: { [key: string]: string } = {
        red: "#f87171",
        blue: "#60a5fa",
        green: "#34d399",
        yellow: "#facc15",
        purple: "#a78bfa",
        pink: "#f472b6",
        black: "#000000",
        gray: "#9ca3af",
        white: "#ffffff",
        orange: "#fb923c",
        indigo: "#818cf8",
    };
    const base = colors[hex] || "#f9fafb";
    const bigint = parseInt(base.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

interface QuantitySelectorProps {
    productStock: number;
    initialValue?: number;
    onChange?: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
                                                               productStock,
                                                               initialValue = 1,
                                                               onChange,
                                                           }) => {
    const [quantity, setQuantity] = useState(initialValue);

    const handleChange = (value: number) => {
        const clamped = Math.max(1, Math.min(productStock, value));
        setQuantity(clamped);
        onChange?.(clamped);
    };

    const increment = () => handleChange(quantity + 1);
    const decrement = () => handleChange(quantity - 1);

    useEffect(() => {
        setQuantity(initialValue)
    }, [productStock]);

    return (
        <div
            className="flex items-center justify-between bg-white w-full">
            <p className="text-sm font-medium text-gray-700">Quantity</p>
            <div className="flex items-center space-x-2">
                <button
                    type="button"
                    onClick={decrement}
                    className="w-8 h-8 rounded-full border text-gray-600 hover:bg-gray-100 disabled:opacity-30"
                    disabled={quantity <= 1}
                >
                    −
                </button>
                <input
                    name="quantity"
                    type="number"
                    min="1"
                    max={productStock}
                    step="1"
                    value={quantity}
                    onChange={(e) => handleChange(Number(e.target.value))}
                    className="w-12 text-center border rounded-md text-sm py-1"
                />
                <button
                    type="button"
                    onClick={increment}
                    className="w-8 h-8 rounded-full border text-gray-600 hover:bg-gray-100 disabled:opacity-30"
                    disabled={quantity >= productStock}
                >
                    +
                </button>
            </div>
        </div>
    );
};


const VariantCard = ({
                         variant,
                         selected,
                         onSelect,
                     }: {
    variant: Variant;
    selected: boolean;
    onSelect: () => void;
}) => {
    const backgroundColor = useMemo(() => {
        const colorAttr = variant.attribute_values.find((attr: string) =>
            attr.toLowerCase().startsWith("color:")
        );
        const color = colorAttr ? colorAttr.split(":")[1].trim().toLowerCase() : "";
        return hexToRGBA(color);
    }, [variant.attribute_values]);

    return (
        <label
            onClick={onSelect}
            className={`cursor-pointer rounded-xl border transition-all duration-300 flex-shrink-0 ${selected ? "ring-2 ring-blue-500 border-blue-500" : "hover:ring-1 hover:ring-gray-400"} hover:shadow-lg hover:scale-105`}
            style={{backgroundColor}}
        >
            <input
                type="radio"
                name="variant"
                value={variant.id}
                checked={selected}
                onChange={onSelect}
                className="hidden"
            />
            <div className="p-2">
                <div className="mb-2 font-semibold text-sm text-gray-800">{variant.name}</div>
                <div className="text-sm text-gray-600">
                    <p>Price: <span className="text-green-600 font-medium">${variant.price}</span></p>
                    <p>Stock: <span className="text-blue-600">{variant.stock_quantity}</span></p>
                    <ul className="mt-2 text-xs text-gray-500">
                        {variant.attribute_values.map((attr, i) => (
                            <li key={i}>{attr}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </label>
    );
}
const Main: React.FC<IProps> = ({ product_id, product_stock }) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [stock, setStock] = useState<number>(Number(product_stock));

    const api = useAxios<PaginatedResponse<Variant>>({
        baseURL: `/api/public/products/${product_id}/variants/`,
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
            console.error('Failed to fetch products', e);
        });
    }, []);

    const activeVariants = useMemo(
        () => data?.results.filter((v) => v.is_active) || [],
        [data?.results]
    );

    const handleSelect = useCallback(
        (id: number) => () => {
            setSelectedId(id);
            const variant = activeVariants.find((variant) => variant.id === id);
            if (variant) {
                setStock(variant.stock_quantity);
            }
        },
        [activeVariants]
    );

    if (loading) return <p className="text-gray-500">Loading variants...</p>;
    if (error) return <p className="text-red-500">Failed to load variants.</p>;

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Available Variants</h2>
            <div className="flex space-x-4 overflow-x-auto py-4">
                {activeVariants.length > 0 ? (
                    activeVariants.map((variant) => (
                        <VariantCard
                            key={variant.id}
                            variant={variant}
                            selected={selectedId === variant.id}
                            onSelect={handleSelect(variant.id)}
                        />
                    ))
                ) : (
                    <p className="text-gray-500">No active variants found.</p>
                )}
            </div>

            <hr className="my-3" />

            <QuantitySelector productStock={stock} />
        </div>
    );
};

const containerId = 'data-product-variants';
const container = document.getElementById(containerId);

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Hydrate<IProps>
                component={Main}
                containerId={containerId}
                propNames={["product_id", "product_slug", "product_stock"]}
            />
        </React.StrictMode>
    );
}

import React, {useEffect, useMemo, useState} from 'react';
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

const QuantitySelector: React.FC<QuantitySelectorProps> = ({productStock, initialValue = 1, onChange}) => {
    const [quantity, setQuantity] = useState(initialValue);

    const handleChange = (value: number) => {
        const clamped = Math.max(1, Math.min(productStock, value));
        setQuantity(clamped);
        onChange?.(clamped);
    };

    useEffect(() => {
        setQuantity(initialValue);
    }, [productStock]);

    return (
        <div className="flex items-center justify-between bg-white w-full">
            <p className="text-sm font-medium text-gray-700">Quantity</p>
            <div className="flex items-center space-x-2">
                <button type="button" onClick={() => handleChange(quantity - 1)}
                        className="w-8 h-8 rounded-full border text-gray-600 hover:bg-gray-100 disabled:opacity-30"
                        disabled={quantity <= 1}>−
                </button>
                <input name="quantity" type="number" min="1" max={productStock} step="1" value={quantity}
                       onChange={(e) => handleChange(Number(e.target.value))}
                       className="w-12 text-center border rounded-md text-sm py-1"/>
                <button type="button" onClick={() => handleChange(quantity + 1)}
                        className="w-8 h-8 rounded-full border text-gray-600 hover:bg-gray-100 disabled:opacity-30"
                        disabled={quantity >= productStock}>+
                </button>
            </div>
        </div>
    );
};

function parseAttributes(variants: Variant[]): Record<string, Set<string>> {
    const attrs: Record<string, Set<string>> = {};
    for (const variant of variants) {
        for (const attr of variant.attribute_values) {
            const [key, value] = attr.split(":").map(s => s.trim());
            if (!attrs[key]) attrs[key] = new Set();
            attrs[key].add(value);
        }
    }
    return attrs;
}

const Main: React.FC<IProps> = ({product_id, product_stock}) => {
    const [selectedAttributes, setSelectedAttributes] = useState<Record<string, string>>({});
    const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
    const [stock, setStock] = useState<number>(Number(product_stock));

    const api = useAxios<PaginatedResponse<Variant>>({
        baseURL: `/api/public/products/${product_id}/variants/`,
        initialState: {
            loading: true,
            error: null,
            data: {count: 0, next: null, previous: null, results: []},
        },
    });

    const {list, data, loading, error} = api;

    useEffect(() => {
        list('').catch(console.error);
    }, []);

    const activeVariants = useMemo(() => data?.results.filter(v => v.is_active) || [], [data?.results]);
    const attributeMap = useMemo(() => parseAttributes(activeVariants), [activeVariants]);
    const attributeKeys = Object.keys(attributeMap);

    const handleAttributeChange = (key: string, value: string) => {
        const newSelection = {...selectedAttributes, [key]: value};
        setSelectedAttributes(newSelection);

        const matched = activeVariants.find(variant => {
            const attrObj: Record<string, string> = {};
            for (const attr of variant.attribute_values) {
                const [k, v] = attr.split(":").map(s => s.trim());
                attrObj[k] = v;
            }
            return attributeKeys.every(k => newSelection[k] === attrObj[k]);
        });

        setSelectedVariant(matched || null);
        if (matched) setStock(matched.stock_quantity);
    };

    if (loading) return <p className="text-gray-500">Loading variants...</p>;
    if (error) return <p className="text-red-500">Failed to load variants.</p>;

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Choose Variant</h2>

            {attributeKeys.map((key) => (
                <div key={key} className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">{key}</p>
                    <div className="flex flex-wrap gap-3">
                        {Array.from(attributeMap[key]).map((value) => {
                            const isSelected = selectedAttributes[key] === value;

                            if (key.toLowerCase() === "color") {
                                const bg = hexToRGBA(value.toLowerCase(), 1);
                                const ring = hexToRGBA(value.toLowerCase(), 0.4);
                                return (
                                    <label
                                        key={value}
                                        className={`relative w-8 h-8 rounded-full border-2 cursor-pointer transition-all duration-200 ${isSelected ? "ring-2 ring-offset-2" : ""}`}
                                        style={{backgroundColor: bg, borderColor: isSelected ? ring : "#d1d5db"}}
                                        title={value}
                                    >
                                        <input
                                            type="radio"
                                            name={`attribute-${key}`}
                                            value={value}
                                            checked={isSelected}
                                            onChange={() => handleAttributeChange(key, value)}
                                            className="hidden"
                                        />
                                    </label>
                                );
                            }

                            return (
                                <label
                                    key={value}
                                    className={`flex items-center px-3 py-1 border rounded-full cursor-pointer transition-all duration-200 ${isSelected ? 'bg-blue-100 border-blue-500 text-blue-700' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
                                >
                                    <input
                                        type="radio"
                                        name={`attribute-${key}`}
                                        value={value}
                                        checked={isSelected}
                                        onChange={() => handleAttributeChange(key, value)}
                                        className="hidden"
                                    />
                                    {value}
                                </label>
                            );
                        })}
                    </div>
                </div>
            ))}

            {selectedVariant ? (
                <div className="border p-3 rounded-md bg-gray-50">
                    <p className="text-gray-800 font-medium">{selectedVariant.name}</p>
                    <p className="text-sm text-gray-600">Price: ${selectedVariant.price}</p>
                    <p className="text-sm text-gray-600">Stock: {selectedVariant.stock_quantity}</p>
                    <ul className="mt-1 text-xs text-gray-500">
                        {selectedVariant.attribute_values.map((attr, i) => (
                            <li key={i}>{attr}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                Object.keys(selectedAttributes).length === attributeKeys.length && (
                    <p className="text-red-500 text-sm">No variant matches your selection.</p>
                )
            )}

            <QuantitySelector productStock={stock}/>
        </div>
    );
};

export default Main;


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

import React from "react";
import { Product } from "@/interfaces/product";

interface ProductComparisonProps {
    products: Product[]; // max 4
    highlightBy?: {
        [label: string]: (value: any) => string | undefined;
    };
}

const fields = [
    { label: "Model", accessor: (p: Product) => p.name },
    { label: "SKU", accessor: (p: Product) => p.sku },
    { label: "Brand", accessor: (p: Product) => p.brand.name },
    { label: "Category", accessor: (p: Product) => p.category.name },
    { label: "Price", accessor: (p: Product) => `৳${p.price}` },
    { label: "Compare Price", accessor: (p: Product) => p.compare_price ? `৳${p.compare_price}` : "—" },
    { label: "Discount", accessor: (p: Product) => `${p.discount_percentage}%` },
    { label: "On Sale", accessor: (p: Product) => p.is_on_sale ? "Yes" : "No" },
    { label: "Description", accessor: (p: Product) => p.short_description },
];

const ProductComparison: React.FC<ProductComparisonProps> = ({ products, highlightBy }) => {
    return (
        <div className="overflow-auto rounded-lg bg-white dark:bg-gray-900 shadow">
            <table className="min-w-full border-separate border-spacing-0 table-fixed">
                <thead>
                <tr className="border-b">
                    <th className="sticky left-0 z-10 bg-gray-100 dark:bg-gray-800 p-4 text-left font-bold w-48">
                        Features
                    </th>
                    {products.map((product) => (
                        <th
                            key={product.id}
                            className="p-4 font-semibold text-center min-w-[220px] bg-gray-50 dark:bg-gray-700"
                        >
                            {product.name}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {fields.map((field, index) => (
                    <tr key={index} className="border-b even:bg-gray-50 dark:even:bg-gray-800">
                        <td className="sticky left-0 z-10 bg-gray-100 dark:bg-gray-800 p-3 font-medium">
                            {field.label}
                        </td>
                        {products.map((product) => {
                            const value = field.accessor(product);
                            const bg = highlightBy?.[field.label]?.(value);

                            return (
                                <td
                                    key={product.id + "_" + field.label}
                                    style={bg ? { backgroundColor: bg } : undefined}
                                    className="p-3 text-sm text-center"
                                >
                                    {value}
                                </td>
                            );
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductComparison;

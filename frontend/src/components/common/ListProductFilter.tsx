import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Switch} from "@/components/ui/switch";
import React, {useCallback, useEffect, useRef} from "react";
import {useProductFilter} from "@/contexts/ProductFilterContext";
import {Controller, useForm, useWatch} from "react-hook-form";
import {Checkbox} from "@/components/ui/checkbox";
import useAxios, {PaginatedResponse} from "@/hooks/useAxios";
import {ProductBrand, ProductCategory} from "@/interfaces/product";
import {ScrollArea} from "@/components/ui/scroll-area";

interface FormData {
    priceFrom: number;
    priceTo: number;
    colors: string[];
    availability: 'inStock' | 'preOrder' | 'outOfStock' | 'all';
    brands: number[];
    categories: number[];
}

const ListProductFilter = () => {
    const {filter, updateFilter} = useProductFilter();
    const isInitialized = useRef(false);

    const {control, setValue, reset} = useForm<FormData>({
        defaultValues: {
            priceFrom: filter.priceFrom || 0,
            priceTo: filter.priceTo || 0,
            colors: filter.colors || [],
            availability: filter.availability || "all",
            brands: filter.brands || [],
            categories: filter.categories || []
        },
    });

    const priceFrom = useWatch({control, name: 'priceFrom'});
    const priceTo = useWatch({control, name: 'priceTo'});
    const colors = useWatch({control, name: 'colors'});
    const brands = useWatch({control, name: 'brands'});
    const categories = useWatch({control, name: 'categories'});
    const availability = useWatch({control, name: 'availability'});


    const {list: brandList, data: brandData} = useAxios<PaginatedResponse<ProductBrand>>({
        baseURL: '/api/public/brand/',
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
    const {list: categoryList, data: categoryData} = useAxios<PaginatedResponse<ProductCategory>>({
        baseURL: '/api/public/category/',
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

    useEffect(() => {
        brandList("").then()
        categoryList("").then()
    }, [])


    useEffect(() => {
        if (!isInitialized.current) {
            reset({
                priceFrom: filter.priceFrom || 0,
                priceTo: filter.priceTo || 0,
                colors: filter.colors || [],
                brands: filter.brands || [],
                categories: filter.categories || [],
                availability: filter.availability || "all",
            });
            isInitialized.current = true;
        }
    }, [filter, reset]);


    const debouncedUpdateRef = useRef<NodeJS.Timeout>(null);
    const updateFilterDebounced = useCallback((values: FormData) => {
        if (debouncedUpdateRef.current) {
            clearTimeout(debouncedUpdateRef.current);
        }
        debouncedUpdateRef.current = setTimeout(() => {
            updateFilter(values);
        }, 300);
    }, [updateFilter]);


    useEffect(() => {
        if (isInitialized.current) {
            updateFilterDebounced({
                priceFrom,
                priceTo,
                colors,
                availability,
                brands,
                categories
            });
        }
    }, [priceFrom, priceTo, colors, brands, categories, availability, updateFilterDebounced]);

    const selectColor = useCallback((color: string, isSelected: boolean) => {
        const currentColors = colors || [];
        const updatedColors = isSelected
            ? [...currentColors, color]
            : currentColors.filter((c) => c !== color);
        setValue("colors", updatedColors);
    }, [colors, setValue]);


    const selectBrand = useCallback((brand: number, isSelected: boolean) => {
        const currentBrands = brands || [];
        const updatedBrands = isSelected
            ? [...currentBrands, brand]
            : currentBrands.filter((c) => c !== brand);
        setValue("brands", updatedBrands);
    }, [brands, setValue]);


    const selectCategory = useCallback((category: number, isSelected: boolean) => {
        const currentCategory = categories || [];
        const updatedCategory = isSelected
            ? [...currentCategory, category]
            : currentCategory.filter((c) => c !== category);
        setValue("categories", updatedCategory);
    }, [categories, setValue]);

    const onAvailabilityChange = useCallback((value: FormData["availability"]) => {
        setValue("availability", value);
    }, [setValue]);

    const handlePriceChange = useCallback((field: 'priceFrom' | 'priceTo', value: string) => {
        const numValue = value === '' ? 0 : Number(value);
        setValue(field, numValue);
    }, [setValue]);

    return (
        <div className="hidden space-y-4 lg:block">
            <div>
                <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700">
                    Sort By
                </label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select sort option"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Accordion type="multiple">
                {/* Availability Filter */}
                <AccordionItem value="availability">
                    <AccordionTrigger>Availability</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-2 pl-4">
                            {["inStock", "preOrder", "outOfStock", "all"].map((option) => (
                                <div key={option} className="flex items-center gap-2">
                                    <Switch
                                        checked={availability === option}
                                        onCheckedChange={() => onAvailabilityChange(option as FormData["availability"])}
                                    />
                                    <span className="text-sm font-medium text-gray-700">
                                        {option === "inStock" && "In Stock"}
                                        {option === "preOrder" && "Pre Order"}
                                        {option === "outOfStock" && "Out of Stock"}
                                        {option === "all" && "All"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Price Filter */}
                <AccordionItem value="price">
                    <AccordionTrigger>Price</AccordionTrigger>
                    <AccordionContent>
                        <div className="pl-4 flex gap-4">
                            <Controller
                                control={control}
                                name="priceFrom"
                                render={({field}) => (
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">$</span>
                                        <input
                                            type="number"
                                            placeholder="From"
                                            value={field.value || ''}
                                            onChange={(e) => handlePriceChange('priceFrom', e.target.value)}
                                            className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                                        />
                                    </div>
                                )}
                            />
                            <Controller
                                control={control}
                                name="priceTo"
                                render={({field}) => (
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">$</span>
                                        <input
                                            type="number"
                                            placeholder="To"
                                            value={field.value || ''}
                                            onChange={(e) => handlePriceChange('priceTo', e.target.value)}
                                            className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Colors Filter */}
                <AccordionItem value="colors">
                    <AccordionTrigger>Colors</AccordionTrigger>
                    <AccordionContent>
                        <div className="pl-4 space-y-1">
                            {["Red", "Blue", "Green"].map((color) => (
                                <div key={color} className="flex items-center gap-2">
                                    <Checkbox
                                        checked={colors.includes(color)}
                                        onCheckedChange={(checked) => selectColor(color, Boolean(checked))}
                                    />
                                    <span className="text-sm font-medium text-gray-700">{color}</span>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/*brand filter*/}
                <AccordionItem value="brand">
                    <AccordionTrigger>Brands</AccordionTrigger>
                    <AccordionContent>
                        <ScrollArea className="h-72 pl-4">
                            {brandData?.results?.map((brand) => (
                                <div key={brand.id} className="flex items-center gap-2">
                                    <Checkbox
                                        checked={brands.includes(brand.id)}
                                        onCheckedChange={(checked) => selectBrand(brand.id, Boolean(checked))}
                                    />
                                    <span className="text-sm font-medium text-gray-700">{brand.name}</span>
                                </div>
                            ))}
                        </ScrollArea>
                    </AccordionContent>
                </AccordionItem>

                {/*category filter*/}
                <AccordionItem value="category">
                    <AccordionTrigger>Categories</AccordionTrigger>
                    <AccordionContent>
                        <ScrollArea className="h-72 pl-4">
                            {categoryData?.results?.map((category) => (
                                <div key={category.id} className="flex items-center gap-2">
                                    <Checkbox
                                        checked={categories.includes(category.id)}
                                        onCheckedChange={(checked) => selectCategory(category.id, Boolean(checked))}
                                    />
                                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                                </div>
                            ))}
                        </ScrollArea>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default ListProductFilter;
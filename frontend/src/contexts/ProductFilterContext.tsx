import React, {createContext, ReactNode, useCallback, useContext, useMemo, useState} from 'react';

export interface FilterState {
    priceFrom: number;
    priceTo: number;
    colors: string[];
    brands: number[];
    categories: number[];
    availability: 'inStock' | 'preOrder' | 'outOfStock' | 'all';
}

export interface ProductFilterContextProps {
    filter: FilterState;
    updateFilter: (newFilter: Partial<FilterState>) => void;
    resetFilter: () => void;
    clearColors: () => void;
    addColor: (color: string) => void;
    removeColor: (color: string) => void;
    clearBrands: () => void;
    addBrand: (brand: number) => void;
    removeBrand: (brand: number) => void;
    clearCategories: () => void;
    addCategory: (category: number) => void;
    removeCategory: (category: number) => void;
    setPriceRange: (from: number, to: number) => void;
}

const defaultFilterState: FilterState = {
    priceFrom: 0,
    priceTo: 1000,
    colors: [],
    brands: [],
    categories: [],
    availability: 'all',
};

const ProductFilterContext = createContext<ProductFilterContextProps | undefined>(undefined);

export const useProductFilter = (): ProductFilterContextProps => {
    const context = useContext(ProductFilterContext);
    if (!context) {
        throw new Error('useProductFilter must be used within a ProductFilterProvider');
    }
    return context;
};

export const ProductFilterProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [filter, setFilter] = useState<FilterState>(defaultFilterState);

    const updateFilter = useCallback((newFilter: Partial<FilterState>) => {
        setFilter(prev => ({...prev, ...newFilter}));
    }, []);

    const resetFilter = useCallback(() => {
        setFilter(defaultFilterState);
    }, []);

    const clearColors = useCallback(() => {
        setFilter(prev => ({...prev, colors: []}));
    }, []);

    const addColor = useCallback((color: string) => {
        setFilter(prev => ({
            ...prev,
            colors: prev.colors.includes(color) ? prev.colors : [...prev.colors, color]
        }));
    }, []);

    const removeColor = useCallback((color: string) => {
        setFilter(prev => ({
            ...prev,
            colors: prev.colors.filter(c => c !== color)
        }));
    }, []);
    const clearBrands = useCallback(() => {
        setFilter(prev => ({...prev, brands: []}));
    }, []);

    const addBrand = useCallback((brand: number) => {
        setFilter(prev => ({
            ...prev,
            brands: prev.brands.includes(brand) ? prev.brands : [...prev.brands, brand]
        }));
    }, []);

    const removeBrand = useCallback((brand: number) => {
        setFilter(prev => ({
            ...prev,
            brands: prev.brands.filter(c => c !== brand)
        }));
    }, []);
    const clearCategories = useCallback(() => {
        setFilter(prev => ({...prev, categories: []}));
    }, []);

    const addCategory = useCallback((category: number) => {
        setFilter(prev => ({
            ...prev,
            categories: prev.categories.includes(category) ? prev.categories : [...prev.categories, category]
        }));
    }, []);

    const removeCategory = useCallback((category: number) => {
        setFilter(prev => ({
            ...prev,
            categories: prev.categories.filter(c => c !== category)
        }));
    }, []);

    const setPriceRange = useCallback((from: number, to: number) => {
        setFilter(prev => ({...prev, priceFrom: from, priceTo: to}));
    }, []);

    const value = useMemo(() => ({
        filter,
        updateFilter,
        resetFilter,
        clearColors,
        addColor,
        removeColor,
        clearBrands,
        addBrand,
        removeBrand,
        clearCategories,
        addCategory,
        removeCategory,
        setPriceRange,
    }), [filter, updateFilter, resetFilter, clearColors, addColor, removeColor, clearBrands, addBrand, removeBrand, clearCategories, addCategory, removeCategory, setPriceRange]);

    return (
        <ProductFilterContext.Provider value={value}>
            {children}
        </ProductFilterContext.Provider>
    );
};
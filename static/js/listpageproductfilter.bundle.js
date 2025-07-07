/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/common/ListProductFilter.tsx":
/*!*****************************************************!*\
  !*** ./src/components/common/ListProductFilter.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _components_ui_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/select */ \"./src/components/ui/select.tsx\");\n/* harmony import */ var _components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/accordion */ \"./src/components/ui/accordion.tsx\");\n/* harmony import */ var _components_ui_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/switch */ \"./src/components/ui/switch.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_ProductFilterContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/ProductFilterContext */ \"./src/contexts/ProductFilterContext.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/checkbox */ \"./src/components/ui/checkbox.tsx\");\n/* harmony import */ var _hooks_useAxios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useAxios */ \"./src/hooks/useAxios.ts\");\n/* harmony import */ var _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ui/scroll-area */ \"./src/components/ui/scroll-area.tsx\");\n\n\n\n\n\n\n\n\n\n\nconst ListProductFilter = () => {\n    var _a, _b;\n    const { filter, updateFilter } = (0,_contexts_ProductFilterContext__WEBPACK_IMPORTED_MODULE_5__.useProductFilter)();\n    const isInitialized = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);\n    const { control, setValue, reset } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        defaultValues: {\n            priceFrom: filter.priceFrom || 0,\n            priceTo: filter.priceTo || 0,\n            colors: filter.colors || [],\n            availability: filter.availability || \"all\",\n            brands: filter.brands || [],\n            categories: filter.categories || []\n        },\n    });\n    const priceFrom = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useWatch)({ control, name: 'priceFrom' });\n    const priceTo = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useWatch)({ control, name: 'priceTo' });\n    const colors = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useWatch)({ control, name: 'colors' });\n    const brands = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useWatch)({ control, name: 'brands' });\n    const categories = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useWatch)({ control, name: 'categories' });\n    const availability = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useWatch)({ control, name: 'availability' });\n    const { list: brandList, data: brandData } = (0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n        baseURL: '/api/public/brand/',\n        initialState: {\n            loading: true,\n            error: null,\n            data: {\n                count: 0,\n                next: null,\n                previous: null,\n                results: [],\n            },\n        },\n    });\n    const { list: categoryList, data: categoryData } = (0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n        baseURL: '/api/public/category/',\n        initialState: {\n            loading: true,\n            error: null,\n            data: {\n                count: 0,\n                next: null,\n                previous: null,\n                results: [],\n            },\n        },\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {\n        brandList(\"\").then();\n        categoryList(\"\").then();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {\n        if (!isInitialized.current) {\n            reset({\n                priceFrom: filter.priceFrom || 0,\n                priceTo: filter.priceTo || 0,\n                colors: filter.colors || [],\n                brands: filter.brands || [],\n                categories: filter.categories || [],\n                availability: filter.availability || \"all\",\n            });\n            isInitialized.current = true;\n        }\n    }, [filter, reset]);\n    const debouncedUpdateRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const updateFilterDebounced = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((values) => {\n        if (debouncedUpdateRef.current) {\n            clearTimeout(debouncedUpdateRef.current);\n        }\n        debouncedUpdateRef.current = setTimeout(() => {\n            updateFilter(values);\n        }, 300);\n    }, [updateFilter]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {\n        if (isInitialized.current) {\n            updateFilterDebounced({\n                priceFrom,\n                priceTo,\n                colors,\n                availability,\n                brands,\n                categories\n            });\n        }\n    }, [priceFrom, priceTo, colors, brands, categories, availability, updateFilterDebounced]);\n    const selectColor = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((color, isSelected) => {\n        const currentColors = colors || [];\n        const updatedColors = isSelected\n            ? [...currentColors, color]\n            : currentColors.filter((c) => c !== color);\n        setValue(\"colors\", updatedColors);\n    }, [colors, setValue]);\n    const selectBrand = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((brand, isSelected) => {\n        const currentBrands = brands || [];\n        const updatedBrands = isSelected\n            ? [...currentBrands, brand]\n            : currentBrands.filter((c) => c !== brand);\n        setValue(\"brands\", updatedBrands);\n    }, [brands, setValue]);\n    const selectCategory = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((category, isSelected) => {\n        const currentCategory = categories || [];\n        const updatedCategory = isSelected\n            ? [...currentCategory, category]\n            : currentCategory.filter((c) => c !== category);\n        setValue(\"categories\", updatedCategory);\n    }, [categories, setValue]);\n    const onAvailabilityChange = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((value) => {\n        setValue(\"availability\", value);\n    }, [setValue]);\n    const handlePriceChange = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((field, value) => {\n        const numValue = value === '' ? 0 : Number(value);\n        setValue(field, numValue);\n    }, [setValue]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"hidden space-y-4 lg:block\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", { htmlFor: \"SortBy\", className: \"block text-xs font-medium text-gray-700\", children: \"Sort By\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_select__WEBPACK_IMPORTED_MODULE_1__.Select, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_select__WEBPACK_IMPORTED_MODULE_1__.SelectTrigger, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_select__WEBPACK_IMPORTED_MODULE_1__.SelectValue, { placeholder: \"Select sort option\" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_select__WEBPACK_IMPORTED_MODULE_1__.SelectContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_select__WEBPACK_IMPORTED_MODULE_1__.SelectItem, { value: \"price-low\", children: \"Price: Low to High\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_select__WEBPACK_IMPORTED_MODULE_1__.SelectItem, { value: \"price-high\", children: \"Price: High to Low\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_select__WEBPACK_IMPORTED_MODULE_1__.SelectItem, { value: \"name\", children: \"Name\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_select__WEBPACK_IMPORTED_MODULE_1__.SelectItem, { value: \"newest\", children: \"Newest\" })] })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.Accordion, { type: \"multiple\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionItem, { value: \"availability\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionTrigger, { children: \"Availability\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionContent, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"space-y-2 pl-4\", children: [\"inStock\", \"preOrder\", \"outOfStock\", \"all\"].map((option) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_switch__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: availability === option, onCheckedChange: () => onAvailabilityChange(option) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", { className: \"text-sm font-medium text-gray-700\", children: [option === \"inStock\" && \"In Stock\", option === \"preOrder\" && \"Pre Order\", option === \"outOfStock\" && \"Out of Stock\", option === \"all\" && \"All\"] })] }, option))) }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionItem, { value: \"price\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionTrigger, { children: \"Price\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionContent, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"pl-4 flex gap-4\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.Controller, { control: control, name: \"priceFrom\", render: ({ field }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"text-sm text-gray-600\", children: \"$\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", { type: \"number\", placeholder: \"From\", value: field.value || '', onChange: (e) => handlePriceChange('priceFrom', e.target.value), className: \"w-full rounded-md border-gray-200 shadow-xs sm:text-sm\" })] })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.Controller, { control: control, name: \"priceTo\", render: ({ field }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"text-sm text-gray-600\", children: \"$\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", { type: \"number\", placeholder: \"To\", value: field.value || '', onChange: (e) => handlePriceChange('priceTo', e.target.value), className: \"w-full rounded-md border-gray-200 shadow-xs sm:text-sm\" })] })) })] }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionItem, { value: \"colors\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionTrigger, { children: \"Colors\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionContent, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"pl-4 space-y-1\", children: [\"Red\", \"Blue\", \"Green\"].map((color) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__.Checkbox, { checked: colors.includes(color), onCheckedChange: (checked) => selectColor(color, Boolean(checked)) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"text-sm font-medium text-gray-700\", children: color })] }, color))) }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionItem, { value: \"brand\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionTrigger, { children: \"Brands\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionContent, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_8__.ScrollArea, { className: \"h-72 pl-4\", children: (_a = brandData === null || brandData === void 0 ? void 0 : brandData.results) === null || _a === void 0 ? void 0 : _a.map((brand) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__.Checkbox, { checked: brands.includes(brand.id), onCheckedChange: (checked) => selectBrand(brand.id, Boolean(checked)) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"text-sm font-medium text-gray-700\", children: brand.name })] }, brand.id))) }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionItem, { value: \"category\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionTrigger, { children: \"Categories\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionContent, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_8__.ScrollArea, { className: \"h-72 pl-4\", children: (_b = categoryData === null || categoryData === void 0 ? void 0 : categoryData.results) === null || _b === void 0 ? void 0 : _b.map((category) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__.Checkbox, { checked: categories.includes(category.id), onCheckedChange: (checked) => selectCategory(category.id, Boolean(checked)) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"text-sm font-medium text-gray-700\", children: category.name })] }, category.id))) }) })] })] })] }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListProductFilter);\n\n\n//# sourceURL=webpack://frontend/./src/components/common/ListProductFilter.tsx?");

/***/ }),

/***/ "./src/components/common/ProductList.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/ProductList.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _components_common_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/ProductCard */ \"./src/components/common/ProductCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_ProductFilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/ProductFilterContext */ \"./src/contexts/ProductFilterContext.tsx\");\n/* harmony import */ var _components_ui_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/infinite-scroll */ \"./src/components/ui/infinite-scroll.tsx\");\n/* harmony import */ var _components_common_LoaderComp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/common/LoaderComp */ \"./src/components/common/LoaderComp.tsx\");\n/* harmony import */ var _hooks_useAxios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useAxios */ \"./src/hooks/useAxios.ts\");\n\n\n\n\n\n\n\nconst MemoizedProductCard = react__WEBPACK_IMPORTED_MODULE_2___default().memo(_components_common_ProductCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst filterUrlBuilder = (filters) => {\n    const { brands, categories } = filters;\n    const brandQuery = brands.length > 0 ? `brand=${brands.join(\",\")}` : \"\";\n    const categoryQuery = categories.length > 0 ? `category=${categories.join(\",\")}` : \"\";\n    let queryParams = [brandQuery, categoryQuery].filter(Boolean).join(\"&\");\n    if (queryParams.length > 1) {\n        queryParams = \"?\" + queryParams;\n    }\n    return queryParams;\n};\nconst ProductList = ({}) => {\n    var _a;\n    const { filter } = (0,_contexts_ProductFilterContext__WEBPACK_IMPORTED_MODULE_3__.useProductFilter)(); // filter context contains brands and categories (both are lists of integers)\n    const scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [scrollRoot, setScrollRoot] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const { list, loading, data, error } = (0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n        baseURL: '/api/public/products/',\n        initialState: {\n            loading: true,\n            error: null,\n            data: {\n                count: 0,\n                next: null,\n                previous: null,\n                results: [],\n            },\n        },\n    });\n    const next = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {\n        if (data === null || data === void 0 ? void 0 : data.next) {\n            list(data.next).then();\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n        const url = filterUrlBuilder(filter);\n        list(url).then();\n    }, [filter]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"h-[1500px] overflow-auto\", ref: scrollContainerRef, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { root: scrollRoot, hasMore: true, isLoading: false, next: next, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \" grid gap-4 sm:grid-cols-2 lg:grid-cols-4\", children: (_a = data === null || data === void 0 ? void 0 : data.results) === null || _a === void 0 ? void 0 : _a.map((product) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MemoizedProductCard, { product: product }, product.id))) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_LoaderComp__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { next: true, hasMore: true, noMoreMessage: \"That's all, thanks for reading!\" }) })] }) }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);\n\n\n//# sourceURL=webpack://frontend/./src/components/common/ProductList.tsx?");

/***/ }),

/***/ "./src/components/ui/accordion.tsx":
/*!*****************************************!*\
  !*** ./src/components/ui/accordion.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Accordion: () => (/* binding */ Accordion),\n/* harmony export */   AccordionContent: () => (/* binding */ AccordionContent),\n/* harmony export */   AccordionItem: () => (/* binding */ AccordionItem),\n/* harmony export */   AccordionTrigger: () => (/* binding */ AccordionTrigger)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-accordion */ \"./node_modules/@radix-ui/react-accordion/dist/index.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ \"./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"./src/lib/utils.ts\");\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\n\n\nfunction Accordion(_a) {\n    var props = __rest(_a, []);\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.Root, Object.assign({ \"data-slot\": \"accordion\" }, props));\n}\nfunction AccordionItem(_a) {\n    var { className } = _a, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.Item, Object.assign({ \"data-slot\": \"accordion-item\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"border-b last:border-b-0\", className) }, props)));\n}\nfunction AccordionTrigger(_a) {\n    var { className, children } = _a, props = __rest(_a, [\"className\", \"children\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.Header, { className: \"flex\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.Trigger, Object.assign({ \"data-slot\": \"accordion-trigger\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180\", className) }, props, { children: [children, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { className: \"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200\" })] })) }));\n}\nfunction AccordionContent(_a) {\n    var { className, children } = _a, props = __rest(_a, [\"className\", \"children\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.Content, Object.assign({ \"data-slot\": \"accordion-content\", className: \"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm\" }, props, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"pt-0 pb-4\", className), children: children }) })));\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/components/ui/accordion.tsx?");

/***/ }),

/***/ "./src/components/ui/checkbox.tsx":
/*!****************************************!*\
  !*** ./src/components/ui/checkbox.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Checkbox: () => (/* binding */ Checkbox)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-checkbox */ \"./node_modules/@radix-ui/react-checkbox/dist/index.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ \"./node_modules/lucide-react/dist/esm/icons/check.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"./src/lib/utils.ts\");\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\n\n\nfunction Checkbox(_a) {\n    var { className } = _a, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.Root, Object.assign({ \"data-slot\": \"checkbox\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50\", className) }, props, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_2__.Indicator, { \"data-slot\": \"checkbox-indicator\", className: \"flex items-center justify-center text-current transition-none\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { className: \"size-3.5\" }) }) })));\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/components/ui/checkbox.tsx?");

/***/ }),

/***/ "./src/components/ui/select.tsx":
/*!**************************************!*\
  !*** ./src/components/ui/select.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Select: () => (/* binding */ Select),\n/* harmony export */   SelectContent: () => (/* binding */ SelectContent),\n/* harmony export */   SelectGroup: () => (/* binding */ SelectGroup),\n/* harmony export */   SelectItem: () => (/* binding */ SelectItem),\n/* harmony export */   SelectLabel: () => (/* binding */ SelectLabel),\n/* harmony export */   SelectScrollDownButton: () => (/* binding */ SelectScrollDownButton),\n/* harmony export */   SelectScrollUpButton: () => (/* binding */ SelectScrollUpButton),\n/* harmony export */   SelectSeparator: () => (/* binding */ SelectSeparator),\n/* harmony export */   SelectTrigger: () => (/* binding */ SelectTrigger),\n/* harmony export */   SelectValue: () => (/* binding */ SelectValue)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-select */ \"./node_modules/@radix-ui/react-select/dist/index.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ \"./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ \"./node_modules/lucide-react/dist/esm/icons/check.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ \"./node_modules/lucide-react/dist/esm/icons/chevron-up.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"./src/lib/utils.ts\");\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\n\n\nfunction Select(_a) {\n    var props = __rest(_a, []);\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Root, Object.assign({ \"data-slot\": \"select\" }, props));\n}\nfunction SelectGroup(_a) {\n    var props = __rest(_a, []);\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Group, Object.assign({ \"data-slot\": \"select-group\" }, props));\n}\nfunction SelectValue(_a) {\n    var props = __rest(_a, []);\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Value, Object.assign({ \"data-slot\": \"select-value\" }, props));\n}\nfunction SelectTrigger(_a) {\n    var { className, size = \"default\", children } = _a, props = __rest(_a, [\"className\", \"size\", \"children\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Trigger, Object.assign({ \"data-slot\": \"select-trigger\", \"data-size\": size, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4\", className) }, props, { children: [children, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Icon, { asChild: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { className: \"size-4 opacity-50\" }) })] })));\n}\nfunction SelectContent(_a) {\n    var { className, children, position = \"popper\" } = _a, props = __rest(_a, [\"className\", \"children\", \"position\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Portal, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Content, Object.assign({ \"data-slot\": \"select-content\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md\", position === \"popper\" &&\n                \"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1\", className), position: position }, props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectScrollUpButton, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Viewport, { className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"p-1\", position === \"popper\" &&\n                        \"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1\"), children: children }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectScrollDownButton, {})] })) }));\n}\nfunction SelectLabel(_a) {\n    var { className } = _a, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Label, Object.assign({ \"data-slot\": \"select-label\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"text-muted-foreground px-2 py-1.5 text-xs\", className) }, props)));\n}\nfunction SelectItem(_a) {\n    var { className, children } = _a, props = __rest(_a, [\"className\", \"children\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Item, Object.assign({ \"data-slot\": \"select-item\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2\", className) }, props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"absolute right-2 flex size-3.5 items-center justify-center\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ItemIndicator, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { className: \"size-4\" }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ItemText, { children: children })] })));\n}\nfunction SelectSeparator(_a) {\n    var { className } = _a, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Separator, Object.assign({ \"data-slot\": \"select-separator\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"bg-border pointer-events-none -mx-1 my-1 h-px\", className) }, props)));\n}\nfunction SelectScrollUpButton(_a) {\n    var { className } = _a, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ScrollUpButton, Object.assign({ \"data-slot\": \"select-scroll-up-button\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"flex cursor-default items-center justify-center py-1\", className) }, props, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { className: \"size-4\" }) })));\n}\nfunction SelectScrollDownButton(_a) {\n    var { className } = _a, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ScrollDownButton, Object.assign({ \"data-slot\": \"select-scroll-down-button\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"flex cursor-default items-center justify-center py-1\", className) }, props, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { className: \"size-4\" }) })));\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/components/ui/select.tsx?");

/***/ }),

/***/ "./src/components/ui/switch.tsx":
/*!**************************************!*\
  !*** ./src/components/ui/switch.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Switch: () => (/* binding */ Switch)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-switch */ \"./node_modules/@radix-ui/react-switch/dist/index.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"./src/lib/utils.ts\");\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\n\nfunction Switch(_a) {\n    var { className } = _a, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.Root, Object.assign({ \"data-slot\": \"switch\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50\", className) }, props, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_switch__WEBPACK_IMPORTED_MODULE_2__.Thumb, { \"data-slot\": \"switch-thumb\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0\") }) })));\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/components/ui/switch.tsx?");

/***/ }),

/***/ "./src/contexts/ProductFilterContext.tsx":
/*!***********************************************!*\
  !*** ./src/contexts/ProductFilterContext.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductFilterProvider: () => (/* binding */ ProductFilterProvider),\n/* harmony export */   useProductFilter: () => (/* binding */ useProductFilter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst defaultFilterState = {\n    priceFrom: 0,\n    priceTo: 1000,\n    colors: [],\n    brands: [],\n    categories: [],\n    availability: 'all',\n};\nconst ProductFilterContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst useProductFilter = () => {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductFilterContext);\n    if (!context) {\n        throw new Error('useProductFilter must be used within a ProductFilterProvider');\n    }\n    return context;\n};\nconst ProductFilterProvider = ({ children }) => {\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultFilterState);\n    const updateFilter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newFilter) => {\n        setFilter(prev => (Object.assign(Object.assign({}, prev), newFilter)));\n    }, []);\n    const resetFilter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n        setFilter(defaultFilterState);\n    }, []);\n    const clearColors = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n        setFilter(prev => (Object.assign(Object.assign({}, prev), { colors: [] })));\n    }, []);\n    const addColor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((color) => {\n        setFilter(prev => (Object.assign(Object.assign({}, prev), { colors: prev.colors.includes(color) ? prev.colors : [...prev.colors, color] })));\n    }, []);\n    const removeColor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((color) => {\n        setFilter(prev => (Object.assign(Object.assign({}, prev), { colors: prev.colors.filter(c => c !== color) })));\n    }, []);\n    const clearBrands = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n        setFilter(prev => (Object.assign(Object.assign({}, prev), { brands: [] })));\n    }, []);\n    const addBrand = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((brand) => {\n        setFilter(prev => (Object.assign(Object.assign({}, prev), { brands: prev.brands.includes(brand) ? prev.brands : [...prev.brands, brand] })));\n    }, []);\n    const removeBrand = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((brand) => {\n        setFilter(prev => (Object.assign(Object.assign({}, prev), { brands: prev.brands.filter(c => c !== brand) })));\n    }, []);\n    const clearCategories = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n        setFilter(prev => (Object.assign(Object.assign({}, prev), { categories: [] })));\n    }, []);\n    const addCategory = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((category) => {\n        setFilter(prev => (Object.assign(Object.assign({}, prev), { categories: prev.categories.includes(category) ? prev.categories : [...prev.categories, category] })));\n    }, []);\n    const removeCategory = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((category) => {\n        setFilter(prev => (Object.assign(Object.assign({}, prev), { categories: prev.categories.filter(c => c !== category) })));\n    }, []);\n    const setPriceRange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((from, to) => {\n        setFilter(prev => (Object.assign(Object.assign({}, prev), { priceFrom: from, priceTo: to })));\n    }, []);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({\n        filter,\n        updateFilter,\n        resetFilter,\n        clearColors,\n        addColor,\n        removeColor,\n        clearBrands,\n        addBrand,\n        removeBrand,\n        clearCategories,\n        addCategory,\n        removeCategory,\n        setPriceRange,\n    }), [filter, updateFilter, resetFilter, clearColors, addColor, removeColor, clearBrands, addBrand, removeBrand, clearCategories, addCategory, removeCategory, setPriceRange]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProductFilterContext.Provider, { value: value, children: children }));\n};\n\n\n//# sourceURL=webpack://frontend/./src/contexts/ProductFilterContext.tsx?");

/***/ }),

/***/ "./src/pageComponents/ListPageProductFilter/index.tsx":
/*!************************************************************!*\
  !*** ./src/pageComponents/ListPageProductFilter/index.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/Hydrate */ \"./src/lib/Hydrate.tsx\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"./src/components/ui/button.tsx\");\n/* harmony import */ var _components_common_ProductList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/common/ProductList */ \"./src/components/common/ProductList.tsx\");\n/* harmony import */ var _components_common_ListProductFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/common/ListProductFilter */ \"./src/components/common/ListProductFilter.tsx\");\n/* harmony import */ var _contexts_ProductFilterContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/ProductFilterContext */ \"./src/contexts/ProductFilterContext.tsx\");\n\n\n\n\n\n\n\n\nconst Main = ({}) => {\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"mt-8 block lg:hidden\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, { className: \"flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"text-sm font-medium\", children: \" Filters & Sorting \" }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contexts_ProductFilterContext__WEBPACK_IMPORTED_MODULE_7__.ProductFilterProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_ListProductFilter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"lg:col-span-3\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_ProductList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}) })] }) })] }));\n};\nconst containerId = 'list-product-filter';\nconst container = document.getElementById(containerId);\nif (container) {\n    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(container);\n    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__.Hydrate, { component: Main, containerId: containerId, propNames: [] }) }));\n}\n\n\n//# sourceURL=webpack://frontend/./src/pageComponents/ListPageProductFilter/index.tsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"listpageproductfilter": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/pageComponents/ListPageProductFilter/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
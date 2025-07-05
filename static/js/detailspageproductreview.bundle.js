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

/***/ "./src/components/common/LoaderComp.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/LoaderComp.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ \"./node_modules/lucide-react/dist/esm/icons/loader.js\");\n\n\nconst LoadingIcon = ({ next, hasMore, noMoreMessage }) => {\n    if (next) {\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"flex items-center justify-center p-4  min-h-8\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { className: \"animate-spin w-12 h-12 text-blue-500\" }) }));\n    }\n    if (!hasMore) {\n        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"text-center text-gray-500 p-4 text-sm min-h-8\", children: noMoreMessage || \"No more items available.\" }));\n    }\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {});\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingIcon);\n\n\n//# sourceURL=webpack://frontend/./src/components/common/LoaderComp.tsx?");

/***/ }),

/***/ "./src/components/ui/infinite-scroll.tsx":
/*!***********************************************!*\
  !*** ./src/components/ui/infinite-scroll.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InfiniteScroll)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction InfiniteScroll({ isLoading, hasMore, next, threshold = 1, root = null, rootMargin = '0px', reverse = false, moveCursorTop = false, // default false\nchildren, }) {\n    const observer = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const prevIsLoading = react__WEBPACK_IMPORTED_MODULE_1__.useRef(isLoading);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n        if (moveCursorTop && prevIsLoading.current && !isLoading && root) {\n            if ('scrollTop' in root) {\n                root.scrollTop = 0;\n            }\n            else if ('documentElement' in root) {\n                root.documentElement.scrollTop = 0;\n            }\n        }\n        prevIsLoading.current = isLoading;\n    }, [isLoading, root, moveCursorTop]);\n    const observerRef = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((node) => {\n        if (isLoading || !hasMore)\n            return;\n        const clampedThreshold = Math.max(0, Math.min(threshold, 1));\n        if (observer.current)\n            observer.current.disconnect();\n        if (!node)\n            return;\n        observer.current = new IntersectionObserver(([entry]) => {\n            if (entry.isIntersecting && hasMore) {\n                next();\n            }\n        }, { root, rootMargin, threshold: clampedThreshold });\n        observer.current.observe(node);\n    }, [hasMore, isLoading, next, threshold, root, rootMargin]);\n    const childrenArray = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children), [children]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: childrenArray.map((child, index) => {\n            if (!react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(child)) {\n                if (true) {\n                    console.warn('Each child of InfiniteScroll must be a valid React element.');\n                }\n                return child;\n            }\n            const isTarget = reverse ? index === 0 : index === childrenArray.length - 1;\n            return react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child, Object.assign({}, (isTarget ? { ref: observerRef } : {})));\n        }) }));\n}\n\n\n//# sourceURL=webpack://frontend/./src/components/ui/infinite-scroll.tsx?");

/***/ }),

/***/ "./src/hooks/useDebounce.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useDebounce.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDebounce: () => (/* binding */ useDebounce)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useDebounce(func, delay) {\n    const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const debouncedFunc = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args) => {\n        if (timeoutRef.current) {\n            clearTimeout(timeoutRef.current);\n        }\n        timeoutRef.current = setTimeout(() => {\n            func(...args);\n        }, delay);\n    }, [func, delay]);\n    // Cleanup on unmount\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        return () => {\n            if (timeoutRef.current)\n                clearTimeout(timeoutRef.current);\n        };\n    }, []);\n    return debouncedFunc;\n}\n\n\n//# sourceURL=webpack://frontend/./src/hooks/useDebounce.tsx?");

/***/ }),

/***/ "./src/pageComponents/DetailsPageProductReview/index.tsx":
/*!***************************************************************!*\
  !*** ./src/pageComponents/DetailsPageProductReview/index.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/Hydrate */ \"./src/lib/Hydrate.tsx\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _hooks_useAxios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useAxios */ \"./src/hooks/useAxios.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ \"./src/lib/utils.ts\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_ui_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/infinite-scroll */ \"./src/components/ui/infinite-scroll.tsx\");\n/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useDebounce */ \"./src/hooks/useDebounce.tsx\");\n/* harmony import */ var _components_common_LoaderComp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/common/LoaderComp */ \"./src/components/common/LoaderComp.tsx\");\n\n\n\n\n\n\n\n\n\n\n// const StarRating: React.FC = () => {\n//     const [hovered, setHovered] = useState<number>(0);\n//     const [rating, setRating] = useState<number>(0);\n//\n//     const handleMouseEnter = (index: number) => setHovered(index);\n//     const handleMouseLeave = () => setHovered(0);\n//     const handleClick = (index: number) => {\n//         setRating(index);\n//         console.log(\"Selected:\", index);\n//     };\n//\n//     return (\n//         <div className=\"col-span-2\">\n//             <div className=\"flex items-center space-x-1\">\n//                 {[1, 2, 3, 4, 5].map((star) => (\n//                     <i\n//                         key={star}\n//                         className={`fa-solid fa-star cursor-pointer text-2xl transition ${\n//                             (hovered || rating) >= star ? \"text-yellow-400\" : \"text-gray-300\"\n//                         }`}\n//                         onMouseEnter={() => handleMouseEnter(star)}\n//                         onMouseLeave={handleMouseLeave}\n//                         onClick={() => handleClick(star)}\n//                     />\n//                 ))}\n//                 <span className=\"ms-2 text-lg font-bold text-gray-900 dark:text-white\">\n//           {rating ? `${rating}.0 out of 5` : \"Rate this\"}\n//         </span>\n//             </div>\n//         </div>\n//     );\n// };\nconst ITEM_HEIGHT = 150;\nconst UserReviewCard = ({ review }) => {\n    const createdAt = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.humanizeTime)(review.created_at), [review.created_at]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"gap-3 py-6 border-b sm:flex sm:items-start\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"shrink-0 space-y-2 sm:w-48 md:w-72\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"text-base font-semibold text-gray-900 dark:text-white\", children: review.user }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"text-sm text-gray-500 dark:text-gray-400\", children: createdAt }), review.is_verified_purchase && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"inline-flex items-center gap-1\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"text-sm text-gray-900 dark:text-white\", children: \"Verified purchase\" }) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"mt-4 min-w-0 flex-1 space-y-4 sm:mt-0\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"text-base text-gray-500 dark:text-gray-400\", children: review.comment }) })] }));\n};\nconst StarRating = ({ value, onChange }) => {\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"flex items-center space-x-1 relative\", children: [1, 2, 3, 4, 5].map((star) => {\n            const isActive = hovered !== null ? star <= hovered : star <= value;\n            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { type: \"button\", onClick: () => onChange(star), onMouseEnter: () => setHovered(star), onMouseLeave: () => setHovered(null), className: `text-xl transition-colors duration-150 ${isActive ? \"text-yellow-400\" : \"text-gray-300\"}`, title: `${star} star${star > 1 ? \"s\" : \"\"}`, children: \"\\u2605\" }, star));\n        }) }));\n};\nconst ReviewForm = ({ product_id, refetch }) => {\n    const { register, handleSubmit, setValue, watch, formState: { errors }, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        defaultValues: {\n            rating: 0,\n            comment: \"\",\n        },\n    });\n    const api = (0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        baseURL: `/api/private/products/${product_id}/reviews/`,\n        initialState: {\n            loading: false,\n            error: null,\n            data: {\n                count: 0,\n                next: null,\n                previous: null,\n                results: [],\n            },\n        },\n    });\n    const onSubmit = (data) => {\n        console.log(\"Submitted review:\", data);\n        api.post(\"\", data).then();\n        refetch(\"\");\n    };\n    const rating = watch(\"rating\");\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", { onSubmit: handleSubmit(onSubmit), className: \"p-2\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"mb-4 grid grid-cols-2 gap-4\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"col-span-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", { className: \"mb-2 block text-sm font-medium text-gray-900 dark:text-white\", children: \"Rating\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StarRating, { value: rating, onChange: (val) => setValue(\"rating\", val) }), errors.rating && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"text-red-500 text-sm\", children: \"Rating is required.\" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"col-span-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", { htmlFor: \"description\", className: \"mb-2 block text-sm font-medium text-gray-900 dark:text-white\", children: \"Review description\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", Object.assign({ id: \"description\" }, register(\"comment\", { required: \"Description is required\" }), { className: \"mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500\" })), errors.comment && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"text-red-500 text-sm\", children: errors.comment.message })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { type: \"submit\", className: \"middle none center mt-2 rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none\", children: \"Comment\" })] })] }) }));\n};\nconst Main = ({ product_id }) => {\n    var _a, _b, _c, _d, _e;\n    const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [scrollRoot, setScrollRoot] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const api = (0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        baseURL: `/api/public/products/${product_id}/reviews/?limit=5`,\n        keepPrevious: true,\n        initialState: {\n            loading: false,\n            error: null,\n            data: {\n                count: 0,\n                next: null,\n                previous: null,\n                results: [],\n            },\n        },\n    });\n    const debouncedNext = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_7__.useDebounce)(() => {\n        var _a;\n        console.log(reviews);\n        api.list(((_a = api === null || api === void 0 ? void 0 : api.data) === null || _a === void 0 ? void 0 : _a.next) || \"\");\n    }, 300);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        api.list(\"\").then();\n        // Delay to ensure the ref is set\n        const timer = setTimeout(() => {\n            if (scrollContainerRef.current) {\n                console.log(scrollContainerRef.current);\n                setScrollRoot(scrollContainerRef.current);\n            }\n        }, 0);\n        return () => clearTimeout(timer);\n    }, []);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", { className: \"bg-white antialiased dark:bg-gray-900\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"grid grid-cols-5\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"col-span-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", { className: \"text-xl font-semibold text-gray-900 dark:text-white\", children: \"Reviews\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"mt-2 flex items-center gap-2 sm:mt-0\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-0.5\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"text-sm font-medium leading-none text-gray-500 dark:text-gray-400\", children: \"(4.6)\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", { href: \"#\", className: \"text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white\", children: \" 645 Reviews \" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"my-6 gap-8 sm:flex sm:items-start md:my-8\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"mt-6 min-w-0 flex-1 space-y-3 sm:mt-0\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white\", children: \"5\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"h-1.5 rounded-full bg-yellow-300\", style: { width: \"20%\" } }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", { href: \"#\", className: \"w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left\", children: [\"239 \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"hidden sm:inline\", children: \"reviews\" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white\", children: \"4\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"h-1.5 rounded-full bg-yellow-300\", style: { width: \"20%\" } }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", { href: \"#\", className: \"w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left\", children: [\"432 \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"hidden sm:inline\", children: \"reviews\" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white\", children: \"3\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"h-1.5 rounded-full bg-yellow-300\", style: { width: \"20%\" } }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", { href: \"#\", className: \"w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left\", children: [\"53 \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"hidden sm:inline\", children: \"reviews\" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white\", children: \"2\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"h-1.5 rounded-full bg-yellow-300\", style: { width: \"20%\" } }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", { href: \"#\", className: \"w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left\", children: [\"32 \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"hidden sm:inline\", children: \"reviews\" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center gap-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white\", children: \"1\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-star text-yellow-300\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"h-1.5 rounded-full bg-yellow-300\", style: { width: \"20%\" } }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", { href: \"#\", className: \"w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left\", children: [\"13 \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"hidden sm:inline\", children: \"reviews\" })] })] })] }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"col-span-3\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"rounded-lg bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] dark:bg-gray-800\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReviewForm, { product_id: product_id, refetch: api.list }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"h-[500px] overflow-auto\", ref: scrollContainerRef, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { root: scrollRoot, hasMore: Boolean((_a = api === null || api === void 0 ? void 0 : api.data) === null || _a === void 0 ? void 0 : _a.next), isLoading: api.loading, next: debouncedNext, children: [(_c = (_b = api === null || api === void 0 ? void 0 : api.data) === null || _b === void 0 ? void 0 : _b.results) === null || _c === void 0 ? void 0 : _c.map((review) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserReviewCard, { review: review }, review.id))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_LoaderComp__WEBPACK_IMPORTED_MODULE_8__[\"default\"], { next: Boolean((_d = api === null || api === void 0 ? void 0 : api.data) === null || _d === void 0 ? void 0 : _d.next), hasMore: Boolean((_e = api === null || api === void 0 ? void 0 : api.data) === null || _e === void 0 ? void 0 : _e.next), noMoreMessage: \"That's all, thanks for reading!\" }) })] }) })] })] }) }));\n};\nconst containerId = 'details-product-review';\nconst container = document.getElementById(containerId);\nif (container) {\n    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(container);\n    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__.Hydrate, { component: Main, containerId: containerId, propNames: [\"product_id\", \"product_slug\"] }) }));\n}\n\n\n//# sourceURL=webpack://frontend/./src/pageComponents/DetailsPageProductReview/index.tsx?");

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
/******/ 			"detailspageproductreview": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/pageComponents/DetailsPageProductReview/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
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

/***/ "./src/pageComponents/DetailsPageProductVariant/index.tsx":
/*!****************************************************************!*\
  !*** ./src/pageComponents/DetailsPageProductVariant/index.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/Hydrate */ \"./src/lib/Hydrate.tsx\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _hooks_useAxios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useAxios */ \"./src/hooks/useAxios.ts\");\n\n\n\n\n\nfunction hexToRGBA(hex, alpha) {\n    if (alpha === void 0) { alpha = 0.15; }\n    var colors = {\n        red: \"#f87171\",\n        blue: \"#60a5fa\",\n        green: \"#34d399\",\n        yellow: \"#facc15\",\n        purple: \"#a78bfa\",\n        pink: \"#f472b6\",\n        black: \"#000000\",\n        gray: \"#9ca3af\",\n        white: \"#ffffff\",\n        orange: \"#fb923c\",\n        indigo: \"#818cf8\",\n    };\n    var base = colors[hex] || \"#f9fafb\";\n    var bigint = parseInt(base.replace(\"#\", \"\"), 16);\n    var r = (bigint >> 16) & 255;\n    var g = (bigint >> 8) & 255;\n    var b = bigint & 255;\n    return \"rgba(\".concat(r, \", \").concat(g, \", \").concat(b, \", \").concat(alpha, \")\");\n}\nvar QuantitySelector = function (_a) {\n    var productStock = _a.productStock, _b = _a.initialValue, initialValue = _b === void 0 ? 1 : _b, onChange = _a.onChange;\n    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue), quantity = _c[0], setQuantity = _c[1];\n    var handleChange = function (value) {\n        var clamped = Math.max(1, Math.min(productStock, value));\n        setQuantity(clamped);\n        onChange === null || onChange === void 0 ? void 0 : onChange(clamped);\n    };\n    var increment = function () { return handleChange(quantity + 1); };\n    var decrement = function () { return handleChange(quantity - 1); };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n        setQuantity(initialValue);\n    }, [productStock]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center justify-between bg-white w-full\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"text-sm font-medium text-gray-700\", children: \"Quantity\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center space-x-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { type: \"button\", onClick: decrement, className: \"w-8 h-8 rounded-full border text-gray-600 hover:bg-gray-100 disabled:opacity-30\", disabled: quantity <= 1, children: \"\\u2212\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", { name: \"quantity\", type: \"number\", min: \"1\", max: productStock, step: \"1\", value: quantity, onChange: function (e) { return handleChange(Number(e.target.value)); }, className: \"w-12 text-center border rounded-md text-sm py-1\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { type: \"button\", onClick: increment, className: \"w-8 h-8 rounded-full border text-gray-600 hover:bg-gray-100 disabled:opacity-30\", disabled: quantity >= productStock, children: \"+\" })] })] }));\n};\nvar VariantCard = function (_a) {\n    var variant = _a.variant, selected = _a.selected, onSelect = _a.onSelect;\n    var backgroundColor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n        var colorAttr = variant.attribute_values.find(function (attr) {\n            return attr.toLowerCase().startsWith(\"color:\");\n        });\n        var color = colorAttr ? colorAttr.split(\":\")[1].trim().toLowerCase() : \"\";\n        return hexToRGBA(color);\n    }, [variant.attribute_values]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", { onClick: onSelect, className: \"cursor-pointer rounded-xl border transition-all duration-300 flex-shrink-0 \".concat(selected ? \"ring-2 ring-blue-500 border-blue-500\" : \"hover:ring-1 hover:ring-gray-400\", \" hover:shadow-lg hover:scale-105\"), style: { backgroundColor: backgroundColor }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", { type: \"radio\", name: \"variant\", value: variant.id, checked: selected, onChange: onSelect, className: \"hidden\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"p-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"mb-2 font-semibold text-sm text-gray-800\", children: variant.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"text-sm text-gray-600\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", { children: [\"Price: \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", { className: \"text-green-600 font-medium\", children: [\"$\", variant.price] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", { children: [\"Stock: \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"text-blue-600\", children: variant.stock_quantity })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", { className: \"mt-2 text-xs text-gray-500\", children: variant.attribute_values.map(function (attr, i) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { children: attr }, i)); }) })] })] })] }));\n};\nvar Main = function (_a) {\n    var product_id = _a.product_id, product_stock = _a.product_stock;\n    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), selectedId = _b[0], setSelectedId = _b[1];\n    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Number(product_stock)), stock = _c[0], setStock = _c[1];\n    var api = (0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        baseURL: \"/api/public/products/\".concat(product_id, \"/variants/\"),\n        initialState: {\n            loading: true,\n            error: null,\n            data: {\n                count: 0,\n                next: null,\n                previous: null,\n                results: [],\n            },\n        },\n    });\n    var list = api.list, data = api.data, loading = api.loading, error = api.error;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n        list('').catch(function (e) {\n            console.error('Failed to fetch products', e);\n        });\n    }, []);\n    var activeVariants = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () { return (data === null || data === void 0 ? void 0 : data.results.filter(function (v) { return v.is_active; })) || []; }, [data === null || data === void 0 ? void 0 : data.results]);\n    var handleSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (id) { return function () {\n        setSelectedId(id);\n        var variant = activeVariants.find(function (variant) { return variant.id === id; });\n        if (variant) {\n            setStock(variant.stock_quantity);\n        }\n    }; }, [activeVariants]);\n    if (loading)\n        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"text-gray-500\", children: \"Loading variants...\" });\n    if (error)\n        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"text-red-500\", children: \"Failed to load variants.\" });\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", { className: \"text-xl font-semibold mb-4\", children: \"Available Variants\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"flex space-x-4 overflow-x-auto py-4\", children: activeVariants.length > 0 ? (activeVariants.map(function (variant) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VariantCard, { variant: variant, selected: selectedId === variant.id, onSelect: handleSelect(variant.id) }, variant.id)); })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"text-gray-500\", children: \"No active variants found.\" })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", { className: \"my-3\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QuantitySelector, { productStock: stock })] }));\n};\nvar containerId = 'data-product-variants';\nvar container = document.getElementById(containerId);\nif (container) {\n    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(container);\n    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__.Hydrate, { component: Main, containerId: containerId, propNames: [\"product_id\", \"product_slug\", \"product_stock\"] }) }));\n}\n\n\n//# sourceURL=webpack://frontend/./src/pageComponents/DetailsPageProductVariant/index.tsx?");

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
/******/ 			"detailspageproductvariant": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/pageComponents/DetailsPageProductVariant/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
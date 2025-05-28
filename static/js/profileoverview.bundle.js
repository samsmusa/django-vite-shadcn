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

/***/ "./src/components/ui/popover.tsx":
/*!***************************************!*\
  !*** ./src/components/ui/popover.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Popover: () => (/* binding */ Popover),\n/* harmony export */   PopoverAnchor: () => (/* binding */ PopoverAnchor),\n/* harmony export */   PopoverContent: () => (/* binding */ PopoverContent),\n/* harmony export */   PopoverTrigger: () => (/* binding */ PopoverTrigger)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-popover */ \"./node_modules/@radix-ui/react-popover/dist/index.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"./src/lib/utils.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\n\nfunction Popover(_a) {\n    var props = __rest(_a, []);\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__.Root, __assign({ \"data-slot\": \"popover\" }, props));\n}\nfunction PopoverTrigger(_a) {\n    var props = __rest(_a, []);\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__.Trigger, __assign({ \"data-slot\": \"popover-trigger\" }, props));\n}\nfunction PopoverContent(_a) {\n    var className = _a.className, _b = _a.align, align = _b === void 0 ? \"center\" : _b, _c = _a.sideOffset, sideOffset = _c === void 0 ? 4 : _c, props = __rest(_a, [\"className\", \"align\", \"sideOffset\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__.Portal, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__.Content, __assign({ \"data-slot\": \"popover-content\", align: align, sideOffset: sideOffset, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden\", className) }, props)) }));\n}\nfunction PopoverAnchor(_a) {\n    var props = __rest(_a, []);\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__.Anchor, __assign({ \"data-slot\": \"popover-anchor\" }, props));\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/components/ui/popover.tsx?");

/***/ }),

/***/ "./src/pageComponents/ProfileOverview/index.tsx":
/*!******************************************************!*\
  !*** ./src/pageComponents/ProfileOverview/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/Hydrate */ \"./src/lib/Hydrate.tsx\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_ui_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/popover */ \"./src/components/ui/popover.tsx\");\n/* harmony import */ var _hooks_useAxios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useAxios */ \"./src/hooks/useAxios.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === \"function\" ? Iterator : Object).prototype);\n    return g.next = verb(0), g[\"throw\"] = verb(1), g[\"return\"] = verb(2), typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\n\nvar EditableAddress = function (_a) {\n    var id = _a.id, type = _a.type, iconClass = _a.iconClass, label = _a.label, defaultValues = _a.defaultValues;\n    var _b = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({\n        defaultValues: defaultValues,\n    }), register = _b.register, handleSubmit = _b.handleSubmit, reset = _b.reset;\n    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {\n        var response, result, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 3, , 4]);\n                    return [4 /*yield*/, fetch(\"/api/private/address/\".concat(id, \"/\"), {\n                            method: \"PUT\",\n                            headers: {\n                                \"Content-Type\": \"application/json\",\n                            },\n                            body: JSON.stringify(__assign(__assign({}, data), { address_type: type })),\n                        })];\n                case 1:\n                    response = _a.sent();\n                    if (!response.ok) {\n                        throw new Error(\"Failed to update address\");\n                    }\n                    return [4 /*yield*/, response.json()];\n                case 2:\n                    result = _a.sent();\n                    console.log(\"Address updated:\", result);\n                    reset(data); // refresh form values\n                    return [3 /*break*/, 4];\n                case 3:\n                    error_1 = _a.sent();\n                    console.error(\"Update failed:\", error_1);\n                    return [3 /*break*/, 4];\n                case 4: return [2 /*return*/];\n            }\n        });\n    }); };\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.Popover, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", { onSubmit: handleSubmit(onSubmit), className: \"group\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"dt\", { className: \"font-semibold flex justify-start items-center text-gray-900 dark:text-white relative\", children: [label, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger, { asChild: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ml-2\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fas fa-edit cursor-pointer\" }) }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"dd\", { className: \"flex items-center gap-1 text-gray-500 dark:text-gray-400 mt-1\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: iconClass }), \"\".concat(defaultValues.address_line1, \", \").concat(defaultValues.city, \", \").concat(defaultValues.country)] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverContent, { className: \"grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-gray-700 dark:text-white\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", __assign({}, register(\"full_name\"), { placeholder: \"Full Name\", className: \"border p-1 rounded\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", __assign({}, register(\"address_line1\"), { placeholder: \"Address Line 1\", className: \"border p-1 rounded\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", __assign({}, register(\"address_line2\"), { placeholder: \"Address Line 2\", className: \"border p-1 rounded\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", __assign({}, register(\"city\"), { placeholder: \"City\", className: \"border p-1 rounded\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", __assign({}, register(\"state\"), { placeholder: \"State\", className: \"border p-1 rounded\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", __assign({}, register(\"country\"), { placeholder: \"Country\", className: \"border p-1 rounded\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", __assign({}, register(\"postal_code\"), { placeholder: \"Postal Code\", className: \"border p-1 rounded\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", __assign({}, register(\"phone_number\"), { placeholder: \"Phone Number\", className: \"border p-1 rounded\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"col-span-2 flex justify-end gap-2 mt-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { type: \"button\", className: \"text-sm text-gray-500\", children: \"Cancel\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { type: \"submit\", className: \"text-sm bg-blue-600 text-white px-3 py-1 rounded\", children: \"Save\" })] })] })] }) }));\n};\nvar DeliveryAddress = function (_a) {\n    var data = _a.data;\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditableAddress, { id: \"123\" // Replace with real ID\n        , type: \"shipping\", label: \"Delivery Address\", iconClass: \"fas fa-shipping-fast\", defaultValues: data }));\n};\nvar BillingAddress = function (_a) {\n    var data = _a.data;\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditableAddress, { id: data === null || data === void 0 ? void 0 : data.id, type: data === null || data === void 0 ? void 0 : data.address_type, label: \"Home Address\", iconClass: \"fa fa-home\", defaultValues: data }));\n};\nfunction Payment() {\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"dl\", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dt\", { className: \"mb-1 font-semibold text-gray-900 dark:text-white\", children: \"Payment Methods\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"dd\", { className: \"flex items-center space-x-4 text-gray-500 dark:text-gray-400\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { className: \"h-4 w-auto dark:hidden\", src: \"https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg\", alt: \"\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { className: \"hidden h-4 w-auto dark:flex\", src: \"https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg\", alt: \"\" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"text-sm\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"mb-0.5 font-medium text-gray-900 dark:text-white\", children: \"Visa ending in 7658\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"font-normal text-gray-500 dark:text-gray-400\", children: \"Expiry 10/2024\" })] }) })] })] });\n}\nvar Main = function (_a) {\n    var _b, _c;\n    var api = (0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        baseURL: \"/api/private/address/\",\n        initialState: {\n            loading: false,\n            error: null,\n            data: {\n                count: 0,\n                next: null,\n                previous: null,\n                results: [],\n            },\n        },\n    });\n    var billingAddress = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n        var _a, _b;\n        return ((_b = (_a = api === null || api === void 0 ? void 0 : api.data) === null || _a === void 0 ? void 0 : _a.results) === null || _b === void 0 ? void 0 : _b.find(function (e) { return (e === null || e === void 0 ? void 0 : e.address_type) === \"billing\"; })) || null;\n    }, [(_b = api === null || api === void 0 ? void 0 : api.data) === null || _b === void 0 ? void 0 : _b.results]);\n    var shippingAddress = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n        var _a, _b;\n        return ((_b = (_a = api === null || api === void 0 ? void 0 : api.data) === null || _a === void 0 ? void 0 : _a.results) === null || _b === void 0 ? void 0 : _b.find(function (e) { return (e === null || e === void 0 ? void 0 : e.address_type) === \"shipping\"; })) || null;\n    }, [(_c = api === null || api === void 0 ? void 0 : api.data) === null || _c === void 0 ? void 0 : _c.results]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n        api.list(\"\").then();\n    }, []);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"py-4 md:py-8 relative\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"space-y-4\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex space-x-4\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { className: \"h-16 w-16 rounded-lg\", src: \"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png\", alt: \"Helene avatar\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"group\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"mb-2 inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300\", children: \" PRO Account \" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h2\", { className: \"flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl\", children: [\"Helene Engels \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ml-2\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fas fa-edit cursor-pointer\" }) })] })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"dl\", { className: \"\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dt\", { className: \"font-semibold text-gray-900 dark:text-white\", children: \"Email Address\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dd\", { className: \"text-gray-500 dark:text-gray-400\", children: \"helene@example.com\" })] }), billingAddress && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BillingAddress, { data: billingAddress }), shippingAddress && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DeliveryAddress, { data: shippingAddress })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"space-y-4\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"dl\", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dt\", { className: \"font-semibold text-gray-900 dark:text-white\", children: \"Phone Number\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dd\", { className: \"text-gray-500 dark:text-gray-400\", children: \"+1234 567 890 / +12 345 678\" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"dl\", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dt\", { className: \"font-semibold text-gray-900 dark:text-white\", children: \"My Companies\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dd\", { className: \"text-gray-500 dark:text-gray-400\", children: \"FLOWBITE LLC, Fiscal code: 18673557\" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Payment, {})] })] }) }));\n};\nvar containerId = 'profile-overview';\nvar container = document.getElementById(containerId);\nif (container) {\n    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(container);\n    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__.Hydrate, { component: Main, containerId: containerId, propNames: [] }) }));\n}\n\n\n//# sourceURL=webpack://frontend/./src/pageComponents/ProfileOverview/index.tsx?");

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
/******/ 			"profileoverview": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/pageComponents/ProfileOverview/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
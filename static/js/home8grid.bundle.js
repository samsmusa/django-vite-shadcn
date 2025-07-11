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

/***/ "./src/components/common/GridItem.tsx":
/*!********************************************!*\
  !*** ./src/components/common/GridItem.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FourXfour: () => (/* binding */ FourXfour),\n/* harmony export */   OneXone: () => (/* binding */ OneXone),\n/* harmony export */   TwoXone: () => (/* binding */ TwoXone),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"./src/components/ui/button.tsx\");\n\n\n\n\nfunction CardHead({ name }) {\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, { className: \"p-0\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", { className: \"font-bold text-base md:text-xl whitespace-nowrap overflow-hidden text-ellipsis text-[clamp(12px,_5vw,_24px)]\", children: name }) });\n}\nfunction CardFoot(props) {\n    const href = props.dest_url + \"/#\" + props.name;\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, { className: \"p-0\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", { href: href, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: \"link\", className: \"w-fit cursor-pointer text-cyan-800 text-sm hover:text-orange-700\", children: \"see all\" }) }) });\n}\nconst grid_1ItemsData = [\n    {\n        title: \"Appliances for your home | Up to 55% off\",\n        images: [\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg\",\n                label: \"Air conditioners\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg\",\n                label: \"Refrigerators\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg\",\n                label: \"Microwaves\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg\",\n                label: \"Washing machines\",\n            },\n        ],\n        buttonName: \"See more\",\n    },\n    {\n        title: \"Prime exclusive offers | Travel tickets\",\n        images: [\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/Flight_186x116._SY116_CB600937888_.jpg\",\n                label: \"Get up to 25% off* on flight tickers\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/Train_186x116._SY116_CB600937888_.jpg\",\n                label: \"Zero gateway fees on trains\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/Bus_186x116._SY116_CB600937888_.jpg\",\n                label: \"Flat 10% back on bus tickets\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/SW_186x116._SY116_CB600937888_.jpg\",\n                label: \"Products for your travel needs\",\n            },\n        ],\n        buttonName: \"See all offers\",\n    },\n    {\n        title: \"Up to 50% off | Monitor blood sugar\",\n        images: [\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/GW/2023/WK28/PC_CC_Set_379x304_01._SY304_CB601485788_.jpg\",\n                label: \"\",\n            },\n        ],\n        buttonName: \"Visit the store\",\n    },\n    {\n        title: \"Up to 70% off | Clearance store\",\n        images: [\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg\",\n                label: \"\",\n            },\n        ],\n        buttonName: \"See more\",\n    },\n    {\n        title: \"Revamp your home in style\",\n        images: [\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg\",\n                label: \"Bedsheets, curtains & more\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg\",\n                label: \"Home decoration\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg\",\n                label: \"Home storage\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg\",\n                label: \"Lighting solutions\",\n            },\n        ],\n        buttonName: \"Explore all\",\n    },\n    {\n        title: \"Automotive essentials | Up to 60% off\",\n        images: [\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg\",\n                label: \"Cleaning Accessories\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg\",\n                label: \"Tyre & rim care\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg\",\n                label: \"Helmets\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg\",\n                label: \"Vacuum cleaner\",\n            },\n        ],\n        buttonName: \"See more\",\n    },\n    {\n        title: \"Up to 70% off | Styles for men\",\n        images: [\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg\",\n                label: \"Clothing\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg\",\n                label: \"Footwear\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg\",\n                label: \"Watches\",\n            },\n            {\n                imageUrl: \"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg\",\n                label: \"Bags & luggage\",\n            },\n        ],\n        buttonName: \"End of season sale\",\n    },\n];\nconst OneXone = (props) => {\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, { className: \"m-0 drop-shadow-none rounded-none p-2 h-full w-full\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardHead, { name: props.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, { className: \"p-0 grow\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { className: \"w-full object-cover\", src: grid_1ItemsData[0].images[0].imageUrl, alt: \"product\" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardFoot, Object.assign({}, props))] });\n};\nconst FourXfour = (props) => {\n    var _a, _b;\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, { className: \"m-0 drop-shadow-none rounded-none p-2 border-none h-full w-full\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardHead, { name: props.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, { className: \"grid grid-cols-2 gap-4 p-0 grow\", children: (_b = (_a = props === null || props === void 0 ? void 0 : props.config) === null || _a === void 0 ? void 0 : _a.images) === null || _b === void 0 ? void 0 : _b.map((image, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"space-y-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: image.imageUrl, alt: \"product\", className: \"w-full object-cover\" }), image.label && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"text-sm text-center\", children: image.label }))] }, index))) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardFoot, Object.assign({}, props))] });\n};\nconst TwoXone = ({ name }) => {\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, { className: \" m-0 drop-shadow-none shadow-none rounded-none p-2 \", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardHead, { name: name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", { href: \"/sign-in\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: \"outline\", color: \"yellow\", className: \"w-full p-3 md:p-1.5 rounded-lg text-sm duration-200 hover:bg-yellow-400\", children: \"Sign in securely\" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", { href: \"/products-listing-page\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"relative\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: \"https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/March23/LR_379X304._SY304_CB595115209_.jpg\", alt: \"Sponsored\", className: \"object-cover object-center w-full\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"absolute bottom-[5.5%] right-0 z-30 text-[12px] text-gray-500\", children: \"Sponsored\" })] }) })] }) });\n};\nconst GridItem = (props) => {\n    const renderComponent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n        switch (props.component) {\n            case \"4x4\":\n                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FourXfour, Object.assign({}, props));\n            case \"2x1\":\n                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TwoXone, Object.assign({}, props));\n            case \"1x1\":\n                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OneXone, Object.assign({}, props));\n            default:\n                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { children: \"Component not found\" });\n        }\n    }, [props]);\n    return renderComponent();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridItem);\n\n\n//# sourceURL=webpack://frontend/./src/components/common/GridItem.tsx?");

/***/ }),

/***/ "./src/pageComponents/Home8Grid/index.tsx":
/*!************************************************!*\
  !*** ./src/pageComponents/Home8Grid/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/Hydrate */ \"./src/lib/Hydrate.tsx\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _components_common_GridItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/common/GridItem */ \"./src/components/common/GridItem.tsx\");\n/* harmony import */ var _hooks_useAxios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useAxios */ \"./src/hooks/useAxios.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/utils */ \"./src/lib/utils.ts\");\n\n\n\n\n\n\n\nconst HomeComponent = ({}) => {\n    const [groupedData, setGroupedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const api = (0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        baseURL: `/api/protected/ui/`,\n        initialState: {\n            loading: false,\n            error: null,\n            data: {\n                count: 0,\n                next: null,\n                previous: null,\n                results: [],\n            },\n        },\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        api.list(\"?tag=home8grid\").then();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        var _a, _b;\n        if ((_b = (_a = api === null || api === void 0 ? void 0 : api.data) === null || _a === void 0 ? void 0 : _a.results) === null || _b === void 0 ? void 0 : _b.length) {\n            const grouped = api.data.results.reduce((acc, item) => {\n                if (!acc[item.row]) {\n                    acc[item.row] = [];\n                }\n                acc[item.row].push(item);\n                return acc;\n            }, {});\n            setGroupedData(grouped);\n        }\n    }, [api === null || api === void 0 ? void 0 : api.data]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"gap-y-3 flex flex-col\", children: Object.keys(groupedData).map((row) => {\n            const colCount = groupedData[Number(row)].length;\n            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)('w-full grid gap-4', _lib_utils__WEBPACK_IMPORTED_MODULE_6__.gridColsMap[colCount] || 'grid-cols-1'), children: groupedData[Number(row)].map((item, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_GridItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object.assign({}, item), index))) }, row));\n        }) }));\n};\nconst containerId = 'home-8-grid';\nconst container = document.getElementById(containerId);\nif (container) {\n    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(container);\n    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__.Hydrate, { component: HomeComponent, containerId: containerId, propNames: [] }) }));\n}\n\n\n//# sourceURL=webpack://frontend/./src/pageComponents/Home8Grid/index.tsx?");

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
/******/ 			"home8grid": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/pageComponents/Home8Grid/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
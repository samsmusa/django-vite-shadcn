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

/***/ "./src/pageComponents/SubCategoryProductsSlider/index.tsx":
/*!****************************************************************!*\
  !*** ./src/pageComponents/SubCategoryProductsSlider/index.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/Hydrate */ \"./src/lib/Hydrate.tsx\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _components_common_ProductSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/common/ProductSlider */ \"./src/components/common/ProductSlider.tsx\");\n/* harmony import */ var _hooks_useAxios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useAxios */ \"./src/hooks/useAxios.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\nconst productSlider1Data = {\n    buttonName: \"See all deals\",\n    allProductsData: [\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/31sIEzlmGTL._AC_SY200_.jpg\",\n            off: 76,\n            offerName: \"Prime Day Early Deal\",\n            productTitle: \"Branded suitcase trolleys - American Tourist\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/31PHsQXYqrL._AC_SY200_.jpg\",\n            off: 48,\n            offerName: \"Deal of the day\",\n            productTitle: \"Bata, Hush Puppies & more\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/31nQtukA3bL._AC_SY200_.jpg\",\n            off: 80,\n            offerName: \"Deal of the day\",\n            productTitle: \"Deals on RED TAPE\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/51RwTTvO3IL._AC_SY200_.jpg\",\n            off: 42,\n            offerName: \"Deal of the day\",\n            productTitle: \"Best Selling Toys from Einstein box\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/51kdwtY1KvL._AC_SY200_.jpg\",\n            off: 87,\n            offerName: \"Deal of the day\",\n            productTitle: \"Wallpapers from wolpin\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/51cJxhsBpaL._AC_SY200_.jpg\",\n            off: 21,\n            offerName: \"Deal of the day\",\n            productTitle: \"Best Selling Toys from Smartivity\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/41sx753+kXL._AC_SY200_.jpg\",\n            off: 75,\n            offerName: \"Prime day early deal\",\n            productTitle: \"Lowest prices on Smart Bulbs\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/61BH6SaNgzL._AC_SY200_.jpg\",\n            off: 60,\n            offerName: \"Deal of the day\",\n            productTitle: \"Best deals from Wonderful Foods\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/31B9dfuJThS._AC_SY200_.jpg\",\n            off: 64,\n            offerName: \"Deal of the day\",\n            productTitle: \"Best offers on PUMA\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/41qY1aOu08L._AC_SY200_.jpg\",\n            off: 68,\n            offerName: \"Deal of the day\",\n            productTitle: \"Top selling ladders\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/51MTW5OKkUS._AC_SY200_.jpg\",\n            off: 87,\n            offerName: \"Deal of the day\",\n            productTitle: \"Wallpapers from Wolpin\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/41LX67HXDkS._AC_SY200_.jpg\",\n            off: 80,\n            offerName: \"Deal of the day\",\n            productTitle: \"Prime early deal for French connection\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/315RaKdrF3L._AC_SY200_.jpg\",\n            off: 57,\n            offerName: \"Deal of the day\",\n            productTitle: \"Blockbuster deals on Bergner kadhai, tawa and many more\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/31NDLo8vP7L._AC_SY200_.jpg\",\n            off: 29,\n            offerName: \"Deal of the day\",\n            productTitle: \"WaterScience best deals Bath Faucets and many more\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/51gZymWcITL._AC_SY200_.jpg\",\n            off: 64,\n            offerName: \"Deal of the day\",\n            productTitle: \"Totes & Shoulder Bags Min 70% off\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/71ZP1Ux8uEL._UL1200__AC_SY200_.jpg\",\n            off: 59,\n            offerName: \"Deal of the day\",\n            productTitle: \"Best Offers on PUMA Footwear & Clothing and many more\",\n        },\n        {\n            imageUrl: \"https://m.media-amazon.com/images/I/31+JUVeDCmL._AC_SY200_.jpg\",\n            off: 34,\n            offerName: \"Deal of the day\",\n            productTitle: \"Deals on Layasa\",\n        },\n    ],\n};\nconst Main = ({ category_name }) => {\n    const api = (0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        baseURL: '/api/public/products/',\n        initialState: {\n            loading: true,\n            error: null,\n            data: {\n                count: 0,\n                next: null,\n                previous: null,\n                results: [],\n            },\n        },\n    });\n    const { list, data, loading, error } = api;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        const fetchProducts = () => __awaiter(void 0, void 0, void 0, function* () {\n            try {\n                yield list('');\n            }\n            catch (e) {\n                console.error('Failed to fetch products', e);\n            }\n        });\n        fetchProducts();\n    }, []);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_ProductSlider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { title: category_name, buttonName: \"see all \".concat(category_name), buttonUrl: \"products\", allProductsData: (data === null || data === void 0 ? void 0 : data.results) || [] }));\n};\nconst containers = document.querySelectorAll('div[id^=\"sub-category-slider-\"]');\ncontainers.forEach((container) => {\n    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(container);\n    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__.Hydrate, { component: Main, containerId: container.id, propNames: [\"category_name\", \"category_id\"] }) }));\n});\n\n\n//# sourceURL=webpack://frontend/./src/pageComponents/SubCategoryProductsSlider/index.tsx?");

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
/******/ 			"subcategoryproductsslider": 0,
/******/ 			"styles": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles","vendors"], () => (__webpack_require__("./src/pageComponents/SubCategoryProductsSlider/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
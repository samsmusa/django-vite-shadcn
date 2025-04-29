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

/***/ "./src/lib/Hydrate.tsx":
/*!*****************************!*\
  !*** ./src/lib/Hydrate.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hydrate: () => (/* binding */ Hydrate)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nfunction Hydrate(_a) {\n    var Component = _a.component, containerId = _a.containerId, propNames = _a.propNames;\n    var container = document.getElementById(containerId);\n    if (!container)\n        return null;\n    var props = propNames.reduce(function (acc, key) {\n        var raw = container.getAttribute(\"data-\".concat(String(key)));\n        try {\n            if (raw) {\n                if (raw.startsWith('{') || raw.startsWith('[')) {\n                    acc[key] = JSON.parse(raw);\n                }\n                else {\n                    acc[key] = raw;\n                }\n            }\n        }\n        catch (err) {\n            console.warn(\"Failed to parse prop \\\"\".concat(String(key), \"\\\":\"), err);\n            acc[key] = raw;\n        }\n        return acc;\n    }, {});\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, __assign({}, props));\n}\n\n\n//# sourceURL=webpack://frontend/./src/lib/Hydrate.tsx?");

/***/ }),

/***/ "./src/pageComponents/NavbarCategoryDropdown/index.tsx":
/*!*************************************************************!*\
  !*** ./src/pageComponents/NavbarCategoryDropdown/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/Hydrate */ \"./src/lib/Hydrate.tsx\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n\n\n\n\nvar HamburgerMenu = function (_a) {\n    var IHamburgerMenu = _a.IHamburgerMenu, initialData = _a.initialData;\n    var isNavOpen = props.isNavOpen, setIsNavOpen = props.setIsNavOpen;\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: isNavOpen\n            ? \"flex h-screen w-screen fixed top-0 left-0 translate-x-0 duration-500 z-50\"\n            : \"flex h-screen w-screen fixed top-0 left-0 -translate-x-full duration-500 z-50\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", { className: \"h-full w-[80%] max-w-[350px] bg-white flex flex-col overflow-auto text-black pb-20\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", { className: \"flex flex-col gap-2 px-5 py-4 bg-gray-800 text-white\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"user self-end\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Link, { to: \"/sign-in\", className: \"cursor-pointer flex items-center text-xs gap-1\", onClick: function () { return setIsNavOpen(function (initialValue) { return !initialValue; }); }, children: [\" \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", { children: [\"Sign in \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-chevron-right\" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-regular fa-user text-xl\" }) })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"cursor-pointer text-xl w-fit font-semibold\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Link, { to: \"/\", onClick: function () { return setIsNavOpen(function (initialValue) { return !initialValue; }); }, children: [\" \", \"Browse \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { className: \"text-2xl font-normal\", children: \"Amazon\" })] }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link, { to: \"/\", onClick: function () { return setIsNavOpen(function (initialValue) { return !initialValue; }); }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", { className: \"cursor-pointer flex justify-between items-center px-5 py-5 text-xl font-bold\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { children: \"Amazon Home\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-house\" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", { className: \"border-2\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", { className: \"flex flex-col\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 text-xl font-bold\", children: \"Trending\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"Best Sellers\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"New Releases\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"Movers and Shakers\" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", { className: \"border-2 mt-2\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", { className: \"flex flex-col\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 text-xl font-bold\", children: \"Top Categories For You\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"Mobiles\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"Computers\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"Books\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"Amazon Fashion\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"See All Categories\" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", { className: \"border-2 mt-2\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", { className: \"flex flex-col\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 text-xl font-bold\", children: \"Programs & Features\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"Today's Deals\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"Amazon Pay\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"Amazon LaunchPad\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"Try Prime\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"Sell on Amazon\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"px-5 py-3.5 cursor-pointer\", children: \"Style Feed\" })] })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: isNavOpen\n                    ? \"h-full flex-1 bg-black/75 text-white text-3xl py-4 text-center delay-500 opacity-100 transition-opacity duration-75 sm:text-start sm:px-4\"\n                    : \"h-full flex-1 bg-black/75 text-white text-3xl py-4 text-center opacity-0 sm:text-start sm:px-4\", onClick: function () { return setIsNavOpen(function (initialValue) { return !initialValue; }); }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", { className: \"fa-solid fa-xmark cursor-pointer hover:scale-75 duration-300\" }) })] }));\n};\nvar containerId = 'navbar-category-container';\nvar container = document.getElementById(containerId);\nif (container) {\n    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(container);\n    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__.Hydrate, { component: NavbarCategoryDropdown, containerId: containerId, propNames: [] }) }));\n}\n\n\n//# sourceURL=webpack://frontend/./src/pageComponents/NavbarCategoryDropdown/index.tsx?");

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
/******/ 			"navbarcategorydropdown": 0
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/pageComponents/NavbarCategoryDropdown/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
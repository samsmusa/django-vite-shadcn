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

/***/ "./src/components/ui/badge.tsx":
/*!*************************************!*\
  !*** ./src/components/ui/badge.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Badge: () => (/* binding */ Badge),\n/* harmony export */   badgeVariants: () => (/* binding */ badgeVariants)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-slot */ \"./node_modules/@radix-ui/react-slot/dist/index.mjs\");\n/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-variance-authority */ \"./node_modules/class-variance-authority/dist/index.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"./src/lib/utils.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\n\n\nvar badgeVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.cva)(\"inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden\", {\n    variants: {\n        variant: {\n            default: \"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90\",\n            secondary: \"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90\",\n            destructive: \"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60\",\n            outline: \"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground\",\n        },\n    },\n    defaultVariants: {\n        variant: \"default\",\n    },\n});\nfunction Badge(_a) {\n    var className = _a.className, variant = _a.variant, _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = __rest(_a, [\"className\", \"variant\", \"asChild\"]);\n    var Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot : \"span\";\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp, __assign({ \"data-slot\": \"badge\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(badgeVariants({ variant: variant }), className) }, props)));\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/components/ui/badge.tsx?");

/***/ }),

/***/ "./src/components/ui/input.tsx":
/*!*************************************!*\
  !*** ./src/components/ui/input.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Input: () => (/* binding */ Input)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"./src/lib/utils.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\nfunction Input(_a) {\n    var className = _a.className, type = _a.type, props = __rest(_a, [\"className\", \"type\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", __assign({ type: type, \"data-slot\": \"input\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm\", \"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]\", \"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive\", className) }, props)));\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/components/ui/input.tsx?");

/***/ }),

/***/ "./src/components/ui/table.tsx":
/*!*************************************!*\
  !*** ./src/components/ui/table.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Table: () => (/* binding */ Table),\n/* harmony export */   TableBody: () => (/* binding */ TableBody),\n/* harmony export */   TableCaption: () => (/* binding */ TableCaption),\n/* harmony export */   TableCell: () => (/* binding */ TableCell),\n/* harmony export */   TableFooter: () => (/* binding */ TableFooter),\n/* harmony export */   TableHead: () => (/* binding */ TableHead),\n/* harmony export */   TableHeader: () => (/* binding */ TableHeader),\n/* harmony export */   TableRow: () => (/* binding */ TableRow)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"./src/lib/utils.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\nfunction Table(_a) {\n    var className = _a.className, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { \"data-slot\": \"table-container\", className: \"relative w-full overflow-x-auto\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"table\", __assign({ \"data-slot\": \"table\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"w-full caption-bottom text-sm\", className) }, props)) }));\n}\nfunction TableHeader(_a) {\n    var className = _a.className, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"thead\", __assign({ \"data-slot\": \"table-header\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"[&_tr]:border-b\", className) }, props)));\n}\nfunction TableBody(_a) {\n    var className = _a.className, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"tbody\", __assign({ \"data-slot\": \"table-body\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"[&_tr:last-child]:border-0\", className) }, props)));\n}\nfunction TableFooter(_a) {\n    var className = _a.className, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"tfoot\", __assign({ \"data-slot\": \"table-footer\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"bg-muted/50 border-t font-medium [&>tr]:last:border-b-0\", className) }, props)));\n}\nfunction TableRow(_a) {\n    var className = _a.className, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"tr\", __assign({ \"data-slot\": \"table-row\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors\", className) }, props)));\n}\nfunction TableHead(_a) {\n    var className = _a.className, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"th\", __assign({ \"data-slot\": \"table-head\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]\", className) }, props)));\n}\nfunction TableCell(_a) {\n    var className = _a.className, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"td\", __assign({ \"data-slot\": \"table-cell\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]\", className) }, props)));\n}\nfunction TableCaption(_a) {\n    var className = _a.className, props = __rest(_a, [\"className\"]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"caption\", __assign({ \"data-slot\": \"table-caption\", className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"text-muted-foreground mt-4 text-sm\", className) }, props)));\n}\n\n\n\n//# sourceURL=webpack://frontend/./src/components/ui/table.tsx?");

/***/ }),

/***/ "./src/pageComponents/ProfileOrders/index.tsx":
/*!****************************************************!*\
  !*** ./src/pageComponents/ProfileOrders/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/Hydrate */ \"./src/lib/Hydrate.tsx\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tanstack/react-table */ \"./node_modules/@tanstack/react-table/build/lib/index.mjs\");\n/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tanstack/react-table */ \"./node_modules/@tanstack/table-core/build/lib/index.mjs\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ \"./node_modules/lucide-react/dist/esm/icons/arrow-up-down.js\");\n/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ \"./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"./src/components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/input */ \"./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/table */ \"./src/components/ui/table.tsx\");\n/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ui/badge */ \"./src/components/ui/badge.tsx\");\n\n\n\n\n\n\n\n\n\n\n\nvar data = [\n    {\n        id: \"m5gr84i9\",\n        amount: 316,\n        status: \"success\",\n        email: \"ken99@example.com\",\n    },\n    {\n        id: \"3u1reuv4\",\n        amount: 242,\n        status: \"success\",\n        email: \"Abe45@example.com\",\n    },\n    {\n        id: \"derv1ws0\",\n        amount: 837,\n        status: \"processing\",\n        email: \"Monserrat44@example.com\",\n    },\n    {\n        id: \"5kma53ae\",\n        amount: 874,\n        status: \"success\",\n        email: \"Silas22@example.com\",\n    },\n    {\n        id: \"bhqecj4p\",\n        amount: 721,\n        status: \"failed\",\n        email: \"carmella@example.com\",\n    },\n];\nvar columns = [\n    {\n        accessorKey: \"id\",\n        header: function (_a) {\n            var column = _a.column;\n            return \"Order Id\";\n        },\n        cell: function (_a) {\n            var row = _a.row;\n            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"capitalize\", children: row.getValue(\"id\") }));\n        },\n    },\n    {\n        accessorKey: \"status\",\n        header: \"Status\",\n        cell: function (_a) {\n            var row = _a.row;\n            var status = row.getValue(\"status\");\n            var statusMap = {\n                pending: { color: \"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300\", label: \"Pending\" },\n                processing: { color: \"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300\", label: \"Processing\" },\n                success: { color: \"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300\", label: \"Completed\" },\n                failed: { color: \"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300\", label: \"Failed\" },\n            };\n            var statusStyle = statusMap[status.toLowerCase()] || {\n                color: \"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300\",\n                label: status,\n            };\n            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_8__.Badge, { className: \"capitalize \".concat(statusStyle.color), children: statusStyle.label }));\n        },\n    },\n    {\n        accessorKey: \"email\",\n        header: function (_a) {\n            var column = _a.column;\n            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, { variant: \"ghost\", onClick: function () { return column.toggleSorting(column.getIsSorted() === \"asc\"); }, children: [\"Email\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {})] }));\n        },\n        cell: function (_a) {\n            var row = _a.row;\n            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"lowercase\", children: row.getValue(\"email\") });\n        },\n    },\n    {\n        accessorKey: \"amount\",\n        header: function () { return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"text-right\", children: \"Amount\" }); },\n        cell: function (_a) {\n            var row = _a.row;\n            var amount = parseFloat(row.getValue(\"amount\"));\n            // Format the amount as a dollar amount\n            var formatted = new Intl.NumberFormat(\"en-US\", {\n                style: \"currency\",\n                currency: \"USD\",\n            }).format(amount);\n            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"text-right font-medium\", children: formatted });\n        },\n    },\n];\nvar Main = function (_a) {\n    var _b, _c, _d;\n    var _e = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), sorting = _e[0], setSorting = _e[1];\n    var _f = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), columnFilters = _f[0], setColumnFilters = _f[1];\n    var _g = react__WEBPACK_IMPORTED_MODULE_1___default().useState({}), columnVisibility = _g[0], setColumnVisibility = _g[1];\n    var _h = react__WEBPACK_IMPORTED_MODULE_1___default().useState({}), rowSelection = _h[0], setRowSelection = _h[1];\n    var table = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__.useReactTable)({\n        data: data,\n        columns: columns,\n        onSortingChange: setSorting,\n        onColumnFiltersChange: setColumnFilters,\n        getCoreRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_11__.getCoreRowModel)(),\n        getPaginationRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_11__.getPaginationRowModel)(),\n        getSortedRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_11__.getSortedRowModel)(),\n        getFilteredRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_11__.getFilteredRowModel)(),\n        onColumnVisibilityChange: setColumnVisibility,\n        onRowSelectionChange: setRowSelection,\n        state: {\n            sorting: sorting,\n            columnFilters: columnFilters,\n            columnVisibility: columnVisibility,\n            rowSelection: rowSelection,\n        },\n    });\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"w-full\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center py-4\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, { placeholder: \"Filter emails...\", value: (_c = (_b = table.getColumn(\"email\")) === null || _b === void 0 ? void 0 : _b.getFilterValue()) !== null && _c !== void 0 ? _c : \"\", onChange: function (event) { var _a; return (_a = table.getColumn(\"email\")) === null || _a === void 0 ? void 0 : _a.setFilterValue(event.target.value); }, className: \"max-w-sm\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenu, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuTrigger, { asChild: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, { variant: \"outline\", className: \"ml-auto\", children: [\"Columns \", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {})] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuContent, { align: \"end\", children: table\n                                    .getAllColumns()\n                                    .filter(function (column) { return column.getCanHide(); })\n                                    .map(function (column) {\n                                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.DropdownMenuCheckboxItem, { className: \"capitalize\", checked: column.getIsVisible(), onCheckedChange: function (value) {\n                                            return column.toggleVisibility(!!value);\n                                        }, children: column.id }, column.id));\n                                }) })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"rounded-md border h-96 overflow-y-auto\", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_7__.Table, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableHeader, { children: table.getHeaderGroups().map(function (headerGroup) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableRow, { children: headerGroup.headers.map(function (header) {\n                                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableHead, { children: header.isPlaceholder\n                                            ? null\n                                            : (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__.flexRender)(header.column.columnDef.header, header.getContext()) }, header.id));\n                                }) }, headerGroup.id)); }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableBody, { children: ((_d = table.getRowModel().rows) === null || _d === void 0 ? void 0 : _d.length) ? (table.getRowModel().rows.map(function (row) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableRow, { \"data-state\": row.getIsSelected() && \"selected\", children: row.getVisibleCells().map(function (cell) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableCell, { children: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_10__.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id)); }) }, row.id)); })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableRow, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_7__.TableCell, { colSpan: columns.length, className: \"h-24 text-center\", children: \"No results.\" }) })) })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex items-center justify-end space-x-2 py-4\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"flex-1 text-sm text-muted-foreground\", children: [table.getFilteredSelectedRowModel().rows.length, \" of\", \" \", table.getFilteredRowModel().rows.length, \" row(s) selected.\"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"space-x-2\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, { variant: \"outline\", size: \"sm\", onClick: function () { return table.previousPage(); }, disabled: !table.getCanPreviousPage(), children: \"Previous\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, { variant: \"outline\", size: \"sm\", onClick: function () { return table.nextPage(); }, disabled: !table.getCanNextPage(), children: \"Next\" })] })] })] }));\n};\nvar containerId = 'user-orders';\nvar container = document.getElementById(containerId);\nif (container) {\n    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(container);\n    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_Hydrate__WEBPACK_IMPORTED_MODULE_2__.Hydrate, { component: Main, containerId: containerId, propNames: [] }) }));\n}\n\n\n//# sourceURL=webpack://frontend/./src/pageComponents/ProfileOrders/index.tsx?");

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
/******/ 			"profileorders": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/pageComponents/ProfileOrders/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
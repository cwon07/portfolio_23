"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"\\n                    h-[1px] inline-block w-0 bg-dark\\n                    absolute left-0 -bottom-0.5\\n                    group-hover:w-full transition-[width] ease duration-300\\n                    \".concat(router.asPath === href ? \"w-full\" : \"w-0\", \"\\n                    dark:bg-light;\\n                \"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex-col justify-center items-center hidden lg:flex\",\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm \".concat(isOpen ? \"rotate-45 translate-y-1\" : \"-translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\")\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm \".concat(isOpen ? \"-rotate-45 -translate-y-1\" : \"translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-between items-center lg:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/\",\n                                title: \"Home\",\n                                className: \"mr-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/about\",\n                                title: \"About\",\n                                className: \"mx-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/projects\",\n                                title: \"Projects\",\n                                className: \"mx-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/articles\",\n                                title: \"Articles\",\n                                className: \"ml-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex items-center justify-center flex-wrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"https://twitter.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-6 mr-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"https://linkedin.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-6 mx-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"https://pinterest.com\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-6 mx-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                                className: \"ml-3 flex items-center justify-center rounded-full p-1 \\n                    \".concat(mode === \"light\" ? \"bg-dark text-light\" : \"bg-light text-dark\", \"\\n                    \"),\n                                children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                                    className: \"fill-dark\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                                    className: \"fill-dark\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 27\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\"\n            }, void 0, false, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(NavBar, \"kR30wDLNpiUdCYMTQcHMODslZIE=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVzs7Ozs7NkNBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNbEQsOERBQUNhO2dCQUFJYixXQUFVOzs7Ozs7Ozs7Ozs7QUFHM0I7SUFyRU1JOztRQUVzQlQsK0RBQWdCQTs7O01BRnRDUztBQXVFTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanM/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFR3aXR0ZXJJY29uLCBEcmliYmJsZUljb24sIEdpdGh1Ykljb24sIExpbmtlZEluSWNvbiwgUGludGVyZXN0SWNvbiwgU3VuSWNvbiwgTW9vbkljb24gfSBmcm9tICcuL0ljb25zJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB1c2VUaGVtZVN3aXRjaGVyIGZyb20gJy4vaG9va3MvdXNlVGhlbWVTd2l0Y2hlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cblxuY29uc3QgQ3VzdG9tTGluayA9ICh7aHJlZiwgdGl0bGUsIGNsYXNzTmFtZT1cIlwifSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHJlbGF0aXZlIGdyb3VwYH0+XG4gICAgICAgICAgICB7dGl0bGV9XG5cbiAgICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICBoLVsxcHhdIGlubGluZS1ibG9jayB3LTAgYmctZGFya1xuICAgICAgICAgICAgICAgICAgICBhYnNvbHV0ZSBsZWZ0LTAgLWJvdHRvbS0wLjVcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAtaG92ZXI6dy1mdWxsIHRyYW5zaXRpb24tW3dpZHRoXSBlYXNlIGR1cmF0aW9uLTMwMFxuICAgICAgICAgICAgICAgICAgICAke3JvdXRlci5hc1BhdGggPT09IGhyZWYgPyBcInctZnVsbFwiIDogXCJ3LTBcIn1cbiAgICAgICAgICAgICAgICAgICAgZGFyazpiZy1saWdodDtcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VUaGVtZVN3aXRjaGVyKCk7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oIWlzT3BlbilcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxoZWFkZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIHB4LTMyIHB5LTggZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGRhcms6dGV4dC1saWdodCdcbiAgICAgICAgPiAgICAgICAgXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaGlkZGVuIGxnOmZsZXgnIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJnLWRhcmsgZGFyazpiZy1saWdodCBibG9jayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy02IHJvdW5kZWQtc20gJHtpc09wZW4gPyAncm90YXRlLTQ1IHRyYW5zbGF0ZS15LTEnIDogJy10cmFuc2xhdGUteS0wLjUnfWB9Pjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJnLWRhcmsgZGFyazpiZy1saWdodCBibG9jayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy02IHJvdW5kZWQtc20gbXktMC41ICR7aXNPcGVuID8gJ29wYWNpdHktMCcgOiAnb3BhY2l0eS0xMDAnfWB9Pjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJnLWRhcmsgZGFyazpiZy1saWdodCBibG9jayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy02IHJvdW5kZWQtc20gJHtpc09wZW4gPyAnLXJvdGF0ZS00NSAtdHJhbnNsYXRlLXktMScgOiAndHJhbnNsYXRlLXktMC41J31gfT48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbGc6aGlkZGVuJz5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvXCIgdGl0bGU9XCJIb21lXCIgY2xhc3NOYW1lPSdtci00JyAvPlxuICAgICAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9hYm91dFwiIHRpdGxlPVwiQWJvdXRcIiBjbGFzc05hbWU9J214LTQnIC8+XG4gICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL3Byb2plY3RzXCIgdGl0bGU9XCJQcm9qZWN0c1wiIGNsYXNzTmFtZT0nbXgtNCcgLz5cbiAgICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvYXJ0aWNsZXNcIiB0aXRsZT1cIkFydGljbGVzXCIgY2xhc3NOYW1lPSdtbC00JyAvPlxuICAgICAgICAgICAgPC9uYXY+XG4gXG4gICAgICAgICAgICA8TG9nbyAvPlxuXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwJz5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e3k6LTJ9fVxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6MC45fX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBtci0zJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdpdGh1Ykljb24gLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cHM6Ly9saW5rZWRpbi5jb21cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e3k6LTJ9fVxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6MC45fX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBteC0zJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtlZEluSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwczovL3BpbnRlcmVzdC5jb21cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e3k6LTJ9fVxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6MC45fX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBteC0zJ1xuICAgICAgICAgICAgICAgID4gXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uYT5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kZSggbW9kZSA9PT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtbC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBwLTEgXG4gICAgICAgICAgICAgICAgICAgICR7bW9kZSA9PT0gXCJsaWdodFwiID8gXCJiZy1kYXJrIHRleHQtbGlnaHRcIiA6IFwiYmctbGlnaHQgdGV4dC1kYXJrXCJ9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bW9kZSA9PT0gXCJkYXJrXCIgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdW5JY29uIGNsYXNzTmFtZT17XCJmaWxsLWRhcmtcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogPE1vb25JY29uIGNsYXNzTmFtZT17XCJmaWxsLWRhcmtcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtWzUwJV0gdG9wLTIgdHJhbnNsYXRlLXgtWy01MCVdXCI+PC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkxvZ28iLCJ1c2VSb3V0ZXIiLCJUd2l0dGVySWNvbiIsIkRyaWJiYmxlSWNvbiIsIkdpdGh1Ykljb24iLCJMaW5rZWRJbkljb24iLCJQaW50ZXJlc3RJY29uIiwiU3VuSWNvbiIsIk1vb25JY29uIiwibW90aW9uIiwidXNlVGhlbWVTd2l0Y2hlciIsInVzZVN0YXRlIiwiQ3VzdG9tTGluayIsImhyZWYiLCJ0aXRsZSIsImNsYXNzTmFtZSIsInJvdXRlciIsInNwYW4iLCJhc1BhdGgiLCJOYXZCYXIiLCJtb2RlIiwic2V0TW9kZSIsImlzT3BlbiIsInNldElzT3BlbiIsImhhbmRsZUNsaWNrIiwiaGVhZGVyIiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsIm5hdiIsImEiLCJ0YXJnZXQiLCJ3aGlsZUhvdmVyIiwieSIsIndoaWxlVGFwIiwic2NhbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});
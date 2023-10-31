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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"\\n                    h-[1px] inline-block w-0 bg-dark\\n                    absolute left-0 -bottom-0.5\\n                    group-hover:w-full transition-[width] ease duration-300\\n                    \".concat(router.asPath === href ? \"w-full\" : \"w-0\", \"\\n                \"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"About\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projects\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/articles\",\n                        title: \"Articles\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mr-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {}, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://github.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://linkedin.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://pinterest.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 mx-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.PinterestIcon, {}, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://dribble.com\",\n                        target: \"_blank\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        className: \"w-6 ml-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.DribbbleIcon, {}, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setMode(mode === \"light\" ? \"dark\" : \"light\"),\n                        className: \"ml-3 flex items-center justify-center rounded-full p-1\",\n                        children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                            lineNumber: 89,\n                            columnNumber: 25\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                            lineNumber: 90,\n                            columnNumber: 27\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\"\n            }, void 0, false, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/christine/Desktop/portfolio/src/components/NavBar.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(NavBar, \"bpg7nQjE1LUbvkT9xTUmmm2/twQ=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFFc0JSLCtEQUFnQkE7OztNQUZ0Q1E7QUFxRU4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzPzZiZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBUd2l0dGVySWNvbiwgRHJpYmJibGVJY29uLCBHaXRodWJJY29uLCBMaW5rZWRJbkljb24sIFBpbnRlcmVzdEljb24sIFN1bkljb24sIE1vb25JY29uIH0gZnJvbSAnLi9JY29ucydcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgdXNlVGhlbWVTd2l0Y2hlciBmcm9tICcuL2hvb2tzL3VzZVRoZW1lU3dpdGNoZXInXG5cblxuY29uc3QgQ3VzdG9tTGluayA9ICh7aHJlZiwgdGl0bGUsIGNsYXNzTmFtZT1cIlwifSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHJlbGF0aXZlIGdyb3VwYH0+XG4gICAgICAgICAgICB7dGl0bGV9XG5cbiAgICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICBoLVsxcHhdIGlubGluZS1ibG9jayB3LTAgYmctZGFya1xuICAgICAgICAgICAgICAgICAgICBhYnNvbHV0ZSBsZWZ0LTAgLWJvdHRvbS0wLjVcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAtaG92ZXI6dy1mdWxsIHRyYW5zaXRpb24tW3dpZHRoXSBlYXNlIGR1cmF0aW9uLTMwMFxuICAgICAgICAgICAgICAgICAgICAke3JvdXRlci5hc1BhdGggPT09IGhyZWYgPyBcInctZnVsbFwiIDogXCJ3LTBcIn1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VUaGVtZVN3aXRjaGVyKCk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxoZWFkZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIHB4LTMyIHB5LTggZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGRhcms6dGV4dC1saWdodCdcbiAgICAgICAgPlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL1wiIHRpdGxlPVwiSG9tZVwiIGNsYXNzTmFtZT0nbXItNCcgLz5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL2Fib3V0XCIgdGl0bGU9XCJBYm91dFwiIGNsYXNzTmFtZT0nbXgtNCcgLz5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL3Byb2plY3RzXCIgdGl0bGU9XCJQcm9qZWN0c1wiIGNsYXNzTmFtZT0nbXgtNCcgLz5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL2FydGljbGVzXCIgdGl0bGU9XCJBcnRpY2xlc1wiIGNsYXNzTmFtZT0nbWwtNCcgLz5cbiAgICAgICAgICAgIDwvbmF2PlxuIFxuICAgICAgICAgICAgPExvZ28gLz5cblxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCc+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCIgdGFyZ2V0PXtcIl9ibGFua1wifVxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3t5Oi0yfX1cbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17e3NjYWxlOjAuOX19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTYgbXItMydcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb21cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e3k6LTJ9fVxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6MC45fX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBteC0zJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdpdGh1Ykljb24gLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cHM6Ly9saW5rZWRpbi5jb21cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e3k6LTJ9fVxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6MC45fX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBteC0zJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtlZEluSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwczovL3BpbnRlcmVzdC5jb21cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e3k6LTJ9fVxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6MC45fX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBteC0zJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFBpbnRlcmVzdEljb24gLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cHM6Ly9kcmliYmxlLmNvbVwiIHRhcmdldD17XCJfYmxhbmtcIn1cbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7eTotMn19XG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3tzY2FsZTowLjl9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy02IG1sLTMnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RHJpYmJibGVJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uYT5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kZSggbW9kZSA9PT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIHAtMSc+XG4gICAgICAgICAgICAgICAgICAgIHttb2RlID09PSBcImRhcmtcIiA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1bkljb24gY2xhc3NOYW1lPXtcImZpbGwtZGFya1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8TW9vbkljb24gY2xhc3NOYW1lPXtcImZpbGwtZGFya1wifSAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1MCVdIHRvcC0yIHRyYW5zbGF0ZS14LVstNTAlXVwiPjwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhciJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJMb2dvIiwidXNlUm91dGVyIiwiVHdpdHRlckljb24iLCJEcmliYmJsZUljb24iLCJHaXRodWJJY29uIiwiTGlua2VkSW5JY29uIiwiUGludGVyZXN0SWNvbiIsIlN1bkljb24iLCJNb29uSWNvbiIsIm1vdGlvbiIsInVzZVRoZW1lU3dpdGNoZXIiLCJDdXN0b21MaW5rIiwiaHJlZiIsInRpdGxlIiwiY2xhc3NOYW1lIiwicm91dGVyIiwic3BhbiIsImFzUGF0aCIsIk5hdkJhciIsIm1vZGUiLCJzZXRNb2RlIiwiaGVhZGVyIiwibmF2IiwiYSIsInRhcmdldCIsIndoaWxlSG92ZXIiLCJ5Iiwid2hpbGVUYXAiLCJzY2FsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});
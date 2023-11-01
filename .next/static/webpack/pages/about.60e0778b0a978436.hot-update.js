"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _public_images_profile_no_background_profile_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/profile/no_background_profile.png */ \"./public/images/profile/no_background_profile.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Skills */ \"./src/components/Skills.js\");\n/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Experience */ \"./src/components/Experience.js\");\n/* harmony import */ var _components_Education__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Education */ \"./src/components/Education.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst AnimatedNumbers = (param)=>{\n    let { value  } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue)(0);\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useSpring)(motionValue, {\n        duration: 3000\n    });\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useInView)(ref, {\n        once: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(value);\n        }\n    }, [\n        isInView,\n        value,\n        motionValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        springValue.on(\"change\", (latest)=>{\n            if (ref.current && latest.toFixed(0) <= value) {\n                ref.current.textContent = latest.toFixed(0);\n            }\n        });\n    }, [\n        springValue,\n        value\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n        lineNumber: 34,\n        columnNumber: 12\n    }, undefined);\n};\n_s(AnimatedNumbers, \"b8aj1/ahv2yZpM7Evi2PhhKh64k=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useInView\n    ];\n});\n_c = AnimatedNumbers;\nconst about = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Christine Wong | About Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"about Christine\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items-center justify-center dark:text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"pt-14\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Passion Fuels Purpose\",\n                            className: \"mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 46,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-cols-8 gap-16 sm:gap-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75\",\n                                            children: \"About Me\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Hi, I'm Christine Wong, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-medium\",\n                                            children: \"I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                            src: _public_images_profile_no_background_profile_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            alt: \"Christine\",\n                                            className: \"w-full h-auto rounded-2xl\",\n                                            priority: true,\n                                            sizes: \"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 10\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 29\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"projects completed\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 15\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"years of work experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 20\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"satisfied clients\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 47,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 94,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 95,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Education__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 96,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                    lineNumber: 45,\n                    columnNumber: 16\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\nvar _c;\n$RefreshReg$(_c, \"AnimatedNumbers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFFOUIsOERBQUNzQjtvREFBR00sV0FBVTs4REFBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJckUsOERBQUNoQywwREFBTUE7Ozs7O3NDQUNQLDhEQUFDQyw4REFBVUE7Ozs7O3NDQUNYLDhEQUFDQyw2REFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtBQUVBLCtEQUFlZSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hYm91dC5qcz9mZDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRlZFRleHQgZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBwcm9maWxlUGljIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvcHJvZmlsZS9ub19iYWNrZ3JvdW5kX3Byb2ZpbGUucG5nJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBtb3Rpb25WYWx1ZSwgdXNlSW5WaWV3LCB1c2VNb3Rpb25WYWx1ZSwgdXNlU3ByaW5nIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNraWxscyBmcm9tICdAL2NvbXBvbmVudHMvU2tpbGxzJ1xuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSAnQC9jb21wb25lbnRzL0V4cGVyaWVuY2UnXG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9FZHVjYXRpb24nXG5cbmNvbnN0IEFuaW1hdGVkTnVtYmVycyA9ICh7dmFsdWV9KSA9PiB7XG5jb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBtb3Rpb25WYWx1ZSA9IHVzZU1vdGlvblZhbHVlKDApO1xuICAgIGNvbnN0IHNwcmluZ1ZhbHVlID0gdXNlU3ByaW5nKG1vdGlvblZhbHVlLCB7IGR1cmF0aW9uOiAzMDAwIH0pXG4gICAgY29uc3QgaXNJblZpZXcgPSB1c2VJblZpZXcocmVmLCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoaXNJblZpZXcpe1xuICAgICAgICAgICAgbW90aW9uVmFsdWUuc2V0KHZhbHVlKTsgXG4gICAgICAgIH1cbiAgICB9LCBbaXNJblZpZXcsIHZhbHVlLCBtb3Rpb25WYWx1ZV0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzcHJpbmdWYWx1ZS5vbihcImNoYW5nZVwiLCAobGF0ZXN0KSA9PiB7XG4gICAgICAgICAgICBpZihyZWYuY3VycmVudCAmJiBsYXRlc3QudG9GaXhlZCgwKSA8PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQudGV4dENvbnRlbnQgPSBsYXRlc3QudG9GaXhlZCgwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sIFtzcHJpbmdWYWx1ZSwgdmFsdWVdKVxuXG4gICAgcmV0dXJuIDxzcGFuIHJlZj17cmVmfT48L3NwYW4+XG59XG5cbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q2hyaXN0aW5lIFdvbmcgfCBBYm91dCBQYWdlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiYWJvdXQgQ2hyaXN0aW5lXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGRhcms6dGV4dC1saWdodCc+XG4gICAgICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInB0LTE0XCI+XG4gICAgICAgICAgICAgICA8QW5pbWF0ZWRUZXh0IHRleHQ9XCJQYXNzaW9uIEZ1ZWxzIFB1cnBvc2VcIiBjbGFzc05hbWU9J21iLTE2IGxnOiF0ZXh0LTd4bCBzbTohdGV4dC02eGwgeHM6IXRleHQtNHhsIHNtOm1iLTAnLz5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIHctZnVsbCBncmlkLWNvbHMtOCBnYXAtMTYgc206Z2FwLTgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0zIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCB4bDpjb2wtc3Bhbi00IG1kOm9yZGVyLTIgJz5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWItNCB0ZXh0LWxnIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1kYXJrLzc1IGRhcms6dGV4dC1saWdodC83NSc+QWJvdXQgTWU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtJz5cbiAgICAgICAgICAgICAgICAgICAgSGksIEknbSBDaHJpc3RpbmUgV29uZywgYSB3ZWIgZGV2ZWxvcGVyIGFuZCBVSS9VWCBkZXNpZ25lciB3aXRoIGEgcGFzc2lvbiBmb3IgY3JlYXRpbmcgYmVhdXRpZnVsLCBmdW5jdGlvbmFsLCBcbmFuZCB1c2VyLWNlbnRlcmVkIGRpZ2l0YWwgZXhwZXJpZW5jZXMuIFdpdGggNCB5ZWFycyBvZiBleHBlcmllbmNlIGluIHRoZSBmaWVsZC4gSSBhbSBhbHdheXMgbG9va2luZyBmb3IgXG5uZXcgYW5kIGlubm92YXRpdmUgd2F5cyB0byBicmluZyBteSBjbGllbnRzJyB2aXNpb25zIHRvIGxpZmUuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdteS00IGZvbnQtbWVkaXVtJz5cbiAgICAgICAgICAgICAgICAgICAgSSBiZWxpZXZlIHRoYXQgZGVzaWduIGlzIGFib3V0IG1vcmUgdGhhbiBqdXN0IG1ha2luZyB0aGluZ3MgbG9vayBwcmV0dHkg4oCTIGl0J3MgYWJvdXQgc29sdmluZyBwcm9ibGVtcyBhbmQgXG5jcmVhdGluZyBpbnR1aXRpdmUsIGVuam95YWJsZSBleHBlcmllbmNlcyBmb3IgdXNlcnMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LW1lZGl1bSc+XG4gICAgICAgICAgICAgICAgICAgIFdoZXRoZXIgSSdtIHdvcmtpbmcgb24gYSB3ZWJzaXRlLCBtb2JpbGUgYXBwLCBvciBcbm90aGVyIGRpZ2l0YWwgcHJvZHVjdCwgSSBicmluZyBteSBjb21taXRtZW50IHRvIGRlc2lnbiBleGNlbGxlbmNlIGFuZCB1c2VyLWNlbnRlcmVkIHRoaW5raW5nIHRvIFxuZXZlcnkgcHJvamVjdCBJIHdvcmsgb24uIEkgbG9vayBmb3J3YXJkIHRvIHRoZSBvcHBvcnR1bml0eSB0byBicmluZyBteSBza2lsbHMgYW5kIHBhc3Npb24gdG8geW91ciBuZXh0IHByb2plY3QuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMyByZWxhdGl2ZSBoLW1heCByb3VuZGVkLTJ4bCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgYmctbGlnaHQgcC04IGRhcms6YmctZGFyayBkYXJrOmJvcmRlci1saWdodCB4bDpjb2wtc3Bhbi00IG1kOm9yZGVyLTEgbWQ6Y29sLXNwYW4tOCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMCAtcmlnaHQtMyAtei0xMCB3LVsxMDIlXSBoLVsxMDMlXSByb3VuZGVkLVsycmVtXSBiZy1kYXJrIGRhcms6YmctbGlnaHQnLz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDaHJpc3RpbmVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gcm91bmRlZC0yeGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzPVwiKG1heC13aWR0aDogNzY4cHgpIDEwMHZ3LCAobWF4LXdpZHRoOiAxMjAwcHgpIDUwdncsIDMzdndcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTIgZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIHhsOmNvbC1zcGFuLTggeGw6ZmxleC1yb3cgeGw6aXRlbXMtY2VudGVyIG1kOm9yZGVyLTMnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdGV4dC03eGwgZm9udC1ib2xkICc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkTnVtYmVycyB2YWx1ZT17MTB9IC8+K1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzbmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzVcIj5wcm9qZWN0cyBjb21wbGV0ZWQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtN3hsIGZvbnQtYm9sZCAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkTnVtYmVycyB2YWx1ZT17MTV9IC8+K1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzbmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzVcIj55ZWFycyBvZiB3b3JrIGV4cGVyaWVuY2U8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtN3hsIGZvbnQtYm9sZCAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkTnVtYmVycyB2YWx1ZT17MjB9IC8+K1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzbmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzVcIj5zYXRpc2ZpZWQgY2xpZW50czwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8U2tpbGxzIC8+XG4gICAgICAgICAgICAgICA8RXhwZXJpZW5jZSAvPlxuICAgICAgICAgICAgICAgPEVkdWNhdGlvbiAvPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PiBcbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIFxuZXhwb3J0IGRlZmF1bHQgYWJvdXQiXSwibmFtZXMiOlsiQW5pbWF0ZWRUZXh0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiTGF5b3V0IiwicHJvZmlsZVBpYyIsIkltYWdlIiwibW90aW9uVmFsdWUiLCJ1c2VJblZpZXciLCJ1c2VNb3Rpb25WYWx1ZSIsInVzZVNwcmluZyIsInVzZVJlZiIsIlNraWxscyIsIkV4cGVyaWVuY2UiLCJFZHVjYXRpb24iLCJBbmltYXRlZE51bWJlcnMiLCJ2YWx1ZSIsInJlZiIsInNwcmluZ1ZhbHVlIiwiZHVyYXRpb24iLCJpc0luVmlldyIsIm9uY2UiLCJzZXQiLCJvbiIsImxhdGVzdCIsImN1cnJlbnQiLCJ0b0ZpeGVkIiwidGV4dENvbnRlbnQiLCJzcGFuIiwiYWJvdXQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJjbGFzc05hbWUiLCJ0ZXh0IiwiZGl2IiwiaDIiLCJwIiwic3JjIiwiYWx0IiwicHJpb3JpdHkiLCJzaXplcyIsImNsYXNzbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});
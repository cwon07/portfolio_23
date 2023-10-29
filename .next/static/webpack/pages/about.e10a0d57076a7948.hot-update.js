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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _public_images_profile_no_background_profile_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/profile/no_background_profile.png */ \"./public/images/profile/no_background_profile.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AnimatedNumbers = (param)=>{\n    let { value  } = param;\n    _s();\n    const ref = useRef(null);\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue)(0);\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(motionValue, {\n        duration: 3000\n    });\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView)({\n        ref\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(value);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n        lineNumber: 23,\n        columnNumber: 12\n    }, undefined);\n};\n_s(AnimatedNumbers, \"IHr7tAKEGFq/O5gMj76hZaRk0v8=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView\n    ];\n});\n_c = AnimatedNumbers;\nconst about = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Christine Wong | About Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"about Christine\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"pt-14\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Passion Fuels Purpose\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 35,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-cols-8 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 flex flex-col items-start justify-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"mb-4 text-lg font-bold uppercase text-dark/75\",\n                                            children: \"About Me\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-medium\",\n                                            children: \"I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                            src: _public_images_profile_no_background_profile_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            alt: \"Christine\",\n                                            className: \"w-full h-auto rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2 flex flex-col items-end justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: \"10+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"projects completed\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: \"15+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"years of work experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: \"50+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"satisfied clients\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 36,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                    lineNumber: 34,\n                    columnNumber: 16\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\nvar _c;\n$RefreshReg$(_c, \"AnimatedNumbers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ1o7QUFDWjtBQUNZO0FBQ3NDO0FBQ2hEO0FBQ21EO0FBRWpGLE1BQU1XLGtCQUFrQixTQUFhO1FBQVosRUFBQ0MsTUFBSyxFQUFDOztJQUM1QixNQUFNQyxNQUFNQyxPQUFPLElBQUk7SUFFdkIsTUFBTVAsY0FBY0UsNkRBQWNBLENBQUM7SUFDbkMsTUFBTU0sY0FBY0wsd0RBQVNBLENBQUNILGFBQWE7UUFBRVMsVUFBVTtJQUFLO0lBQzVELE1BQU1DLFdBQVdULHdEQUFTQSxDQUFDO1FBQUNLO0lBQUc7SUFFL0JYLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFHZSxVQUFTO1lBRVJWLFlBQVlXLEdBQUcsQ0FBQ047UUFDcEIsQ0FBQztJQUNMO0lBRUEscUJBQU8sOERBQUNPO1FBQUtOLEtBQUtBOzs7Ozs7QUFDdEI7R0FmTUY7O1FBR2tCRix5REFBY0E7UUFDZEMsb0RBQVNBO1FBQ1pGLG9EQUFTQTs7O0tBTHhCRztBQWlCTixNQUFNUyxRQUFRLElBQU07SUFDaEIscUJBQ0k7OzBCQUNJLDhEQUFDakIsa0RBQUlBOztrQ0FDRCw4REFBQ2tCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDQztnQkFBS0MsV0FBVTswQkFDYiw0RUFBQ3RCLDBEQUFNQTtvQkFBQ3NCLFdBQVU7O3NDQUNsQiw4REFBQzFCLGdFQUFZQTs0QkFBQzJCLE1BQUs7NEJBQXdCRCxXQUFVOzs7Ozs7c0NBQ3JELDhEQUFDRTs0QkFBSUYsV0FBVTs7OENBQ2QsOERBQUNFO29DQUFJRixXQUFVOztzREFDWCw4REFBQ0c7NENBQUdILFdBQVU7c0RBQWdEOzs7Ozs7c0RBQzlELDhEQUFDSTs0Q0FBRUosV0FBVTtzREFBYzs7Ozs7O3NEQUszQiw4REFBQ0k7NENBQUVKLFdBQVU7c0RBQW1COzs7Ozs7c0RBSWhDLDhEQUFDSTs0Q0FBRUosV0FBVTtzREFBYzs7Ozs7Ozs7Ozs7OzhDQU0vQiw4REFBQ0U7b0NBQUlGLFdBQVU7O3NEQUNYLDhEQUFDRTs0Q0FBSUYsV0FBVTs7Ozs7O3NEQUNmLDhEQUFDcEIsbURBQUtBOzRDQUFDeUIsS0FBSzFCLHdGQUFVQTs0Q0FBRTJCLEtBQUk7NENBQVlOLFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FFdEQsOERBQUNFO29DQUFJRixXQUFVOztzREFDWCw4REFBQ0U7NENBQUlGLFdBQVU7OzhEQUNYLDhEQUFDUDtvREFBS08sV0FBVTs4REFBbUM7Ozs7Ozs4REFHbkQsOERBQUNHO29EQUFHSSxXQUFVOzhEQUE4Qzs7Ozs7Ozs7Ozs7O3NEQUVoRSw4REFBQ0w7NENBQUlGLFdBQVU7OzhEQUNYLDhEQUFDUDtvREFBS08sV0FBVTs4REFBbUM7Ozs7Ozs4REFHbkQsOERBQUNHO29EQUFHSSxXQUFVOzhEQUE4Qzs7Ozs7Ozs7Ozs7O3NEQUVoRSw4REFBQ0w7NENBQUlGLFdBQVU7OzhEQUNYLDhEQUFDUDtvREFBS08sV0FBVTs4REFBbUM7Ozs7Ozs4REFHbkQsOERBQUNHO29EQUFHSSxXQUFVOzhEQUE4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwRjtBQUVBLCtEQUFlYixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hYm91dC5qcz9mZDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRlZFRleHQgZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBwcm9maWxlUGljIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvcHJvZmlsZS9ub19iYWNrZ3JvdW5kX3Byb2ZpbGUucG5nJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBtb3Rpb25WYWx1ZSwgdXNlSW5WaWV3LCB1c2VNb3Rpb25WYWx1ZSwgdXNlU3ByaW5nIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgQW5pbWF0ZWROdW1iZXJzID0gKHt2YWx1ZX0pID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBtb3Rpb25WYWx1ZSA9IHVzZU1vdGlvblZhbHVlKDApO1xuICAgIGNvbnN0IHNwcmluZ1ZhbHVlID0gdXNlU3ByaW5nKG1vdGlvblZhbHVlLCB7IGR1cmF0aW9uOiAzMDAwIH0pXG4gICAgY29uc3QgaXNJblZpZXcgPSB1c2VJblZpZXcoe3JlZn0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoaXNJblZpZXcpe1xuXG4gICAgICAgICAgICBtb3Rpb25WYWx1ZS5zZXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiA8c3BhbiByZWY9e3JlZn0+PC9zcGFuPlxufVxuXG5jb25zdCBhYm91dCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkNocmlzdGluZSBXb25nIHwgQWJvdXQgUGFnZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImFib3V0IENocmlzdGluZVwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInB0LTE0XCI+XG4gICAgICAgICAgICAgICA8QW5pbWF0ZWRUZXh0IHRleHQ9XCJQYXNzaW9uIEZ1ZWxzIFB1cnBvc2VcIiBjbGFzc05hbWU9J21iLTE2Jy8+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCB3LWZ1bGwgZ3JpZC1jb2xzLTggZ2FwLTE2Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMyBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQnPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtYi00IHRleHQtbGcgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LWRhcmsvNzUnPkFib3V0IE1lPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LW1lZGl1bSc+XG4gICAgICAgICAgICAgICAgICAgIEhpLCBJJ20gQ29kZUJ1Y2tzLCBhIHdlYiBkZXZlbG9wZXIgYW5kIFVJL1VYIGRlc2lnbmVyIHdpdGggYSBwYXNzaW9uIGZvciBjcmVhdGluZyBiZWF1dGlmdWwsIGZ1bmN0aW9uYWwsIFxuYW5kIHVzZXItY2VudGVyZWQgZGlnaXRhbCBleHBlcmllbmNlcy4gV2l0aCA0IHllYXJzIG9mIGV4cGVyaWVuY2UgaW4gdGhlIGZpZWxkLiBJIGFtIGFsd2F5cyBsb29raW5nIGZvciBcbm5ldyBhbmQgaW5ub3ZhdGl2ZSB3YXlzIHRvIGJyaW5nIG15IGNsaWVudHMnIHZpc2lvbnMgdG8gbGlmZS5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J215LTQgZm9udC1tZWRpdW0nPlxuICAgICAgICAgICAgICAgICAgICBJIGJlbGlldmUgdGhhdCBkZXNpZ24gaXMgYWJvdXQgbW9yZSB0aGFuIGp1c3QgbWFraW5nIHRoaW5ncyBsb29rIHByZXR0eSDigJMgaXQncyBhYm91dCBzb2x2aW5nIHByb2JsZW1zIGFuZCBcbmNyZWF0aW5nIGludHVpdGl2ZSwgZW5qb3lhYmxlIGV4cGVyaWVuY2VzIGZvciB1c2Vycy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtJz5cbiAgICAgICAgICAgICAgICAgICAgV2hldGhlciBJJ20gd29ya2luZyBvbiBhIHdlYnNpdGUsIG1vYmlsZSBhcHAsIG9yIFxub3RoZXIgZGlnaXRhbCBwcm9kdWN0LCBJIGJyaW5nIG15IGNvbW1pdG1lbnQgdG8gZGVzaWduIGV4Y2VsbGVuY2UgYW5kIHVzZXItY2VudGVyZWQgdGhpbmtpbmcgdG8gXG5ldmVyeSBwcm9qZWN0IEkgd29yayBvbi4gSSBsb29rIGZvcndhcmQgdG8gdGhlIG9wcG9ydHVuaXR5IHRvIGJyaW5nIG15IHNraWxscyBhbmQgcGFzc2lvbiB0byB5b3VyIG5leHQgcHJvamVjdC5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0zIHJlbGF0aXZlIGgtbWF4IHJvdW5kZWQtMnhsIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayBiZy1saWdodCBwLTgnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgLXJpZ2h0LTMgLXotMTAgdy1bMTAyJV0gaC1bMTAzJV0gcm91bmRlZC1bMnJlbV0gYmctZGFyaycvPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljfSBhbHQ9XCJDaHJpc3RpbmVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIHJvdW5kZWQtMnhsXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdGV4dC03eGwgZm9udC1ib2xkICc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTArXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NuYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHRleHQtZGFyay83NVwiPnByb2plY3RzIGNvbXBsZXRlZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdGV4dC03eGwgZm9udC1ib2xkICc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTUrXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NuYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHRleHQtZGFyay83NVwiPnllYXJzIG9mIHdvcmsgZXhwZXJpZW5jZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdGV4dC03eGwgZm9udC1ib2xkICc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNTArXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NuYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHRleHQtZGFyay83NVwiPnNhdGlzZmllZCBjbGllbnRzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD4gXG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IGFib3V0Il0sIm5hbWVzIjpbIkFuaW1hdGVkVGV4dCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiSGVhZCIsIkxheW91dCIsInByb2ZpbGVQaWMiLCJJbWFnZSIsIm1vdGlvblZhbHVlIiwidXNlSW5WaWV3IiwidXNlTW90aW9uVmFsdWUiLCJ1c2VTcHJpbmciLCJBbmltYXRlZE51bWJlcnMiLCJ2YWx1ZSIsInJlZiIsInVzZVJlZiIsInNwcmluZ1ZhbHVlIiwiZHVyYXRpb24iLCJpc0luVmlldyIsInNldCIsInNwYW4iLCJhYm91dCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWFpbiIsImNsYXNzTmFtZSIsInRleHQiLCJkaXYiLCJoMiIsInAiLCJzcmMiLCJhbHQiLCJjbGFzc25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});
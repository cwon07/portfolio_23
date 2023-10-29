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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _public_images_profile_no_background_profile_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/profile/no_background_profile.png */ \"./public/images/profile/no_background_profile.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AnimatedNumbers = (param)=>{\n    let { value  } = param;\n    _s();\n    const ref = useRef(null);\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue)(0);\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(motionValue, {\n        duration: 3000\n    });\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView)({\n        ref\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(value);\n        }\n    }, [\n        isInView,\n        value,\n        motionValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n        lineNumber: 26,\n        columnNumber: 12\n    }, undefined);\n};\n_s(AnimatedNumbers, \"b8aj1/ahv2yZpM7Evi2PhhKh64k=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView\n    ];\n});\n_c = AnimatedNumbers;\nconst about = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Christine Wong | About Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"about Christine\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"pt-14\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Passion Fuels Purpose\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 38,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-cols-8 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 flex flex-col items-start justify-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"mb-4 text-lg font-bold uppercase text-dark/75\",\n                                            children: \"About Me\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-medium\",\n                                            children: \"I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                            src: _public_images_profile_no_background_profile_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            alt: \"Christine\",\n                                            className: \"w-full h-auto rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2 flex flex-col items-end justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: \"10+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"projects completed\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: \"15+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"years of work experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: \"50+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"satisfied clients\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 39,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                    lineNumber: 37,\n                    columnNumber: 16\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\nvar _c;\n$RefreshReg$(_c, \"AnimatedNumbers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ1o7QUFDWjtBQUNZO0FBQ3NDO0FBQ2hEO0FBQ21EO0FBRWpGLE1BQU1XLGtCQUFrQixTQUFhO1FBQVosRUFBQ0MsTUFBSyxFQUFDOztJQUM1QixNQUFNQyxNQUFNQyxPQUFPLElBQUk7SUFFdkIsTUFBTVAsY0FBY0UsNkRBQWNBLENBQUM7SUFDbkMsTUFBTU0sY0FBY0wsd0RBQVNBLENBQUNILGFBQWE7UUFBRVMsVUFBVTtJQUFLO0lBQzVELE1BQU1DLFdBQVdULHdEQUFTQSxDQUFDO1FBQUNLO0lBQUc7SUFFL0JYLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFHZSxVQUFTO1lBQ1JWLFlBQVlXLEdBQUcsQ0FBQ047UUFDcEIsQ0FBQztJQUNMLEdBQUc7UUFBQ0s7UUFBVUw7UUFBT0w7S0FBWTtJQUVqQ0wsZ0RBQVNBLENBQUMsSUFBTSxDQUVoQjtJQUVBLHFCQUFPLDhEQUFDaUI7UUFBS04sS0FBS0E7Ozs7OztBQUN0QjtHQWxCTUY7O1FBR2tCRix5REFBY0E7UUFDZEMsb0RBQVNBO1FBQ1pGLG9EQUFTQTs7O0tBTHhCRztBQW9CTixNQUFNUyxRQUFRLElBQU07SUFDaEIscUJBQ0k7OzBCQUNJLDhEQUFDakIsa0RBQUlBOztrQ0FDRCw4REFBQ2tCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDQztnQkFBS0MsV0FBVTswQkFDYiw0RUFBQ3RCLDBEQUFNQTtvQkFBQ3NCLFdBQVU7O3NDQUNsQiw4REFBQzFCLGdFQUFZQTs0QkFBQzJCLE1BQUs7NEJBQXdCRCxXQUFVOzs7Ozs7c0NBQ3JELDhEQUFDRTs0QkFBSUYsV0FBVTs7OENBQ2QsOERBQUNFO29DQUFJRixXQUFVOztzREFDWCw4REFBQ0c7NENBQUdILFdBQVU7c0RBQWdEOzs7Ozs7c0RBQzlELDhEQUFDSTs0Q0FBRUosV0FBVTtzREFBYzs7Ozs7O3NEQUszQiw4REFBQ0k7NENBQUVKLFdBQVU7c0RBQW1COzs7Ozs7c0RBSWhDLDhEQUFDSTs0Q0FBRUosV0FBVTtzREFBYzs7Ozs7Ozs7Ozs7OzhDQU0vQiw4REFBQ0U7b0NBQUlGLFdBQVU7O3NEQUNYLDhEQUFDRTs0Q0FBSUYsV0FBVTs7Ozs7O3NEQUNmLDhEQUFDcEIsbURBQUtBOzRDQUFDeUIsS0FBSzFCLHdGQUFVQTs0Q0FBRTJCLEtBQUk7NENBQVlOLFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FFdEQsOERBQUNFO29DQUFJRixXQUFVOztzREFDWCw4REFBQ0U7NENBQUlGLFdBQVU7OzhEQUNYLDhEQUFDUDtvREFBS08sV0FBVTs4REFBbUM7Ozs7Ozs4REFHbkQsOERBQUNHO29EQUFHSSxXQUFVOzhEQUE4Qzs7Ozs7Ozs7Ozs7O3NEQUVoRSw4REFBQ0w7NENBQUlGLFdBQVU7OzhEQUNYLDhEQUFDUDtvREFBS08sV0FBVTs4REFBbUM7Ozs7Ozs4REFHbkQsOERBQUNHO29EQUFHSSxXQUFVOzhEQUE4Qzs7Ozs7Ozs7Ozs7O3NEQUVoRSw4REFBQ0w7NENBQUlGLFdBQVU7OzhEQUNYLDhEQUFDUDtvREFBS08sV0FBVTs4REFBbUM7Ozs7Ozs4REFHbkQsOERBQUNHO29EQUFHSSxXQUFVOzhEQUE4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwRjtBQUVBLCtEQUFlYixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hYm91dC5qcz9mZDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRlZFRleHQgZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBwcm9maWxlUGljIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvcHJvZmlsZS9ub19iYWNrZ3JvdW5kX3Byb2ZpbGUucG5nJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBtb3Rpb25WYWx1ZSwgdXNlSW5WaWV3LCB1c2VNb3Rpb25WYWx1ZSwgdXNlU3ByaW5nIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgQW5pbWF0ZWROdW1iZXJzID0gKHt2YWx1ZX0pID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBtb3Rpb25WYWx1ZSA9IHVzZU1vdGlvblZhbHVlKDApO1xuICAgIGNvbnN0IHNwcmluZ1ZhbHVlID0gdXNlU3ByaW5nKG1vdGlvblZhbHVlLCB7IGR1cmF0aW9uOiAzMDAwIH0pXG4gICAgY29uc3QgaXNJblZpZXcgPSB1c2VJblZpZXcoe3JlZn0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoaXNJblZpZXcpe1xuICAgICAgICAgICAgbW90aW9uVmFsdWUuc2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtpc0luVmlldywgdmFsdWUsIG1vdGlvblZhbHVlXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4gPHNwYW4gcmVmPXtyZWZ9Pjwvc3Bhbj5cbn1cblxuY29uc3QgYWJvdXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5DaHJpc3RpbmUgV29uZyB8IEFib3V0IFBhZ2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJhYm91dCBDaHJpc3RpbmVcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJwdC0xNFwiPlxuICAgICAgICAgICAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PVwiUGFzc2lvbiBGdWVscyBQdXJwb3NlXCIgY2xhc3NOYW1lPSdtYi0xNicvPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgdy1mdWxsIGdyaWQtY29scy04IGdhcC0xNic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTMgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWItNCB0ZXh0LWxnIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1kYXJrLzc1Jz5BYm91dCBNZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1tZWRpdW0nPlxuICAgICAgICAgICAgICAgICAgICBIaSwgSSdtIENvZGVCdWNrcywgYSB3ZWIgZGV2ZWxvcGVyIGFuZCBVSS9VWCBkZXNpZ25lciB3aXRoIGEgcGFzc2lvbiBmb3IgY3JlYXRpbmcgYmVhdXRpZnVsLCBmdW5jdGlvbmFsLCBcbmFuZCB1c2VyLWNlbnRlcmVkIGRpZ2l0YWwgZXhwZXJpZW5jZXMuIFdpdGggNCB5ZWFycyBvZiBleHBlcmllbmNlIGluIHRoZSBmaWVsZC4gSSBhbSBhbHdheXMgbG9va2luZyBmb3IgXG5uZXcgYW5kIGlubm92YXRpdmUgd2F5cyB0byBicmluZyBteSBjbGllbnRzJyB2aXNpb25zIHRvIGxpZmUuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdteS00IGZvbnQtbWVkaXVtJz5cbiAgICAgICAgICAgICAgICAgICAgSSBiZWxpZXZlIHRoYXQgZGVzaWduIGlzIGFib3V0IG1vcmUgdGhhbiBqdXN0IG1ha2luZyB0aGluZ3MgbG9vayBwcmV0dHkg4oCTIGl0J3MgYWJvdXQgc29sdmluZyBwcm9ibGVtcyBhbmQgXG5jcmVhdGluZyBpbnR1aXRpdmUsIGVuam95YWJsZSBleHBlcmllbmNlcyBmb3IgdXNlcnMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LW1lZGl1bSc+XG4gICAgICAgICAgICAgICAgICAgIFdoZXRoZXIgSSdtIHdvcmtpbmcgb24gYSB3ZWJzaXRlLCBtb2JpbGUgYXBwLCBvciBcbm90aGVyIGRpZ2l0YWwgcHJvZHVjdCwgSSBicmluZyBteSBjb21taXRtZW50IHRvIGRlc2lnbiBleGNlbGxlbmNlIGFuZCB1c2VyLWNlbnRlcmVkIHRoaW5raW5nIHRvIFxuZXZlcnkgcHJvamVjdCBJIHdvcmsgb24uIEkgbG9vayBmb3J3YXJkIHRvIHRoZSBvcHBvcnR1bml0eSB0byBicmluZyBteSBza2lsbHMgYW5kIHBhc3Npb24gdG8geW91ciBuZXh0IHByb2plY3QuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMyByZWxhdGl2ZSBoLW1heCByb3VuZGVkLTJ4bCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgYmctbGlnaHQgcC04Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIC1yaWdodC0zIC16LTEwIHctWzEwMiVdIGgtWzEwMyVdIHJvdW5kZWQtWzJyZW1dIGJnLWRhcmsnLz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY30gYWx0PVwiQ2hyaXN0aW5lXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byByb3VuZGVkLTJ4bFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTIgZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtN3hsIGZvbnQtYm9sZCAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwK1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzbmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzVcIj5wcm9qZWN0cyBjb21wbGV0ZWQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtN3hsIGZvbnQtYm9sZCAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1K1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzbmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzVcIj55ZWFycyBvZiB3b3JrIGV4cGVyaWVuY2U8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtN3hsIGZvbnQtYm9sZCAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwK1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzbmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzVcIj5zYXRpc2ZpZWQgY2xpZW50czwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+IFxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8Lz5cbiAgICApXG59XG4gXG5leHBvcnQgZGVmYXVsdCBhYm91dCJdLCJuYW1lcyI6WyJBbmltYXRlZFRleHQiLCJSZWFjdCIsInVzZUVmZmVjdCIsIkhlYWQiLCJMYXlvdXQiLCJwcm9maWxlUGljIiwiSW1hZ2UiLCJtb3Rpb25WYWx1ZSIsInVzZUluVmlldyIsInVzZU1vdGlvblZhbHVlIiwidXNlU3ByaW5nIiwiQW5pbWF0ZWROdW1iZXJzIiwidmFsdWUiLCJyZWYiLCJ1c2VSZWYiLCJzcHJpbmdWYWx1ZSIsImR1cmF0aW9uIiwiaXNJblZpZXciLCJzZXQiLCJzcGFuIiwiYWJvdXQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJjbGFzc05hbWUiLCJ0ZXh0IiwiZGl2IiwiaDIiLCJwIiwic3JjIiwiYWx0IiwiY2xhc3NuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});
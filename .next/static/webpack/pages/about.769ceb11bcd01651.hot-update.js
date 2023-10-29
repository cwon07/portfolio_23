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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _public_images_profile_no_background_profile_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/profile/no_background_profile.png */ \"./public/images/profile/no_background_profile.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AnimatedNumbers = (param)=>{\n    let { value  } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue)(0);\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(motionValue, {\n        duration: 3000\n    });\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView)(ref);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(value);\n        }\n    }, [\n        isInView,\n        value,\n        motionValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        springValue.on(\"change\", (latest)=>{\n            if (ref.current && latest.toFixed(0) <= value) {\n                ref.current.textContent = latest.toFixed(0);\n            }\n        });\n    }, [\n        springValue,\n        value\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n        lineNumber: 31,\n        columnNumber: 12\n    }, undefined);\n};\n_s(AnimatedNumbers, \"b8aj1/ahv2yZpM7Evi2PhhKh64k=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView\n    ];\n});\n_c = AnimatedNumbers;\nconst about = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Christine Wong | About Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"about Christine\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"pt-14\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Passion Fuels Purpose\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 43,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-cols-8 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 flex flex-col items-start justify-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"mb-4 text-lg font-bold uppercase text-dark/75\",\n                                            children: \"About Me\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-medium\",\n                                            children: \"I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                            src: _public_images_profile_no_background_profile_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            alt: \"Christine\",\n                                            className: \"w-full h-auto rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2 flex flex-col items-end justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 10\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 29\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"projects completed\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 15\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                            lineNumber: 75,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"years of work experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 10\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"satisfied clients\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 44,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                    lineNumber: 42,\n                    columnNumber: 16\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\nvar _c;\n$RefreshReg$(_c, \"AnimatedNumbers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UXBGO0FBRUEsK0RBQWViLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Fib3V0LmpzP2ZkNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tICdAL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0J1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHByb2ZpbGVQaWMgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9wcm9maWxlL25vX2JhY2tncm91bmRfcHJvZmlsZS5wbmcnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IG1vdGlvblZhbHVlLCB1c2VJblZpZXcsIHVzZU1vdGlvblZhbHVlLCB1c2VTcHJpbmcgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEFuaW1hdGVkTnVtYmVycyA9ICh7dmFsdWV9KSA9PiB7XG5jb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBtb3Rpb25WYWx1ZSA9IHVzZU1vdGlvblZhbHVlKDApO1xuICAgIGNvbnN0IHNwcmluZ1ZhbHVlID0gdXNlU3ByaW5nKG1vdGlvblZhbHVlLCB7IGR1cmF0aW9uOiAzMDAwIH0pXG4gICAgY29uc3QgaXNJblZpZXcgPSB1c2VJblZpZXcocmVmKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKGlzSW5WaWV3KXtcbiAgICAgICAgICAgIG1vdGlvblZhbHVlLnNldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbaXNJblZpZXcsIHZhbHVlLCBtb3Rpb25WYWx1ZV0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzcHJpbmdWYWx1ZS5vbihcImNoYW5nZVwiLCAobGF0ZXN0KSA9PiB7XG4gICAgICAgICAgICBpZihyZWYuY3VycmVudCAmJiBsYXRlc3QudG9GaXhlZCgwKSA8PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQudGV4dENvbnRlbnQgPSBsYXRlc3QudG9GaXhlZCgwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sIFtzcHJpbmdWYWx1ZSwgdmFsdWVdKVxuXG4gICAgcmV0dXJuIDxzcGFuIHJlZj17cmVmfT48L3NwYW4+XG59XG5cbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q2hyaXN0aW5lIFdvbmcgfCBBYm91dCBQYWdlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiYWJvdXQgQ2hyaXN0aW5lXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwicHQtMTRcIj5cbiAgICAgICAgICAgICAgIDxBbmltYXRlZFRleHQgdGV4dD1cIlBhc3Npb24gRnVlbHMgUHVycG9zZVwiIGNsYXNzTmFtZT0nbWItMTYnLz5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIHctZnVsbCBncmlkLWNvbHMtOCBnYXAtMTYnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0zIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCc+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J21iLTQgdGV4dC1sZyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZGFyay83NSc+QWJvdXQgTWU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtJz5cbiAgICAgICAgICAgICAgICAgICAgSGksIEknbSBDb2RlQnVja3MsIGEgd2ViIGRldmVsb3BlciBhbmQgVUkvVVggZGVzaWduZXIgd2l0aCBhIHBhc3Npb24gZm9yIGNyZWF0aW5nIGJlYXV0aWZ1bCwgZnVuY3Rpb25hbCwgXG5hbmQgdXNlci1jZW50ZXJlZCBkaWdpdGFsIGV4cGVyaWVuY2VzLiBXaXRoIDQgeWVhcnMgb2YgZXhwZXJpZW5jZSBpbiB0aGUgZmllbGQuIEkgYW0gYWx3YXlzIGxvb2tpbmcgZm9yIFxubmV3IGFuZCBpbm5vdmF0aXZlIHdheXMgdG8gYnJpbmcgbXkgY2xpZW50cycgdmlzaW9ucyB0byBsaWZlLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXktNCBmb250LW1lZGl1bSc+XG4gICAgICAgICAgICAgICAgICAgIEkgYmVsaWV2ZSB0aGF0IGRlc2lnbiBpcyBhYm91dCBtb3JlIHRoYW4ganVzdCBtYWtpbmcgdGhpbmdzIGxvb2sgcHJldHR5IOKAkyBpdCdzIGFib3V0IHNvbHZpbmcgcHJvYmxlbXMgYW5kIFxuY3JlYXRpbmcgaW50dWl0aXZlLCBlbmpveWFibGUgZXhwZXJpZW5jZXMgZm9yIHVzZXJzLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1tZWRpdW0nPlxuICAgICAgICAgICAgICAgICAgICBXaGV0aGVyIEknbSB3b3JraW5nIG9uIGEgd2Vic2l0ZSwgbW9iaWxlIGFwcCwgb3IgXG5vdGhlciBkaWdpdGFsIHByb2R1Y3QsIEkgYnJpbmcgbXkgY29tbWl0bWVudCB0byBkZXNpZ24gZXhjZWxsZW5jZSBhbmQgdXNlci1jZW50ZXJlZCB0aGlua2luZyB0byBcbmV2ZXJ5IHByb2plY3QgSSB3b3JrIG9uLiBJIGxvb2sgZm9yd2FyZCB0byB0aGUgb3Bwb3J0dW5pdHkgdG8gYnJpbmcgbXkgc2tpbGxzIGFuZCBwYXNzaW9uIHRvIHlvdXIgbmV4dCBwcm9qZWN0LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTMgcmVsYXRpdmUgaC1tYXggcm91bmRlZC0yeGwgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1kYXJrIGJnLWxpZ2h0IHAtOCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMCAtcmlnaHQtMyAtei0xMCB3LVsxMDIlXSBoLVsxMDMlXSByb3VuZGVkLVsycmVtXSBiZy1kYXJrJy8+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2ZpbGVQaWN9IGFsdD1cIkNocmlzdGluZVwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gcm91bmRlZC0yeGxcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0ZXh0LTd4bCBmb250LWJvbGQgJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWROdW1iZXJzIHZhbHVlPXsxMH0gLz4rXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NuYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHRleHQtZGFyay83NVwiPnByb2plY3RzIGNvbXBsZXRlZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdGV4dC03eGwgZm9udC1ib2xkICc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWROdW1iZXJzIHZhbHVlPXsxNX0gLz4rXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NuYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHRleHQtZGFyay83NVwiPnllYXJzIG9mIHdvcmsgZXhwZXJpZW5jZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdGV4dC03eGwgZm9udC1ib2xkICc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWROdW1iZXJzIHZhbHVlPXsxMH0gLz4rXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NuYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHRleHQtZGFyay83NVwiPnNhdGlzZmllZCBjbGllbnRzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD4gXG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IGFib3V0Il0sIm5hbWVzIjpbIkFuaW1hdGVkVGV4dCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiSGVhZCIsIkxheW91dCIsInByb2ZpbGVQaWMiLCJJbWFnZSIsIm1vdGlvblZhbHVlIiwidXNlSW5WaWV3IiwidXNlTW90aW9uVmFsdWUiLCJ1c2VTcHJpbmciLCJ1c2VSZWYiLCJBbmltYXRlZE51bWJlcnMiLCJ2YWx1ZSIsInJlZiIsInNwcmluZ1ZhbHVlIiwiZHVyYXRpb24iLCJpc0luVmlldyIsInNldCIsIm9uIiwibGF0ZXN0IiwiY3VycmVudCIsInRvRml4ZWQiLCJ0ZXh0Q29udGVudCIsInNwYW4iLCJhYm91dCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWFpbiIsImNsYXNzTmFtZSIsInRleHQiLCJkaXYiLCJoMiIsInAiLCJzcmMiLCJhbHQiLCJjbGFzc25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});
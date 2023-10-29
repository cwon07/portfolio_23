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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _public_images_profile_no_background_profile_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/profile/no_background_profile.png */ \"./public/images/profile/no_background_profile.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AnimatedNumbers = (param)=>{\n    let { value  } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue)(0);\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(motionValue, {\n        duration: 3000\n    });\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView)(ref);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(value);\n        }\n    }, [\n        isInView,\n        value,\n        motionValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        springValue.on(\"change\", (latest)=>{\n            if (ref.current && latest.toFixed(0) <= value) {\n                ref.current.textContent = latest.toFixed(0);\n            }\n        });\n    }, [\n        springValue,\n        value\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n        lineNumber: 31,\n        columnNumber: 12\n    }, undefined);\n};\n_s(AnimatedNumbers, \"b8aj1/ahv2yZpM7Evi2PhhKh64k=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView\n    ];\n});\n_c = AnimatedNumbers;\nconst about = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Christine Wong | About Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"about Christine\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"pt-14\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Passion Fuels Purpose\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 43,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-cols-8 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 flex flex-col items-start justify-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"mb-4 text-lg font-bold uppercase text-dark/75\",\n                                            children: \"About Me\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-medium\",\n                                            children: \"I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \"Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                            src: _public_images_profile_no_background_profile_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            alt: \"Christine\",\n                                            className: \"w-full h-auto rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2 flex flex-col items-end justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 10\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 29\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"projects completed\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: \"15+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"years of work experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold \",\n                                                    children: \"50+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    classname: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"satisfied clients\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                            lineNumber: 44,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                    lineNumber: 42,\n                    columnNumber: 16\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/christine/Desktop/portfolio/src/pages/about.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\nvar _c;\n$RefreshReg$(_c, \"AnimatedNumbers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXQuanM/ZmQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gJ0AvY29tcG9uZW50cy9BbmltYXRlZFRleHQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgcHJvZmlsZVBpYyBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL3Byb2ZpbGUvbm9fYmFja2dyb3VuZF9wcm9maWxlLnBuZydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgbW90aW9uVmFsdWUsIHVzZUluVmlldywgdXNlTW90aW9uVmFsdWUsIHVzZVNwcmluZyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQW5pbWF0ZWROdW1iZXJzID0gKHt2YWx1ZX0pID0+IHtcbmNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IG1vdGlvblZhbHVlID0gdXNlTW90aW9uVmFsdWUoMCk7XG4gICAgY29uc3Qgc3ByaW5nVmFsdWUgPSB1c2VTcHJpbmcobW90aW9uVmFsdWUsIHsgZHVyYXRpb246IDMwMDAgfSlcbiAgICBjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWYpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoaXNJblZpZXcpe1xuICAgICAgICAgICAgbW90aW9uVmFsdWUuc2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtpc0luVmlldywgdmFsdWUsIG1vdGlvblZhbHVlXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNwcmluZ1ZhbHVlLm9uKFwiY2hhbmdlXCIsIChsYXRlc3QpID0+IHtcbiAgICAgICAgICAgIGlmKHJlZi5jdXJyZW50ICYmIGxhdGVzdC50b0ZpeGVkKDApIDw9IHZhbHVlKXtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC50ZXh0Q29udGVudCA9IGxhdGVzdC50b0ZpeGVkKDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSwgW3NwcmluZ1ZhbHVlLCB2YWx1ZV0pXG5cbiAgICByZXR1cm4gPHNwYW4gcmVmPXtyZWZ9Pjwvc3Bhbj5cbn1cblxuY29uc3QgYWJvdXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5DaHJpc3RpbmUgV29uZyB8IEFib3V0IFBhZ2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJhYm91dCBDaHJpc3RpbmVcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJwdC0xNFwiPlxuICAgICAgICAgICAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PVwiUGFzc2lvbiBGdWVscyBQdXJwb3NlXCIgY2xhc3NOYW1lPSdtYi0xNicvPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgdy1mdWxsIGdyaWQtY29scy04IGdhcC0xNic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTMgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWItNCB0ZXh0LWxnIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1kYXJrLzc1Jz5BYm91dCBNZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1tZWRpdW0nPlxuICAgICAgICAgICAgICAgICAgICBIaSwgSSdtIENvZGVCdWNrcywgYSB3ZWIgZGV2ZWxvcGVyIGFuZCBVSS9VWCBkZXNpZ25lciB3aXRoIGEgcGFzc2lvbiBmb3IgY3JlYXRpbmcgYmVhdXRpZnVsLCBmdW5jdGlvbmFsLCBcbmFuZCB1c2VyLWNlbnRlcmVkIGRpZ2l0YWwgZXhwZXJpZW5jZXMuIFdpdGggNCB5ZWFycyBvZiBleHBlcmllbmNlIGluIHRoZSBmaWVsZC4gSSBhbSBhbHdheXMgbG9va2luZyBmb3IgXG5uZXcgYW5kIGlubm92YXRpdmUgd2F5cyB0byBicmluZyBteSBjbGllbnRzJyB2aXNpb25zIHRvIGxpZmUuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdteS00IGZvbnQtbWVkaXVtJz5cbiAgICAgICAgICAgICAgICAgICAgSSBiZWxpZXZlIHRoYXQgZGVzaWduIGlzIGFib3V0IG1vcmUgdGhhbiBqdXN0IG1ha2luZyB0aGluZ3MgbG9vayBwcmV0dHkg4oCTIGl0J3MgYWJvdXQgc29sdmluZyBwcm9ibGVtcyBhbmQgXG5jcmVhdGluZyBpbnR1aXRpdmUsIGVuam95YWJsZSBleHBlcmllbmNlcyBmb3IgdXNlcnMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LW1lZGl1bSc+XG4gICAgICAgICAgICAgICAgICAgIFdoZXRoZXIgSSdtIHdvcmtpbmcgb24gYSB3ZWJzaXRlLCBtb2JpbGUgYXBwLCBvciBcbm90aGVyIGRpZ2l0YWwgcHJvZHVjdCwgSSBicmluZyBteSBjb21taXRtZW50IHRvIGRlc2lnbiBleGNlbGxlbmNlIGFuZCB1c2VyLWNlbnRlcmVkIHRoaW5raW5nIHRvIFxuZXZlcnkgcHJvamVjdCBJIHdvcmsgb24uIEkgbG9vayBmb3J3YXJkIHRvIHRoZSBvcHBvcnR1bml0eSB0byBicmluZyBteSBza2lsbHMgYW5kIHBhc3Npb24gdG8geW91ciBuZXh0IHByb2plY3QuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMyByZWxhdGl2ZSBoLW1heCByb3VuZGVkLTJ4bCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgYmctbGlnaHQgcC04Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIC1yaWdodC0zIC16LTEwIHctWzEwMiVdIGgtWzEwMyVdIHJvdW5kZWQtWzJyZW1dIGJnLWRhcmsnLz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY30gYWx0PVwiQ2hyaXN0aW5lXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byByb3VuZGVkLTJ4bFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTIgZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtN3hsIGZvbnQtYm9sZCAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZE51bWJlcnMgdmFsdWU9ezEwfSAvPitcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc25hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIGNhcGl0YWxpemUgdGV4dC1kYXJrLzc1XCI+cHJvamVjdHMgY29tcGxldGVkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0ZXh0LTd4bCBmb250LWJvbGQgJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNStcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc25hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIGNhcGl0YWxpemUgdGV4dC1kYXJrLzc1XCI+eWVhcnMgb2Ygd29yayBleHBlcmllbmNlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0ZXh0LTd4bCBmb250LWJvbGQgJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MCtcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc25hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIGNhcGl0YWxpemUgdGV4dC1kYXJrLzc1XCI+c2F0aXNmaWVkIGNsaWVudHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PiBcbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIFxuZXhwb3J0IGRlZmF1bHQgYWJvdXQiXSwibmFtZXMiOlsiQW5pbWF0ZWRUZXh0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiTGF5b3V0IiwicHJvZmlsZVBpYyIsIkltYWdlIiwibW90aW9uVmFsdWUiLCJ1c2VJblZpZXciLCJ1c2VNb3Rpb25WYWx1ZSIsInVzZVNwcmluZyIsInVzZVJlZiIsIkFuaW1hdGVkTnVtYmVycyIsInZhbHVlIiwicmVmIiwic3ByaW5nVmFsdWUiLCJkdXJhdGlvbiIsImlzSW5WaWV3Iiwic2V0Iiwib24iLCJsYXRlc3QiLCJjdXJyZW50IiwidG9GaXhlZCIsInRleHRDb250ZW50Iiwic3BhbiIsImFib3V0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwiY2xhc3NOYW1lIiwidGV4dCIsImRpdiIsImgyIiwicCIsInNyYyIsImFsdCIsImNsYXNzbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});
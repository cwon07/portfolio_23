"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AnimatedText.js":
/*!****************************************!*\
  !*** ./src/components/AnimatedText.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst quote = {\n    initial: {\n        opacity: 1\n    },\n    animate: {\n        opacity: 1,\n        transition: {\n            delay: 0.5,\n            staggerChildren: 0.08\n        }\n    }\n};\nconst singleWord = {\n    initial: {\n        opacity: 0,\n        y: 50\n    },\n    animate: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1\n        }\n    }\n};\nconst AnimatedText = (param)=>{\n    let { text , className =\"\"  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: \"inline-block w-full text-dark font-bold capitalize text-8xl \".concat(className),\n            variants: quote,\n            initial: \"initial\",\n            animate: \"animate\",\n            children: text.split(\" \").map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block\",\n                    variants: singleWord,\n                    initial: \"initial\",\n                    animate: \"animate\",\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, word + \"-\" + index, true, {\n                    fileName: \"/Users/christine/Desktop/portfolio/src/components/AnimatedText.js\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/christine/Desktop/portfolio/src/components/AnimatedText.js\",\n            lineNumber: 35,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/christine/Desktop/portfolio/src/components/AnimatedText.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_c = AnimatedText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedText);\nvar _c;\n$RefreshReg$(_c, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QjtBQUNXO0FBRXBDLE1BQU1FLFFBQVE7SUFDVkMsU0FBUTtRQUNKQyxTQUFTO0lBQ2I7SUFDQUMsU0FBUTtRQUNKRCxTQUFRO1FBQ1JFLFlBQVk7WUFDUkMsT0FBTTtZQUNOQyxpQkFBaUI7UUFDckI7SUFDSjtBQUNKO0FBRUEsTUFBTUMsYUFBYTtJQUNmTixTQUFRO1FBQ0pDLFNBQVM7UUFDVE0sR0FBRTtJQUNOO0lBQ0FMLFNBQVE7UUFDSkQsU0FBUTtRQUNSTSxHQUFFO1FBQ0ZKLFlBQVk7WUFDUkssVUFBUztRQUNiO0lBQ0o7QUFDSjtBQUVBLE1BQU1DLGVBQWUsU0FBNEI7UUFBM0IsRUFBRUMsS0FBSSxFQUFFQyxXQUFVLEdBQUUsRUFBRTtJQUN4QyxxQkFDSSw4REFBQ0M7UUFBSUQsV0FBVTtrQkFFYiw0RUFBQ2Isb0RBQVM7WUFBQ2EsV0FBVywrREFBeUUsT0FBVkE7WUFDbkZHLFVBQVVmO1lBQ1ZDLFNBQVE7WUFDUkUsU0FBUTtzQkFHSlEsS0FBS0ssS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDdkIsOERBQUNwQixzREFBVztvQkFBc0JhLFdBQVU7b0JBQzVDRyxVQUFVUjtvQkFDVk4sU0FBUTtvQkFDUkUsU0FBUTs7d0JBRUhlO3dCQUFLOzttQkFMUUEsT0FBSyxNQUFJQzs7Ozs7Ozs7Ozs7Ozs7O0FBVS9DO0tBckJNVDtBQXVCTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanM/NGMxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgcXVvdGUgPSB7XG4gICAgaW5pdGlhbDp7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgfSxcbiAgICBhbmltYXRlOntcbiAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBkZWxheTowLjUsXG4gICAgICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMDgsXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IHNpbmdsZVdvcmQgPSB7XG4gICAgaW5pdGlhbDp7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHk6NTAsXG4gICAgfSxcbiAgICBhbmltYXRlOntcbiAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICB5OjAsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOjFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgQW5pbWF0ZWRUZXh0ID0gKHsgdGV4dCwgY2xhc3NOYW1lPVwiXCIgfSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBteC1hdXRvIHB5LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcbiAgICAgICAgb3ZlcmZsb3ctaGlkZGVuXG4gICAgICAgICc+PG1vdGlvbi5oMSBjbGFzc05hbWU9e2BpbmxpbmUtYmxvY2sgdy1mdWxsIHRleHQtZGFyayBmb250LWJvbGQgY2FwaXRhbGl6ZSB0ZXh0LTh4bCAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgICAgdmFyaWFudHM9e3F1b3RlfVxuICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dC5zcGxpdChcIiBcIikubWFwKCh3b3JkLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuIGtleT17d29yZCsnLScraW5kZXggfWNsYXNzTmFtZT0naW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17c2luZ2xlV29yZH1cbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JkfSZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvbW90aW9uLmgxPjwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRUZXh0Il0sIm5hbWVzIjpbInJlYWN0IiwibW90aW9uIiwicXVvdGUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJzdGFnZ2VyQ2hpbGRyZW4iLCJzaW5nbGVXb3JkIiwieSIsImR1cmF0aW9uIiwiQW5pbWF0ZWRUZXh0IiwidGV4dCIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwidmFyaWFudHMiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJpbmRleCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n"));

/***/ })

});
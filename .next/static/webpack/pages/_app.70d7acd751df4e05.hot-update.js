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

/***/ "./src/components/hooks/useThemeSwitcher.js":
/*!**************************************************!*\
  !*** ./src/components/hooks/useThemeSwitcher.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useThemeSwitcher = ()=>{\n    _s();\n    const preferDarkQuery = \"(prefer-color-scheme: dark)\";\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const mediaQuery = window.matchMedia(preferDarkQuery);\n        const userPref = window.localStorage.getItem(\"theme\");\n        const handleChange = ()=>{\n            if (usePref) {\n                let check = userPref === \"dark\" ? \"dark\" : \"light\";\n                setMode(check);\n                if (check === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                } else {\n                    document.documentElement.classList.remove(\"dark\");\n                }\n            } else {\n                let check = mediaQuery.matches ? \"dark\" : \"light\";\n                setMode(check);\n                if (check === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                } else {\n                    document.documentElement.classList.remove(\"dark\");\n                }\n            }\n        };\n        handleChange();\n        mediaQuery.addEventListener(\"change\", handleChange);\n        return ()=>mediaQuery.removeEventListener(\"change\", handleChange);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (mode === \"dark\") {\n            window.localStorage.setItem(\"theme\", \"dark\");\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            window.localStorage.setItem(\"theme\", \"light\");\n            document.documentElement.classList.remove(\"dark\");\n        }\n    }, [\n        mode\n    ]);\n    return [\n        mode,\n        setMode\n    ];\n};\n_s(useThemeSwitcher, \"ImorwBueLsHEOImKuw/vqku/JqU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useThemeSwitcher);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VUaGVtZVN3aXRjaGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBa0Q7QUFFbEQsTUFBTUcsbUJBQW1CLElBQU07O0lBRTNCLE1BQU1DLGtCQUFrQjtJQUN4QixNQUFLLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFFaENELGdEQUFTQSxDQUFDLElBQU07UUFFWixNQUFNTSxhQUFhQyxPQUFPQyxVQUFVLENBQUNMO1FBQ3JDLE1BQU1NLFdBQVdGLE9BQU9HLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBRTdDLE1BQU1DLGVBQWUsSUFBTTtZQUN2QixJQUFHQyxTQUFRO2dCQUNQLElBQUlDLFFBQVFMLGFBQWEsU0FBUyxTQUFTLE9BQU87Z0JBQ2xESixRQUFRUztnQkFDUixJQUFHQSxVQUFVLFFBQVE7b0JBQ2pCQyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO2dCQUMzQyxPQUFNO29CQUNGSCxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO2dCQUM5QyxDQUFDO1lBQ0wsT0FBTTtnQkFDRixJQUFJTCxRQUFRUixXQUFXYyxPQUFPLEdBQUcsU0FBUyxPQUFPO2dCQUNqRGYsUUFBUVM7Z0JBQ1IsSUFBR0EsVUFBVSxRQUFRO29CQUNqQkMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztnQkFDM0MsT0FBTTtvQkFDRkgsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztnQkFDOUMsQ0FBQztZQUNMLENBQUM7UUFDTDtRQUVBUDtRQUVBTixXQUFXZSxnQkFBZ0IsQ0FBQyxVQUFVVDtRQUV0QyxPQUFPLElBQU9OLFdBQVdnQixtQkFBbUIsQ0FBQyxVQUFVVjtJQUUzRCxHQUFHLEVBQUU7SUFFTFosZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUdJLFNBQVMsUUFBTztZQUNmRyxPQUFPRyxZQUFZLENBQUNhLE9BQU8sQ0FBQyxTQUFTO1lBQ3JDUixTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQzNDLE9BQU07WUFDRlgsT0FBT0csWUFBWSxDQUFDYSxPQUFPLENBQUMsU0FBUztZQUNyQ1IsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztRQUM5QyxDQUFDO0lBQ0wsR0FBRztRQUFDZjtLQUFLO0lBR1QsT0FDSTtRQUFDQTtRQUFNQztLQUFRO0FBRXZCO0dBcERNSDtBQXNETiwrREFBZUEsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvb2tzL3VzZVRoZW1lU3dpdGNoZXIuanM/NzY0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB1c2VUaGVtZVN3aXRjaGVyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcHJlZmVyRGFya1F1ZXJ5ID0gXCIocHJlZmVyLWNvbG9yLXNjaGVtZTogZGFyaylcIjtcbiAgICBjb25zdFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEocHJlZmVyRGFya1F1ZXJ5KTtcbiAgICAgICAgY29uc3QgdXNlclByZWYgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcblxuICAgICAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZih1c2VQcmVmKXtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSB1c2VyUHJlZiA9PT0gXCJkYXJrXCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIjtcbiAgICAgICAgICAgICAgICBzZXRNb2RlKGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZihjaGVjayA9PT0gXCJkYXJrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gbWVkaWFRdWVyeS5tYXRjaGVzID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XG4gICAgICAgICAgICAgICAgc2V0TW9kZShjaGVjayk7XG4gICAgICAgICAgICAgICAgaWYoY2hlY2sgPT09IFwiZGFya1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlQ2hhbmdlKCk7XG5cbiAgICAgICAgbWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZUNoYW5nZSlcblxuICAgICAgICByZXR1cm4gKCApID0+IG1lZGlhUXVlcnkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVDaGFuZ2UpXG5cbiAgICB9LCBbXSlcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihtb2RlID09PSBcImRhcmtcIil7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XG4gICAgICAgIH1cbiAgICB9LCBbbW9kZV0pXG5cblxuICAgIHJldHVybihcbiAgICAgICAgW21vZGUsIHNldE1vZGVdXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZVN3aXRjaGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VUaGVtZVN3aXRjaGVyIiwicHJlZmVyRGFya1F1ZXJ5IiwibW9kZSIsInNldE1vZGUiLCJtZWRpYVF1ZXJ5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsInVzZXJQcmVmIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUNoYW5nZSIsInVzZVByZWYiLCJjaGVjayIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibWF0Y2hlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/hooks/useThemeSwitcher.js\n"));

/***/ })

});
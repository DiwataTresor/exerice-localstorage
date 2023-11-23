"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./hooks/useLocalStorage.js":
/*!**********************************!*\
  !*** ./hooks/useLocalStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useLocalStorage = (key, initialValue)=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{\n        // Initialize the state\n        try {\n            const value = window.localStorage.getItem(key);\n            // Check if the local storage already has any values,\n            // otherwise initialize it with the passed initialValue\n            return value ? JSON.parse(value) : initialValue;\n        } catch (error) {\n            console.log(error);\n        }\n    });\n    const setValue = (value)=>{\n        try {\n            // If the passed value is a callback function,\n            //  then call it with the existing state.\n            const valueToStore = value instanceof Function ? value(state) : value;\n            window.localStorage.setItem(key, JSON.stringify(valueToStore));\n            setState(value);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return [\n        state,\n        setValue\n    ];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalStorage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VMb2NhbFN0b3JhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBRWpDLE1BQU1DLGtCQUFrQixDQUFDQyxLQUFLQyxlQUFpQjtJQUM3QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsSUFBTTtRQUN2Qyx1QkFBdUI7UUFDdkIsSUFBSTtZQUNGLE1BQU1NLFFBQVFDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDUDtZQUMxQyxxREFBcUQ7WUFDckQsdURBQXVEO1lBQ3ZELE9BQU9JLFFBQVFJLEtBQUtDLEtBQUssQ0FBQ0wsU0FBU0gsWUFBWTtRQUNqRCxFQUFFLE9BQU9TLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFQSxNQUFNRyxXQUFXLENBQUNULFFBQVU7UUFDMUIsSUFBSTtZQUNGLDhDQUE4QztZQUM5Qyx5Q0FBeUM7WUFDekMsTUFBTVUsZUFBZVYsaUJBQWlCVyxXQUFXWCxNQUFNRixTQUFTRSxLQUFLO1lBQ3JFQyxPQUFPQyxZQUFZLENBQUNVLE9BQU8sQ0FBQ2hCLEtBQUtRLEtBQUtTLFNBQVMsQ0FBQ0g7WUFDaERYLFNBQVNDO1FBQ1gsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEsT0FBTztRQUFDUjtRQUFPVztLQUFTO0FBQzFCO0FBRUEsaUVBQWVkLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWxvY2FsLXN0b3JhZ2UvLi9ob29rcy91c2VMb2NhbFN0b3JhZ2UuanM/MzNkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB1c2VMb2NhbFN0b3JhZ2UgPSAoa2V5LCBpbml0aWFsVmFsdWUpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgc3RhdGVcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBsb2NhbCBzdG9yYWdlIGFscmVhZHkgaGFzIGFueSB2YWx1ZXMsXG4gICAgICAvLyBvdGhlcndpc2UgaW5pdGlhbGl6ZSBpdCB3aXRoIHRoZSBwYXNzZWQgaW5pdGlhbFZhbHVlXG4gICAgICByZXR1cm4gdmFsdWUgPyBKU09OLnBhcnNlKHZhbHVlKSA6IGluaXRpYWxWYWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gSWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLFxuICAgICAgLy8gIHRoZW4gY2FsbCBpdCB3aXRoIHRoZSBleGlzdGluZyBzdGF0ZS5cbiAgICAgIGNvbnN0IHZhbHVlVG9TdG9yZSA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShzdGF0ZSkgOiB2YWx1ZTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlVG9TdG9yZSkpO1xuICAgICAgc2V0U3RhdGUodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBbc3RhdGUsIHNldFZhbHVlXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUxvY2FsU3RvcmFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUxvY2FsU3RvcmFnZSIsImtleSIsImluaXRpYWxWYWx1ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJ2YWx1ZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZXRWYWx1ZSIsInZhbHVlVG9TdG9yZSIsIkZ1bmN0aW9uIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useLocalStorage.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useLocalStorage */ \"./hooks/useLocalStorage.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    // Get the value from local storage if it exists\n    const [value, setValue] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"favoriteNumber\", \"\");\n    // Set the value received from the local storage to a local state\n    const [favoriteNumber, setFavoriteNumber] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(value);\n    // When user submits the form, save the favorite number to the local storage\n    const saveToLocalStorage = (e)=>{\n        e.preventDefault();\n        setValue(favoriteNumber);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"number\",\n                children: \"Your favorite number\"\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/projets/git/next-local-storage/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: saveToLocalStorage,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"number\",\n                        value: favoriteNumber,\n                        onChange: (e)=>setFavoriteNumber(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Documents/projets/git/next-local-storage/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Save\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Documents/projets/git/next-local-storage/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbook/Documents/projets/git/next-local-storage/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbook/Documents/projets/git/next-local-storage/pages/index.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNEO0FBQ3JCO0FBRWxCLFNBQVNFLE9BQU87SUFDN0IsZ0RBQWdEO0lBQ2hELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSixrRUFBZUEsQ0FBQyxrQkFBa0I7SUFFNUQsaUVBQWlFO0lBQ2pFLE1BQU0sQ0FBQ0ssZ0JBQWdCQyxrQkFBa0IsR0FBR0wsK0NBQVFBLENBQUNFO0lBRXJELDRFQUE0RTtJQUM1RSxNQUFNSSxxQkFBcUIsQ0FBQ0MsSUFBTTtRQUNoQ0EsRUFBRUMsY0FBYztRQUNoQkwsU0FBU0M7SUFDWDtJQUVBLHFCQUNFLDhEQUFDSzs7MEJBQ0MsOERBQUNDO2dCQUFNQyxTQUFROzBCQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDQztnQkFBS0MsVUFBVVA7O2tDQUNkLDhEQUFDUTt3QkFDQ0MsSUFBRzt3QkFDSGIsT0FBT0U7d0JBQ1BZLFVBQVUsQ0FBQ1QsSUFBTUYsa0JBQWtCRSxFQUFFVSxNQUFNLENBQUNmLEtBQUs7Ozs7OztrQ0FFbkQsOERBQUNZO3dCQUFNSSxNQUFLO3dCQUFTaEIsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWxvY2FsLXN0b3JhZ2UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VMb2NhbFN0b3JhZ2UgZnJvbSBcIkAvaG9va3MvdXNlTG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBHZXQgdGhlIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBpdCBleGlzdHNcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VMb2NhbFN0b3JhZ2UoXCJmYXZvcml0ZU51bWJlclwiLCBcIlwiKTtcblxuICAvLyBTZXQgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UgdG8gYSBsb2NhbCBzdGF0ZVxuICBjb25zdCBbZmF2b3JpdGVOdW1iZXIsIHNldEZhdm9yaXRlTnVtYmVyXSA9IHVzZVN0YXRlKHZhbHVlKTtcblxuICAvLyBXaGVuIHVzZXIgc3VibWl0cyB0aGUgZm9ybSwgc2F2ZSB0aGUgZmF2b3JpdGUgbnVtYmVyIHRvIHRoZSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IHNhdmVUb0xvY2FsU3RvcmFnZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFZhbHVlKGZhdm9yaXRlTnVtYmVyKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm51bWJlclwiPllvdXIgZmF2b3JpdGUgbnVtYmVyPC9sYWJlbD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzYXZlVG9Mb2NhbFN0b3JhZ2V9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e2Zhdm9yaXRlTnVtYmVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmF2b3JpdGVOdW1iZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2F2ZVwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlTG9jYWxTdG9yYWdlIiwidXNlU3RhdGUiLCJIb21lIiwidmFsdWUiLCJzZXRWYWx1ZSIsImZhdm9yaXRlTnVtYmVyIiwic2V0RmF2b3JpdGVOdW1iZXIiLCJzYXZlVG9Mb2NhbFN0b3JhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsImlkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
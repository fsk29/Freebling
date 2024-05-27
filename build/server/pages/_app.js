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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Tutorials/TutorialsWrapper.tsx":
/*!***************************************************!*\
  !*** ./components/Tutorials/TutorialsWrapper.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reactour_popover_dist_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reactour/popover/dist/index.css */ \"./node_modules/@reactour/popover/dist/index.css\");\n/* harmony import */ var _reactour_popover_dist_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reactour_popover_dist_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reactour_tour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reactour/tour */ \"@reactour/tour\");\n/* harmony import */ var _reactour_tour__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reactour_tour__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst TutorialsWrapper = ({ children })=>{\n    const opositeSide = {\n        top: \"bottom\",\n        bottom: \"top\",\n        right: \"left\",\n        left: \"right\"\n    };\n    const makeArrow = (position, verticalAlign, horizontalAlign)=>{\n        if (!position || position === \"custom\") {\n            return {};\n        }\n        const width = 16;\n        const height = 12;\n        const color = \"#257D86\";\n        const isVertical = position === \"top\" || position === \"bottom\";\n        const spaceFromSide = 10;\n        const obj = {\n            [`--rtp-arrow-${isVertical ? opositeSide[horizontalAlign] : verticalAlign}`]: height + spaceFromSide + \"px\",\n            [`--rtp-arrow-${opositeSide[position]}`]: -height + 2 + \"px\",\n            [`--rtp-arrow-border-${isVertical ? \"left\" : \"top\"}`]: `${width / 2}px solid transparent`,\n            [`--rtp-arrow-border-${isVertical ? \"right\" : \"bottom\"}`]: `${width / 2}px solid transparent`,\n            [`--rtp-arrow-border-${position}`]: `${height}px solid ${color}`\n        };\n        return obj;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reactour_tour__WEBPACK_IMPORTED_MODULE_2__.TourProvider, {\n        steps: [],\n        disableFocusLock: true,\n        disableKeyboardNavigation: true,\n        disableDotsNavigation: true,\n        scrollSmooth: true,\n        disableInteraction: true,\n        styles: {\n            popover: (base, state)=>({\n                    ...base,\n                    minWidth: \"320px\",\n                    backgroundColor: \"#257D86\",\n                    borderRadius: \"8px\",\n                    padding: \"16px\",\n                    ...makeArrow(state?.position, state?.verticalAlign, state?.horizontalAlign)\n                }),\n            dot: (base)=>({\n                    ...base,\n                    display: \"none\"\n                }),\n            close: (base)=>({\n                    ...base,\n                    display: \"none\"\n                }),\n            badge: (base)=>({\n                    ...base,\n                    display: \"none\"\n                }),\n            controls: (base)=>({\n                    ...base,\n                    display: \"none\"\n                })\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/components/Tutorials/TutorialsWrapper.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TutorialsWrapper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1R1dG9yaWFscy9UdXRvcmlhbHNXcmFwcGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQztBQUNJO0FBTzlDLE1BQU1DLG1CQUE4QyxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUMvRCxNQUFNQyxjQUFjO1FBQ2xCQyxLQUFLO1FBQ0xDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFFQSxNQUFNQyxZQUFZLENBQ2hCQyxVQUNBQyxlQUNBQztRQUVBLElBQUksQ0FBQ0YsWUFBWUEsYUFBYSxVQUFVO1lBQ3RDLE9BQU8sQ0FBQztRQUNWO1FBRUEsTUFBTUcsUUFBUTtRQUNkLE1BQU1DLFNBQVM7UUFDZixNQUFNQyxRQUFRO1FBQ2QsTUFBTUMsYUFBYU4sYUFBYSxTQUFTQSxhQUFhO1FBQ3RELE1BQU1PLGdCQUFnQjtRQUV0QixNQUFNQyxNQUFNO1lBQ1YsQ0FBQyxDQUFDLFlBQVksRUFDWkYsYUFBYVosV0FBVyxDQUFDUSxnQkFBZ0IsR0FBR0QsY0FDN0MsQ0FBQyxDQUFDLEVBQUVHLFNBQVNHLGdCQUFnQjtZQUM5QixDQUFDLENBQUMsWUFBWSxFQUFFYixXQUFXLENBQUNNLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDSSxTQUFTLElBQUk7WUFDeEQsQ0FBQyxDQUFDLG1CQUFtQixFQUFFRSxhQUFhLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3RESCxRQUFRLEVBQ1Qsb0JBQW9CLENBQUM7WUFDdEIsQ0FBQyxDQUFDLG1CQUFtQixFQUFFRyxhQUFhLFVBQVUsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQzFESCxRQUFRLEVBQ1Qsb0JBQW9CLENBQUM7WUFDdEIsQ0FBQyxDQUFDLG1CQUFtQixFQUFFSCxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRUksT0FBTyxTQUFTLEVBQUVDLE1BQU0sQ0FBQztRQUNsRTtRQUNBLE9BQU9HO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ2pCLHdEQUFZQTtRQUNYa0IsT0FBTyxFQUFFO1FBQ1RDLGdCQUFnQjtRQUNoQkMseUJBQXlCO1FBQ3pCQyxxQkFBcUI7UUFDckJDLFlBQVk7UUFDWkMsa0JBQWtCO1FBQ2xCQyxRQUFRO1lBQ05DLFNBQVMsQ0FBQ0MsTUFBTUMsUUFBVztvQkFDekIsR0FBR0QsSUFBSTtvQkFDUEUsVUFBVTtvQkFDVkMsaUJBQWlCO29CQUNqQkMsY0FBYztvQkFDZEMsU0FBUztvQkFDVCxHQUFHdkIsVUFDRG1CLE9BQU9sQixVQUNQa0IsT0FBT2pCLGVBQ1BpQixPQUFPaEIsZ0JBQ1I7Z0JBQ0g7WUFDQXFCLEtBQUssQ0FBQ04sT0FBVTtvQkFBRSxHQUFHQSxJQUFJO29CQUFFTyxTQUFTO2dCQUFPO1lBQzNDQyxPQUFPLENBQUNSLE9BQVU7b0JBQUUsR0FBR0EsSUFBSTtvQkFBRU8sU0FBUztnQkFBTztZQUM3Q0UsT0FBTyxDQUFDVCxPQUFVO29CQUFFLEdBQUdBLElBQUk7b0JBQUVPLFNBQVM7Z0JBQU87WUFDN0NHLFVBQVUsQ0FBQ1YsT0FBVTtvQkFBRSxHQUFHQSxJQUFJO29CQUFFTyxTQUFTO2dCQUFPO1FBQ2xEO2tCQUVDL0I7Ozs7OztBQUdQO0FBRUEsaUVBQWVELGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0ZyZWVibGluZy5pby8uL2NvbXBvbmVudHMvVHV0b3JpYWxzL1R1dG9yaWFsc1dyYXBwZXIudHN4P2EyNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHJlYWN0b3VyL3BvcG92ZXIvZGlzdC9pbmRleC5jc3NcIjtcbmltcG9ydCB7IFRvdXJQcm92aWRlciB9IGZyb20gXCJAcmVhY3RvdXIvdG91clwiO1xuaW1wb3J0IHsgRkMsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFR1dG9yaWFsc1dyYXBwZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmNvbnN0IFR1dG9yaWFsc1dyYXBwZXI6IEZDPFR1dG9yaWFsc1dyYXBwZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IG9wb3NpdGVTaWRlID0ge1xuICAgIHRvcDogXCJib3R0b21cIixcbiAgICBib3R0b206IFwidG9wXCIsXG4gICAgcmlnaHQ6IFwibGVmdFwiLFxuICAgIGxlZnQ6IFwicmlnaHRcIixcbiAgfTtcblxuICBjb25zdCBtYWtlQXJyb3cgPSAoXG4gICAgcG9zaXRpb246IFwicmlnaHRcIiB8IFwibGVmdFwiIHwgXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImN1c3RvbVwiLFxuICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCIgfCBcImJvdHRvbVwiLFxuICAgIGhvcml6b250YWxBbGlnbjogXCJsZWZ0XCIgfCBcInJpZ2h0XCJcbiAgKSA9PiB7XG4gICAgaWYgKCFwb3NpdGlvbiB8fCBwb3NpdGlvbiA9PT0gXCJjdXN0b21cIikge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IHdpZHRoID0gMTY7XG4gICAgY29uc3QgaGVpZ2h0ID0gMTI7XG4gICAgY29uc3QgY29sb3IgPSBcIiMyNTdEODZcIjtcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gcG9zaXRpb24gPT09IFwidG9wXCIgfHwgcG9zaXRpb24gPT09IFwiYm90dG9tXCI7XG4gICAgY29uc3Qgc3BhY2VGcm9tU2lkZSA9IDEwO1xuXG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgW2AtLXJ0cC1hcnJvdy0ke1xuICAgICAgICBpc1ZlcnRpY2FsID8gb3Bvc2l0ZVNpZGVbaG9yaXpvbnRhbEFsaWduXSA6IHZlcnRpY2FsQWxpZ25cbiAgICAgIH1gXTogaGVpZ2h0ICsgc3BhY2VGcm9tU2lkZSArIFwicHhcIixcbiAgICAgIFtgLS1ydHAtYXJyb3ctJHtvcG9zaXRlU2lkZVtwb3NpdGlvbl19YF06IC1oZWlnaHQgKyAyICsgXCJweFwiLFxuICAgICAgW2AtLXJ0cC1hcnJvdy1ib3JkZXItJHtpc1ZlcnRpY2FsID8gXCJsZWZ0XCIgOiBcInRvcFwifWBdOiBgJHtcbiAgICAgICAgd2lkdGggLyAyXG4gICAgICB9cHggc29saWQgdHJhbnNwYXJlbnRgLFxuICAgICAgW2AtLXJ0cC1hcnJvdy1ib3JkZXItJHtpc1ZlcnRpY2FsID8gXCJyaWdodFwiIDogXCJib3R0b21cIn1gXTogYCR7XG4gICAgICAgIHdpZHRoIC8gMlxuICAgICAgfXB4IHNvbGlkIHRyYW5zcGFyZW50YCxcbiAgICAgIFtgLS1ydHAtYXJyb3ctYm9yZGVyLSR7cG9zaXRpb259YF06IGAke2hlaWdodH1weCBzb2xpZCAke2NvbG9yfWAsXG4gICAgfTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRvdXJQcm92aWRlclxuICAgICAgc3RlcHM9e1tdfVxuICAgICAgZGlzYWJsZUZvY3VzTG9ja1xuICAgICAgZGlzYWJsZUtleWJvYXJkTmF2aWdhdGlvblxuICAgICAgZGlzYWJsZURvdHNOYXZpZ2F0aW9uXG4gICAgICBzY3JvbGxTbW9vdGhcbiAgICAgIGRpc2FibGVJbnRlcmFjdGlvblxuICAgICAgc3R5bGVzPXt7XG4gICAgICAgIHBvcG92ZXI6IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAgICAgICAuLi5iYXNlLFxuICAgICAgICAgIG1pbldpZHRoOiBcIjMyMHB4XCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyNTdEODZcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXG4gICAgICAgICAgLi4ubWFrZUFycm93KFxuICAgICAgICAgICAgc3RhdGU/LnBvc2l0aW9uLFxuICAgICAgICAgICAgc3RhdGU/LnZlcnRpY2FsQWxpZ24sXG4gICAgICAgICAgICBzdGF0ZT8uaG9yaXpvbnRhbEFsaWduXG4gICAgICAgICAgKSxcbiAgICAgICAgfSksXG4gICAgICAgIGRvdDogKGJhc2UpID0+ICh7IC4uLmJhc2UsIGRpc3BsYXk6IFwibm9uZVwiIH0pLFxuICAgICAgICBjbG9zZTogKGJhc2UpID0+ICh7IC4uLmJhc2UsIGRpc3BsYXk6IFwibm9uZVwiIH0pLFxuICAgICAgICBiYWRnZTogKGJhc2UpID0+ICh7IC4uLmJhc2UsIGRpc3BsYXk6IFwibm9uZVwiIH0pLFxuICAgICAgICBjb250cm9sczogKGJhc2UpID0+ICh7IC4uLmJhc2UsIGRpc3BsYXk6IFwibm9uZVwiIH0pLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Ub3VyUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUdXRvcmlhbHNXcmFwcGVyOyJdLCJuYW1lcyI6WyJUb3VyUHJvdmlkZXIiLCJUdXRvcmlhbHNXcmFwcGVyIiwiY2hpbGRyZW4iLCJvcG9zaXRlU2lkZSIsInRvcCIsImJvdHRvbSIsInJpZ2h0IiwibGVmdCIsIm1ha2VBcnJvdyIsInBvc2l0aW9uIiwidmVydGljYWxBbGlnbiIsImhvcml6b250YWxBbGlnbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJpc1ZlcnRpY2FsIiwic3BhY2VGcm9tU2lkZSIsIm9iaiIsInN0ZXBzIiwiZGlzYWJsZUZvY3VzTG9jayIsImRpc2FibGVLZXlib2FyZE5hdmlnYXRpb24iLCJkaXNhYmxlRG90c05hdmlnYXRpb24iLCJzY3JvbGxTbW9vdGgiLCJkaXNhYmxlSW50ZXJhY3Rpb24iLCJzdHlsZXMiLCJwb3BvdmVyIiwiYmFzZSIsInN0YXRlIiwibWluV2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiZG90IiwiZGlzcGxheSIsImNsb3NlIiwiYmFkZ2UiLCJjb250cm9scyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Tutorials/TutorialsWrapper.tsx\n");

/***/ }),

/***/ "./configuration.ts":
/*!**************************!*\
  !*** ./configuration.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst configuration = {\n    firebase: {\n        apiKey: \"AIzaSyAZ2_jhLdlDgLt7TmppxevnADafiP9wVXY\",\n        authDomain: \"test-firebase-key-2a0b2.firebaseapp.com\",\n        projectId: \"test-firebase-key-2a0b2\",\n        storageBucket: \"test-firebase-key-2a0b2.appspot.com\",\n        appId: \"1:372160452180:web:321ce4ab4f3377dfe9bfc1\",\n        messagingSenderId: \"372160452180\"\n    },\n    emulatorHost: \"\",\n    emulator: \"\" === \"true\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configuration);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWd1cmF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxnQkFBZ0I7SUFDcEJDLFVBQVU7UUFDUkMsUUFBUUMseUNBQXdDO1FBQ2hERyxZQUFZSCx5Q0FBNEM7UUFDeERLLFdBQVdMLHlCQUEyQztRQUN0RE8sZUFBZVAscUNBQStDO1FBQzlEUyxPQUFPVCwyQ0FBdUM7UUFDOUNXLG1CQUFtQlgsY0FBb0Q7SUFDekU7SUFDQWEsY0FBY2IsRUFBcUM7SUFDbkRlLFVBQVVmLEVBQWdDLEtBQUs7QUFDakQ7QUFFQSxpRUFBZUgsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0ZyZWVibGluZy5pby8uL2NvbmZpZ3VyYXRpb24udHM/MGQ1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25maWd1cmF0aW9uID0ge1xuICBmaXJlYmFzZToge1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcbiAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gICAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4gICAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCxcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbiAgfSxcbiAgZW11bGF0b3JIb3N0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTVVMQVRPUl9IT1NULFxuICBlbXVsYXRvcjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU1VTEFUT1IgPT09ICd0cnVlJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyYXRpb247XG4iXSwibmFtZXMiOlsiY29uZmlndXJhdGlvbiIsImZpcmViYXNlIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQiLCJlbXVsYXRvckhvc3QiLCJORVhUX1BVQkxJQ19FTVVMQVRPUl9IT1NUIiwiZW11bGF0b3IiLCJORVhUX1BVQkxJQ19FTVVMQVRPUiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./configuration.ts\n");

/***/ }),

/***/ "./context/authcontext.tsx":
/*!*********************************!*\
  !*** ./context/authcontext.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContextProvider: () => (/* binding */ AuthContextProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\nconst AuthContextProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: null,\n        uid: null\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [whichAuth, setWhichAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"sign-in\");\n    const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isNotificationEnabled, setIsNotificationEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isEmailEnabled, setIsEmailEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, (user)=>{\n            if (user) {\n                setUser({\n                    email: user.email,\n                    uid: user?.uid\n                });\n            } else {\n                setUser({\n                    email: null,\n                    uid: null\n                });\n            }\n        });\n        setLoading(false);\n        return ()=>unsubscribe();\n    }, []);\n    const signUp = (email, password)=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n    };\n    const logIn = (email, password)=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n    };\n    const logOut = async ()=>{\n        setUser({\n            email: null,\n            uid: null\n        });\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n        localStorage.clear();\n        sessionStorage.clear();\n    };\n    //sign in using google\n    const signInWithGoogle = ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider());\n    //sign in using facebook\n    const signInWithFacebook = ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.FacebookAuthProvider());\n    // creating a custom hook for maintaining states of campaign multi step form\n    const setFormValues = (values)=>{\n        setData((prevValues)=>({\n                ...prevValues,\n                ...values\n            }));\n        if (values == \"submitted\") {\n            setData({});\n        }\n    };\n    const loginctlMetamask = (data)=>{\n        console.log(data);\n        localStorage.setItem(\"user\", JSON.stringify(data));\n        return \"Logged In successfully\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            signUp,\n            logIn,\n            logOut,\n            loginctlMetamask,\n            signInWithFacebook,\n            signInWithGoogle,\n            data,\n            setFormValues,\n            notification,\n            setNotification,\n            authModal: {\n                whichAuth,\n                setWhichAuth\n            },\n            isNotificationEnabled,\n            setIsNotificationEnable,\n            isEmailEnabled,\n            setIsEmailEnabled\n        },\n        children: loading ? null : children\n    }, void 0, false, {\n        fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/context/authcontext.tsx\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWVibGluZy5pby8uL2NvbnRleHQvYXV0aGNvbnRleHQudHN4PzViYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgc2lnbk91dCxcbiAgRmFjZWJvb2tBdXRoUHJvdmlkZXIsXG4gIHNpZ25JbldpdGhQb3B1cCxcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxuICBzZW5kRW1haWxWZXJpZmljYXRpb24sXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5cbmludGVyZmFjZSBVc2VyVHlwZSB7XG4gIGVtYWlsOiBzdHJpbmcgfCBudWxsO1xuICB1aWQ6IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbnVwVHlwZSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIHVzZXJUeXBlOiBzdHJpbmc7XG4gIHVpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb21wYW55X25hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgd2Vic2l0ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBmb2xsb3dlcnM6IFtdO1xuICBpbWdVcmw6IHN0cmluZztcbiAgc3RhdGU6IHN0cmluZztcbiAgY2l0eTogc3RyaW5nO1xuICBjb3VudHJ5OiBzdHJpbmc7XG4gIHNvbDogc3RyaW5nO1xuICBibmI6IHN0cmluZztcbiAgZXJjMjA6IHN0cmluZztcbiAgcGhvbmVObzogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogc3RyaW5nO1xuICBzZWN1cml0eVF1ZXN0aW9uMTogc3RyaW5nO1xuICBzZWN1cml0eVF1ZXN0aW9uMjogc3RyaW5nO1xuICBhbnN3ZXJRdWVzdGlvbjE6IHN0cmluZztcbiAgYW5zd2VyUXVlc3Rpb24yOiBzdHJpbmc7XG4gIHR3b0ZhOiBib29sZWFuO1xuICBub3RpZmljYXRpb25zOiBib29sZWFuO1xuICBlbWFpbE5vdGlmaWNhdGlvbnM6IGJvb2xlYW47XG4gIHNtc05vdGlmaWNhdGlvbnM6IGJvb2xlYW47XG4gIGZvbGxvd2luZzogW107XG4gIHBhcnRpY2lwYXRlZEdpdmVhd2F5czogW107XG4gIGlzTmV3OiBib29sZWFuO1xuICBpc05vdGlmaWNhdGlvbkVuYWJsZWQ6IGJvb2xlYW47XG4gIGlzRW1haWxFbmFibGVkOiBib29sZWFuO1xuICBtZXRhbWFzazogc3RyaW5nO1xufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55Pih7fSk7XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dDxhbnk+KEF1dGhDb250ZXh0KTtcblxuaW50ZXJmYWNlIEF1dGhDb250ZXh0UHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogQXV0aENvbnRleHRQcm92aWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJUeXBlPih7IGVtYWlsOiBudWxsLCB1aWQ6IG51bGwgfSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFt3aGljaEF1dGgsIHNldFdoaWNoQXV0aF0gPSB1c2VTdGF0ZShcInNpZ24taW5cIik7XG4gIGNvbnN0IFtub3RpZmljYXRpb24sIHNldE5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZTxcbiAgICB7XG4gICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgYm9keTogc3RyaW5nO1xuICAgIH1bXVxuICA+KFtdKTtcbiAgY29uc3QgW2lzTm90aWZpY2F0aW9uRW5hYmxlZCwgc2V0SXNOb3RpZmljYXRpb25FbmFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFbWFpbEVuYWJsZWQsIHNldElzRW1haWxFbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICB1aWQ6IHVzZXI/LnVpZCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRVc2VyKHsgZW1haWw6IG51bGwsIHVpZDogbnVsbCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2lnblVwID0gKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XG4gIH07XG5cbiAgY29uc3QgbG9nSW4gPSAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xuICB9O1xuXG4gIGNvbnN0IGxvZ091dCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRVc2VyKHsgZW1haWw6IG51bGwsIHVpZDogbnVsbCB9KTtcbiAgICBhd2FpdCBzaWduT3V0KGF1dGgpO1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG4gIH07XG5cbiAgLy9zaWduIGluIHVzaW5nIGdvb2dsZVxuICBjb25zdCBzaWduSW5XaXRoR29vZ2xlID0gKCkgPT5cbiAgICBzaWduSW5XaXRoUG9wdXAoYXV0aCwgbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpKTtcblxuICAvL3NpZ24gaW4gdXNpbmcgZmFjZWJvb2tcbiAgY29uc3Qgc2lnbkluV2l0aEZhY2Vib29rID0gKCkgPT5cbiAgICBzaWduSW5XaXRoUG9wdXAoYXV0aCwgbmV3IEZhY2Vib29rQXV0aFByb3ZpZGVyKCkpO1xuXG4gIC8vIGNyZWF0aW5nIGEgY3VzdG9tIGhvb2sgZm9yIG1haW50YWluaW5nIHN0YXRlcyBvZiBjYW1wYWlnbiBtdWx0aSBzdGVwIGZvcm1cbiAgY29uc3Qgc2V0Rm9ybVZhbHVlcyA9ICh2YWx1ZXM6IGFueSkgPT4ge1xuICAgIHNldERhdGEoKHByZXZWYWx1ZXMpID0+ICh7XG4gICAgICAuLi5wcmV2VmFsdWVzLFxuICAgICAgLi4udmFsdWVzLFxuICAgIH0pKTtcbiAgICBpZiAodmFsdWVzID09IFwic3VibWl0dGVkXCIpIHtcbiAgICAgIHNldERhdGEoe30pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2dpbmN0bE1ldGFtYXNrID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEgYXMgU2lnbnVwVHlwZSkpO1xuICAgIHJldHVybiAnTG9nZ2VkIEluIHN1Y2Nlc3NmdWxseSc7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIHNpZ25VcCxcbiAgICAgICAgbG9nSW4sXG4gICAgICAgIGxvZ091dCxcbiAgICAgICAgbG9naW5jdGxNZXRhbWFzayxcbiAgICAgICAgc2lnbkluV2l0aEZhY2Vib29rLFxuICAgICAgICBzaWduSW5XaXRoR29vZ2xlLFxuICAgICAgICBkYXRhLFxuICAgICAgICBzZXRGb3JtVmFsdWVzLFxuICAgICAgICBub3RpZmljYXRpb24sXG4gICAgICAgIHNldE5vdGlmaWNhdGlvbixcbiAgICAgICAgYXV0aE1vZGFsOiB7IHdoaWNoQXV0aCwgc2V0V2hpY2hBdXRoIH0sXG4gICAgICAgIGlzTm90aWZpY2F0aW9uRW5hYmxlZCxcbiAgICAgICAgc2V0SXNOb3RpZmljYXRpb25FbmFibGUsXG4gICAgICAgIGlzRW1haWxFbmFibGVkLFxuICAgICAgICBzZXRJc0VtYWlsRW5hYmxlZCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2xvYWRpbmcgPyBudWxsIDogY2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiYXV0aCIsIkF1dGhDb250ZXh0IiwidXNlQXV0aCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiZW1haWwiLCJ1aWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGEiLCJzZXREYXRhIiwid2hpY2hBdXRoIiwic2V0V2hpY2hBdXRoIiwibm90aWZpY2F0aW9uIiwic2V0Tm90aWZpY2F0aW9uIiwiaXNOb3RpZmljYXRpb25FbmFibGVkIiwic2V0SXNOb3RpZmljYXRpb25FbmFibGUiLCJpc0VtYWlsRW5hYmxlZCIsInNldElzRW1haWxFbmFibGVkIiwidW5zdWJzY3JpYmUiLCJzaWduVXAiLCJwYXNzd29yZCIsImxvZ0luIiwibG9nT3V0IiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJzZXNzaW9uU3RvcmFnZSIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoRmFjZWJvb2siLCJzZXRGb3JtVmFsdWVzIiwidmFsdWVzIiwicHJldlZhbHVlcyIsImxvZ2luY3RsTWV0YW1hc2siLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm92aWRlciIsInZhbHVlIiwiYXV0aE1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/authcontext.tsx\n");

/***/ }),

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   postToJSON: () => (/* binding */ postToJSON),\n/* harmony export */   storage: () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/configuration */ \"./configuration.ts\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// Import the functions you need from the SDKs you need\n\n\n\n\n// Initialize Firebase\n// check if there is already an app intialuaze \nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(_configuration__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firebase) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.getApps)()[0];\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n// export firestore db \nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(app);\n// export firebase storage\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(app);\nfunction postToJSON(doc) {\n    const data = doc.data();\n    return {\n        ...data,\n        // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds\n        createdAt: data?.createdAt.toMillis() || 0,\n        updatedAt: data?.updatedAt.toMillis() || 0\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUN2Qyx1REFBdUQ7QUFDVjtBQUNMO0FBQ1U7QUFDTDtBQUU3QyxzQkFBc0I7QUFFdEIsK0NBQStDO0FBQy9DLE1BQU1NLE1BQU0sQ0FBQ0wscURBQU9BLEdBQUdNLE1BQU0sR0FBRUwsMkRBQWFBLENBQUNGLCtEQUFzQixJQUFHQyxxREFBT0EsRUFBRSxDQUFDLEVBQUU7QUFDM0UsTUFBTVEsT0FBT04sc0RBQU9BLEdBQUc7QUFFOUIsdUJBQXVCO0FBQ2hCLE1BQU1PLEtBQUtOLGdFQUFZQSxDQUFDRSxLQUFLO0FBRXBDLDBCQUEwQjtBQUNuQixNQUFNSyxVQUFVTiw0REFBVUEsQ0FBQ0MsS0FBSztBQUdoQyxTQUFTTSxXQUFXQyxHQUF5QjtJQUNoRCxNQUFNQyxPQUFPRCxJQUFJQyxJQUFJO0lBQ3JCLE9BQU87UUFDTCxHQUFHQSxJQUFJO1FBQ1AscUZBQXFGO1FBQ3JGQyxXQUFXRCxNQUFNQyxVQUFVQyxjQUFjO1FBQ3pDQyxXQUFXSCxNQUFNRyxVQUFVRCxjQUFjO0lBQzNDO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GcmVlYmxpbmcuaW8vLi9maXJlYmFzZS50cz85MmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gJ34vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBnZXRBcHBzIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZX0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuXG4vLyBjaGVjayBpZiB0aGVyZSBpcyBhbHJlYWR5IGFuIGFwcCBpbnRpYWx1YXplIFxuY29uc3QgYXBwID0gIWdldEFwcHMoKS5sZW5ndGg/IGluaXRpYWxpemVBcHAoY29uZmlndXJhdGlvbi5maXJlYmFzZSk6IGdldEFwcHMoKVswXTtcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuXG4vLyBleHBvcnQgZmlyZXN0b3JlIGRiIFxuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5cbi8vIGV4cG9ydCBmaXJlYmFzZSBzdG9yYWdlXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdFRvSlNPTihkb2M6IHsgZGF0YTogKCkgPT4gYW55OyB9KSB7XG4gICAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICAvLyBHb3RjaGEhIGZpcmVzdG9yZSB0aW1lc3RhbXAgTk9UIHNlcmlhbGl6YWJsZSB0byBKU09OLiBNdXN0IGNvbnZlcnQgdG8gbWlsbGlzZWNvbmRzXG4gICAgICBjcmVhdGVkQXQ6IGRhdGE/LmNyZWF0ZWRBdC50b01pbGxpcygpIHx8IDAsXG4gICAgICB1cGRhdGVkQXQ6IGRhdGE/LnVwZGF0ZWRBdC50b01pbGxpcygpIHx8IDAsXG4gICAgfTtcbn0iXSwibmFtZXMiOlsiY29uZmlndXJhdGlvbiIsImdldEFwcHMiLCJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImdldFN0b3JhZ2UiLCJhcHAiLCJsZW5ndGgiLCJmaXJlYmFzZSIsImF1dGgiLCJkYiIsInN0b3JhZ2UiLCJwb3N0VG9KU09OIiwiZG9jIiwiZGF0YSIsImNyZWF0ZWRBdCIsInRvTWlsbGlzIiwidXBkYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_authcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/authcontext */ \"./context/authcontext.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Tutorials_TutorialsWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Tutorials/TutorialsWrapper */ \"./components/Tutorials/TutorialsWrapper.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authcontext__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_7__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__, wagmi_chains__WEBPACK_IMPORTED_MODULE_10__]);\n([_context_authcontext__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_7__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__, wagmi_chains__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\nconst { publicClient, webSocketPublicClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_10__.mainnet\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_8__.publicProvider)()\n]);\nconst config = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.createConfig)({\n    autoConnect: true,\n    publicClient,\n    webSocketPublicClient\n});\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if (\"serviceWorker\" in navigator) {\n            navigator.serviceWorker.register(\"../firebase-messaging-sw.js\").then((registration)=>{\n                console.log(\"Service Worker registered with scope:\", registration.scope);\n            }).catch((error)=>{\n                console.error(\"Service Worker registration failed:\", error);\n            });\n        }\n    }, []);\n    if (router.asPath == \"/\" || router.asPath == \"/signup\" || router.asPath == \"/forgot-password\" || router.asPath == \"/login\" || router.asPath == \"/reset-password\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_authcontext__WEBPACK_IMPORTED_MODULE_2__.AuthContextProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_7__.WagmiConfig, {\n                        config: config,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_9__.SessionProvider, {\n                            session: pageProps.session,\n                            refetchInterval: 0,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/pages/_app.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/pages/_app.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/pages/_app.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/pages/_app.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}, void 0, false, {\n                    fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/pages/_app.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_authcontext__WEBPACK_IMPORTED_MODULE_2__.AuthContextProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tutorials_TutorialsWrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_7__.WagmiConfig, {\n                            config: config,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_9__.SessionProvider, {\n                                session: pageProps.session,\n                                refetchInterval: 0,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                    ...pageProps\n                                }, void 0, false, {\n                                    fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/pages/_app.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/pages/_app.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/pages/_app.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/pages/_app.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/pages/_app.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}, void 0, false, {\n                    fileName: \"/Users/KARTAL/Desktop/Projects/Freebling-Web3-main/pages/_app.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n// Export Default \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFFOEI7QUFDbkI7QUFDRjtBQUNnQztBQUN0QztBQUVpQztBQUNYO0FBQ047QUFDWDtBQUV2QyxNQUFNLEVBQUVXLFlBQVksRUFBRUMscUJBQXFCLEVBQUUsR0FBR04sc0RBQWVBLENBQzdEO0lBQUNJLGtEQUFPQTtDQUFDLEVBQ1Q7SUFBQ0Ysc0VBQWNBO0NBQUc7QUFHcEIsTUFBTUssU0FBU1IsbURBQVlBLENBQUM7SUFDMUJTLGFBQWE7SUFDYkg7SUFDQUM7QUFDRjtBQUVBLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MsTUFBTUMsU0FBU2hCLHNEQUFTQTtJQUN4QkUsZ0RBQVNBLENBQUM7UUFDUixJQUFJLG1CQUFtQmUsV0FBVztZQUNoQ0EsVUFBVUMsYUFBYSxDQUFDQyxRQUFRLENBQUMsK0JBQzlCQyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ0xDLFFBQVFDLEdBQUcsQ0FBQyx5Q0FBeUNGLGFBQWFHLEtBQUs7WUFDekUsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO2dCQUNOSixRQUFRSSxLQUFLLENBQUMsdUNBQXVDQTtZQUN2RDtRQUNKO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFDRVYsT0FBT1csTUFBTSxJQUFJLE9BQ2pCWCxPQUFPVyxNQUFNLElBQUksYUFDakJYLE9BQU9XLE1BQU0sSUFBSSxzQkFDakJYLE9BQU9XLE1BQU0sSUFBSSxZQUNqQlgsT0FBT1csTUFBTSxJQUFJLG1CQUNqQjtRQUNBLHFCQUNFOzs4QkFDRSw4REFBQzdCLHFFQUFtQkE7OEJBQ2xCLDRFQUFDTyw4Q0FBV0E7d0JBQUNNLFFBQVFBO2tDQUNuQiw0RUFBQ0osNERBQWVBOzRCQUFDcUIsU0FBU2IsVUFBVWEsT0FBTzs0QkFBRUMsaUJBQWlCO3NDQUM1RCw0RUFBQ2Y7Z0NBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUk5Qiw4REFBQ2hCLG9EQUFPQTs7Ozs7OztJQUdkLE9BQU87UUFDTCxxQkFDRTs7OEJBQ0UsOERBQUNELHFFQUFtQkE7OEJBQ2xCLDRFQUFDRyw4RUFBZ0JBO2tDQUNmLDRFQUFDSSw4Q0FBV0E7NEJBQUNNLFFBQVFBO3NDQUNuQiw0RUFBQ0osNERBQWVBO2dDQUFDcUIsU0FBU2IsVUFBVWEsT0FBTztnQ0FBRUMsaUJBQWlCOzBDQUM1RCw0RUFBQ2Y7b0NBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS2hDLDhEQUFDaEIsb0RBQU9BOzs7Ozs7O0lBR2Q7QUFDRjtBQUVBLGtCQUFrQjtBQUNsQixpRUFBZWMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0ZyZWVibGluZy5pby8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBBdXRoQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aGNvbnRleHRcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBUdXRvcmlhbHNXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1R1dG9yaWFscy9UdXRvcmlhbHNXcmFwcGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlQ29uZmlnLCBjb25maWd1cmVDaGFpbnMsIFdhZ21pQ29uZmlnIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBtYWlubmV0IH0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xuXG5jb25zdCB7IHB1YmxpY0NsaWVudCwgd2ViU29ja2V0UHVibGljQ2xpZW50IH0gPSBjb25maWd1cmVDaGFpbnMoXG4gIFttYWlubmV0XSxcbiAgW3B1YmxpY1Byb3ZpZGVyKCldXG4pO1xuXG5jb25zdCBjb25maWcgPSBjcmVhdGVDb25maWcoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgcHVibGljQ2xpZW50LFxuICB3ZWJTb2NrZXRQdWJsaWNDbGllbnQsXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy4uL2ZpcmViYXNlLW1lc3NhZ2luZy1zdy5qcycpXG4gICAgICAgIC50aGVuKChyZWdpc3RyYXRpb24pID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSBXb3JrZXIgcmVnaXN0ZXJlZCB3aXRoIHNjb3BlOicsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgaWYgKFxuICAgIHJvdXRlci5hc1BhdGggPT0gXCIvXCIgfHxcbiAgICByb3V0ZXIuYXNQYXRoID09IFwiL3NpZ251cFwiIHx8XG4gICAgcm91dGVyLmFzUGF0aCA9PSBcIi9mb3Jnb3QtcGFzc3dvcmRcIiB8fFxuICAgIHJvdXRlci5hc1BhdGggPT0gXCIvbG9naW5cIiB8fFxuICAgIHJvdXRlci5hc1BhdGggPT0gXCIvcmVzZXQtcGFzc3dvcmRcIlxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEF1dGhDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgPFdhZ21pQ29uZmlnIGNvbmZpZz17Y29uZmlnfT5cbiAgICAgICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259IHJlZmV0Y2hJbnRlcnZhbD17MH0+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgICAgICAgIDwvV2FnbWlDb25maWc+XG4gICAgICAgIDwvQXV0aENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgIDwvPiBcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8QXV0aENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICA8VHV0b3JpYWxzV3JhcHBlcj5cbiAgICAgICAgICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e2NvbmZpZ30+XG4gICAgICAgICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259IHJlZmV0Y2hJbnRlcnZhbD17MH0+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgICAgICAgICAgIDwvV2FnbWlDb25maWc+XG4gICAgICAgICAgPC9UdXRvcmlhbHNXcmFwcGVyPlxuICAgICAgICA8L0F1dGhDb250ZXh0UHJvdmlkZXIgPlxuICAgICAgICA8VG9hc3RlciAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBFeHBvcnQgRGVmYXVsdCBcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJUb2FzdGVyIiwidXNlUm91dGVyIiwiVHV0b3JpYWxzV3JhcHBlciIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbmZpZyIsImNvbmZpZ3VyZUNoYWlucyIsIldhZ21pQ29uZmlnIiwicHVibGljUHJvdmlkZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJtYWlubmV0IiwicHVibGljQ2xpZW50Iiwid2ViU29ja2V0UHVibGljQ2xpZW50IiwiY29uZmlnIiwiYXV0b0Nvbm5lY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJjb25zb2xlIiwibG9nIiwic2NvcGUiLCJjYXRjaCIsImVycm9yIiwiYXNQYXRoIiwic2Vzc2lvbiIsInJlZmV0Y2hJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reactour/tour":
/*!*********************************!*\
  !*** external "@reactour/tour" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reactour/tour");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@reactour"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();
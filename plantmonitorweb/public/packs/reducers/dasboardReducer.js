/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 538);
/******/ })
/************************************************************************/
/******/ ({

/***/ 379:
/*!*****************************************************************!*\
  !*** ./app/javascript/packs/constants/dashboardActionTypes.jsx ***!
  \*****************************************************************/
/*! exports provided: SENSOR_DATA_RECEIVED, HISTORICAL_DATA_RECEIVED */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SENSOR_DATA_RECEIVED\", function() { return SENSOR_DATA_RECEIVED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HISTORICAL_DATA_RECEIVED\", function() { return HISTORICAL_DATA_RECEIVED; });\n\nvar SENSOR_DATA_RECEIVED = 'sensor_data_received';\nvar HISTORICAL_DATA_RECEIVED = 'historical_data_received';\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2phdmFzY3JpcHQvcGFja3MvY29uc3RhbnRzL2Rhc2hib2FyZEFjdGlvblR5cGVzLmpzeD85ZjdiIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIFNFTlNPUl9EQVRBX1JFQ0VJVkVEID0gJ3NlbnNvcl9kYXRhX3JlY2VpdmVkJztcbnZhciBISVNUT1JJQ0FMX0RBVEFfUkVDRUlWRUQgPSAnaGlzdG9yaWNhbF9kYXRhX3JlY2VpdmVkJztcblxuZXhwb3J0IHsgU0VOU09SX0RBVEFfUkVDRUlWRUQsIEhJU1RPUklDQUxfREFUQV9SRUNFSVZFRCB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2phdmFzY3JpcHQvcGFja3MvY29uc3RhbnRzL2Rhc2hib2FyZEFjdGlvblR5cGVzLmpzeFxuLy8gbW9kdWxlIGlkID0gMzc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDkgMTUgMTYgMjEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///379\n");

/***/ }),

/***/ 538:
/*!**********************************************************!*\
  !*** ./app/javascript/packs/reducers/dasboardReducer.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_dashboardActionTypes__ = __webpack_require__(/*! ../constants/dashboardActionTypes */ 379);\n\n\nvar initialState = {\n  sensorsData: Object.assign({}, { temperature: '12,4', humidity: '21', moisture: '31' }),\n  historicalData: {},\n  lightState: false\n};\n\nfunction dashboardReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case __WEBPACK_IMPORTED_MODULE_0__constants_dashboardActionTypes__[\"SENSOR_DATA_RECEIVED\"]:\n      return Object.assign({}, state, { sensorsData: action.sensorsData });\n    case __WEBPACK_IMPORTED_MODULE_0__constants_dashboardActionTypes__[\"HISTORICAL_DATA_RECEIVED\"]:\n      return Object.assign({}, state, { historicalData: action.historicalData });\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dashboardReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTM4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2phdmFzY3JpcHQvcGFja3MvcmVkdWNlcnMvZGFzYm9hcmRSZWR1Y2VyLmpzPzcyYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSBcIi4uL2NvbnN0YW50cy9kYXNoYm9hcmRBY3Rpb25UeXBlc1wiO1xuXG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICBzZW5zb3JzRGF0YTogT2JqZWN0LmFzc2lnbih7fSwgeyB0ZW1wZXJhdHVyZTogJzEyLDQnLCBodW1pZGl0eTogJzIxJywgbW9pc3R1cmU6ICczMScgfSksXG4gIGhpc3RvcmljYWxEYXRhOiB7fSxcbiAgbGlnaHRTdGF0ZTogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGRhc2hib2FyZFJlZHVjZXIoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogaW5pdGlhbFN0YXRlO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLlNFTlNPUl9EQVRBX1JFQ0VJVkVEOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHNlbnNvcnNEYXRhOiBhY3Rpb24uc2Vuc29yc0RhdGEgfSk7XG4gICAgY2FzZSB0eXBlcy5ISVNUT1JJQ0FMX0RBVEFfUkVDRUlWRUQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaGlzdG9yaWNhbERhdGE6IGFjdGlvbi5oaXN0b3JpY2FsRGF0YSB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZFJlZHVjZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvamF2YXNjcmlwdC9wYWNrcy9yZWR1Y2Vycy9kYXNib2FyZFJlZHVjZXIuanNcbi8vIG1vZHVsZSBpZCA9IDUzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgOSAxNSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///538\n");

/***/ })

/******/ });
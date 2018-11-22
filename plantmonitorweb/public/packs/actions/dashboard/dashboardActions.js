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
/******/ 	return __webpack_require__(__webpack_require__.s = 537);
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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SENSOR_DATA_RECEIVED\", function() { return SENSOR_DATA_RECEIVED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HISTORICAL_DATA_RECEIVED\", function() { return HISTORICAL_DATA_RECEIVED; });\n\nvar SENSOR_DATA_RECEIVED = 'sensor_data_received';\nvar HISTORICAL_DATA_RECEIVED = 'historical_data_received';\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2phdmFzY3JpcHQvcGFja3MvY29uc3RhbnRzL2Rhc2hib2FyZEFjdGlvblR5cGVzLmpzeD85ZjdiIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIFNFTlNPUl9EQVRBX1JFQ0VJVkVEID0gJ3NlbnNvcl9kYXRhX3JlY2VpdmVkJztcbnZhciBISVNUT1JJQ0FMX0RBVEFfUkVDRUlWRUQgPSAnaGlzdG9yaWNhbF9kYXRhX3JlY2VpdmVkJztcblxuZXhwb3J0IHsgU0VOU09SX0RBVEFfUkVDRUlWRUQsIEhJU1RPUklDQUxfREFUQV9SRUNFSVZFRCB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2phdmFzY3JpcHQvcGFja3MvY29uc3RhbnRzL2Rhc2hib2FyZEFjdGlvblR5cGVzLmpzeFxuLy8gbW9kdWxlIGlkID0gMzc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDkgMTUgMTYgMjAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///379\n");

/***/ }),

/***/ 537:
/*!*********************************************************************!*\
  !*** ./app/javascript/packs/actions/dashboard/dashboardActions.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_dashboardActionTypes__ = __webpack_require__(/*! ../../constants/dashboardActionTypes */ 379);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// import PropTypes from 'prop-types'\n\n\nvar DashboardActions = function () {\n  function DashboardActions() {\n    _classCallCheck(this, DashboardActions);\n  }\n\n  _createClass(DashboardActions, null, [{\n    key: 'sensorDataReceived',\n    value: function sensorDataReceived(data) {\n      console.log('Sensor data received', data);\n\n      return {\n        type: __WEBPACK_IMPORTED_MODULE_0__constants_dashboardActionTypes__[\"SENSOR_DATA_RECEIVED\"],\n        sensorsData: Object.assign({}, data)\n      };\n    }\n  }, {\n    key: 'historicalDataReceived',\n    value: function historicalDataReceived(data) {\n      console.log('Historical data recevied', data);\n\n      return {\n        type: __WEBPACK_IMPORTED_MODULE_0__constants_dashboardActionTypes__[\"HISTORICAL_DATA_RECEIVED\"],\n        historicalData: data\n      };\n    }\n  }]);\n\n  return DashboardActions;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardActions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTM3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2phdmFzY3JpcHQvcGFja3MvYWN0aW9ucy9kYXNoYm9hcmQvZGFzaGJvYXJkQWN0aW9ucy5qc3g/MjNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi8uLi9jb25zdGFudHMvZGFzaGJvYXJkQWN0aW9uVHlwZXMnO1xuXG52YXIgRGFzaGJvYXJkQWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGFzaGJvYXJkQWN0aW9ucygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGFzaGJvYXJkQWN0aW9ucyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGFzaGJvYXJkQWN0aW9ucywgbnVsbCwgW3tcbiAgICBrZXk6ICdzZW5zb3JEYXRhUmVjZWl2ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5zb3JEYXRhUmVjZWl2ZWQoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ1NlbnNvciBkYXRhIHJlY2VpdmVkJywgZGF0YSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlNFTlNPUl9EQVRBX1JFQ0VJVkVELFxuICAgICAgICBzZW5zb3JzRGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGlzdG9yaWNhbERhdGFSZWNlaXZlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhpc3RvcmljYWxEYXRhUmVjZWl2ZWQoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ0hpc3RvcmljYWwgZGF0YSByZWNldmllZCcsIGRhdGEpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5ISVNUT1JJQ0FMX0RBVEFfUkVDRUlWRUQsXG4gICAgICAgIGhpc3RvcmljYWxEYXRhOiBkYXRhXG4gICAgICB9O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEYXNoYm9hcmRBY3Rpb25zO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRBY3Rpb25zO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2phdmFzY3JpcHQvcGFja3MvYWN0aW9ucy9kYXNoYm9hcmQvZGFzaGJvYXJkQWN0aW9ucy5qc3hcbi8vIG1vZHVsZSBpZCA9IDUzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAxNiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///537\n");

/***/ })

/******/ });
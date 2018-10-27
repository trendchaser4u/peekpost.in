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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/static/js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ready */ \"./src/js/utils/ready.js\");\n/* harmony import */ var _utils_serviceWorker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/serviceWorker */ \"./src/js/utils/serviceWorker.js\");\n/* harmony import */ var _utils_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/debug */ \"./src/js/utils/debug.js\");\n/**\n * main.js\n * Entrypoint for webpack\n */\n\n\n\n\nfunction onReady(e) {\n  Object(_utils_serviceWorker__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_utils_debug__WEBPACK_IMPORTED_MODULE_2__[\"info\"])(`Event: ${e.type}`, `Datestamp: ${this.date}`);\n}\n\n;\nObject(_utils_ready__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(onReady, {\n  date: new Date()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbWFpbi5qcz84NGUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogbWFpbi5qc1xuICogRW50cnlwb2ludCBmb3Igd2VicGFja1xuICovXG5pbXBvcnQgcmVhZHkgZnJvbSAnLi91dGlscy9yZWFkeSc7XG5pbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gJy4vdXRpbHMvc2VydmljZVdvcmtlcic7XG5pbXBvcnQgeyBpbmZvIH0gZnJvbSAnLi91dGlscy9kZWJ1Zyc7XG5cbmZ1bmN0aW9uIG9uUmVhZHkoZSkge1xuICAgIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpO1xuICAgIGluZm8oYEV2ZW50OiAke2UudHlwZX1gLCBgRGF0ZXN0YW1wOiAke3RoaXMuZGF0ZX1gKTtcbn07XG5cbnJlYWR5KG9uUmVhZHksIHtcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLFxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/js/utils/constants.js":
/*!***********************************!*\
  !*** ./src/js/utils/constants.js ***!
  \***********************************/
/*! exports provided: IS_PRODUCTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IS_PRODUCTION\", function() { return IS_PRODUCTION; });\nconst IS_PRODUCTION = \"development\" === 'production';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvY29uc3RhbnRzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy91dGlscy9jb25zdGFudHMuanM/ZWI1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSVNfUFJPRFVDVElPTiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/utils/constants.js\n");

/***/ }),

/***/ "./src/js/utils/debug.js":
/*!*******************************!*\
  !*** ./src/js/utils/debug.js ***!
  \*******************************/
/*! exports provided: clear, error, info, log, warn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clear\", function() { return clear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"info\", function() { return info; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warn\", function() { return warn; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/utils/constants.js\");\n/* eslint-disable no-console */\n\n/**\n * Log a decorated message to the console\n * @param {string} msg - The message to log.\n * @param {string} decorator - Console message decorator.\n */\n\nconst message = (method, ...messages) => {\n  if (_constants__WEBPACK_IMPORTED_MODULE_0__[\"IS_PRODUCTION\"]) {\n    return;\n  }\n\n  if (console && console[method]) {\n    console[method](...messages);\n  }\n};\n/**\n * Clear the console\n */\n\n\nconst clear = () => {\n  if (_constants__WEBPACK_IMPORTED_MODULE_0__[\"IS_PRODUCTION\"]) {\n    return;\n  }\n\n  console.clear();\n};\n/**\n * Error wrapper\n * @param {string} msg - The message to log.\n * @param {string} decorator - Console message decorator.\n */\n\nconst error = (...messages) => message('error', ...messages);\n/**\n * Info wrapper\n * @param {string} msg - The message to log.\n * @param {string} decorator - Console message decorator.\n */\n\nconst info = (...messages) => message('info', ...messages);\n/**\n * Log wrapper\n * @param {string} msg - The message to log.\n * @param {string} decorator - Console message decorator.\n */\n\nconst log = (...messages) => message('log', ...messages);\n/**\n * Warn wrapper\n * @param {string} msg - The message to log.\n * @param {string} decorator - Console message decorator.\n */\n\nconst warn = (...messages) => message('warn', ...messages);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvZGVidWcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL3V0aWxzL2RlYnVnLmpzP2M0OWQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgSVNfUFJPRFVDVElPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBMb2cgYSBkZWNvcmF0ZWQgbWVzc2FnZSB0byB0aGUgY29uc29sZVxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyAtIFRoZSBtZXNzYWdlIHRvIGxvZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZWNvcmF0b3IgLSBDb25zb2xlIG1lc3NhZ2UgZGVjb3JhdG9yLlxuICovXG5jb25zdCBtZXNzYWdlID0gKG1ldGhvZCwgLi4ubWVzc2FnZXMpID0+IHtcbiAgaWYgKElTX1BST0RVQ1RJT04pIHsgcmV0dXJuOyB9XG5cbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZVttZXRob2RdKSB7XG4gICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2VzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhciB0aGUgY29uc29sZVxuICovXG5leHBvcnQgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gIGlmIChJU19QUk9EVUNUSU9OKSB7IHJldHVybjsgfVxuICBjb25zb2xlLmNsZWFyKCk7XG59O1xuXG4vKipcbiAqIEVycm9yIHdyYXBwZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgLSBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVjb3JhdG9yIC0gQ29uc29sZSBtZXNzYWdlIGRlY29yYXRvci5cbiAqL1xuZXhwb3J0IGNvbnN0IGVycm9yID0gKC4uLm1lc3NhZ2VzKSA9PiBtZXNzYWdlKCdlcnJvcicsIC4uLm1lc3NhZ2VzKTtcblxuLyoqXG4gKiBJbmZvIHdyYXBwZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgLSBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVjb3JhdG9yIC0gQ29uc29sZSBtZXNzYWdlIGRlY29yYXRvci5cbiAqL1xuZXhwb3J0IGNvbnN0IGluZm8gPSAoLi4ubWVzc2FnZXMpID0+IG1lc3NhZ2UoJ2luZm8nLCAuLi5tZXNzYWdlcyk7XG5cbi8qKlxuICogTG9nIHdyYXBwZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgLSBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVjb3JhdG9yIC0gQ29uc29sZSBtZXNzYWdlIGRlY29yYXRvci5cbiAqL1xuZXhwb3J0IGNvbnN0IGxvZyA9ICguLi5tZXNzYWdlcykgPT4gbWVzc2FnZSgnbG9nJywgLi4ubWVzc2FnZXMpO1xuXG4vKipcbiAqIFdhcm4gd3JhcHBlclxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyAtIFRoZSBtZXNzYWdlIHRvIGxvZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZWNvcmF0b3IgLSBDb25zb2xlIG1lc3NhZ2UgZGVjb3JhdG9yLlxuICovXG5leHBvcnQgY29uc3Qgd2FybiA9ICguLi5tZXNzYWdlcykgPT4gbWVzc2FnZSgnd2FybicsIC4uLm1lc3NhZ2VzKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQUtBO0FBRUE7Ozs7OztBQUtBO0FBRUE7Ozs7OztBQUtBO0FBRUE7Ozs7OztBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils/debug.js\n");

/***/ }),

/***/ "./src/js/utils/ready.js":
/*!*******************************!*\
  !*** ./src/js/utils/ready.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Ready util\n * @module utils/ready\n */\nconst doc = document; // Cache an event reference for deferred ready-handlers\n\nlet cachedEvent;\n\nconst cacheEvent = e => {\n  doc.removeEventListener('DOMContentLoaded', cacheEvent);\n  cachedEvent = e;\n};\n\ndoc.addEventListener('DOMContentLoaded', cacheEvent);\n/**\n * Fired on DOMReady\n * @param {function} cb - Callback function.\n * @param {object} ctx - Optional callback context.\n */\n\nconst ready = (cb, ctx) => {\n  const context = ctx || window;\n\n  if (doc.readyState === 'complete') {\n    cb.call(context, cachedEvent);\n  } else {\n    const onReady = e => {\n      doc.removeEventListener('DOMContentLoaded', onReady);\n      cachedEvent = e;\n      cb.call(context, e);\n    };\n\n    doc.addEventListener('DOMContentLoaded', onReady);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ready);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvcmVhZHkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL3V0aWxzL3JlYWR5LmpzP2VlNDEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWFkeSB1dGlsXG4gKiBAbW9kdWxlIHV0aWxzL3JlYWR5XG4gKi9cbmNvbnN0IGRvYyA9IGRvY3VtZW50O1xuXG4vLyBDYWNoZSBhbiBldmVudCByZWZlcmVuY2UgZm9yIGRlZmVycmVkIHJlYWR5LWhhbmRsZXJzXG5sZXQgY2FjaGVkRXZlbnQ7XG5cbmNvbnN0IGNhY2hlRXZlbnQgPSAoZSkgPT4ge1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNhY2hlRXZlbnQpO1xuICBjYWNoZWRFdmVudCA9IGU7XG59O1xuXG5kb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNhY2hlRXZlbnQpO1xuXG4vKipcbiAqIEZpcmVkIG9uIERPTVJlYWR5XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiAtIENhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIE9wdGlvbmFsIGNhbGxiYWNrIGNvbnRleHQuXG4gKi9cbmNvbnN0IHJlYWR5ID0gKGNiLCBjdHgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IGN0eCB8fCB3aW5kb3c7XG5cbiAgaWYgKGRvYy5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgY2IuY2FsbChjb250ZXh0LCBjYWNoZWRFdmVudCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb25SZWFkeSA9IChlKSA9PiB7XG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG9uUmVhZHkpO1xuICAgICAgY2FjaGVkRXZlbnQgPSBlO1xuICAgICAgY2IuY2FsbChjb250ZXh0LCBlKTtcbiAgICB9O1xuXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBvblJlYWR5KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVhZHk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils/ready.js\n");

/***/ }),

/***/ "./src/js/utils/serviceWorker.js":
/*!***************************************!*\
  !*** ./src/js/utils/serviceWorker.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return registerServiceWorker; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/utils/constants.js\");\n\nfunction registerServiceWorker() {\n  if (navigator.serviceWorker && _constants__WEBPACK_IMPORTED_MODULE_0__[\"IS_PRODUCTION\"]) {\n    navigator.serviceWorker.register('/sw.js').catch(err => {\n      console.error('Unable to register service worker.', err); // eslint-disable-line no-console\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvc2VydmljZVdvcmtlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvdXRpbHMvc2VydmljZVdvcmtlci5qcz9iOGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTX1BST0RVQ1RJT04gfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpIHtcbiAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyICYmIElTX1BST0RVQ1RJT04pIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3N3LmpzJylcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byByZWdpc3RlciBzZXJ2aWNlIHdvcmtlci4nLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH0pO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/utils/serviceWorker.js\n");

/***/ })

/******/ });
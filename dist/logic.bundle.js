/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ElementMaker.js":
/*!*****************************!*\
  !*** ./src/ElementMaker.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elementFactory\": () => (/* binding */ elementFactory)\n/* harmony export */ });\nfunction elementFactory(type, properties){\n  let element = document.createElement(type)\n    \n  for (const p in properties){\n    element[p] = properties[p]\n  } return element\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/ElementMaker.js?");

/***/ }),

/***/ "./src/FormLogic.js":
/*!**************************!*\
  !*** ./src/FormLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCards.js */ \"./src/todoCards.js\");\n/* harmony import */ var _topbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topbar.js */ \"./src/topbar.js\");\n\n\n\nlet form = document.getElementById('form')\nlet log = console.log\nlet todos = []\n\nlet tabGet = (() => {\n  let topBar = document.getElementById('topnav');\n  let newTab = document.getElementById('plusDiv');\n  \n  return {topBar, newTab}\n})()\n\nconsole.log(tabGet.topBar.children.length)\n\nlet formGet = () => {\n  let Name = document.getElementsByName('titleInput')[0].value\n  let Desc = document.getElementsByName('desc')[0].value\n  let dueDate = document.getElementsByName('dueDate')[0].value\n  let button = document.getElementsByName('button')\n  return {form, Name, Desc, dueDate, button}\n}\n\nlet Logic = (() => {\n  let i = 0\n  form.addEventListener('submit', (e) => {\n    e.preventDefault()\n    todos[i] = formGet()\n    ;(0,_todoCards_js__WEBPACK_IMPORTED_MODULE_0__.toDoItem)(todos[i].Name, todos[i].Desc, todos[i].dueDate);\n    form.reset()\n  })\n\n  let j = 0\n  tabGet.newTab.addEventListener('click', () => {\n    ;(0,_topbar_js__WEBPACK_IMPORTED_MODULE_1__.tabMaker)(`Project${j}`)\n    j++\n    \n  })\n})()\n\n\n//# sourceURL=webpack://todo/./src/FormLogic.js?");

/***/ }),

/***/ "./src/todoCards.js":
/*!**************************!*\
  !*** ./src/todoCards.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoItem\": () => (/* binding */ toDoItem)\n/* harmony export */ });\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n/* harmony import */ var _arrow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.png */ \"./src/arrow.png\");\n\n\n\nlet display = document.getElementById('display')\n\nlet toDoItem = (name, desc, dueDate) => {\n  let toDoHolder = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'toDoItem'\n  })\n\n  let nameDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'nameDiv'\n  })\n\n  let toDoName = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'toDoName',\n    innerHTML: name,\n  })\n\n  let seeMore = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'seeMore',\n  })\n  \n  let tickBox = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'tickBox',\n  })\n\n  let buttonDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'buttons',\n  })\n\n  let descDiv= (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'descDiv'\n  })\n\n  let toDoDesc = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'toDoDesc',\n    innerHTML: desc,\n  })\n\n  let dueDateDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'dueDateDiv'\n  })\n\n  let toDoDueDate = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'toDoDueDate',\n    innerHTML: `Deadline: ${dueDate}`,\n  })\n\n  nameDiv.appendChild(toDoName)\n  buttonDiv.appendChild(seeMore)\n  buttonDiv.appendChild(tickBox)\n  nameDiv.appendChild(buttonDiv)\n  toDoHolder.appendChild(nameDiv)\n  \n  descDiv.appendChild(toDoDesc)\n  dueDateDiv.appendChild(toDoDueDate)\n\n  toDoHolder.appendChild(descDiv)\n  toDoHolder.appendChild(dueDateDiv)\n\n  display.appendChild(toDoHolder)\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/todoCards.js?");

/***/ }),

/***/ "./src/topbar.js":
/*!***********************!*\
  !*** ./src/topbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateTopBar\": () => (/* binding */ populateTopBar),\n/* harmony export */   \"tabMaker\": () => (/* binding */ tabMaker)\n/* harmony export */ });\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n\n\nlet topBar = document.getElementById('topnav')\n\nlet tabMaker = (tabName) => {\n  let container = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'tabdiv',\n  })\n\n  let name = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'tabName',\n    innerHTML: `${tabName}`,\n    contentEditable: true,\n  })\n\n  let deleteButtonHolder = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: `killTabHolder`\n  })\n\n  let deleteButton = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: `killTab`,\n    innerHTML: `&#10799`,\n  })\n\n  container.appendChild(name)\n  deleteButtonHolder.appendChild(deleteButton)\n  container.appendChild(deleteButtonHolder)\n  topBar.insertBefore(container, topBar.children[topBar.children.length - 1])\n}\n\n\nlet plusSign = (() => {\n\n  let plusSymHolder = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    id: 'plusDiv',\n  })\n\n  let plusSymbol = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', { \n    id: 'plusSign',\n    innerHTML: '&#43;',\n  })\n  \n  plusSymHolder.appendChild(plusSymbol)\n  return {plusSymHolder}\n})()\n\nlet populateTopBar = () => {\n  topBar.appendChild(plusSign.plusSymHolder)\n} \n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/topbar.js?");

/***/ }),

/***/ "./src/arrow.png":
/*!***********************!*\
  !*** ./src/arrow.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e75ada3939805b3ea27.png\";\n\n//# sourceURL=webpack://todo/./src/arrow.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/FormLogic.js");
/******/ 	
/******/ })()
;
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCards.js */ \"./src/todoCards.js\");\n\n\nlet form = document.getElementById('form')\nlet log = console.log\nlet todos = []\n\nlet formGet = () => {\n  let Name = document.getElementsByName('titleInput')[0].value\n  let Desc = document.getElementsByName('desc')[0].value\n  let dueDate = document.getElementsByName('dueDate')[0].value\n  let button = document.getElementsByName('button')\n  return {form, Name, Desc, dueDate, button}\n}\n\nlet formLogic = (() => {\n  let i = 0\n  form.addEventListener('submit', (e) => {\n    e.preventDefault()\n    todos[i] = formGet()\n    ;(0,_todoCards_js__WEBPACK_IMPORTED_MODULE_0__.toDoItem)(todos[i].Name, todos[i].Desc, todos[i].dueDate);\n    form.reset()\n  })\n  \n\n})()\n\n\n\n//# sourceURL=webpack://todo/./src/FormLogic.js?");

/***/ }),

/***/ "./src/todoCards.js":
/*!**************************!*\
  !*** ./src/todoCards.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoItem\": () => (/* binding */ toDoItem)\n/* harmony export */ });\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n\n\nlet display = document.getElementById('display')\n\nlet toDoItem = (name, desc, dueDate) => {\n  let toDoHolder = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'toDoItem'\n  })\n\n\n  let nameDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'nameDiv'\n  })\n\n  let toDoName = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'toDoName',\n    innerHTML: name,\n  })\n\n  let descDiv= (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'descDiv'\n  })\n\n  let toDoDesc = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'toDoDesc',\n    innerHTML: desc,\n  })\n\n  let dueDateDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'dueDateDiv'\n  })\n\n  let toDoDueDate = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'toDoDueDate',\n    innerHTML: dueDate,\n  })\n\n  nameDiv.appendChild(toDoName)\n  descDiv.appendChild(toDoDesc)\n  dueDateDiv.appendChild(toDoDueDate)\n\n  toDoHolder.appendChild(nameDiv)\n  toDoHolder.appendChild(descDiv)\n  toDoHolder.appendChild(dueDateDiv)\n\n  display.appendChild(toDoHolder)\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/todoCards.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/FormLogic.js");
/******/ 	
/******/ })()
;
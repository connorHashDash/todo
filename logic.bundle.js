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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCards.js */ \"./src/todoCards.js\");\n/* harmony import */ var _topbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topbar.js */ \"./src/topbar.js\");\n/* harmony import */ var _seeAllLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seeAllLogic.js */ \"./src/seeAllLogic.js\");\n/* harmony import */ var _tabLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabLogic.js */ \"./src/tabLogic.js\");\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n// file is improperly named, it is the hub file for all the logic used in the app\n\n\n\n\n\n\n\nlet form = document.getElementById('form')\nlet log = console.log\nlet todos = []\n\nlet tabGet = (() => {\n  let topBar = document.getElementById('topnav');\n  let newTab = document.getElementById('plusDiv');\n  \n  return {topBar, newTab}\n})()\n\n\nlet formGet = () => {\n  let Name = document.getElementsByName('titleInput')[0].value\n  let Desc = document.getElementsByName('desc')[0].value\n  let dueDate = document.getElementsByName('dueDate')[0].value\n  let button = document.getElementsByName('button')\n  return {form, Name, Desc, dueDate, button}\n}\n\nlet tabArr = []\nlet Logic = (() => {\n  let i = 0\n  form.addEventListener('submit', (e) => {\n    e.preventDefault()\n    todos[i] = formGet()\n    ;(0,_todoCards_js__WEBPACK_IMPORTED_MODULE_0__.toDoItem)(todos[i].Name, todos[i].Desc, todos[i].dueDate);\n    form.reset()\n  })\n\n  let j = 0\n  tabGet.newTab.addEventListener('click', () => {\n    ;(0,_topbar_js__WEBPACK_IMPORTED_MODULE_1__.tabMaker)(`Project${j}`)\n    tabArr[j] = (0,_tabLogic_js__WEBPACK_IMPORTED_MODULE_3__.tabObj)(`Project${j}`, j)\n    log(tabArr[j])\n    j++\n  })\n\n\n})()\n\n\n// The see all projects button underneath the form\nlet seeAll = document.getElementById('seeAllDiv')\n\nlet display = document.getElementById('display')\nseeAll.addEventListener('click', () => {\n  ;(0,_seeAllLogic_js__WEBPACK_IMPORTED_MODULE_2__.seeAllButton)()\n  for (let i = 0; i < tabArr.length; i++){\n    display.appendChild((0,_seeAllLogic_js__WEBPACK_IMPORTED_MODULE_2__.populateSeeAllDiv)(tabArr[i].name, tabArr[i].position + 1).container)\n  }\n})\n\n\n//# sourceURL=webpack://todo/./src/FormLogic.js?");

/***/ }),

/***/ "./src/leftbar.js":
/*!************************!*\
  !*** ./src/leftbar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateForm\": () => (/* binding */ populateForm),\n/* harmony export */   \"populateSideBar\": () => (/* binding */ populateSideBar)\n/* harmony export */ });\n/* harmony import */ var _TodooeyLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodooeyLogo.png */ \"./src/TodooeyLogo.png\");\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\nconst sidenav = document.getElementById('leftsidenav')\n;\n\n\nlet seeAllProjects = () => {\n  const seeAllDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'seeAllDiv',\n    innerText: 'All Projects',\n  })\n\n  return seeAllDiv\n}\n\nlet sideBarForm = (() => {\n\n  //Creating form elements\n  const formDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', { \n    id: 'formDiv' \n  })\n  const form = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('form', { \n    id: 'form', \n    autocomplete: 'off',\n  })\n\n  const titleDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'titleDiv',\n    className: 'FormItem',\n  })\n  const titleLabel = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('label', {\n    id: 'titleLabel',\n    htmlFor: 'tileInput',\n    innerText: 'Todo Name',\n  })\n  const title = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('input', {\n    id: 'titleInput',\n    name: 'titleInput',\n    required: true,\n  })\n\n  const descDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'discDiv', \n    className: 'FormItem',\n  })\n  const descLabel = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('label', {\n    id: 'descLabel',\n    innerText: 'Description',\n    htmlFor: 'desc',\n  })\n  const desc = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('textarea', {\n    id: 'desc',\n    name: 'desc',\n  })\n\n  const dueDateDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'dueDateDiv', className: 'FormItem'\n  })\n  const dueDateLabel = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('label', {\n    id: 'dueDateLabel',\n    htmlFor: 'dueDate',\n    innerText: 'Due Date',\n  })\n  const dueDate = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('input', {\n    type: 'date',\n    id: 'dueDate',\n    name: 'dueDate',\n  })\n\n  const buttonDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'buttonDiv',\n    className: 'FormItem',\n  })\n  const button = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('button', {\n    id: 'button',\n    innerText: 'Add'\n  })\n  \n  // making Dom tree of Form\n  formDiv.appendChild(form)\n  form.appendChild(titleDiv)\n  titleDiv.appendChild(titleLabel)\n  titleDiv.appendChild(title)\n  form.appendChild(descDiv)\n  descDiv.appendChild(descLabel)\n  descDiv.appendChild(desc)\n  form.appendChild(dueDateDiv)\n  dueDateDiv.appendChild(dueDateLabel)\n  dueDateDiv.appendChild(dueDate)\n  form.appendChild(buttonDiv)\n  buttonDiv.appendChild(button)\n  \n  return {formDiv, form}\n})()\n\nlet sideBarIcon = (() => {\n  let iconDiv = document.createElement('div')\n  const todooeyLogo = new Image();\n\n  todooeyLogo.src = _TodooeyLogo_png__WEBPACK_IMPORTED_MODULE_0__;\n  todooeyLogo.id = 'Logo'\n\n  iconDiv.id = 'iconDiv';\n\n  iconDiv.appendChild(todooeyLogo)\n\n  return {iconDiv}\n})();\n\nlet loadedOnce = false;\n\nfunction populateSideBar() {\n  sidenav.appendChild(sideBarIcon.iconDiv)\n  sidenav.appendChild(sideBarForm.formDiv)\n  if (loadedOnce == false){\n    sidenav.appendChild(seeAllProjects())\n    loadedOnce = true\n  }\n}\n\nfunction populateForm () {\n  let target = document.getElementById('formDiv')\n  target.appendChild(sideBarForm.form)\n}\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/leftbar.js?");

/***/ }),

/***/ "./src/seeAllLogic.js":
/*!****************************!*\
  !*** ./src/seeAllLogic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateSeeAllDiv\": () => (/* binding */ populateSeeAllDiv),\n/* harmony export */   \"seeAllButton\": () => (/* binding */ seeAllButton)\n/* harmony export */ });\n/* harmony import */ var _leftbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leftbar.js */ \"./src/leftbar.js\");\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n\n\n\n\nlet display = document.getElementById('display')\n\nlet active = false\n\nlet clearDisplay = () => {\n  display.innerHTML = ``\n}\n\nlet populateSeeAllDiv = (title, number) => {\n  let container = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    className: 'projectDiv',\n  })\n  let projTitle = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('p', {\n    className: 'projectName',\n    innerHTML: title,\n  })\n  \n  let open = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    className: 'openButton',\n  })\n\n  let openText = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('p', {\n    className: 'buttonText',\n    innerHTML: 'Open Project'\n  })\n    \n  container.appendChild(projTitle)\n  container.appendChild(open)\n  open.appendChild(openText)\n\n  return {container}\n}\n\nlet seeAllButton = () => {\n  if (active == false){\n    clearDisplay()\n    console.log(active)\n    active = true;\n    return\n  }else if (active == true){\n    console.log(active)\n    active = false;\n    return\n  }\n  \n}\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/seeAllLogic.js?");

/***/ }),

/***/ "./src/tabLogic.js":
/*!*************************!*\
  !*** ./src/tabLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabObj\": () => (/* binding */ tabObj)\n/* harmony export */ });\n\n\nlet tabObj = (name, position) => { // creates the tabs for an array in FormLogic\n  return {name, position}\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/tabLogic.js?");

/***/ }),

/***/ "./src/todoCards.js":
/*!**************************!*\
  !*** ./src/todoCards.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoItem\": () => (/* binding */ toDoItem)\n/* harmony export */ });\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n\n\nlet display = document.getElementById('display')\n\nlet toDoItem = (name, desc, dueDate) => {\n  let toDoHolder = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'toDoItem'\n  })\n\n  let nameDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'nameDiv'\n  })\n\n  let toDoName = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'toDoName',\n    innerHTML: name,\n  })\n\n  let seeMore = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'seeMore',\n  })\n  \n  let tickBox = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'tickBox',\n  })\n\n  let buttonDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'buttons',\n  })\n\n  let descDiv= (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'descDiv'\n  })\n\n  let toDoDesc = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'toDoDesc',\n    innerHTML: desc,\n  })\n\n  let dueDateDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'dueDateDiv'\n  })\n\n  let toDoDueDate = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'toDoDueDate',\n    innerHTML: `Deadline: ${dueDate}`,\n  })\n\n  nameDiv.appendChild(toDoName)\n  buttonDiv.appendChild(seeMore)\n  buttonDiv.appendChild(tickBox)\n  nameDiv.appendChild(buttonDiv)\n  toDoHolder.appendChild(nameDiv)\n  \n  descDiv.appendChild(toDoDesc)\n  dueDateDiv.appendChild(toDoDueDate)\n\n  toDoHolder.appendChild(descDiv)\n  toDoHolder.appendChild(dueDateDiv)\n\n  display.appendChild(toDoHolder)\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/todoCards.js?");

/***/ }),

/***/ "./src/topbar.js":
/*!***********************!*\
  !*** ./src/topbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateTopBar\": () => (/* binding */ populateTopBar),\n/* harmony export */   \"tabMaker\": () => (/* binding */ tabMaker)\n/* harmony export */ });\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n\n\nlet topBar = document.getElementById('topnav')\n\nlet tabMaker = (tabName) => {\n  let container = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'tabdiv',\n  })\n\n  container.addEventListener('click', () => {\n    \n  })\n\n  let name = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'tabName',\n    innerHTML: `${tabName}`,\n  })\n\n  let deleteButtonHolder = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: `killTabHolder`\n  })\n\n  deleteButtonHolder.addEventListener('click', function() {\n    this.parentElement.remove()\n  })\n\n  let deleteButton = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: `killTab`,\n    innerHTML: `&#10799`,\n  })\n\n  container.appendChild(name)\n  deleteButtonHolder.appendChild(deleteButton)\n  container.appendChild(deleteButtonHolder)\n  topBar.insertBefore(container, topBar.children[topBar.children.length - 1])\n}\n\n\nlet plusSign = (() => {\n\n  let plusSymHolder = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    id: 'plusDiv',\n  })\n\n  let plusSymbol = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', { \n    id: 'plusSign',\n    innerHTML: '&#43;',\n  })\n  \n  plusSymHolder.appendChild(plusSymbol)\n  return {plusSymHolder}\n})()\n\nlet populateTopBar = () => {\n  topBar.appendChild(plusSign.plusSymHolder)\n} \n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/topbar.js?");

/***/ }),

/***/ "./src/TodooeyLogo.png":
/*!*****************************!*\
  !*** ./src/TodooeyLogo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"744c00e32299a6e16c9e.png\";\n\n//# sourceURL=webpack://todo/./src/TodooeyLogo.png?");

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
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _topbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topbar.js */ \"./src/topbar.js\");\n/* harmony import */ var _todoCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCards.js */ \"./src/todoCards.js\");\n/* harmony import */ var _seeAllLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seeAllLogic.js */ \"./src/seeAllLogic.js\");\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n/* harmony import */ var _ProjLogic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjLogic.js */ \"./src/ProjLogic.js\");\n/* harmony import */ var _projectArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectArray.js */ \"./src/projectArray.js\");\n// File is improperly named, it is the hub file for all the logic used in the app\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlet form = document.getElementById('form')\nlet log = console.log\n\nlet tabGet = (() => {\n  let topBar = document.getElementById('topnav');\n  return {topBar}\n})()\n\nlet tabObj = (name, number) => {\n  return {name, number}\n}\nlet i = 1\n\nlet formGet = () => {\n  let Name = document.getElementsByName('titleInput')[0].value\n  let Desc = document.getElementsByName('desc')[0].value\n  let dueDate = document.getElementsByName('dueDate')[0].value\n  let priority = 0\n  return {Name, Desc, dueDate, priority, Number}\n}\n\n;(0,_projectArray_js__WEBPACK_IMPORTED_MODULE_5__.localStorageRead)()\n\n\nlet Logic = (() => {\n  let logo = document.getElementById('Logo')\n\n  logo.addEventListener('click', () => {\n    localStorage.clear()\n  })\n\n  let display = document.getElementById('display')\n  let displayProjectsList = () => {\n  display.style.flexDirection = 'column';\n  (0,_topbar_js__WEBPACK_IMPORTED_MODULE_0__.removeActives)()\n  ;(0,_seeAllLogic_js__WEBPACK_IMPORTED_MODULE_2__.clearDisplay)()\n  for (let i = 0; i < Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr).length; i++){\n    display.appendChild((0,_seeAllLogic_js__WEBPACK_IMPORTED_MODULE_2__.populateSeeAllDiv)(_projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr[i][0].name, i).container)\n  }\n  display.appendChild((0,_seeAllLogic_js__WEBPACK_IMPORTED_MODULE_2__.addProjButton)().formContainer)\n  }\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    let currentTodo = _projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_0__.currentProj].length\n    _projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_0__.currentProj][currentTodo] = formGet();\n    _projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_0__.currentProj][currentTodo].Number = currentTodo\n    ;(0,_todoCards_js__WEBPACK_IMPORTED_MODULE_1__.toDoItem)(\n      _projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_0__.currentProj][currentTodo].Name, \n      _projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_0__.currentProj][currentTodo].Desc, \n      _projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_0__.currentProj][currentTodo].dueDate,\n      _projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_0__.currentProj][currentTodo].priority,\n      _projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_0__.currentProj][currentTodo].Number,\n      )\n    form.reset();\n    (0,_projectArray_js__WEBPACK_IMPORTED_MODULE_5__.localStorageCommit)()\n    log(_projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr)\n  })\n\n  let homeTab = (() => {\n    if(localStorage.length == 0){\n    _projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr[0] = []\n    ;(0,_topbar_js__WEBPACK_IMPORTED_MODULE_0__.tabMaker)(`Home`, 0);\n    _projectArray_js__WEBPACK_IMPORTED_MODULE_5__.tabArr[0][0] = tabObj(`Home`, 0);\n    } else {\n      displayProjectsList()\n    }\n  })()\n\nlet seeAll = document.getElementById('seeAllDiv')\n\nseeAll.addEventListener('click', () => {\n  displayProjectsList()\n  return\n})\n})()\n\n// make todos editable and edits storable\n// home div active on startup\n// make projects and todos deletable\n// make flex direction correct itself\n\n\n//# sourceURL=webpack://todo/./src/FormLogic.js?");

/***/ }),

/***/ "./src/ProjLogic.js":
/*!**************************!*\
  !*** ./src/ProjLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"seeAllButton\": () => (/* binding */ seeAllButton)\n/* harmony export */ });\n/* harmony import */ var _seeAllLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seeAllLogic.js */ \"./src/seeAllLogic.js\");\n\n\nlet display = document.getElementById('display')\n\nlet tabArr = []\n\nlet seeAllButton = () => {\n  if (active == false){\n    display.style.flexDirection = 'column';\n    active = true;\n    for (let i = 0; i < tabArr.length; i++){\n      display.appendChild((0,_seeAllLogic_js__WEBPACK_IMPORTED_MODULE_0__.populateSeeAllDiv)(tabArr[i][0].name, tabArr[i][0].position + 1).container)\n    }\n    display.appendChild(addProjButton().container)\n    return\n  }else if (active == true){\n    active = false;\n    display.style.flexDirection = 'null'\n    clearDisplay()\n    return\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/ProjLogic.js?");

/***/ }),

/***/ "./src/leftbar.js":
/*!************************!*\
  !*** ./src/leftbar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateForm\": () => (/* binding */ populateForm),\n/* harmony export */   \"populateSideBar\": () => (/* binding */ populateSideBar)\n/* harmony export */ });\n/* harmony import */ var _TodooeyLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodooeyLogo.png */ \"./src/TodooeyLogo.png\");\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\nconst sidenav = document.getElementById('leftsidenav')\n;\n\n\nlet seeAllProjects = () => {\n  const seeAllDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'seeAllDiv',\n    innerText: 'All Projects',\n  })\n\n  return seeAllDiv\n}\n\nlet sideBarForm = (() => {\n\n  //Creating form elements\n  const formDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', { \n    id: 'formDiv' \n  })\n  const form = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('form', { \n    id: 'form', \n    autocomplete: 'off',\n  })\n\n  const titleDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'titleDiv',\n    className: 'FormItem',\n  })\n  const titleLabel = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('label', {\n    id: 'titleLabel',\n    htmlFor: 'tileInput',\n    innerText: 'Todo Name',\n  })\n  const title = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('input', {\n    id: 'titleInput',\n    name: 'titleInput',\n    required: true,\n  })\n\n  const descDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'discDiv', \n    className: 'FormItem',\n  })\n  const descLabel = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('label', {\n    id: 'descLabel',\n    innerText: 'Description',\n    htmlFor: 'desc',\n  })\n  const desc = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('textarea', {\n    id: 'desc',\n    name: 'desc',\n  })\n\n  const dueDateDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'dueDateDiv', className: 'FormItem'\n  })\n  const dueDateLabel = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('label', {\n    id: 'dueDateLabel',\n    htmlFor: 'dueDate',\n    innerText: 'Due Date',\n  })\n  const dueDate = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('input', {\n    type: 'date',\n    id: 'dueDate',\n    name: 'dueDate',\n  })\n\n  const buttonDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'buttonDiv',\n    className: 'FormItem',\n  })\n  const button = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('button', {\n    id: 'button',\n    innerText: 'Add'\n  })\n  \n  // making Dom tree of Form\n  formDiv.appendChild(form)\n  form.appendChild(titleDiv)\n  titleDiv.appendChild(titleLabel)\n  titleDiv.appendChild(title)\n  form.appendChild(descDiv)\n  descDiv.appendChild(descLabel)\n  descDiv.appendChild(desc)\n  form.appendChild(dueDateDiv)\n  dueDateDiv.appendChild(dueDateLabel)\n  dueDateDiv.appendChild(dueDate)\n  form.appendChild(buttonDiv)\n  buttonDiv.appendChild(button)\n  \n  return {formDiv, form}\n})()\n\nlet sideBarIcon = (() => {\n  let iconDiv = document.createElement('div')\n  const todooeyLogo = new Image();\n\n  todooeyLogo.src = _TodooeyLogo_png__WEBPACK_IMPORTED_MODULE_0__;\n  todooeyLogo.id = 'Logo'\n\n  iconDiv.id = 'iconDiv';\n\n  iconDiv.appendChild(todooeyLogo)\n\n  return {iconDiv}\n})();\n\nlet loadedOnce = false;\n\nfunction populateSideBar() {\n  sidenav.appendChild(sideBarIcon.iconDiv)\n  sidenav.appendChild(sideBarForm.formDiv)\n  if (loadedOnce == false){\n    sidenav.appendChild(seeAllProjects())\n    loadedOnce = true\n  }\n}\n\nfunction populateForm () {\n  let target = document.getElementById('formDiv')\n  target.appendChild(sideBarForm.form)\n}\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/leftbar.js?");

/***/ }),

/***/ "./src/projectArray.js":
/*!*****************************!*\
  !*** ./src/projectArray.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editArray\": () => (/* binding */ editArray),\n/* harmony export */   \"findProjects\": () => (/* binding */ findProjects),\n/* harmony export */   \"findTodos\": () => (/* binding */ findTodos),\n/* harmony export */   \"localStorageCommit\": () => (/* binding */ localStorageCommit),\n/* harmony export */   \"localStorageRead\": () => (/* binding */ localStorageRead),\n/* harmony export */   \"tabArr\": () => (/* binding */ tabArr)\n/* harmony export */ });\n/* harmony import */ var _todoCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCards.js */ \"./src/todoCards.js\");\n/* harmony import */ var _topbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topbar.js */ \"./src/topbar.js\");\n\n\n\nlet display = document.getElementById('display')\n\nlet tabArr = []\n\nlet localStorageRead = () => {\n  if (!localStorage.length == 0){\n  let stringArray = localStorage.getItem('appMemory')\n  tabArr = JSON.parse(stringArray)\n  }\n}\n\nlet localStorageCommit = () => {\n  localStorage.setItem('appMemory', JSON.stringify(tabArr))\n  console.log(tabArr)\n  console.log(localStorage)\n\n}\n\nlet findProjects = () => {\n  let projects = []\n  for (let i = 0; i < tabArr.length; i++) {\n    projects[i] = tabArr[i][0]\n  }\n  return {projects}\n}\n\nlet findTodos = (number) => {\n  for (let i = 1; i < Object.keys(tabArr[number]).length; ++i) {\n    (0,_todoCards_js__WEBPACK_IMPORTED_MODULE_0__.toDoItem)(tabArr[number][i].Name, \n      tabArr[number][i].Desc, \n      tabArr[number][i].dueDate,\n      tabArr[number][i].priority,\n      tabArr[number][i].Number,\n    )\n      \n  }\n}\n\nlet editArray = (Number, valToChange, newVal) => {\n  for(let i = 1; i < tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_1__.currentProj].length; i++) { \n    if (Number == tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_1__.currentProj][i].Number){\n      if (valToChange == 'priority'){\n        tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_1__.currentProj][i].priority = newVal\n      } else if (valToChange == 'desc') {\n        tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_1__.currentProj][i].Desc = newVal\n      }\n      console.log(tabArr[_topbar_js__WEBPACK_IMPORTED_MODULE_1__.currentProj][i].priority)\n    }\n  }\n  localStorageCommit()\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/projectArray.js?");

/***/ }),

/***/ "./src/seeAllLogic.js":
/*!****************************!*\
  !*** ./src/seeAllLogic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjButton\": () => (/* binding */ addProjButton),\n/* harmony export */   \"clearDisplay\": () => (/* binding */ clearDisplay),\n/* harmony export */   \"populateSeeAllDiv\": () => (/* binding */ populateSeeAllDiv)\n/* harmony export */ });\n/* harmony import */ var _leftbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leftbar.js */ \"./src/leftbar.js\");\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n/* harmony import */ var _projectArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectArray.js */ \"./src/projectArray.js\");\n/* harmony import */ var _topbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topbar.js */ \"./src/topbar.js\");\n\n\n\n\n\n\n\n\n\nlet display = document.getElementById('display')\n\nlet clearDisplay = () => {\n  display.innerHTML = ``;\n}\n\nlet tabObj = (name, number) => {\n  return {name, number}\n}\n\nlet populateSeeAllDiv = (title, number) => {\n  let container = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    className: 'projectDiv',\n  })\n  let projTitle = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('p', {\n    className: 'projectName',\n    innerHTML: title,\n  })\n  \n  let open = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    className: 'openButton',\n  })\n\n  let openText = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('p', {\n    className: 'buttonText',\n    innerHTML: 'Open Project'\n  })\n\n  // creates the tab from the project menu, if the tab doesn't already exist\n  open.addEventListener('click', () => {\n    let exists = document.getElementById(`${title}`);\n    (0,_topbar_js__WEBPACK_IMPORTED_MODULE_3__.projChanger)(number)\n    \n    if (exists == null) {\n      (0,_topbar_js__WEBPACK_IMPORTED_MODULE_3__.tabMaker)(title, number)\n      ;(0,_topbar_js__WEBPACK_IMPORTED_MODULE_3__.makeActive)(title)\n      clearDisplay()\n      ;(0,_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.findTodos)(number)\n      display.style.flexDirection = 'row';\n    } else {\n      clearDisplay()\n      ;(0,_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.findTodos)(number)\n      ;(0,_topbar_js__WEBPACK_IMPORTED_MODULE_3__.makeActive)(title)\n        display.style.flexDirection = 'row';\n    }\n  })\n  \n  container.appendChild(projTitle)\n  container.appendChild(open)\n  open.appendChild(openText)\n\n  return {container}\n}\n\nlet addProjButton = () => {\n  let formContainer = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'newProjForm',\n    autocomplete: 'off',\n  })\n  \n  let buttonContainer = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'newProjButton',\n    innerText: 'New Project'\n  })\n\n  let inputBox = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('input', {\n    id: 'newProjInput',\n    required: true,\n    autocomplete: 'off',\n  })\n\n  buttonContainer.addEventListener('click', () => {\n    let newProjVal = document.getElementById('newProjInput').value;\n    if (!newProjVal == ''){\n      (0,_topbar_js__WEBPACK_IMPORTED_MODULE_3__.tabMaker)(newProjVal, Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr).length)\n      _projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr[Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr).length] = []\n      _projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr[Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr).length - 1][0] = tabObj(newProjVal, Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr).length - 1);\n    }\n  clearDisplay()\n  for (let i = 0; i < Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr).length; i++){\n    display.appendChild(populateSeeAllDiv(_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr[i][0].name, _projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr[i][0].position + 1).container)\n    display.appendChild(formContainer)\n  }\n  })\n  \n  formContainer.appendChild(inputBox)\n  formContainer.appendChild(buttonContainer)\n\n  return {formContainer}\n}\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/seeAllLogic.js?");

/***/ }),

/***/ "./src/todoCards.js":
/*!**************************!*\
  !*** ./src/todoCards.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoItem\": () => (/* binding */ toDoItem)\n/* harmony export */ });\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n/* harmony import */ var _projectArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectArray.js */ \"./src/projectArray.js\");\n/* harmony import */ var _topbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topbar.js */ \"./src/topbar.js\");\n\n\n\n\n\nlet display = document.getElementById('display')\n\n// creates inbuilt tabs of each todo item\nlet todoTabs = () => {\n  let tabHolder = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'todoTabs',\n  })\n\n  let descTab = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'descTab'\n  })\n\n  let descTabText = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'descTabText',\n    innerHTML: 'Desc'\n  })\n\n  let dueDateTab = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'dueDateTab',\n  })\n\n  let dueDateText = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'dueDateText',\n    innerHTML: 'Due Date',\n  })\n\n  let priorityTab = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'priorityTab'\n  })\n\n  let priorityText = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'priorityText',\n    innerHTML: 'Priority',\n  })\n\n  //Appending todo list tabs to holder\n  tabHolder.appendChild(descTab)\n  tabHolder.appendChild(dueDateTab)\n  tabHolder.appendChild(priorityTab)\n  \n  //Appending text to the tabs\n  descTab.appendChild(descTabText)\n  dueDateTab.appendChild(dueDateText)\n  priorityTab.appendChild(priorityText)\n\n  //Need to return tabs  to add event listeners\n  return {tabHolder, descTab, dueDateTab, priorityTab} \n}\n\n//Create the page when description tab is clicked\nlet descPage = (desc) => {\n  let descDiv= (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'descDiv'\n  })\n\n  let toDoDesc = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'toDoDesc',\n    innerHTML: desc,\n  })\n\n  let penIcon = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('i', {\n    className: 'fas fa-pen'\n  })\n\n  penIcon.addEventListener('click', () => {\n    toDoDesc.contentEditable = true;\n  })\n  \n  descDiv.appendChild(toDoDesc)\n  toDoDesc.appendChild(penIcon)\n\n  return {descDiv}\n}\n\nlet dueDatePage = (dueDate) => {\n  console.log(dueDate)\n  console.log(_projectArray_js__WEBPACK_IMPORTED_MODULE_1__.tabArr)\n  if (dueDate == '') {\n    dueDate = 'none'\n  }\n\n  let deadline = 'Deadline: '\n  let dueDateDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'dueDateDiv',\n  })\n\n  let toDoDueDate = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'toDoDueDate',\n    innerHTML: `${deadline} ${dueDate}`,\n  })\n\n  dueDateDiv.appendChild(toDoDueDate);\n  \n  return {dueDateDiv}\n}\n\n// creates the priority tab, with three \"bubbles\" which allow you to select the priority.\nlet priorityPage = () => {\n  let holderDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'priorityDiv',\n  })\n\n  let labelDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'labelDiv',\n  })\n\n  let priorityLabel = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'priorityLabel',\n    innerHTML: 'Priority: ',\n  })\n\n  let bubbleHolder = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'bubbleHolder',\n  })\n\n  let bubble3 = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'red',\n  })\n\n  let bubble2 = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'orange',\n  })\n\n  let bubble1 = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'green',\n  })\n\n  //Append bubbles to parent node\n  bubbleHolder.appendChild(bubble3);\n  bubbleHolder.appendChild(bubble2);\n  bubbleHolder.appendChild(bubble1);\n\n  //Attach label to div\n  labelDiv.appendChild(priorityLabel);\n\n  holderDiv.appendChild(labelDiv)\n  holderDiv.appendChild(bubbleHolder)\n\n  return {holderDiv, bubble1, bubble2, bubble3}\n}\n//The function which creates the todo item and appends them to the document\nlet toDoItem = (name, desc, dueDate, priority, number) => {\n  console.log('priority: ' + priority)\n\n  \n  console.log(number)\n  \n  let todoDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'toDoItem'\n  })\n\n  let nameDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'nameDiv'\n  })\n\n  if (priority == 0){\n    nameDiv.style.backgroundColor = '#0082D5'\n  } else if (priority == 1){\n    nameDiv.style.backgroundColor = 'green'\n  } else if (priority == 2) {\n    nameDiv.style.backgroundColor = 'orange'\n  } else if (priority == 3){\n    nameDiv.style.backgroundColor = 'red'\n  }\n\n  let toDoName = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'toDoName',\n    innerHTML: name,\n  })\n  \n  let tickBox = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'tickBox',\n  })\n\n  let buttonDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'buttons',\n  })\n\n  let todoDisplay = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'todoDisplay'\n  })\n\n  let tabs = todoTabs()\n\n  let infoDiv = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'infoDiv'\n  })\n\n  let removeActives = (siblings) => {\n    for (let i = 0; i < siblings.length ; i++){\n      siblings[i].classList.remove('tabActive')\n    }\n  }\n  let descDiv = descPage(desc)\n\n  let dueDateDiv = dueDatePage(dueDate)\n\n  let priorityDiv = priorityPage()\n\n  tabs.descTab.addEventListener('click', function() {\n    let siblings = this.parentElement.children\n    removeActives(siblings)\n    this.className += ' tabActive'\n    infoDiv.innerHTML =''\n    infoDiv.appendChild(descDiv.descDiv)\n  })\n\n  tabs.dueDateTab.addEventListener('click', function() {\n    let siblings = this.parentElement.children\n    removeActives(siblings)\n    this.className += ' tabActive'\n    infoDiv.innerHTML =''\n    infoDiv.appendChild(dueDateDiv.dueDateDiv)\n  })\n\n  tabs.priorityTab.addEventListener('click', function() {\n    let siblings = this.parentElement.children;\n    removeActives(siblings);\n    this.className += ' tabActive';\n    infoDiv.innerHTML = '';\n    infoDiv.appendChild(priorityDiv.holderDiv)\n  })\n\n  priorityDiv.bubble1.addEventListener('click', function() {\n    this.parentElement.parentElement.parentElement.parentElement.children[0].style.backgroundColor ='green';\n    priority = 1;\n    (0,_projectArray_js__WEBPACK_IMPORTED_MODULE_1__.editArray)(number, 'priority', priority)\n  })\n\n  priorityDiv.bubble2.addEventListener('click', function() {\n    this.parentElement.parentElement.parentElement.parentElement.children[0].style.backgroundColor ='orange';\n    priority = 2;\n    (0,_projectArray_js__WEBPACK_IMPORTED_MODULE_1__.editArray)(number, 'priority', priority)\n  })\n\n  priorityDiv.bubble3.addEventListener('click', function() {\n    this.parentElement.parentElement.parentElement.parentElement.children[0].style.backgroundColor ='red';\n    priority = 3;\n    (0,_projectArray_js__WEBPACK_IMPORTED_MODULE_1__.editArray)(number, 'priority', priority)\n  })\n\n  tabs.descTab.className += ' tabActive'\n\n  nameDiv.appendChild(toDoName)\n  buttonDiv.appendChild(tickBox)\n  nameDiv.appendChild(buttonDiv)\n  todoDiv.appendChild(nameDiv)\n\n  // adds tabs to todo card\n  todoDiv.appendChild(tabs.tabHolder)\n  \n  // add description to todo card\n  todoDiv.appendChild(infoDiv)\n  infoDiv.appendChild(descDiv.descDiv)\n  \n  // puts tab into the display div \n  display.appendChild(todoDiv)\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/todoCards.js?");

/***/ }),

/***/ "./src/topbar.js":
/*!***********************!*\
  !*** ./src/topbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentProj\": () => (/* binding */ currentProj),\n/* harmony export */   \"makeActive\": () => (/* binding */ makeActive),\n/* harmony export */   \"projChanger\": () => (/* binding */ projChanger),\n/* harmony export */   \"removeActives\": () => (/* binding */ removeActives),\n/* harmony export */   \"tabMaker\": () => (/* binding */ tabMaker)\n/* harmony export */ });\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n/* harmony import */ var _projectArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectArray.js */ \"./src/projectArray.js\");\n/* harmony import */ var _todoCards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCards.js */ \"./src/todoCards.js\");\n/* harmony import */ var _seeAllLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seeAllLogic.js */ \"./src/seeAllLogic.js\");\n\n\n\n\n\nlet topBar = document.getElementById('topnav')\nlet display = document.getElementById('display')\n\nlet currentProj = 0;\n\nlet projChanger = (input) => {\n  currentProj = input\n}\n\nlet removeActives = () => {\n  let actives = document.getElementsByClassName('active')\n  for (let j = 0; j < actives.length; j++){\n    actives[j].classList.remove('active')\n  }\n}\n\nlet makeActive = (target) => {\n  removeActives()\n  let targetTab = document.getElementById(`${target}`)\n  targetTab.className += ' active'\n}\n\n\nlet printTodos = (number) => {\n  for (let i = 1; i < Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_1__.tabArr[number]).length; ++i) {\n    (0,_todoCards_js__WEBPACK_IMPORTED_MODULE_2__.toDoItem)(_projectArray_js__WEBPACK_IMPORTED_MODULE_1__.tabArr[number][i].Name, \n      _projectArray_js__WEBPACK_IMPORTED_MODULE_1__.tabArr[number][i].Desc, \n      _projectArray_js__WEBPACK_IMPORTED_MODULE_1__.tabArr[number][i].dueDate,\n      _projectArray_js__WEBPACK_IMPORTED_MODULE_1__.tabArr[number][i].priority)\n  }\n}\n\nlet tabMaker = (tabName, number) => {\n  let container = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'tabdiv',\n    id: `${tabName}`,\n  })\n  \n\n  container.addEventListener('click', function(e) {\n    ;(0,_seeAllLogic_js__WEBPACK_IMPORTED_MODULE_3__.clearDisplay)()\n    removeActives()\n    currentProj = number\n    printTodos(number)\n    this.className += ' active'\n    display.style.flexDirection = 'row';\n    return\n  })\n  \n  \n\n  let name = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'tabName',\n    innerHTML: `${tabName}`,\n  })\n\n  let deleteButtonHolder = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: `killTabHolder`\n  })\n\n  deleteButtonHolder.addEventListener('click', function(e) {\n    e.stopPropagation()\n    this.parentElement.remove()\n    let nextTab = document.getElementById('topnav').children\n    if (!currentProj == number) {\n      return\n    } else if (nextTab.length == 0) {\n      (0,_seeAllLogic_js__WEBPACK_IMPORTED_MODULE_3__.clearDisplay)()\n    } else {\n      nextTab[0].click()\n    }\n  })\n\n  let deleteButton = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: `killTab`,\n    innerHTML: `&#10799`,\n  })\n\n  container.appendChild(name)\n  deleteButtonHolder.appendChild(deleteButton)\n  container.appendChild(deleteButtonHolder)\n  topBar.insertBefore(container, topBar.children[topBar.children.length - 1])\n  return {tabName, number}\n}\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/topbar.js?");

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
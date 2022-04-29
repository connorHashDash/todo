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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./hamburger.png */ \"./src/hamburger.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n  margin: 0;\\n  padding: 0;\\n  font-family: arial;\\n}\\n\\nhtml, body {\\n  height: 100%;\\n}\\n\\n#content{\\n  position: relative;\\n  display: flex;\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n#rightsidediv{\\n  width: 100%;\\n}\\n\\n#topnav{\\n  height: 40px;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  background-color: #EAEAEA ;\\n}\\n\\n.tabdiv{\\n  display: flex;\\n  height: 70%;\\n  width: 248px;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-left: .5rem;\\n  padding-left: .5rem;\\n  padding-right: .3rem;\\n  background-color: rgba(169,169,169,1);\\n  border-radius: 6px;\\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  transition-duration: .2s;\\n  cursor: pointer;\\n}\\n\\n.active, .tabdiv:hover{\\n  box-shadow: none;\\n  background-color: grey;\\n}\\n\\n.tabName{\\n  color: white;\\n  font-weight: 500;\\n}\\n\\n.killTabHolder{\\n  aspect-ratio: 1 / 1;\\n  height: 70%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 20px;\\n  transition-duration: .3s;\\n  cursor: pointer;\\n}\\n\\n.killTabHolder:hover{\\n  background-color: #494949;\\n\\n}\\n\\n.killTab{\\n  color: white;\\n  font-weight: 500;\\n  text-align: center;\\n  transform: translate(0px, -1px);\\n}\\n\\n#plusDiv{\\n  display: flex;\\n  aspect-ratio: 1 / 1;\\n  height: 55%;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 6px;\\n  margin-left: .5rem;\\n  background-color: rgba(169,169,169,1);\\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  transition-duration: .3s;\\n  cursor: pointer;\\n}\\n\\n#plusDiv:hover{\\n  box-shadow: none;\\n  background-color: #494949;\\n}\\n\\n#plusSign{\\n  font-size: 1.5rem;\\n  font-weight: 800;\\n  color: white;\\n  text-shadow: 5px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n#display{\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 100%;\\n}\\n\\n#leftsidenav {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  height: 100%;\\n  width: 270px;\\nbackground: linear-gradient(90deg, rgba(169,169,169,1) 0%, rgba(164,164,164,1) 0%, rgba(159,159,159,1) 3%, rgba(203,203,203,1) 96%);\\n}\\n\\n#iconDiv{\\n  display: flex;\\n  width: 100px;\\n  height: fit-content;\\n  margin-top: 40px;\\n  margin-bottom: 30%;\\n}\\n\\n#Logo{\\n  width: inherit;\\n  height: 100%;\\n}\\n\\n#formDiv{\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n}\\n\\n#form{\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: inherit;\\n  padding-bottom: 20%;\\n\\n}\\n\\n.FormItem{\\n  text-align: center;\\n  font-size: 1.2rem;\\n  font-weight: 800;\\n}\\n\\ninput{\\n  border: 0;\\n}\\n\\n#titleDiv{\\n  \\n}\\n\\n#titleInput{\\n  font-size: 1rem;\\n  margin-top: 1rem;\\n  height: 2rem;\\n  width: 177px;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n#descDiv{\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 100%;\\n}\\n\\n#descLabel{\\n  \\n}\\n\\n#desc{\\n  margin-top: 1rem;\\n  height: 130px;\\n  width: 177px;\\n  resize: none;\\n  border: none;\\n  font-size: 1rem;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n#dueDate{\\n  margin-top: 1rem;\\n  height: 2rem;\\n  width: 177px;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n#seeAllDiv{\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 3rem;\\n  background-color: #838383;\\n  color: white;\\n  border-top-left-radius: 15px;\\n  border-top-right-radius: 15px;\\n  font-weight: 800;\\n  cursor: pointer;\\n  box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2), 0 -6px 20px 0 rgba(0, 0, 0, 0.19);\\n  transition-duration: .3s;\\n}\\n\\n#seeAllDiv:hover{\\n  background-color: #383838;\\n  box-shadow:none;\\n}\\n\\n#buttonDiv{\\n  width: 100%;\\n}\\n\\n#button{\\n  font-size: 1.5rem;\\n  border: 0;\\n  width: 80%;\\n  height: 2rem;\\n  background-color:  #006FB9;\\n  color: white;\\n  border-radius: 5px;\\n  transition-duration: .3s;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n#button:hover{\\n  background-color: #0082D5;\\n  cursor: pointer;\\n  box-shadow: none;\\n}\\n\\n.toDoItem{\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  width: 260px;\\n  margin-top: .5rem;\\n  margin-left: .5rem;\\n  height: 150px;\\n  border-radius: 10px;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  transition-duration: .3s;\\n}\\n\\n.nameDiv{\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: #0082D5;\\n  border-top-right-radius: 10px;\\n  border-top-left-radius: 10px;\\n}\\n\\n.toDoItem:hover{\\n  box-shadow: none;\\n}\\n\\n.toDoName{\\n  font-size: 1.5rem;\\n  text-align: center;\\n  font-weight: 800;\\n  color: white;\\n  border-top-left-radius: 10px;\\n  border-top-right-radius: 10px;\\n  margin-left: .2rem;\\n}\\n\\n.buttons{\\n  display: flex;\\n  margin-right: .5rem;\\n}\\n\\n.seeMore{\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: center;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  width: 2rem;\\n  height: 1.2rem;\\n}\\n\\n.tickBox{\\n  border: 1px  solid;\\n  width: 1rem;\\n  height: 1rem;\\n  margin-left: .2rem;\\n  border: 1px #67B2E1 solid;\\n}\\n\\n.descDiv{\\n  height: 100%;\\n}\\n\\n.toDoDesc{\\n  margin-left: 1rem;\\n  margin-top: .5rem;\\n}\\n\\n.toDoDueDate{\\n  margin-right: .3rem;\\n  margin-bottom: .2rem;\\n  text-align: end;\\n}\\n\\n/* See all projects seciont */\\n\\n.projectDiv{\\n  display: flex;\\n  width: 70%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  margin-top: 2rem;\\n  background-color: darkgrey;\\n  color: white;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  height: 3rem;\\n  border-radius: 15px;\\n}\\n\\n.projectName{\\n  font-size: 1.2rem;\\n  font-weight: 600;\\n}\\n\\n.openButton{\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: #0082D5;\\n  color: white;\\n  height: 2rem;\\n  padding-left: .7rem;\\n  padding-right: .7rem;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  transition-duration: .3s;\\n}\\n\\n.openButton:hover{\\n  background-color: #0082D5;\\n  cursor: pointer;\\n  box-shadow: none;\\n}\\n\\n#newProjForm{\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  margin-left: auto;\\n  margin-left: auto;\\n  margin-right: auto;\\n  flex-direction: column;\\n  height: 5rem;\\n  margin-top: 2rem;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  padding: 1rem;\\n  border-radius: 8px;\\n}\\n\\n#newProjInput{\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  border-radius: 8px;\\n  font-size: 1.5rem;\\n}\\n\\n#newProjButton{\\n  margin-top: 1rem;\\n  display: flex;\\n  font-size: 1.5rem;\\n  border: 0;\\n  align-items: center;\\n  width: fit-content;\\n  margin-left: auto;\\n  margin-right: auto;\\n  padding-left: .5rem;\\n  padding-right: .5rem;\\n  height: 2rem;\\n  background-color:  #006FB9;\\n  color: white;\\n  border-radius: 5px;\\n  transition-duration: .3s;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n#newProjButton:hover{\\n  background-color: #0082D5;\\n  cursor: pointer;\\n  box-shadow: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ElementMaker.js":
/*!*****************************!*\
  !*** ./src/ElementMaker.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elementFactory\": () => (/* binding */ elementFactory)\n/* harmony export */ });\nfunction elementFactory(type, properties){\n  let element = document.createElement(type)\n    \n  for (const p in properties){\n    element[p] = properties[p]\n  } return element\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/ElementMaker.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _leftbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leftbar.js */ \"./src/leftbar.js\");\n/* harmony import */ var _topbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topbar.js */ \"./src/topbar.js\");\n/* harmony import */ var _todoCards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoCards.js */ \"./src/todoCards.js\");\n\n\n\n\n\n\nlet todooey = (() => {\n  (0,_leftbar_js__WEBPACK_IMPORTED_MODULE_1__.populateSideBar)()\n})()\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findProjects\": () => (/* binding */ findProjects),\n/* harmony export */   \"findTodos\": () => (/* binding */ findTodos),\n/* harmony export */   \"tabArr\": () => (/* binding */ tabArr)\n/* harmony export */ });\nlet tabArr = []\n\nlet findProjects = () => {\n  let projects = []\n  for (let i = 0; i < tabArr.length; i++) {\n    projects[i] = tabArr[i][0]\n  }\n  return {projects}\n}\n\nlet findTodos = (projectNumber) => {\n  let todos = []\n    for (let i = 1; i < tabArr[projectNumber].length; i++) {\n      todos[i] = tabArr[projectNumber][i]\n    }\n  return {todos}\n}\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/projectArray.js?");

/***/ }),

/***/ "./src/seeAllLogic.js":
/*!****************************!*\
  !*** ./src/seeAllLogic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjButton\": () => (/* binding */ addProjButton),\n/* harmony export */   \"clearDisplay\": () => (/* binding */ clearDisplay),\n/* harmony export */   \"populateSeeAllDiv\": () => (/* binding */ populateSeeAllDiv)\n/* harmony export */ });\n/* harmony import */ var _leftbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leftbar.js */ \"./src/leftbar.js\");\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n/* harmony import */ var _projectArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectArray.js */ \"./src/projectArray.js\");\n/* harmony import */ var _topbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topbar.js */ \"./src/topbar.js\");\n\n\n\n\n\n\nlet display = document.getElementById('display')\n\nlet clearDisplay = () => {\n  display.innerHTML = ``;\n}\n\nlet tabObj = (name, number) => {\n  return {name, number}\n}\n\nlet populateSeeAllDiv = (title, number) => {\n  let container = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    className: 'projectDiv',\n  })\n  let projTitle = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('p', {\n    className: 'projectName',\n    innerHTML: title,\n  })\n  \n  let open = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    className: 'openButton',\n  })\n\n  let openText = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('p', {\n    className: 'buttonText',\n    innerHTML: 'Open Project'\n  })\n\n  // creates the tab from the project menu, if the tab doesn't already exist\n  open.addEventListener('click', () => {\n    let exists = document.getElementById(`${title}`);\n    if (exists == null) {\n      (0,_topbar_js__WEBPACK_IMPORTED_MODULE_3__.tabMaker)(title, number)\n    }\n  })\n  \n  container.appendChild(projTitle)\n  container.appendChild(open)\n  open.appendChild(openText)\n\n  return {container}\n}\n\nlet addProjButton = () => {\n  let formContainer = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'newProjForm',\n    autocomplete: 'off',\n  })\n  \n  let buttonContainer = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('div', {\n    id: 'newProjButton',\n    innerText: 'New Project'\n  })\n\n  let inputBox = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_1__.elementFactory)('input', {\n    id: 'newProjInput',\n    required: true,\n    autocomplete: 'off',\n  })\n\n  buttonContainer.addEventListener('click', () => {\n    let newProjVal = document.getElementById('newProjInput').value;\n    if (!newProjVal == ''){\n      (0,_topbar_js__WEBPACK_IMPORTED_MODULE_3__.tabMaker)(newProjVal, Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr).length)\n      _projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr[Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr).length] = []\n      _projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr[Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr).length - 1][0] = tabObj(newProjVal, Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr).length - 1);\n    }\n  clearDisplay()\n  for (let i = 0; i < Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr).length; i++){\n    display.appendChild(populateSeeAllDiv(_projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr[i][0].name, _projectArray_js__WEBPACK_IMPORTED_MODULE_2__.tabArr[i][0].position + 1).container)\n    display.appendChild(formContainer)\n  }\n  })\n  \n  formContainer.appendChild(inputBox)\n  formContainer.appendChild(buttonContainer)\n\n  return {formContainer}\n}\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/seeAllLogic.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentProj\": () => (/* binding */ currentProj),\n/* harmony export */   \"removeActives\": () => (/* binding */ removeActives),\n/* harmony export */   \"tabMaker\": () => (/* binding */ tabMaker)\n/* harmony export */ });\n/* harmony import */ var _ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementMaker.js */ \"./src/ElementMaker.js\");\n/* harmony import */ var _projectArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectArray.js */ \"./src/projectArray.js\");\n/* harmony import */ var _todoCards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCards.js */ \"./src/todoCards.js\");\n/* harmony import */ var _seeAllLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seeAllLogic.js */ \"./src/seeAllLogic.js\");\n\n\n\n\n\nlet topBar = document.getElementById('topnav')\n\nlet currentProj = 0;\n\nlet removeActives = () => {\n  let actives = document.getElementsByClassName('active')\n  for (let j = 0; j < actives.length; j++){\n    actives[j].classList.remove('active')\n  }\n}\n\n\nlet printTodos = (number) => {\n  for (let i = 1; i < Object.keys(_projectArray_js__WEBPACK_IMPORTED_MODULE_1__.tabArr[number]).length; ++i) {\n    (0,_todoCards_js__WEBPACK_IMPORTED_MODULE_2__.toDoItem)(_projectArray_js__WEBPACK_IMPORTED_MODULE_1__.tabArr[number][i].Name, \n      _projectArray_js__WEBPACK_IMPORTED_MODULE_1__.tabArr[number][i].Desc, \n      _projectArray_js__WEBPACK_IMPORTED_MODULE_1__.tabArr[number][i].dueDate)\n  }\n}\n\nlet tabMaker = (tabName, number) => {\n  let container = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: 'tabdiv',\n    id: `${tabName}`,\n  })\n  \n\n  container.addEventListener('click', function() {\n    ;(0,_seeAllLogic_js__WEBPACK_IMPORTED_MODULE_3__.clearDisplay)()\n    removeActives()\n    currentProj = number\n    printTodos(number)\n    this.className += ' active'\n    return\n  })\n  \n  \n\n  let name = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('p', {\n    className: 'tabName',\n    innerHTML: `${tabName}`,\n  })\n\n  let deleteButtonHolder = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: `killTabHolder`\n  })\n\n  deleteButtonHolder.addEventListener('click', function() {\n    this.parentElement.remove()\n  })\n\n  let deleteButton = (0,_ElementMaker_js__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('div', {\n    className: `killTab`,\n    innerHTML: `&#10799`,\n  })\n\n  container.appendChild(name)\n  deleteButtonHolder.appendChild(deleteButton)\n  container.appendChild(deleteButtonHolder)\n  topBar.insertBefore(container, topBar.children[topBar.children.length - 1])\n  return {tabName, number}\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/topbar.js?");

/***/ }),

/***/ "./src/TodooeyLogo.png":
/*!*****************************!*\
  !*** ./src/TodooeyLogo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"744c00e32299a6e16c9e.png\";\n\n//# sourceURL=webpack://todo/./src/TodooeyLogo.png?");

/***/ }),

/***/ "./src/hamburger.png":
/*!***************************!*\
  !*** ./src/hamburger.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"82b54a2cfdfe2cf57bf9.png\";\n\n//# sourceURL=webpack://todo/./src/hamburger.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
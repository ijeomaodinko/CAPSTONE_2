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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Audiowide&family=Lobster&family=Press+Start+2P&family=Rokkitt:wght@100;300;400;500;600;700;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* CSS variables */\\r\\n:root {\\r\\n  --white-color: rgb(255, 255, 255);\\r\\n  --black-color: rgb(0, 0, 0);\\r\\n  --blue-color: rgba(20, 5, 226);\\r\\n  --red-munsell: rgb(255, 0, 55);\\r\\n  --robin-egg-blue: rgb(0, 206, 200);\\r\\n  --fuchsia-crayola: rgb(172, 90, 184);\\r\\n  --chrome-yellow: rgb(255, 170, 0);\\r\\n  --camel: rgb(200, 160, 90);\\r\\n  --font-title: \\\"Lobster\\\", cursive;\\r\\n  --font-text: \\\"Rokkitt\\\", serif;\\r\\n  --font-button: \\\"Audiowide\\\", cursive;\\r\\n}\\r\\n\\r\\n/* General css */\\r\\n\\r\\nhtml {\\r\\n  box-sizing: border-box;\\r\\n  font-size: 100%;\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: inherit;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100%;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  background-color: var(--white-color);\\r\\n  font-family: var(--font-text);\\r\\n  font-size: 1rem;\\r\\n  color: var(--black-color);\\r\\n  line-height: 1.5;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\na,\\r\\na:hover,\\r\\na:visited,\\r\\na:focus {\\r\\n  text-decoration: none;\\r\\n  color: inherit;\\r\\n}\\r\\n\\r\\np {\\r\\n  margin-top: 0;\\r\\n}\\r\\n\\r\\nol,\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nli {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n/* Header */\\r\\nheader {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  width: 100%;\\r\\n  height: 5rem;\\r\\n  background-color: var(--black-color);\\r\\n}\\r\\n\\r\\n#nav-bar {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-items: flex-end;\\r\\n  gap: 2rem;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.links {\\r\\n  font-family: var(--font-button);\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  color: var(--white-color);\\r\\n  font-size: 2.5rem;\\r\\n  font-family: var(--font-title);\\r\\n  margin-right: 4rem;\\r\\n}\\r\\n\\r\\n#link_shows {\\r\\n  color: var(--red-munsell);\\r\\n}\\r\\n\\r\\n#link_artists {\\r\\n  color: var(--robin-egg-blue);\\r\\n}\\r\\n\\r\\n#link_dates {\\r\\n  color: var(--camel);\\r\\n}\\r\\n\\r\\n/* Main content */\\r\\n#items_section {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  margin-top: 2rem;\\r\\n  width: 100%;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  gap: 0.1rem;\\r\\n  border: 0.1rem outset var(--white-color);\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n\\r\\n.info_show {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.title_show {\\r\\n  color: var(--blue-color);\\r\\n}\\r\\n\\r\\n.likes_show {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.num_likes {\\r\\n  color: var(--red-munsell);\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.btn_show {\\r\\n  cursor: pointer;\\r\\n  font-family: var(--font-button);\\r\\n  text-align: center;\\r\\n  border-radius: 1rem;\\r\\n  border: none;\\r\\n  background-color: var(--red-munsell);\\r\\n  color: var(--white-color);\\r\\n}\\r\\n\\r\\n.btn_show:hover {\\r\\n  border: 0.3rem solid var(--red-munsell);\\r\\n  background-color: var(--white-color);\\r\\n  color: var(--red-munsell);\\r\\n}\\r\\n\\r\\n.buttons_show {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  gap: 0.5rem;\\r\\n  margin-top: 0.5rem;\\r\\n}\\r\\n\\r\\n.section {\\r\\n  display: flex;\\r\\n  flex-flow: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.sectionModel {\\r\\n  display: flex;\\r\\n  font-size: 2rem;\\r\\n  opacity: 0;\\r\\n  transition: opacity 1s;\\r\\n}\\r\\n\\r\\n.commentSection {\\r\\n  background-color: rgba(26, 34, 54, 0.95);\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  z-index: 2000;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  overflow-y: auto;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.showUp {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  background-color: #fff;\\r\\n  box-shadow: 0 2rem 5rem 1rem rgba(0, 0, 0, 0.1);\\r\\n  font-size: 1rem;\\r\\n  width: 35%;\\r\\n  border-radius: 0.7rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  gap: 0.1rem;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.closeModal {\\r\\n  height: 2rem;\\r\\n  width: 2rem;\\r\\n  align-self: flex-end;\\r\\n  margin-right: 1rem;\\r\\n}\\r\\n\\r\\n.imageModal {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n}\\r\\n\\r\\n.detailsShow {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  padding: 0.1rem;\\r\\n}\\r\\n\\r\\n.gridShow {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  padding: 0.1rem;\\r\\n  width: 100%;\\r\\n  gap: 0.3rem;\\r\\n}\\r\\n\\r\\n.detDiv {\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  gap: 4rem;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.sumShow {\\r\\n  text-align: justify;\\r\\n  font-size: small;\\r\\n}\\r\\n\\r\\n.comments_show {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  padding: 0.1rem;\\r\\n}\\r\\n\\r\\n.commentsList {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  gap: 0.1rem;\\r\\n  padding: 0.1rem;\\r\\n}\\r\\n\\r\\n.commentsList li {\\r\\n  border: none;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.writeComments {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n\\r\\n.btn_movies {\\r\\n  border: none;\\r\\n  font-size: 1rem;\\r\\n  padding: 0.5rem 0.5rem;\\r\\n  border-radius: 0.5rem;\\r\\n  color: white;\\r\\n  background-color: #ff0045ff;\\r\\n  cursor: pointer;\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  position: sticky;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  background-color: var(--red-munsell);\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.itotal {\\r\\n  margin-top: 0;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_showListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showListItem.js */ \"./src/modules/showListItem.js\");\n\n\n\nwindow.addEventListener('load', async () => {\n  (0,_modules_showListItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/addPopup.js":
/*!*********************************!*\
  !*** ./src/modules/addPopup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n/* harmony import */ var _cancel_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cancel.png */ \"./src/cancel.png\");\n/* harmony import */ var _getShowById_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getShowById.js */ \"./src/modules/getShowById.js\");\n/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postComment.js */ \"./src/modules/postComment.js\");\n/* harmony import */ var _cleanElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cleanElement.js */ \"./src/modules/cleanElement.js\");\n\n\n\n\n\n\n// To create template to render the items in the modal\nconst renderModal = async (id) => {\n  // Get show\n  const show = await (0,_getShowById_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n\n  // Create modal content\n\n  // Create elements\n  const divShowModal = document.querySelector('.modal');\n\n  const divImgModal = document.createElement('div');\n  const imgClose = document.createElement('img');\n  const imgShowModal = document.createElement('img');\n\n  const divShowInfo = document.createElement('div');\n  const h3ShowTitle = document.createElement('h3');\n  const pSummary = document.createElement('p');\n  const ulDetails = document.createElement('ul');\n  const liDet1 = document.createElement('li');\n  const liDet2 = document.createElement('li');\n\n  const divComments = document.createElement('div');\n  const numComments = document.createElement('span');\n  const ulComments = document.createElement('ul');\n\n  const divAddComment = document.createElement('div');\n  const inpName = document.createElement('input');\n  const inpComment = document.createElement('input');\n  const btnComment = document.createElement('button');\n\n  // Add content and atributes\n  divShowModal.classList.add('modal');\n\n  imgShowModal.src = show.image.medium;\n  imgClose.classList.add('closeModal');\n\n  // Show image\n  divImgModal.classList.add('imageModal');\n  imgClose.src = _cancel_png__WEBPACK_IMPORTED_MODULE_1__;\n  divImgModal.appendChild(imgShowModal);\n\n  // Show details\n  divShowInfo.classList.add('detailsShow');\n  h3ShowTitle.classList.add('title_show');\n  h3ShowTitle.innerText = show.name;\n  pSummary.classList.add('sumShow');\n  pSummary.innerText = show.summary;\n  ulDetails.classList.add('gridShow');\n  liDet1.classList.add('detDiv');\n  liDet2.classList.add('detDiv');\n  liDet1.innerHTML = `<div><p>Premiered:${show.premiered}</p></div><div><p>Language:${show.language}</p></div>`;\n  liDet2.innerHTML = `<div><p>Ended:${show.ended}</p></div><div><p>Status:${show.status}</p></div>`;\n  ulDetails.appendChild(liDet1);\n  ulDetails.appendChild(liDet2);\n  divShowInfo.appendChild(h3ShowTitle);\n  divShowInfo.appendChild(ulDetails);\n\n  // Show comments\n  divComments.classList.add('comments_show');\n  numComments.classList.add('num_likes');\n  const comments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n  if (comments.length > 0) {\n    numComments.innerText = `Comments (${comments.length})`;\n    ulComments.classList.add('commentsList');\n    comments.forEach((e) => {\n      const liComment = document.createElement('li');\n      liComment.innerText = `${e.creation_date} ${e.username}: ${e.comment}`;\n      ulComments.appendChild(liComment);\n    });\n  } else {\n    numComments.innerText = 'Comments (0)';\n  }\n  divComments.appendChild(numComments);\n  divComments.appendChild(ulComments);\n\n  // Add comments\n  divAddComment.classList.add('writeComments');\n  inpName.classList.add('inputName');\n  inpName.placeholder = 'Username';\n  inpName.type = 'text';\n  inpComment.classList.add('inputComment');\n  inpComment.placeholder = 'Comment';\n  inpName.type = 'textarea';\n  btnComment.classList.add('btn_show');\n  btnComment.type = 'button';\n  btnComment.textContent = 'Comment';\n  divAddComment.appendChild(inpName);\n  divAddComment.appendChild(inpComment);\n  divAddComment.appendChild(btnComment);\n\n  divShowModal.appendChild(imgClose);\n  divShowModal.appendChild(divImgModal);\n  divShowModal.appendChild(divShowInfo);\n  divShowModal.appendChild(divComments);\n  divShowModal.appendChild(divAddComment);\n\n  /// ADD EVENTS LISTENERS\n\n  // Get the dom element to the modal\n  const commentsPage = document.querySelector('.commentSection');\n  // Add the content\n  commentsPage.appendChild(divShowModal);\n  // Show the modal\n  commentsPage.classList.add('showUp');\n  window.onclick = (event) => {\n    if (event.target === commentsPage) {\n      commentsPage.classList.remove('showUp');\n    }\n  };\n\n  imgClose.addEventListener('click', () => {\n    commentsPage.classList.remove('showUp');\n  });\n\n  btnComment.addEventListener('click', async () => {\n    const name = document.querySelector('.inputName').value;\n    const comment = document.querySelector('.inputComment').value;\n    if (name !== '' && comment !== '') {\n      await (0,_postComment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id, name, comment);\n      (0,_cleanElement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.commentsList');\n      const itemComments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n      numComments.innerText = `Comments (${itemComments.length})`;\n      for (let i = 0; i < itemComments.length; i += 1) {\n        const ul = document.querySelector('.commentsList');\n        const e = itemComments[i];\n        const li = document.createElement('li');\n        li.innerText = `${e.creation_date} ${e.username}: ${e.comment}`;\n        ul.appendChild(li);\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderModal);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/addPopup.js?");

/***/ }),

/***/ "./src/modules/cleanElement.js":
/*!*************************************!*\
  !*** ./src/modules/cleanElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cleanElement = (elementID) => {\n  const element = document.querySelector(elementID);\n  while (element.firstChild) {\n    element.removeChild(element.lastChild);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cleanElement);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/cleanElement.js?");

/***/ }),

/***/ "./src/modules/createItem.js":
/*!***********************************!*\
  !*** ./src/modules/createItem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _like_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../like.png */ \"./src/like.png\");\n/* harmony import */ var _postLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postLike.js */ \"./src/modules/postLike.js\");\n/* harmony import */ var _addPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addPopup.js */ \"./src/modules/addPopup.js\");\n/* harmony import */ var _cleanElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cleanElement.js */ \"./src/modules/cleanElement.js\");\n// Import icon\n\n\n\n\n\n// Function to create a div with show information\nconst createItem = (show, likes) => {\n  // Create elements\n  const divShow = document.createElement('div');\n  const divImg = document.createElement('div');\n  const imgShow = document.createElement('img');\n  const divShowTitle = document.createElement('div');\n  const h3ShowTitle = document.createElement('h3');\n  const divLikes = document.createElement('div');\n  const numLikes = document.createElement('span');\n  const imgLike = document.createElement('img');\n  const divButtons = document.createElement('div');\n  const btnReserve = document.createElement('button');\n  const btnComments = document.createElement('button');\n\n  // Add content and atributes\n  divShow.classList.add('show');\n\n  // Show image\n  divImg.classList.add('image_show');\n  imgShow.src = show.image.medium;\n  divImg.appendChild(imgShow);\n\n  // Show title\n  divShowTitle.classList.add('info_show');\n  h3ShowTitle.classList.add('title_show');\n  h3ShowTitle.textContent = show.name;\n  divShowTitle.appendChild(h3ShowTitle);\n\n  // Show likes\n  divLikes.classList.add('likes_show');\n  numLikes.classList.add('num_likes');\n  const likesItem = likes.find((element) => element.item_id === show.id).likes;\n  numLikes.textContent = likesItem;\n  imgLike.classList.add('img_like');\n  imgLike.src = _like_png__WEBPACK_IMPORTED_MODULE_0__;\n  divLikes.appendChild(numLikes);\n  divLikes.appendChild(imgLike);\n\n  // Show buttons\n  divButtons.classList.add('buttons_show');\n  btnComments.textContent = 'Comments';\n  btnComments.classList.add('btn_show');\n  btnReserve.textContent = 'Reserve';\n  btnReserve.classList.add('btn_show');\n  divButtons.appendChild(btnComments);\n  divButtons.appendChild(btnReserve);\n\n  /// ADD EVENTS LISTENERS\n\n  // Add new likes\n  imgLike.addEventListener('click', async () => {\n    (0,_postLike_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(show.id);\n    const likes = parseInt(numLikes.textContent, 10) + 1;\n    numLikes.textContent = likes;\n  });\n\n  // Show modal\n  btnComments.addEventListener('click', () => {\n    (0,_cleanElement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.modal');\n    (0,_addPopup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(show.id);\n  });\n\n  // Add child\n  divShow.appendChild(divImg);\n  divShow.appendChild(divShowTitle);\n  divShow.appendChild(divLikes);\n  divShow.appendChild(divButtons);\n\n  return divShow;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createItem);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/createItem.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (id) => {\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tC8kuxLLK9p84n1K7Qba/comments?item_id=${id}`,\n  );\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tC8kuxLLK9p84n1K7Qba/likes');\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/getShowById.js":
/*!************************************!*\
  !*** ./src/modules/getShowById.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getShowById = async (id) => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const result = await response.json();\n  let singleShow = {};\n  result.forEach((show) => {\n    if (Number(show.id) === Number(id)) {\n      singleShow = show;\n    }\n  });\n  return singleShow;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShowById);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/getShowById.js?");

/***/ }),

/***/ "./src/modules/getShows.js":
/*!*********************************!*\
  !*** ./src/modules/getShows.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Async function to get horror shows\nconst getShows = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const result = await response.json();\n  const horrorShows = [];\n  result.forEach((show) => {\n    if (show.genres.includes('Horror')) {\n      horrorShows.push(show);\n    }\n  });\n  return horrorShows;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/getShows.js?");

/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemsCounter = () => {\n  const numItems = (document.querySelectorAll('.show')).length;\n  return numItems;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/itemsCounter.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postComment = async (id, userName, userComment) => {\n  await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tC8kuxLLK9p84n1K7Qba/comments',\n    {\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n        username: userName,\n        comment: userComment,\n      }),\n    },\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/postComment.js?");

/***/ }),

/***/ "./src/modules/postLike.js":
/*!*********************************!*\
  !*** ./src/modules/postLike.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postLike = async (id) => {\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tC8kuxLLK9p84n1K7Qba/likes', {\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n    }),\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLike);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/postLike.js?");

/***/ }),

/***/ "./src/modules/showListItem.js":
/*!*************************************!*\
  !*** ./src/modules/showListItem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createItem.js */ \"./src/modules/createItem.js\");\n/* harmony import */ var _cleanElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanElement.js */ \"./src/modules/cleanElement.js\");\n/* harmony import */ var _getShows_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getShows.js */ \"./src/modules/getShows.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _itemsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemsCounter.js */ \"./src/modules/itemsCounter.js\");\n\n\n\n\n\n\nconst showListItem = async () => {\n  (0,_cleanElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('#items_container');\n  const itemsContainer = document.querySelector('#items_container');\n  // Get show from TVMaze API\n  const shows = await (0,_getShows_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  // Get likes form Involved API\n  const likes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  shows.forEach((show) => {\n    itemsContainer.appendChild((0,_createItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(show, likes));\n  });\n  // Show number of items\n  const linkShows = document.querySelector('#link_shows');\n  linkShows.textContent = `Shows ${(0,_itemsCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()}`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showListItem);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/showListItem.js?");

/***/ }),

/***/ "./src/cancel.png":
/*!************************!*\
  !*** ./src/cancel.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6c7abf518e62733ddc9.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/cancel.png?");

/***/ }),

/***/ "./src/like.png":
/*!**********************!*\
  !*** ./src/like.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5b05370f299c621a0c2e.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/like.png?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
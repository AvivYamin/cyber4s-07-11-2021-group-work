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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    background-color: salmon;\\n}\\n\\n#test{\\n    color: red;\\n}\\n\\n\\n/* <-------Pop Up Login Form CSS-------> */\\n/* Button used to open the contact form - fixed at the bottom of the page */\\n#account{\\n    background-color: rgb(30, 219, 71);\\n    color: black;\\n    padding: 0.8vw;\\n    margin-left: 1vw;\\n    margin-bottom: 20px;\\n    border: none;\\n    cursor: pointer;\\n    opacity: 0.8;\\n    position: fixed;\\n  }\\n  \\n  #logout-button{\\n    display: none;\\n    background-color: rgb(236, 55, 55);\\n    color: black;\\n    padding: 16px 20px;\\n    border: none;\\n    cursor: pointer;\\n    opacity: 0.8;\\n    position: fixed;\\n    bottom: 23px;\\n    right: 28px;\\n    width: 280px;\\n  }\\n  .open-button {\\n    background-color: #555;\\n    color: black;\\n    padding: 16px 20px;\\n    border: none;\\n    cursor: pointer;\\n    opacity: 0.8;\\n    position: fixed;\\n    bottom: 23px;\\n    right: 28px;\\n    width: 280px;\\n    display: none;\\n  }\\n  \\n  /* The popup form - hidden by default */\\n  .form-popup {\\n    display: none;\\n    position: fixed;\\n    bottom: 0;\\n    right: 15px;\\n    border: 3px solid #f1f1f1;\\n    z-index: 9;\\n  \\n  }\\n  \\n  /* Add styles to the form container */\\n  .form-container {\\n    max-width: 300px;\\n    padding: 10px;\\n    margin-top: 0%;\\n    margin-bottom: 0%;\\n    background-color: white;\\n  }\\n  \\n  /* Full-width input fields */\\n  .form-container input[type=text], .form-container input[type=password] {\\n    width: 100%;\\n    padding: 15px;\\n    margin: 5px 0 22px 0;\\n    border: none;\\n    background: #f1f1f1;\\n  }\\n  \\n  /* When the inputs get focus, do something */\\n  .form-container input[type=text]:focus, .form-container input[type=password]:focus {\\n    background-color: #ddd;\\n    outline: none;\\n  }\\n  \\n  /* Set a style for the submit/login button */\\n  .form-container .btn {\\n    background-color: #04AA6D;\\n    color: white;\\n    padding: 16px 20px;\\n    border: none;\\n    cursor: pointer;\\n    width: 100%;\\n    margin-bottom:10px;\\n    opacity: 0.8;\\n  }\\n  \\n  /* Add a red background color to the cancel button */\\n  .form-container .cancel {\\n    background-color: red;\\n  }\\n  \\n  /* Add some hover effects to buttons */\\n  .form-container .btn:hover, .open-button:hover {\\n    opacity: 1;\\n  }\\n  \\n  #username-input{\\n    width: 23vw;\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://backend/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://backend/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://backend/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://backend/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://backend/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://backend/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://backend/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://backend/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://backend/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://backend/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/helpers/delete/delete-contact.js":
/*!**********************************************!*\
  !*** ./src/helpers/delete/delete-contact.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteContact\": () => (/* binding */ deleteContact)\n/* harmony export */ });\n/* harmony import */ var _display_display_phonebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/display-phonebook */ \"./src/helpers/display/display-phonebook.js\");\n/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general-functions */ \"./src/helpers/general-functions.js\");\n/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-variables */ \"./src/helpers/global-variables.js\");\n\n\n\n\nasync function deleteContact(e){\n    try {\n        const name = e.target.previousSibling.textContent.split(\" - \")[0]; //Get the name of the wanted contact\n        const response = await axios.delete(`${_global_variables__WEBPACK_IMPORTED_MODULE_2__.baseUrl}/api/persons/${name}`); //Delete from database\n        const data = response.data;\n        (0,_display_display_phonebook__WEBPACK_IMPORTED_MODULE_0__.getPhonebook)(); //Display new phonebook\n        const message = (0,_general_functions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", [data]); \n        _global_variables__WEBPACK_IMPORTED_MODULE_2__.responseDiv.appendChild(message); //Display delete message\n    } catch (error) {\n        console.error(error);\n    }\n}\n\n//# sourceURL=webpack://backend/./src/helpers/delete/delete-contact.js?");

/***/ }),

/***/ "./src/helpers/display/display-info.js":
/*!*********************************************!*\
  !*** ./src/helpers/display/display-info.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInfo\": () => (/* binding */ getInfo)\n/* harmony export */ });\n/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-variables */ \"./src/helpers/global-variables.js\");\n/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general-functions */ \"./src/helpers/general-functions.js\");\n\n\n\nasync function getInfo(){\n    try {\n        const response = await axios.get(`${_global_variables__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/info`);\n        const data = response.data;\n        console.log(data);\n        let infoResult = (0,_general_functions__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', [data]);\n        _global_variables__WEBPACK_IMPORTED_MODULE_0__.phoneBookResult.appendChild(infoResult);\n    } catch (error) {\n        console.error(error);\n    }  \n}\n\n//# sourceURL=webpack://backend/./src/helpers/display/display-info.js?");

/***/ }),

/***/ "./src/helpers/display/display-phonebook.js":
/*!**************************************************!*\
  !*** ./src/helpers/display/display-phonebook.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPhonebook\": () => (/* binding */ getPhonebook)\n/* harmony export */ });\n/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-variables */ \"./src/helpers/global-variables.js\");\n/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general-functions */ \"./src/helpers/general-functions.js\");\n/* harmony import */ var _delete_delete_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delete/delete-contact */ \"./src/helpers/delete/delete-contact.js\");\n\n\n\nasync function getPhonebook(){ \n    try {\n        const response = await axios.get(`${_global_variables__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/api/persons`);\n        const data = response.data;\n        console.log(data);\n        const phoneBookList = (0,_general_functions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"ul\");\n        data.forEach(contact => {\n            const deleteBtn = (0,_general_functions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"button\", [\"X\"], [\"delete-button\"]);\n            deleteBtn.addEventListener(\"click\", _delete_delete_contact__WEBPACK_IMPORTED_MODULE_2__.deleteContact);\n            let contactEl = (0,_general_functions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"li\", [`${contact.name} - ${contact.number}   `, deleteBtn]);\n            phoneBookList.appendChild(contactEl);\n        });\n        _global_variables__WEBPACK_IMPORTED_MODULE_0__.phoneBookResult.appendChild(phoneBookList);\n    } catch (error) {\n        console.error(error);\n    }   \n};\n\n//# sourceURL=webpack://backend/./src/helpers/display/display-phonebook.js?");

/***/ }),

/***/ "./src/helpers/form/create-response-element.js":
/*!*****************************************************!*\
  !*** ./src/helpers/form/create-response-element.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createResponseElement\": () => (/* binding */ createResponseElement)\n/* harmony export */ });\n/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-variables */ \"./src/helpers/global-variables.js\");\n/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general-functions */ \"./src/helpers/general-functions.js\");\n\n\n\nfunction createResponseElement(contact){\n    let message;\n    if(typeof contact === \"object\"){\n        const name = contact.name;\n         message = (0,_general_functions__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', [`${name} was added to your contacts`]);\n    }else{\n         message = (0,_general_functions__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', [contact]);\n    }   \n    _global_variables__WEBPACK_IMPORTED_MODULE_0__.responseDiv.appendChild(message);\n}\n\n\n\n//# sourceURL=webpack://backend/./src/helpers/form/create-response-element.js?");

/***/ }),

/***/ "./src/helpers/form/create-user-object.js":
/*!************************************************!*\
  !*** ./src/helpers/form/create-user-object.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContactObject\": () => (/* binding */ createContactObject)\n/* harmony export */ });\n/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-variables */ \"./src/helpers/global-variables.js\");\n\n\nfunction createContactObject(){\n    const contactName = _global_variables__WEBPACK_IMPORTED_MODULE_0__.nameInputElement.value;\n    const contactNumber = _global_variables__WEBPACK_IMPORTED_MODULE_0__.numberInputElement.value;\n    if(contactName === \"\"){\n        \n    }\n    const contactObject = {\n        name: contactName,\n        number: contactNumber\n    };\n    return contactObject;\n}\n\n\n//# sourceURL=webpack://backend/./src/helpers/form/create-user-object.js?");

/***/ }),

/***/ "./src/helpers/form/form-requests.js":
/*!*******************************************!*\
  !*** ./src/helpers/form/form-requests.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postContact\": () => (/* binding */ postContact)\n/* harmony export */ });\n/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-variables */ \"./src/helpers/global-variables.js\");\n/* harmony import */ var _create_user_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user-object */ \"./src/helpers/form/create-user-object.js\");\n/* harmony import */ var _create_response_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-response-element */ \"./src/helpers/form/create-response-element.js\");\n\n\n\n\nasync function postContact(e){\n    e.preventDefault();\n    try {\n        const contactObject = (0,_create_user_object__WEBPACK_IMPORTED_MODULE_1__.createContactObject)();\n        let userName = localStorage.getItem(\"username\");\n        let response;\n        if(userName){\n            console.log(\"logged in\");\n            response = await axios.post(`${_global_variables__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/api/persons`, contactObject);\n        }else{\n            console.log(\"not logged\");\n            response = await axios.post(`${_global_variables__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/api/persons`, contactObject);\n        }\n        (0,_create_response_element__WEBPACK_IMPORTED_MODULE_2__.createResponseElement)(response.data); \n    } catch (error) {\n        alert(error);\n    }\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://backend/./src/helpers/form/form-requests.js?");

/***/ }),

/***/ "./src/helpers/general-functions.js":
/*!******************************************!*\
  !*** ./src/helpers/general-functions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\n/**\n * Creates a new DOM element.\n *\n * Example usage:\n * createElement(\"div\", [\"just text\", createElement(...)], [\"nana\", \"banana\"], {id: \"bla\"}, {click: (...) => {...}})\n *\n * @param {String} tagName - the type of the element\n * @param {Array} children - the child elements for the new element.\n *                           Each child can be a DOM element, or a string (if you just want a text element).\n * @param {Array} classes - the class list of the new element\n * @param {Object} attributes - the attributes for the new element\n * @param {Object} eventListeners - the event listeners on the element\n */\n\n function createElement(tagName, children = [], classes = [], attributes = {}, eventListeners = {}) {\n    //Create element\n    const el = document.createElement(tagName);\n\n    // Children\n    for(const child of children) {\n      el.append(child);\n    }\n  \n    // Classes\n    for(const cls of classes) {\n      el.classList.add(cls);\n    }\n  \n    // Attributes\n    for (const attr in attributes) {\n      el.setAttribute(attr, attributes[attr]);\n    }\n\n    //Evenetlisteners ???\n    for(const [key, value] of Object.entries(eventListeners)){\n      el.addEventListener(`${key}`, `${value}`);\n    }\n    \n    return el;\n}\n\n\n//# sourceURL=webpack://backend/./src/helpers/general-functions.js?");

/***/ }),

/***/ "./src/helpers/global-variables.js":
/*!*****************************************!*\
  !*** ./src/helpers/global-variables.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainHead\": () => (/* binding */ mainHead),\n/* harmony export */   \"displayPhonebookBtn\": () => (/* binding */ displayPhonebookBtn),\n/* harmony export */   \"phoneBookResult\": () => (/* binding */ phoneBookResult),\n/* harmony export */   \"nameInputElement\": () => (/* binding */ nameInputElement),\n/* harmony export */   \"numberInputElement\": () => (/* binding */ numberInputElement),\n/* harmony export */   \"submitBtn\": () => (/* binding */ submitBtn),\n/* harmony export */   \"responseDiv\": () => (/* binding */ responseDiv),\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl),\n/* harmony export */   \"searchInput\": () => (/* binding */ searchInput),\n/* harmony export */   \"searchBtn\": () => (/* binding */ searchBtn),\n/* harmony export */   \"infoBtn\": () => (/* binding */ infoBtn)\n/* harmony export */ });\n//API variables\n//const baseUrl = \"http://localhost:3000\";\nconst baseUrl = 'https://frozen-shelf-08348.herokuapp.com';\n//General variables\nconst mainHead = document.getElementById(\"main-head\");\nconst displayPhonebookBtn = document.getElementById(\"my-phonebook-button\");\nconst infoBtn = document.getElementById(\"info\");\nconst phoneBookResult = document.getElementById(\"phonebook\");\n//Form variables\nconst nameInputElement = document.getElementById(\"contact-name-input\");\nconst numberInputElement = document.getElementById(\"contact-number-input\");\nconst submitBtn = document.getElementById(\"submit-btn\");\nconst responseDiv = document.getElementById(\"response\");\n//Search variables\nconst searchInput = document.getElementById(\"contact-search-input\");\nconst searchBtn = document.getElementById(\"search-btn\");\n\n\n\n\n\n\n//# sourceURL=webpack://backend/./src/helpers/global-variables.js?");

/***/ }),

/***/ "./src/helpers/login/login-functions.js":
/*!**********************************************!*\
  !*** ./src/helpers/login/login-functions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setUpLogin\": () => (/* binding */ setUpLogin),\n/* harmony export */   \"handleLogin\": () => (/* binding */ handleLogin),\n/* harmony export */   \"userLogin\": () => (/* binding */ userLogin),\n/* harmony export */   \"createUserLink\": () => (/* binding */ createUserLink),\n/* harmony export */   \"openForm\": () => (/* binding */ openForm),\n/* harmony export */   \"closeForm\": () => (/* binding */ closeForm),\n/* harmony export */   \"logOut\": () => (/* binding */ logOut)\n/* harmony export */ });\n/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-variables */ \"./src/helpers/global-variables.js\");\n/* harmony import */ var _login_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-variables */ \"./src/helpers/login/login-variables.js\");\n//<---------------- Pop Up Login Form ------------------->\n\n\n\n_login_variables__WEBPACK_IMPORTED_MODULE_1__.submitLogin.addEventListener(\"click\", handleLogin);\n\n//Login function\nfunction setUpLogin(userName){\n    if(userName){\n        createUserLink(userName); //Changes the main head to include username indication link\n        if(userName){\n            _login_variables__WEBPACK_IMPORTED_MODULE_1__.openButton.style.display = \"none\"; //Once the username is set - login button disappears\n            _login_variables__WEBPACK_IMPORTED_MODULE_1__.logoutBtn.style.display = \"block\" //Logout button appears\n        }\n    }else{\n        _login_variables__WEBPACK_IMPORTED_MODULE_1__.openButton.style.display = \"block\"; //In first initialization username is null - so display login option\n        _login_variables__WEBPACK_IMPORTED_MODULE_1__.logoutBtn.style.display = \"none\" //Logout button disappears\n    }\n}\n\nfunction handleLogin(e){\n    e.preventDefault();\n    if(_login_variables__WEBPACK_IMPORTED_MODULE_1__.loginInput.value === \"\"){ //Validates the username input\n        alert(\"Invalid Username\")\n    }else{\n        const userName = _login_variables__WEBPACK_IMPORTED_MODULE_1__.loginInput.value; //Assigns the userName with the new input\n        userLogin(userName);\n        closeForm();\n    }\n}\n\nfunction userLogin(userName){\n    localStorage.setItem(\"username\", userName); //Saves user value to local storage\n    _login_variables__WEBPACK_IMPORTED_MODULE_1__.openButton.style.display = \"none\"; //Login button disappears\n    _login_variables__WEBPACK_IMPORTED_MODULE_1__.logoutBtn.style.display = \"block\" //Logout button appears\n    createUserLink(userName); //Changes the main head\n    location.reload(); //Refresh the DOM\n}\n\nfunction createUserLink(userName){\n    const userLinkElement = document.createElement(\"button\");\n    userLinkElement.id = \"account\";\n    userLinkElement.textContent = userName;\n    // userLinkElement.addEventListener(\"click\", getUserStatistics);\n    _global_variables__WEBPACK_IMPORTED_MODULE_0__.mainHead.innerText += \" - \";\n    userLinkElement.textContent = userName;\n    _global_variables__WEBPACK_IMPORTED_MODULE_0__.mainHead.append(userLinkElement);\n}\n\nfunction openForm() {\n    document.getElementById(\"myForm\").style.display = \"block\";\n  }\n  \n  function closeForm() {\n    document.getElementById(\"myForm\").style.display = \"none\";\n  }\n\nfunction logOut(){\n    localStorage.clear();\n    setUpLogin(); //Sets the login option\n    location.reload(); //Refresh the DOM\n}\n\n\n\n//# sourceURL=webpack://backend/./src/helpers/login/login-functions.js?");

/***/ }),

/***/ "./src/helpers/login/login-variables.js":
/*!**********************************************!*\
  !*** ./src/helpers/login/login-variables.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openButton\": () => (/* binding */ openButton),\n/* harmony export */   \"closeButton\": () => (/* binding */ closeButton),\n/* harmony export */   \"logoutBtn\": () => (/* binding */ logoutBtn),\n/* harmony export */   \"submitLogin\": () => (/* binding */ submitLogin),\n/* harmony export */   \"loginInput\": () => (/* binding */ loginInput),\n/* harmony export */   \"userName\": () => (/* binding */ userName)\n/* harmony export */ });\n//login variables\nconst openButton = document.getElementById(\"openButton\");\nconst closeButton = document.getElementById(\"close-button\");\nconst logoutBtn = document.getElementById(\"logout-button\");\nconst submitLogin = document.getElementById(\"login-button\");\nconst loginInput = document.getElementById(\"username-input\");\nlet userName = localStorage.getItem(\"username\");\n\n\n\n//# sourceURL=webpack://backend/./src/helpers/login/login-variables.js?");

/***/ }),

/***/ "./src/helpers/search/check-query.js":
/*!*******************************************!*\
  !*** ./src/helpers/search/check-query.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkQueryType\": () => (/* binding */ checkQueryType)\n/* harmony export */ });\nfunction checkQueryType(query){\n    \n    console.log(Number(query));\n    return(typeof query);\n}\n\n//# sourceURL=webpack://backend/./src/helpers/search/check-query.js?");

/***/ }),

/***/ "./src/helpers/search/search-functions.js":
/*!************************************************!*\
  !*** ./src/helpers/search/search-functions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getContact\": () => (/* binding */ getContact)\n/* harmony export */ });\n/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-variables */ \"./src/helpers/global-variables.js\");\n/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general-functions */ \"./src/helpers/general-functions.js\");\n/* harmony import */ var _check_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-query */ \"./src/helpers/search/check-query.js\");\n\n\n\n\nfunction createResponseElement(contact){\n    let message;\n    if(typeof contact === \"object\"){\n        const name = contact.name;\n        const number = contact.number;\n         message = (0,_general_functions__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', [`${name} - ${number}`]);\n    }else{\n         message = (0,_general_functions__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', [contact]);\n    }   \n    _global_variables__WEBPACK_IMPORTED_MODULE_0__.responseDiv.appendChild(message);\n}\n\nasync function getContact(e){ \n    e.preventDefault();\n    try {\n        const query = _global_variables__WEBPACK_IMPORTED_MODULE_0__.searchInput.value;\n        if(!Number(query)){\n            const response = await axios.get(`${_global_variables__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/api/search/?name=${query}`);\n            console.log(response.data);\n            createResponseElement(response.data);\n        }else{\n            const response = await axios.get(`${_global_variables__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/api/search/?number=${query}`);\n            console.log(response.data);\n            createResponseElement(response.data);\n        }\n    } catch (error) {\n        console.error(error);\n        createResponseElement(\"Invalid Query\");\n    }   \n};\n\n//# sourceURL=webpack://backend/./src/helpers/search/search-functions.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _helpers_login_login_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/login/login-variables */ \"./src/helpers/login/login-variables.js\");\n/* harmony import */ var _helpers_login_login_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/login/login-functions */ \"./src/helpers/login/login-functions.js\");\n/* harmony import */ var _helpers_global_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/global-variables */ \"./src/helpers/global-variables.js\");\n/* harmony import */ var _helpers_form_form_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/form/form-requests */ \"./src/helpers/form/form-requests.js\");\n/* harmony import */ var _helpers_display_display_phonebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/display/display-phonebook */ \"./src/helpers/display/display-phonebook.js\");\n/* harmony import */ var _helpers_search_search_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/search/search-functions */ \"./src/helpers/search/search-functions.js\");\n/* harmony import */ var _helpers_display_display_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/display/display-info */ \"./src/helpers/display/display-info.js\");\n \n\n\n\n\n\n\n\n\n\nconsole.log(`${_helpers_global_variables__WEBPACK_IMPORTED_MODULE_3__.baseUrl}/api/persons`);\n\n//User login setup\nlet userName = localStorage.getItem(\"username\");\n_helpers_login_login_functions__WEBPACK_IMPORTED_MODULE_2__.setUpLogin(userName);\n_helpers_login_login_variables__WEBPACK_IMPORTED_MODULE_1__.openButton.addEventListener(\"click\", _helpers_login_login_functions__WEBPACK_IMPORTED_MODULE_2__.openForm);\n_helpers_login_login_variables__WEBPACK_IMPORTED_MODULE_1__.closeButton.addEventListener(\"click\", _helpers_login_login_functions__WEBPACK_IMPORTED_MODULE_2__.closeForm);\n_helpers_login_login_variables__WEBPACK_IMPORTED_MODULE_1__.logoutBtn.addEventListener(\"click\", _helpers_login_login_functions__WEBPACK_IMPORTED_MODULE_2__.logOut);\n\n//Display phone book\n_helpers_global_variables__WEBPACK_IMPORTED_MODULE_3__.displayPhonebookBtn.addEventListener(\"click\", _helpers_display_display_phonebook__WEBPACK_IMPORTED_MODULE_5__.getPhonebook);\n//Display Info\n_helpers_global_variables__WEBPACK_IMPORTED_MODULE_3__.infoBtn.addEventListener(\"click\", _helpers_display_display_info__WEBPACK_IMPORTED_MODULE_7__.getInfo)\n//Form actions\n_helpers_global_variables__WEBPACK_IMPORTED_MODULE_3__.submitBtn.addEventListener('click', _helpers_form_form_requests__WEBPACK_IMPORTED_MODULE_4__.postContact);\n//Search actions \n_helpers_global_variables__WEBPACK_IMPORTED_MODULE_3__.searchBtn.addEventListener('click', _helpers_search_search_functions__WEBPACK_IMPORTED_MODULE_6__.getContact);\n\n\n//# sourceURL=webpack://backend/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
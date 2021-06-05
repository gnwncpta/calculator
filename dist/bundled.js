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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Calculator/Calculator.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Calculator/Calculator.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --dark: rgb(20, 20, 20);\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'Poppins', sans-serif;\\n}\\n\\nbody {\\n    height: 100vh;\\n    transition: .3s all;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n/* Additional Class */\\n.hidden { display: none; }\\n\\n/* Button */\\n.btn-white { background-color: rgb(255, 255, 255); }\\n.btn-white-1 { background-color: rgb(234, 234, 234); }\\n.btn-dark { background-color: rgb(20, 20, 20); }\\n\\n/* Text */\\n.text-dark { color:rgb(20, 20, 20); }\\n.text-white { color: rgb(255, 255, 255); }\\n\\n/* Background */\\n.bg-white { background-color: white; }\\n.bg-white-1 { background-color: rgb(234, 234, 234) }\\n.bg-dark { background-color: rgb(20, 20, 20); }\\n\\n/* Border */\\n.border-1-white { border: 1px solid rgb(196, 196, 196); }\\n\\n/* Theme */\\n.darkBG { background-color: rgb(25, 25, 25); }\\n\\n@keyframes blackAnim {\\n    0% { opacity: 0; }\\n    100% { opacity: 100%; }\\n}\\n\\n.black-overlay {\\n    width: 100%;\\n    height: 100%;\\n    opacity: .8;\\n    background-color: black;\\n    position: absolute;\\n    animation: blackAnim .2s ease-in-out;\\n}\\n\\n@keyframes modalInfo {\\n    0% { top: -300px; opacity: 0; }\\n\\n    100% { top: 0px; opacity: 1; }\\n}\\n\\n.modal-container {\\n    width: 500px;\\n    height: 300px;\\n    padding: 30px;\\n    position: absolute;\\n    border-radius: 20px;\\n    box-sizing: border-box;\\n    animation: modalInfo .8s ease-out;\\n    z-index: 2;\\n}\\n\\n.modal-info {\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n\\n}\\n\\n.modal-info header {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.modal-info header h1 {\\n    text-align: center;\\n}\\n\\n.modal-info button {\\n    cursor: pointer;\\n    font-family: 'Poppins', sans-serif;\\n    font-size: 18px;\\n    margin-top: 20px;\\n    padding: 10px 20px;\\n    border: none;\\n    border-radius: 9px;\\n}\\n\\n.modal-info button:hover {\\n    color: rgb(20, 20, 20);\\n    background-color: rgb(219, 219, 219);\\n}\\n\\n/* Container => Main */\\nmain {\\n    margin: auto;\\n    width: 350px;\\n    /* padding: 30px; */\\n    box-sizing: border-box;\\n    background-color: var(--dark);\\n}\\n\\n.mode {\\n    margin-top: 100px;\\n    cursor: pointer;\\n    border: none;\\n    padding: 10px 20px;\\n    box-sizing: border-box;\\n    border-radius: 50px;\\n}\\n\\n.display {\\n    height: 90px;\\n    padding: 10px;\\n    box-sizing: border-box;\\n    display: flex;\\n    align-items: center;\\n    justify-content: flex-end;\\n    transition: .3s all;\\n}\\n\\n.display p {\\n    font-size: 2em;\\n    font-weight: 600;\\n    width: 100%;\\n    text-align: right;\\n    overflow: hidden;\\n    letter-spacing: 2px;\\n    transition: .3s all;\\n}\\n\\n.button-grid .dark-button {\\n    border: 1px solid rgb(219, 219, 219);\\n}\\n\\n.button-grid {\\n    display: grid;\\n    grid-template-columns: repeat(4, 1fr);\\n    grid-template-rows: repeat(5, 70px);\\n}\\n\\n.button-grid button {\\n    font-size: 1em;\\n    cursor: pointer;\\n    border: none;\\n    transition: .3s all;\\n    /* border-radius: 10px; */\\n}\\n\\n.button-grid button.active:hover {\\n    background-color: rgb(195, 195, 195);\\n}\\n\\n.button-grid button.active.dark-mode:hover {\\n    background-color: rgb(45, 45, 45);\\n}\\n\\n.button-grid .operator {\\n    background-color: rgb(219, 219, 219);\\n}\\n\\n.button-grid .operator:hover {\\n    background-color: rgb(200, 200, 200);\\n}\\n\\n.button-grid .active:active {\\n    background-color: rgb(201, 201, 201);\\n}\\n\\n.button-grid .equals {\\n    grid-row: 2 / 6;\\n    grid-column: -1 / -2;\\n    font-size: 1.1em;\\n    color: white;\\n    border: none;\\n    background-color: rgb(30, 136, 242);\\n}\\n\\n.button-grid .equals:hover {\\n    background-color: rgb(26, 118, 210);\\n}\\n\\n.button-grid .clear {\\n    background-color: orange;\\n    border: none;\\n}\\n\\n.button-grid .clear:hover {\\n    background-color: rgb(224, 145, 0);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calculator/./src/Calculator/Calculator.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/Calculator/Calculator.css":
/*!***************************************!*\
  !*** ./src/Calculator/Calculator.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Calculator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Calculator.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Calculator/Calculator.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Calculator_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Calculator_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://calculator/./src/Calculator/Calculator.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Calculator/Calculator.js":
/*!**************************************!*\
  !*** ./src/Calculator/Calculator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mode\": () => (/* binding */ mode),\n/* harmony export */   \"displayP\": () => (/* binding */ displayP),\n/* harmony export */   \"display\": () => (/* binding */ display),\n/* harmony export */   \"buttonGrid\": () => (/* binding */ buttonGrid),\n/* harmony export */   \"numbersButton\": () => (/* binding */ numbersButton),\n/* harmony export */   \"modalContainer\": () => (/* binding */ modalContainer),\n/* harmony export */   \"modalInfo\": () => (/* binding */ modalInfo),\n/* harmony export */   \"modalInfoButton\": () => (/* binding */ modalInfoButton)\n/* harmony export */ });\n/* harmony import */ var _Calculator_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator.css */ \"./src/Calculator/Calculator.css\");\n/* harmony import */ var _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Fazt/Fazt */ \"./src/Fazt/Fazt.js\");\n/* harmony import */ var _DarkMode_DarkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DarkMode/DarkMode */ \"./src/DarkMode/DarkMode.js\");\n/* harmony import */ var _Count_Count__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Count/Count */ \"./src/Count/Count.js\");\n\n\n\n\n\n// DOM Selection\nconst buttons = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelectorAll('.button-grid button');\nconst display = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.display');\nconst displayP = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.display p');\nconst mode = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.mode');\nconst buttonGrid = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.button-grid');\nconst numbersButton = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelectorAll('.button-grid .number');\nconst operatorButton = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelectorAll('.button-grid .operator');\nconst clearButton = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.clear');\nconst calculateButton = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.button-grid button.equals');\nconst blackOverlay = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.black-overlay');\nconst modalContainer = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.modal-container');\nconst modalInfo = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.modal-container .modal-info');\nconst modalInfoButton = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.modal-container .modal-info button');\n\n// print(calculateButton)\n\n/* jika localStorage memiliki mode dark\nmaka atur tampilan menjadi dark mode */\nif(localStorage.getItem('mode') == 'dark'){\n    (0,_DarkMode_DarkMode__WEBPACK_IMPORTED_MODULE_2__.default)();\n}\n\n// jika yang di klik adalah tombol toggle dark mode\nmode.addEventListener('click', () => {\n    (0,_DarkMode_DarkMode__WEBPACK_IMPORTED_MODULE_2__.default)();\n});\n\nmodalInfoButton.addEventListener('click', (e) => {\n    e.target.parentElement.parentElement.classList.add('hidden');\n    blackOverlay.classList.add('hidden');\n});\n\n// tempat untuk menyimpan angka dan operator\nlet numbers = [];\n\n// if numbers button is clicked.\nnumbersButton.forEach(number => {\n    number.addEventListener('click', (e) => {\n        let value = e.target.textContent;\n        displayP.textContent += value;\n        numbers.push(parseInt(value));\n    });\n});\n\n// if some operators is clicked.\noperatorButton.forEach(operator => {\n    operator.addEventListener('click', (e) => {\n        let operator = e.target.textContent;\n        displayP.textContent += operator;\n        numbers.push(operator);\n    });\n});\n\n// Reset Calculator\nclearButton.addEventListener('click', () => {\n    numbers.length = 0;\n    displayP.innerHTML = '';\n});\n\n// if calculate button is clicked.\ncalculateButton.addEventListener('click', () => {\n    if(numbers.length == 0){\n        (0,_Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.log)('the numbers is empty!');\n        blackOverlay.classList.remove('hidden');\n        modalContainer.classList.remove('hidden');\n    } else {\n        let result = (0,_Count_Count__WEBPACK_IMPORTED_MODULE_3__.count)(numbers);\n        (0,_Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.log)(result);\n        displayP.innerHTML = result;\n        displayP.classList.add('hidden');\n\n        setTimeout(() => {\n            displayP.classList.remove('hidden');\n        }, 100);\n\n        numbers.length = 0;\n        numbers.push(result);\n        (0,_Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.log)(numbers);\n    }\n});\n\n\n\n//# sourceURL=webpack://calculator/./src/Calculator/Calculator.js?");

/***/ }),

/***/ "./src/Count/Count.js":
/*!****************************!*\
  !*** ./src/Count/Count.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"count\": () => (/* binding */ count)\n/* harmony export */ });\n/* harmony import */ var _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fazt/Fazt */ \"./src/Fazt/Fazt.js\");\n\n\nconst stringify = (numbers) => {\n    let str = numbers.toString();\n    let removeComa = str.split(',');\n    let merge = removeComa.reduce((acc, val) => acc + val)\n    return merge;\n}\n\nconst add = (numbers) => {\n    // jadikan string\n    let str = numbers.toString();\n    // hapus komanya (memakai split itu akan menjadikannya array)\n    let removeComa = str.split(\",\");\n    // gabungkan string menjadi satu\n    let merge = removeComa.reduce((acc, val) => acc + val);\n\n    // jika variable merge mengandung string '+' maka\n    if(merge.includes(\"+\")){\n        // pisahkan berdasarkan '+'\n        let separate = merge.split('+');\n        // convert dari `String` ke bentuk `Integer`\n        let convertInteger = separate.map(val => parseFloat(val));\n        // kalkulasi semua\n        let hitung = convertInteger.reduce((acc, val) => acc + val);\n        return hitung;\n\n    // jika gabungan string tidak mengandung `String` '+'\n    } else if(!merge.includes('+')){\n        return merge;\n    }\n}\n\n// metode perhitungan KABATAKU = Kali, Bagi, Tambah, Kurang\n// urutan perhitungan dimulai dari perkalian\n\n// Masih tidak efisien butuh kode/logic yang efisien\nconst count = (numbers) => {\n    let theNum = []; // 7, 7, 2\n    let theOpt = []; // +, *\n\n    let string = stringify(numbers);\n    (0,_Fazt_Fazt__WEBPACK_IMPORTED_MODULE_0__.log)(string);\n    let angka = string.split('');\n    (0,_Fazt_Fazt__WEBPACK_IMPORTED_MODULE_0__.log)(angka);\n    angka.forEach(isi => {\n        if(isi === \"*\" || isi === \"/\" || isi === \"+\" || isi === '-'){\n            theOpt.push(isi);\n        } else {\n            theNum.push(parseInt(isi));\n        }\n    });\n\n    (0,_Fazt_Fazt__WEBPACK_IMPORTED_MODULE_0__.log)(theNum, theOpt);\n\n    // theNum = [7, 7, 2]\n    // theOpt = ['+', '*']\n\n    let hasil = 0; // 14 + 14\n    for(let i = 0; i < theNum.length; i++){ // index: 0\n        if(theOpt[i] == \"*\"){\n            hasil += theNum[i] * theNum[i+1];\n        } else if(theOpt[i] == \"/\") {\n            hasil += theNum[i] / theNum[i+1];\n        } else if(theOpt[i] == \"+\") {\n            hasil += theNum[i] + theNum[i+1];\n        } else if(theOpt[i] == \"-\") {\n            hasil += theNum[i] - theNum[i+1];\n        }\n    }\n    \n    return hasil;\n}\n\n\n\n//# sourceURL=webpack://calculator/./src/Count/Count.js?");

/***/ }),

/***/ "./src/DarkMode/DarkMode.js":
/*!**********************************!*\
  !*** ./src/DarkMode/DarkMode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Calculator/Calculator */ \"./src/Calculator/Calculator.js\");\n/* harmony import */ var _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Fazt/Fazt */ \"./src/Fazt/Fazt.js\");\n\n\n\n// Toggle Dark Mode\nconst ToggleDark = () => {\n\n    // body changes the background-color\n    document.body.classList.toggle('darkBG');\n\n    // mode button changes the theme\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.classList.toggle('text-white');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.classList.toggle('text-dark');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.classList.toggle('btn-dark');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.classList.toggle('btn-white');\n\n    // toggle dark to the display\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.display.classList.toggle('text-dark');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.display.classList.toggle('bg-white-1');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.display.classList.toggle('text-white');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.display.classList.toggle('bg-dark');\n    // display.classList.toggle('border-1-white');\n    // p of the mode display\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.displayP.classList.toggle('text-white');\n\n    // modal container changes theme\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.modalContainer.classList.toggle('bg-dark');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.modalContainer.classList.toggle('bg-white');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.modalInfo.classList.toggle('text-white');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.modalInfo.classList.toggle('text-dark');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.modalInfoButton.classList.toggle('btn-white');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.modalInfoButton.classList.toggle('btn-dark');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.modalInfoButton.classList.toggle('text-dark');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.modalInfoButton.classList.toggle('text-white');\n\n    // Button Grid\n    // buttonGrid.classList.toggle('border-1-white');\n\n    // changes the buttons of calculator\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.numbersButton.forEach(isi => {\n        isi.classList.toggle('btn-dark');\n        isi.classList.toggle('text-white');\n        isi.classList.toggle('dark-mode');\n    });\n    \n    // Changes the text for user experience\n    if(_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.textContent == 'Dark Mode'){\n        _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.textContent = 'Light Mode';\n        localStorage.setItem('mode', 'dark');\n    } else if(_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.textContent == 'Light Mode'){\n        _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.textContent = 'Dark Mode';\n        localStorage.removeItem('mode');\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleDark);\n\n//# sourceURL=webpack://calculator/./src/DarkMode/DarkMode.js?");

/***/ }),

/***/ "./src/Fazt/Fazt.js":
/*!**************************!*\
  !*** ./src/Fazt/Fazt.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"log\": () => (/* binding */ log)\n/* harmony export */ });\nconst $ = document;\nconst log = console.log;\n\n\n\n//# sourceURL=webpack://calculator/./src/Fazt/Fazt.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator/Calculator */ \"./src/Calculator/Calculator.js\");\n\n\n\n//# sourceURL=webpack://calculator/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'Poppins', sans-serif;\\n}\\n\\nbody {\\n    height: 100vh;\\n    transition: .5s all;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\nmain {\\n    margin: auto;\\n    width: 350px;\\n    padding: 30px;\\n    box-sizing: border-box;\\n    border: 1px solid rgb(191, 191, 191);\\n}\\n\\n.dark {\\n    background-color: rgb(20, 20, 20);\\n}\\n\\n.mode {\\n    margin-top: 100px;\\n    cursor: pointer;\\n    color: white;\\n    border: none;\\n    padding: 10px 20px;\\n    box-sizing: border-box;\\n    border-radius: 50px;\\n    background-color: rgb(20, 20, 20);\\n}\\n\\n.white-btn {\\n    background-color: white;\\n    color: rgb(20, 20, 20);\\n}\\n\\n.white-text {\\n    color: white;\\n}\\n\\n.display {\\n    border: 1px solid rgb(191, 191, 191);\\n    height: 70px;\\n    padding: 10px;\\n    box-sizing: border-box;\\n    display: flex;\\n    align-items: center;\\n    justify-content: flex-end;\\n}\\n\\n.display p {\\n    font-size: 2em;\\n    font-weight: 600;\\n    width: 100%;\\n    text-align: right;\\n    overflow: hidden;\\n    letter-spacing: 2px;\\n}\\n\\n.button-grid .dark-button {\\n    border: 1px solid rgb(219, 219, 219);\\n}\\n\\n.button-grid {\\n    margin-top: 30px;\\n\\n    display: grid;\\n    grid-template-columns: repeat(4, 1fr);\\n    grid-template-rows: repeat(5, 40px);\\n    gap: 10px;\\n}\\n\\n.button-grid button {\\n    font-size: 1em;\\n    cursor: pointer;\\n    border: none;\\n    border-radius: 3px;\\n    border: 1px solid gray;\\n    background-color: rgb(255, 255, 255);\\n}\\n\\n.button-grid .operator {\\n    background-color: rgb(219, 219, 219);\\n}\\n\\n.button-grid .active:active {\\n    background-color: rgb(201, 201, 201);\\n}\\n\\n.button-grid .equals {\\n    grid-row: 2 / 6;\\n    grid-column: -1 / -2;\\n    font-size: 1.1em;\\n    color: white;\\n    border: none;\\n    background-color: rgb(30, 136, 242);\\n}\\n\\n.button-grid .clear {\\n    background-color: orange;\\n    border: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calculator/./src/Calculator/Calculator.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/Calculate/CalculateAll.js":
/*!***************************************!*\
  !*** ./src/Calculate/CalculateAll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fazt/Fazt */ \"./src/Fazt/Fazt.js\");\n\n\n// const calculateAll = (arr) => {\n//     let angka = [];\n//     let operator = [];\n//     let calc = \"\"; // berisi \n\n//     // memasukann angka dan operator ke array terpisah;\n//     arr.forEach(isi => {\n//         if(typeof isi === \"number\"){\n//             angka.push(isi);\n//         } else if(typeof isi === \"string\"){\n//             operator.push(isi);\n//         }\n//     });\n\n//     for(let i = 0; i < arr.length; i++){\n\n//         if(typeof arr[i] === \"number\"){\n//             calc += arr[i]\n//         } else if(typeof arr[i] === \"string\"){\n//             calc += arr[i]\n//         }\n\n//     };\n\n//     // let removeComma = calc.join(' ');\n//     // let arrange = removeComma.split(' ');\n//     // log(arrange);\n//     // log(calc.slice(0, 5));\n\n//     for(let i = 0; i < calc.length; i++){\n//         if(calc[i] === '+'){\n//             log('Ada +');\n//         }\n//     }\n// }\n\nconst calculateAll = (numbers) => {\n\n    let str = numbers.toString(); // <- jadikan string\n    let removeComa = str.split(\",\"); // <- jadikan array\n    let merge = removeComa.reduce((acc, val) => acc + val ) // <- gabungkan\n\n    if(merge.includes(\"+\")){\n        let separate = merge.split('+');\n        let convertInteger = separate.map(val => parseInt(val));\n        let hitung = convertInteger.reduce((acc, val) => acc + val);\n        return hitung;\n    }\n\n    // for(let i = 0; i < str.length; i++){\n    //     if(str[i] == '+'){\n    //         angkas.push(parseInt(str.slice(0, i)));\n    //     } \n    // }\n\n    // log(angkas);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateAll);\n\n//# sourceURL=webpack://calculator/./src/Calculate/CalculateAll.js?");

/***/ }),

/***/ "./src/Calculator/Calculator.js":
/*!**************************************!*\
  !*** ./src/Calculator/Calculator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mode\": () => (/* binding */ mode),\n/* harmony export */   \"p\": () => (/* binding */ p)\n/* harmony export */ });\n/* harmony import */ var _Calculator_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator.css */ \"./src/Calculator/Calculator.css\");\n/* harmony import */ var _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Fazt/Fazt */ \"./src/Fazt/Fazt.js\");\n/* harmony import */ var _DarkMode_DarkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DarkMode/DarkMode */ \"./src/DarkMode/DarkMode.js\");\n/* harmony import */ var _Calculate_CalculateAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Calculate/CalculateAll */ \"./src/Calculate/CalculateAll.js\");\n\n\n\n\n\n// tempat untuk menyimpan angka dan operator\nlet numbers = [];\n\n// DOM Selection\nconst buttons = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelectorAll('.button-grid button');\nconst p = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.display p');\nconst clear = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.clear');\nconst mode = _Fazt_Fazt__WEBPACK_IMPORTED_MODULE_1__.$.querySelector('.mode');\n\n// jika localStorage memiliki mode dark maka atur menjadi tampilan dark mode\nif(localStorage.getItem('mode') == 'dark'){\n    (0,_DarkMode_DarkMode__WEBPACK_IMPORTED_MODULE_2__.default)();\n}\n\n// jika yang di klik adalah tombol toggle dark mode\nmode.addEventListener('click', () => {\n    (0,_DarkMode_DarkMode__WEBPACK_IMPORTED_MODULE_2__.default)();\n});\n\n// Looping semua button untuk nantinya di select\nbuttons.forEach(button => {\n\n    // jika ada button yang di select \n    button.addEventListener('click', (e) => {\n        \n        // Jika yang diklik adalah sama dengan maka kalkulasi\n        if(e.target.classList.contains('equals')){\n            p.innerHTML = (0,_Calculate_CalculateAll__WEBPACK_IMPORTED_MODULE_3__.default)(numbers);\n            \n        // tapi selain tombol = yang di klik \n        } else {\n\n            // tampilkan ke DOM\n            let number = e.target.textContent; // <- berisi angka, operator\n            p.textContent += number; // <- tampilkan ke DOM\n\n            // dan setor ke Array nilainya untuk di kalkulasi\n            // jika yang di klik adalah operator expression push\n            if(number === \"+\" || number === \"-\" || number === \"x\" || number === \"/\"){\n                numbers.push(number);\n            } else {\n                numbers.push(parseInt(number)); // masukkan nilai ke array menjadi tipe number\n            }\n\n        }\n    });\n})\n\n// Reset Calculator\nclear.addEventListener('click', () => {\n    numbers.length = 0;\n    p.innerHTML = '';\n})\n\n\n\n//# sourceURL=webpack://calculator/./src/Calculator/Calculator.js?");

/***/ }),

/***/ "./src/DarkMode/DarkMode.js":
/*!**********************************!*\
  !*** ./src/DarkMode/DarkMode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Calculator/Calculator */ \"./src/Calculator/Calculator.js\");\n\n\n// Toggle Dark Mode\nconst ToggleDark = () => {\n    document.body.classList.toggle('dark');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.classList.toggle('white-btn');\n    _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.p.classList.toggle('white-text');\n    \n    if(_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.textContent == 'Dark Mode'){\n        _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.textContent = 'Light Mode';\n        localStorage.setItem('mode', 'dark');\n    } else if(_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.textContent == 'Light Mode'){\n        _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__.mode.textContent = 'Dark Mode';\n        localStorage.removeItem('mode');\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleDark);\n\n//# sourceURL=webpack://calculator/./src/DarkMode/DarkMode.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calculator_Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator/Calculator */ \"./src/Calculator/Calculator.js\");\n\n\n//# sourceURL=webpack://calculator/./src/index.js?");

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
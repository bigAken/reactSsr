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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./src/components/Header/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/Header/style.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".style_test_n0Emn {\\r\\n  color: pink;\\r\\n  background-color: blue;\\r\\n}\\r\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"test\": \"style_test_n0Emn\"\n};\n\n//# sourceURL=webpack:///./src/components/Header/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/container/Home/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/container/Home/style.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body {\\r\\n  background-color: green;\\r\\n}\\r\\n.style_test_2AoyA {\\r\\n  background-color: red;\\r\\n}\\r\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"test\": \"style_test_2AoyA\"\n};\n\n//# sourceURL=webpack:///./src/container/Home/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/insertCss.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/lib/insertCss.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"babel-runtime/helpers/slicedToArray\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Isomorphic CSS style loader for Webpack\n *\n * Copyright ?? 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nvar prefix = 's';\nvar inserted = {};\n\n// Base64 encoding and decoding - The \"Unicode Problem\"\n// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode('0x' + p1);\n  }));\n}\n\n/**\n * Remove style/link elements for specified node IDs\n * if they are no longer referenced by UI components.\n */\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(prefix + id);\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\n/**\n * Example:\n *   // Insert CSS styles object generated by `css-loader` into DOM\n *   var removeCss = insertCss([[1, 'body { color: red; }']]);\n *\n *   // Remove it from the DOM\n *   removeCss();\n */\nfunction insertCss(styles) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === undefined ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === undefined ? false : _ref$prepend;\n\n  var ids = [];\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n\n    var id = moduleId + '-' + i;\n\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n\n    var elem = document.getElementById(prefix + id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = prefix + id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n    if (sourceMap && typeof btoa === 'function') {\n      // skip IE9 and below, see http://caniuse.com/atob-btoa\n      cssText += '\\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';\n      cssText += '\\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/lib/insertCss.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _index = __webpack_require__(/*! ./components/Header/index */ \"./src/components/Header/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _index3 = __webpack_require__(/*! ./components/Header/store/index */ \"./src/components/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(props) {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(_index2.default, { staticContext: props.staticContext }),\n    (0, _reactRouterConfig.renderRoutes)(props.route.routes)\n  );\n};\n\nApp.loadData = function (store) {\n  return store.dispatch(_index3.actions.getHeaderInfo());\n};\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Home = __webpack_require__(/*! ./container/Home */ \"./src/container/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./container/Login */ \"./src/container/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _NotFound = __webpack_require__(/*! ./container/NotFound */ \"./src/container/NotFound/index.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nvar _Translate = __webpack_require__(/*! ./container/Translate */ \"./src/container/Translate/index.js\");\n\nvar _Translate2 = _interopRequireDefault(_Translate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  path: \"/\",\n  component: _App2.default,\n  loadData: _App2.default.loadData,\n  routes: [{\n    path: \"/\",\n    component: _Home2.default,\n    exact: true,\n    loadData: _Home2.default.loadData\n  }, {\n    path: \"/translate\",\n    component: _Translate2.default,\n    exact: true,\n    loadData: _Translate2.default.loadData\n  }, {\n    path: \"/login\",\n    component: _Login2.default,\n    exact: true\n  }, {\n    component: _NotFound2.default\n  }]\n}];\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n  baseURL: \"/\"\n});\n\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _index = __webpack_require__(/*! ./store/index */ \"./src/components/Header/store/index.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/components/Header/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  function Header(props) {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          login = _props.login,\n          handleLogin = _props.handleLogin,\n          handleLogout = _props.handleLogout;\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: _style2.default.test },\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/\" },\n          \"\\u9996\\u9875\"\n        ),\n        _react2.default.createElement(\"br\", null),\n        login ? _react2.default.createElement(\n          _react.Fragment,\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/translate\" },\n            \"\\u7FFB\\u8BD1\\u5217\\u8868 \"\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { onClick: handleLogout },\n            \"\\u9000\\u51FA\"\n          )\n        ) : _react2.default.createElement(\n          \"div\",\n          { onClick: handleLogin },\n          \"\\u767B\\u5F55 \"\n        ),\n        _react2.default.createElement(\"br\", null)\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    login: state.header.login\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    handleLogin: function handleLogin() {\n      dispatch(_index.actions.login());\n    },\n    handleLogout: function handleLogout() {\n      dispatch(_index.actions.logout());\n    }\n  };\n};\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyle2.default)(Header, _style2.default));\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getHeaderInfo = exports.login = exports.logout = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar changeLogin = function changeLogin(value) {\n  return {\n    type: _constants.CHANGE_LOGIN,\n    value: value\n  };\n};\n\nvar logout = exports.logout = function logout() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get(\"/api/logout\").then(function (res) {\n      dispatch(changeLogin(false));\n    });\n  };\n};\nvar login = exports.login = function login() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get(\"/api/login\").then(function (res) {\n      document.cookie = \"login\" + \"=\" + escape(true);\n      dispatch(changeLogin(true));\n    });\n  };\n};\n\nvar getHeaderInfo = exports.getHeaderInfo = function getHeaderInfo() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get(\"/api/isLogin\").then(function (res) {\n      dispatch(changeLogin(res.data.data.login));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/constants.js":
/*!**************************************************!*\
  !*** ./src/components/Header/store/constants.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LOGIN = exports.CHANGE_LOGIN = \"HEADER/CHANGE_LOGIN\";\n\n//# sourceURL=webpack:///./src/components/Header/store/constants.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.actions = exports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/components/Header/store/actions.js\");\n\nvar actions = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\nexports.actions = actions;\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar defaultState = {\n  login: true\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.CHANGE_LOGIN:\n      return _extends({}, state, { login: action.value });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/components/Header/style.css":
/*!*****************************************!*\
  !*** ./src/components/Header/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/components/Header/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Header/style.css?");

/***/ }),

/***/ "./src/container/Home/index.js":
/*!*************************************!*\
  !*** ./src/container/Home/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions.js */ \"./src/container/Home/store/actions.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/container/Home/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home(props) {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n  }\n\n  _createClass(Home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.getHomeList();\n    }\n  }, {\n    key: \"getList\",\n    value: function getList() {\n      var list = this.props.list;\n\n      return list.length ? list.map(function (item) {\n        return _react2.default.createElement(\n          \"span\",\n          { key: item.id },\n          item.title\n        );\n      }) : null;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\"meta\", { charSet: \"utf-8\" }),\n          _react2.default.createElement(\n            \"title\",\n            null,\n            \"HGE JFDAKSJKL\"\n          ),\n          _react2.default.createElement(\"meta\", {\n            name: \"description\",\n            content: \"\\u8303\\u5FB7\\u8428\\u8303\\u5FB7\\u8428\\u8303\\u5FB7\\u8428\\u8303\\u5FB7\\u8428\\u8303\\u5FB7\\u8428\\u8303\\u5FB7\\u8428\\u8303\\u5FB7\\u8428\"\n          })\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: _style2.default.test },\n          \"Home name \",\n          this.props.name,\n          this.getList()\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.home.name,\n    list: state.home.newList\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      dispatch((0, _actions.getHomeList)());\n    }\n  };\n};\n\nvar ExportHome = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyle2.default)(Home, _style2.default));\n\nExportHome.loadData = function (store) {\n  return store.dispatch((0, _actions.getHomeList)());\n};\nexports.default = ExportHome;\n\n//# sourceURL=webpack:///./src/container/Home/index.js?");

/***/ }),

/***/ "./src/container/Home/store/actions.js":
/*!*********************************************!*\
  !*** ./src/container/Home/store/actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getHomeList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants.js */ \"./src/container/Home/store/constants.js\");\n\nvar changeList = function changeList(list) {\n  return {\n    type: _constants.CHANGE_LIST,\n    list: list\n  };\n};\n\nvar getHomeList = exports.getHomeList = function getHomeList() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get(\"/api/news\").then(function (res) {\n      dispatch(changeList(res.data.list));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/container/Home/store/actions.js?");

/***/ }),

/***/ "./src/container/Home/store/constants.js":
/*!***********************************************!*\
  !*** ./src/container/Home/store/constants.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LIST = exports.CHANGE_LIST = \"HOME/CHANGE_LIST\";\n\n//# sourceURL=webpack:///./src/container/Home/store/constants.js?");

/***/ }),

/***/ "./src/container/Home/store/index.js":
/*!*******************************************!*\
  !*** ./src/container/Home/store/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/container/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/container/Home/store/index.js?");

/***/ }),

/***/ "./src/container/Home/store/reducer.js":
/*!*********************************************!*\
  !*** ./src/container/Home/store/reducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/container/Home/store/constants.js\");\n\nvar defaultState = {\n  newList: [],\n  name: \"dell\"\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.CHANGE_LIST:\n      return _extends({}, state, {\n        newList: action.list\n      });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/container/Home/store/reducer.js?");

/***/ }),

/***/ "./src/container/Home/style.css":
/*!**************************************!*\
  !*** ./src/container/Home/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/container/Home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/container/Home/style.css?");

/***/ }),

/***/ "./src/container/Login/index.js":
/*!**************************************!*\
  !*** ./src/container/Login/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    \"Login\"\n  );\n};\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/container/Login/index.js?");

/***/ }),

/***/ "./src/container/NotFound/index.js":
/*!*****************************************!*\
  !*** ./src/container/NotFound/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NotFound = function (_Component) {\n  _inherits(NotFound, _Component);\n\n  function NotFound() {\n    _classCallCheck(this, NotFound);\n\n    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));\n  }\n\n  _createClass(NotFound, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      if (this.props.staticContext && this.props.staticContext.isNotFound !== undefined) {\n        this.props.staticContext.isNotFound = true;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        \"NotFound\"\n      );\n    }\n  }]);\n\n  return NotFound;\n}(_react.Component);\n\nexports.default = NotFound;\n\n//# sourceURL=webpack:///./src/container/NotFound/index.js?");

/***/ }),

/***/ "./src/container/Translate/index.js":
/*!******************************************!*\
  !*** ./src/container/Translate/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/container/Translate/store/actions.js\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Translate = function (_React$Component) {\n  _inherits(Translate, _React$Component);\n\n  function Translate() {\n    _classCallCheck(this, Translate);\n\n    return _possibleConstructorReturn(this, (Translate.__proto__ || Object.getPrototypeOf(Translate)).apply(this, arguments));\n  }\n\n  _createClass(Translate, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.getTranslate();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return this.props.login ? _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\"meta\", { charSet: \"utf-8\" }),\n          _react2.default.createElement(\n            \"title\",\n            null,\n            \"1111111111111L\"\n          ),\n          _react2.default.createElement(\"meta\", { name: \"description\", content: \"1111111111111\" })\n        ),\n        _react2.default.createElement(\n          \"div\",\n          null,\n          this.props.list.map(function (item) {\n            return _react2.default.createElement(\n              \"p\",\n              { key: item.id },\n              \"title:\",\n              item.title\n            );\n          })\n        )\n      ) :\n      // ?????????????????????????????????????????????????????????????????????StaticRouter???context\n      // ?????????????????????\n      _react2.default.createElement(_reactRouterDom.Redirect, { to: \"/\" });\n    }\n  }]);\n\n  return Translate;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  console.log(\"state\", state);\n  return {\n    login: state.header.login,\n    list: state.translate.translateList\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getTranslate: function getTranslate() {\n      dispatch((0, _actions.getTranslate)());\n    }\n  };\n};\nvar ExportTranslate = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Translate);\nExportTranslate.loadData = function (store) {\n  console.log(11111);\n  return store.dispatch((0, _actions.getTranslate)());\n};\n\nexports.default = ExportTranslate;\n\n//# sourceURL=webpack:///./src/container/Translate/index.js?");

/***/ }),

/***/ "./src/container/Translate/store/actions.js":
/*!**************************************************!*\
  !*** ./src/container/Translate/store/actions.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getTranslate = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants.js */ \"./src/container/Translate/store/constants.js\");\n\nvar changeTranslate = function changeTranslate(list) {\n  return {\n    type: _constants.TRANSLATE_LIST,\n    list: list\n  };\n};\n\nvar getTranslate = exports.getTranslate = function getTranslate() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get(\"/api/translations\").then(function (res) {\n      console.log('translations', res.data);\n      dispatch(changeTranslate(res.data.data));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/container/Translate/store/actions.js?");

/***/ }),

/***/ "./src/container/Translate/store/constants.js":
/*!****************************************************!*\
  !*** ./src/container/Translate/store/constants.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar TRANSLATE_LIST = exports.TRANSLATE_LIST = 'TRANSLATE_LIST';\n\n//# sourceURL=webpack:///./src/container/Translate/store/constants.js?");

/***/ }),

/***/ "./src/container/Translate/store/index.js":
/*!************************************************!*\
  !*** ./src/container/Translate/store/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/container/Translate/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/container/Translate/store/index.js?");

/***/ }),

/***/ "./src/container/Translate/store/reducer.js":
/*!**************************************************!*\
  !*** ./src/container/Translate/store/reducer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/container/Translate/store/constants.js\");\n\nvar defaultState = {\n  translateList: []\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.TRANSLATE_LIST:\n      return _extends({}, state, {\n        translateList: action.list\n      });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/container/Translate/store/reducer.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static(\"public\"));\n\napp.use(\"/api\", (0, _expressHttpProxy2.default)(\"http://127.0.0.1:4000\", {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return \"/ssr/api\" + req.url;\n  }\n}));\n\napp.get(\"*\", function (req, res) {\n  var store = (0, _store.getStore)();\n  var promises = [];\n\n  var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      var promise = new Promise(function (resolve, reject) {\n        item.route.loadData(store).then(resolve).catch(resolve);\n      });\n      promises.push(promise);\n    }\n  });\n  var context = { isNotFound: false, css: [] };\n  Promise.all(promises).then(function () {\n    var html = (0, _utils.render)(store, _Routes2.default, req, context);\n    if (context.action === \"REPLACE\") {\n      // ??????????????????\n      res.redirect(301, context.url);\n    } else if (context.isNotFound) {\n      // 404??????\n      res.status(404);\n      res.send(html);\n    } else {\n      res.send(html);\n    }\n  }).catch(function (er) {\n    console.log(\"er\", er);\n  });\n});\n\nvar serve = app.listen(3000, function () {\n  console.log(\"3000\");\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n  // baseURL: \"http://192.168.31.187:4000/ssr\",\n  baseURL: \"http://127.0.0.1:4000/ssr\"\n});\n\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(store, routes, req) {\n  var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { context: context, location: req.path },\n      _react2.default.createElement(\n        \"div\",\n        null,\n        (0, _reactRouterConfig.renderRoutes)(routes)\n      )\n    )\n  ));\n  var helmet = _reactHelmet.Helmet.renderStatic();\n  var cssStr = context.css.length ? context.css.join(\"\\n\") : \"\";\n  console.log('helmet', helmet.title.toString());\n  return \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\" \" + helmet.htmlAttributes.toString() + \">\\n    <head>\\n      \" + helmet.title.toString() + \"\\n      \" + helmet.meta.toString() + \"\\n      <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n      <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n      <style>\" + cssStr + \"</style>\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\">\" + content + \"</div>\\n      <script>\\n        window.context = {\\n          state: \" + JSON.stringify(store.getState()) + \"\\n        }\\n      </script>\\n      <script src=\\\"/index.js\\\"></script>\\n    </body>\\n    </html>\";\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../container/Home/store */ \"./src/container/Home/store/index.js\");\n\nvar _store2 = __webpack_require__(/*! ../components/Header/store */ \"./src/components/Header/store/index.js\");\n\nvar _store3 = __webpack_require__(/*! ../container/Translate/store */ \"./src/container/Translate/store/index.js\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n  home: _store.reducer,\n  header: _store2.reducer,\n  translate: _store3.reducer\n});\n\nvar getStore = exports.getStore = function getStore() {\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request4.default)));\n};\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n  var defaultState = window.context.state;\n  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/withStyle.js":
/*!**************************!*\
  !*** ./src/withStyle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports.default = function (DecoratedComponent, style) {\n  return function (_React$Component) {\n    _inherits(NewComponent, _React$Component);\n\n    function NewComponent() {\n      _classCallCheck(this, NewComponent);\n\n      return _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).apply(this, arguments));\n    }\n\n    _createClass(NewComponent, [{\n      key: \"componentWillMount\",\n      value: function componentWillMount() {\n        if (this.props.staticContext) {\n          this.props.staticContext.css.push(style._getCss());\n        }\n      }\n    }, {\n      key: \"render\",\n      value: function render() {\n        return _react2.default.createElement(DecoratedComponent, this.props);\n      }\n    }]);\n\n    return NewComponent;\n  }(_react2.default.Component);\n};\n\n//# sourceURL=webpack:///./src/withStyle.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });
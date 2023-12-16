/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/palamecia-titling.regular.otf */ "./src/asset/palamecia-titling.regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/Merriweather-Bold.ttf */ "./src/asset/Merriweather-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/background.jpg */ "./src/asset/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "palamecia-titling.regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}

@font-face {
  font-family: "Merriweather-Bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}

body {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  font-family: "palamecia-titling.regular";
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#title {
  position: relative;
  font-size: clamp(30%, 75px, 10vw);
  width: 100%;
  height: 60px;
  color: rgb(48, 6, 6);
  text-align: center;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  font-family: "palamecia-titling.regular";
  margin-bottom: 10px;
}

#navbar {
  font-family: "palamecia-titling.regular";
  font-size: clamp(20%, 40px, 8vw);
  width: 75vw;
  height: 3em;
  display: flex;
  align-items: center;
}
.nav-item {
  width: 100%;
  border-radius: 25px;
  padding: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.nav-item:hover {
  background-color: rgba(255, 237, 72, 0.568);
}

.nav-item.active {
  background-color: rgba(255, 94, 1, 0.6);
}

.container {
  font-size: clamp(12%, 20px, 6vw);
  width: clamp(20%, 60%, 80vw);
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: clamp(25px, 10vh, 50px);
}

/* HOME PAGE START*/

.homeDiv {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.hero-img {
  width: clamp(200px, 80%, 800vw);
  height: auto;
  align-self: center;
  border-radius: 12px;
  border: 5px rgb(48, 6, 6) solid;
}

.hero-header {
  font-size: clamp(25%, 50px, 10vw);
  text-align: center;
  color: rgb(51, 17, 17);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-description {
  font-size: large;
  padding: 10px;
  text-align: justify;
}

/* HOME PAGE END*/
/* MENU PAGE START */

.container {
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 15px, 25px);
}

.menu-card {
  display: grid;
  grid-template-columns: repeat(8, minmax(80px, 150px));
  grid-template-rows: repeat(3fr, auto);
  grid-template-areas:
    "title title title title  price img img img"
    "descrip descrip descrip descrip  descrip img img img"
    "descrip descrip descrip descrip  descrip img img img";
}

.dish-title {
  grid-area: title;
  margin-left: 25px;
  color: rgb(51, 17, 17);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.dish-price {
  display: flex;
  justify-self: center;
  grid-area: price;
  color: rgb(24, 24, 43);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.dish-icon {
  display: flex;
  justify-self: center;
  align-self: center;
  grid-area: img;
  width: clamp(120px, 65%, 75%);
  height: auto;
}

.dish-description {
  grid-area: descrip;
  font-size: medium;
  text-align: justify;
}

@media screen and (max-width: 920px) {
  .menu-card {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      "title"
      "price"
      "img"
      "descrip";
    grid-template-rows: repeat(4, auto);
  }
  .dish-title {
    display: flex;
    justify-self: center;
    margin: 2px;
  }
}

/* MENU PAGE END */
/* ABOUT PAGE START */

.container {
  display: flex;
  flex-direction: column;
}

.aboutDiv {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.credit-header {
  text-align: center;
  color: rgb(51, 17, 17);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.footer {
  text-align: center;
  height: 50px;
  margin-bottom: 20px;
}

/* ABOUT PAGE END */

ol li {
  margin-bottom: 6px;
}

a {
  text-decoration: none;
  color: #a6a6a6;
}
a:visited {
  color: darkblue;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wCAAwC;EACxC,+DAAoE;AACtE;;AAEA;EACE,gCAAgC;EAChC,+DAA4D;AAC9D;;AAEA;EACE,yDAA+C;EAC/C,YAAY;EACZ,sBAAsB;EACtB,2BAA2B;EAC3B,yBAAyB;EACzB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,iCAAiC;EACjC,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,2CAA2C;EAC3C,wCAAwC;EACxC,mBAAmB;AACrB;;AAEA;EACE,wCAAwC;EACxC,gCAAgC;EAChC,WAAW;EACX,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,6CAA6C;AAC/C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,gCAAgC;EAChC,4BAA4B;EAC5B,0CAA0C;EAC1C,aAAa;EACb,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,sBAAsB;EACtB,2CAA2C;AAC7C;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA,iBAAiB;AACjB,oBAAoB;;AAEpB;EACE,aAAa;EACb,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,qDAAqD;EACrD,qCAAqC;EACrC;;;0DAGwD;AAC1D;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,gBAAgB;EAChB,sBAAsB;EACtB,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,kBAAkB;EAClB,cAAc;EACd,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE;IACE,0BAA0B;IAC1B,mCAAmC;IACnC;;;;eAIW;IACX,mCAAmC;EACrC;EACA;IACE,aAAa;IACb,oBAAoB;IACpB,WAAW;EACb;AACF;;AAEA,kBAAkB;AAClB,qBAAqB;;AAErB;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA,mBAAmB;;AAEnB;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,eAAe;AACjB","sourcesContent":["@font-face {\n  font-family: \"palamecia-titling.regular\";\n  src: url(\"./asset/palamecia-titling.regular.otf\") format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Merriweather-Bold\";\n  src: url(\"./asset/Merriweather-Bold.ttf\") format(\"truetype\");\n}\n\nbody {\n  background-image: url(\"./asset/background.jpg\");\n  width: 100vw;\n  background-size: cover;\n  background-position: center;\n  background-repeat: repeat;\n  font-family: \"palamecia-titling.regular\";\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#title {\n  position: relative;\n  font-size: clamp(30%, 75px, 10vw);\n  width: 100%;\n  height: 60px;\n  color: rgb(48, 6, 6);\n  text-align: center;\n  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);\n  font-family: \"palamecia-titling.regular\";\n  margin-bottom: 10px;\n}\n\n#navbar {\n  font-family: \"palamecia-titling.regular\";\n  font-size: clamp(20%, 40px, 8vw);\n  width: 75vw;\n  height: 3em;\n  display: flex;\n  align-items: center;\n}\n.nav-item {\n  width: 100%;\n  border-radius: 25px;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.nav-item:hover {\n  background-color: rgba(255, 237, 72, 0.568);\n}\n\n.nav-item.active {\n  background-color: rgba(255, 94, 1, 0.6);\n}\n\n.container {\n  font-size: clamp(12%, 20px, 6vw);\n  width: clamp(20%, 60%, 80vw);\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 20px;\n  border-radius: 10px;\n  margin-bottom: clamp(25px, 10vh, 50px);\n}\n\n/* HOME PAGE START*/\n\n.homeDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.hero-img {\n  width: clamp(200px, 80%, 800vw);\n  height: auto;\n  align-self: center;\n  border-radius: 12px;\n  border: 5px rgb(48, 6, 6) solid;\n}\n\n.hero-header {\n  font-size: clamp(25%, 50px, 10vw);\n  text-align: center;\n  color: rgb(51, 17, 17);\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n}\n\n.hero-description {\n  font-size: large;\n  padding: 10px;\n  text-align: justify;\n}\n\n/* HOME PAGE END*/\n/* MENU PAGE START */\n\n.container {\n  display: flex;\n  flex-direction: column;\n  gap: clamp(10px, 15px, 25px);\n}\n\n.menu-card {\n  display: grid;\n  grid-template-columns: repeat(8, minmax(80px, 150px));\n  grid-template-rows: repeat(3fr, auto);\n  grid-template-areas:\n    \"title title title title  price img img img\"\n    \"descrip descrip descrip descrip  descrip img img img\"\n    \"descrip descrip descrip descrip  descrip img img img\";\n}\n\n.dish-title {\n  grid-area: title;\n  margin-left: 25px;\n  color: rgb(51, 17, 17);\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n}\n\n.dish-price {\n  display: flex;\n  justify-self: center;\n  grid-area: price;\n  color: rgb(24, 24, 43);\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n}\n\n.dish-icon {\n  display: flex;\n  justify-self: center;\n  align-self: center;\n  grid-area: img;\n  width: clamp(120px, 65%, 75%);\n  height: auto;\n}\n\n.dish-description {\n  grid-area: descrip;\n  font-size: medium;\n  text-align: justify;\n}\n\n@media screen and (max-width: 920px) {\n  .menu-card {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(4, auto);\n    grid-template-areas:\n      \"title\"\n      \"price\"\n      \"img\"\n      \"descrip\";\n    grid-template-rows: repeat(4, auto);\n  }\n  .dish-title {\n    display: flex;\n    justify-self: center;\n    margin: 2px;\n  }\n}\n\n/* MENU PAGE END */\n/* ABOUT PAGE START */\n\n.container {\n  display: flex;\n  flex-direction: column;\n}\n\n.aboutDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.credit-header {\n  text-align: center;\n  color: rgb(51, 17, 17);\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n}\n\n.footer {\n  text-align: center;\n  height: 50px;\n  margin-bottom: 20px;\n}\n\n/* ABOUT PAGE END */\n\nol li {\n  margin-bottom: 6px;\n}\n\na {\n  text-decoration: none;\n  color: #a6a6a6;\n}\na:visited {\n  color: darkblue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/asset/Merriweather-Bold.ttf":
/*!*****************************************!*\
  !*** ./src/asset/Merriweather-Bold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae39f743fdcf8f64531e.ttf";

/***/ }),

/***/ "./src/asset/background.jpg":
/*!**********************************!*\
  !*** ./src/asset/background.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f73901f998666e63f348.jpg";

/***/ }),

/***/ "./src/asset/palamecia-titling.regular.otf":
/*!*************************************************!*\
  !*** ./src/asset/palamecia-titling.regular.otf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bb1342ec7920e5f392f.otf";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"about": 0
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAbout: () => (/* binding */ renderAbout)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const body = document.getElementById("content");
const container = document.createElement("div");
const aboutDiv = document.createElement("div");
let aboutRenderCount = 0;

container.classList.add("container");
container.id = "container";
aboutDiv.classList.add("aboutDiv");

const items = [
  {
    text: "Background Image by Freepik",
    link: "https://www.freepik.com/free-photo/delicious-ramen-with-chopsticks-arrangement_65550417.htm#query=food%20cartoon&position=17&from_view=search&track=ais&uuid=d33ec93b-e1fb-425d-ac89-06bff40e18a9",
  },
  {
    text: "Food Truck Image by Kireyonok_Yuliya on Freepik",
    link: "https://www.freepik.com/free-photo/food-truck-xa-with-hot-dogs-burgers-brutal-bearded-chef_1610883.htm#query=stall%20food&position=4&from_view=search&track=ais&uuid=0eb3eeee-2557-4829-8db1-61149a5fe241",
  },
  {
    text: "Noodles Icon by Freepik",
    link: "https://www.freepik.com/icon/noodles_6108807#fromView=resource_detail&position=6",
  },
  {
    text: "Rice Icon by Freepik",
    link: "https://www.freepik.com/icon/rice_6108275#fromView=resource_detail&position=30",
  },
  {
    text: "Salad Icon by Freepik",
    link: "https://www.freepik.com/icon/salad_6107954#fromView=resource_detail&position=48",
  },

  {
    text: "Ice Cream Icon by Freepik",
    link: "https://www.freepik.com/icon/ice-cream_6108862#fromView=resource_detail&position=3",
  },
  {
    text: "Tea Icon by Freepik",
    link: "https://www.freepik.com/icon/tea_6108846#fromView=resource_detail&position=3",
  },
  {
    text: "Juice/Cocktail Icon by Freepik",
    link: "https://www.freepik.com/icon/cocktail_6108766#fromView=resource_detail&position=7",
  },
];

const footerContent = `
Made by ©
<a href="https://github.com/Gaburielu" class="link">Gaburielu</a> 2023
|
<a href="https://www.theodinproject.com/about" class="link">The Odin Project</a>
|
<a href="#" class="link">Source Code & Credit</a>
`;

function renderAbout() {
  if (aboutRenderCount === 0) {
    const creditHeader = document.createElement("h1");
    creditHeader.classList.add("credit-header");
    creditHeader.textContent = "Credit";

    const creditList = document.createElement("ol");
    creditList.classList.add("credit-ol");
    items.forEach((item) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = item.link;
      link.textContent = item.text;
      listItem.appendChild(link);
      creditList.appendChild(listItem);
    });

    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    footerDiv.innerHTML = footerContent;

    aboutDiv.appendChild(creditHeader);
    aboutDiv.appendChild(creditList);
    aboutDiv.appendChild(footerDiv);

    container.appendChild(aboutDiv);
    body.appendChild(container);
    aboutRenderCount++;
  } else {
    body.appendChild(container);
  }
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDRDQUE0Qyx1SUFBZ0Q7QUFDNUYsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FB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QUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9wYWxhbWVjaWEtdGl0bGluZy5yZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXQvTWVycml3ZWF0aGVyLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicGFsYW1lY2lhLXRpdGxpbmcucmVndWxhclwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlci1Cb2xkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgZm9udC1mYW1pbHk6IFwicGFsYW1lY2lhLXRpdGxpbmcucmVndWxhclwiO1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMzAlLCA3NXB4LCAxMHZ3KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgY29sb3I6IHJnYig0OCwgNiwgNik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZm9udC1mYW1pbHk6IFwicGFsYW1lY2lhLXRpdGxpbmcucmVndWxhclwiO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jbmF2YmFyIHtcbiAgZm9udC1mYW1pbHk6IFwicGFsYW1lY2lhLXRpdGxpbmcucmVndWxhclwiO1xuICBmb250LXNpemU6IGNsYW1wKDIwJSwgNDBweCwgOHZ3KTtcbiAgd2lkdGg6IDc1dnc7XG4gIGhlaWdodDogM2VtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ubmF2LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM3LCA3MiwgMC41NjgpO1xufVxuXG4ubmF2LWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDk0LCAxLCAwLjYpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiBjbGFtcCgxMiUsIDIwcHgsIDZ2dyk7XG4gIHdpZHRoOiBjbGFtcCgyMCUsIDYwJSwgODB2dyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2xhbXAoMjVweCwgMTB2aCwgNTBweCk7XG59XG5cbi8qIEhPTUUgUEFHRSBTVEFSVCovXG5cbi5ob21lRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5oZXJvLWltZyB7XG4gIHdpZHRoOiBjbGFtcCgyMDBweCwgODAlLCA4MDB2dyk7XG4gIGhlaWdodDogYXV0bztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDVweCByZ2IoNDgsIDYsIDYpIHNvbGlkO1xufVxuXG4uaGVyby1oZWFkZXIge1xuICBmb250LXNpemU6IGNsYW1wKDI1JSwgNTBweCwgMTB2dyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYig1MSwgMTcsIDE3KTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmhlcm8tZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4vKiBIT01FIFBBR0UgRU5EKi9cbi8qIE1FTlUgUEFHRSBTVEFSVCAqL1xuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiBjbGFtcCgxMHB4LCAxNXB4LCAyNXB4KTtcbn1cblxuLm1lbnUtY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIG1pbm1heCg4MHB4LCAxNTBweCkpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzZnIsIGF1dG8pO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwidGl0bGUgdGl0bGUgdGl0bGUgdGl0bGUgIHByaWNlIGltZyBpbWcgaW1nXCJcbiAgICBcImRlc2NyaXAgZGVzY3JpcCBkZXNjcmlwIGRlc2NyaXAgIGRlc2NyaXAgaW1nIGltZyBpbWdcIlxuICAgIFwiZGVzY3JpcCBkZXNjcmlwIGRlc2NyaXAgZGVzY3JpcCAgZGVzY3JpcCBpbWcgaW1nIGltZ1wiO1xufVxuXG4uZGlzaC10aXRsZSB7XG4gIGdyaWQtYXJlYTogdGl0bGU7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBjb2xvcjogcmdiKDUxLCAxNywgMTcpO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uZGlzaC1wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBncmlkLWFyZWE6IHByaWNlO1xuICBjb2xvcjogcmdiKDI0LCAyNCwgNDMpO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uZGlzaC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC1hcmVhOiBpbWc7XG4gIHdpZHRoOiBjbGFtcCgxMjBweCwgNjUlLCA3NSUpO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5kaXNoLWRlc2NyaXB0aW9uIHtcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgLm1lbnUtY2FyZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwidGl0bGVcIlxuICAgICAgXCJwcmljZVwiXG4gICAgICBcImltZ1wiXG4gICAgICBcImRlc2NyaXBcIjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBhdXRvKTtcbiAgfVxuICAuZGlzaC10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDJweDtcbiAgfVxufVxuXG4vKiBNRU5VIFBBR0UgRU5EICovXG4vKiBBQk9VVCBQQUdFIFNUQVJUICovXG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWJvdXREaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbi5jcmVkaXQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiKDUxLCAxNywgMTcpO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi8qIEFCT1VUIFBBR0UgRU5EICovXG5cbm9sIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2E2YTZhNjtcbn1cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiBkYXJrYmx1ZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdDQUF3QztFQUN4QywrREFBb0U7QUFDdEU7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsK0RBQTREO0FBQzlEOztBQUVBO0VBQ0UseURBQStDO0VBQy9DLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0Msd0NBQXdDO0VBQ3hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNDQUFzQztBQUN4Qzs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUEsaUJBQWlCO0FBQ2pCLG9CQUFvQjs7QUFFcEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxREFBcUQ7RUFDckQscUNBQXFDO0VBQ3JDOzs7MERBR3dEO0FBQzFEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQixtQ0FBbUM7SUFDbkM7Ozs7ZUFJVztJQUNYLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixXQUFXO0VBQ2I7QUFDRjs7QUFFQSxrQkFBa0I7QUFDbEIscUJBQXFCOztBQUVyQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJwYWxhbWVjaWEtdGl0bGluZy5yZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0L3BhbGFtZWNpYS10aXRsaW5nLnJlZ3VsYXIub3RmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVycml3ZWF0aGVyLUJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXQvTWVycml3ZWF0aGVyLUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldC9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICBmb250LWZhbWlseTogXFxcInBhbGFtZWNpYS10aXRsaW5nLnJlZ3VsYXJcXFwiO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMzAlLCA3NXB4LCAxMHZ3KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgY29sb3I6IHJnYig0OCwgNiwgNik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJwYWxhbWVjaWEtdGl0bGluZy5yZWd1bGFyXFxcIjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNuYXZiYXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJwYWxhbWVjaWEtdGl0bGluZy5yZWd1bGFyXFxcIjtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMjAlLCA0MHB4LCA4dncpO1xcbiAgd2lkdGg6IDc1dnc7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2LWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmF2LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNywgNzIsIDAuNTY4KTtcXG59XFxuXFxuLm5hdi1pdGVtLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgOTQsIDEsIDAuNik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxMiUsIDIwcHgsIDZ2dyk7XFxuICB3aWR0aDogY2xhbXAoMjAlLCA2MCUsIDgwdncpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCgyNXB4LCAxMHZoLCA1MHB4KTtcXG59XFxuXFxuLyogSE9NRSBQQUdFIFNUQVJUKi9cXG5cXG4uaG9tZURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uaGVyby1pbWcge1xcbiAgd2lkdGg6IGNsYW1wKDIwMHB4LCA4MCUsIDgwMHZ3KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3JkZXI6IDVweCByZ2IoNDgsIDYsIDYpIHNvbGlkO1xcbn1cXG5cXG4uaGVyby1oZWFkZXIge1xcbiAgZm9udC1zaXplOiBjbGFtcCgyNSUsIDUwcHgsIDEwdncpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYig1MSwgMTcsIDE3KTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5oZXJvLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLyogSE9NRSBQQUdFIEVORCovXFxuLyogTUVOVSBQQUdFIFNUQVJUICovXFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2xhbXAoMTBweCwgMTVweCwgMjVweCk7XFxufVxcblxcbi5tZW51LWNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIG1pbm1heCg4MHB4LCAxNTBweCkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoM2ZyLCBhdXRvKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZSB0aXRsZSB0aXRsZSB0aXRsZSAgcHJpY2UgaW1nIGltZyBpbWdcXFwiXFxuICAgIFxcXCJkZXNjcmlwIGRlc2NyaXAgZGVzY3JpcCBkZXNjcmlwICBkZXNjcmlwIGltZyBpbWcgaW1nXFxcIlxcbiAgICBcXFwiZGVzY3JpcCBkZXNjcmlwIGRlc2NyaXAgZGVzY3JpcCAgZGVzY3JpcCBpbWcgaW1nIGltZ1xcXCI7XFxufVxcblxcbi5kaXNoLXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBtYXJnaW4tbGVmdDogMjVweDtcXG4gIGNvbG9yOiByZ2IoNTEsIDE3LCAxNyk7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uZGlzaC1wcmljZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IHByaWNlO1xcbiAgY29sb3I6IHJnYigyNCwgMjQsIDQzKTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5kaXNoLWljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBpbWc7XFxuICB3aWR0aDogY2xhbXAoMTIwcHgsIDY1JSwgNzUlKTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmRpc2gtZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjBweCkge1xcbiAgLm1lbnUtY2FyZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBhdXRvKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICBcXFwidGl0bGVcXFwiXFxuICAgICAgXFxcInByaWNlXFxcIlxcbiAgICAgIFxcXCJpbWdcXFwiXFxuICAgICAgXFxcImRlc2NyaXBcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBhdXRvKTtcXG4gIH1cXG4gIC5kaXNoLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMnB4O1xcbiAgfVxcbn1cXG5cXG4vKiBNRU5VIFBBR0UgRU5EICovXFxuLyogQUJPVVQgUEFHRSBTVEFSVCAqL1xcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hYm91dERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmNyZWRpdC1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYig1MSwgMTcsIDE3KTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLyogQUJPVVQgUEFHRSBFTkQgKi9cXG5cXG5vbCBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNhNmE2YTY7XFxufVxcbmE6dmlzaXRlZCB7XFxuICBjb2xvcjogZGFya2JsdWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYWJvdXRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgYWJvdXRSZW5kZXJDb3VudCA9IDA7XG5cbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuY29udGFpbmVyLmlkID0gXCJjb250YWluZXJcIjtcbmFib3V0RGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dERpdlwiKTtcblxuY29uc3QgaXRlbXMgPSBbXG4gIHtcbiAgICB0ZXh0OiBcIkJhY2tncm91bmQgSW1hZ2UgYnkgRnJlZXBpa1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vZnJlZS1waG90by9kZWxpY2lvdXMtcmFtZW4td2l0aC1jaG9wc3RpY2tzLWFycmFuZ2VtZW50XzY1NTUwNDE3Lmh0bSNxdWVyeT1mb29kJTIwY2FydG9vbiZwb3NpdGlvbj0xNyZmcm9tX3ZpZXc9c2VhcmNoJnRyYWNrPWFpcyZ1dWlkPWQzM2VjOTNiLWUxZmItNDI1ZC1hYzg5LTA2YmZmNDBlMThhOVwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJGb29kIFRydWNrIEltYWdlIGJ5IEtpcmV5b25va19ZdWxpeWEgb24gRnJlZXBpa1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vZnJlZS1waG90by9mb29kLXRydWNrLXhhLXdpdGgtaG90LWRvZ3MtYnVyZ2Vycy1icnV0YWwtYmVhcmRlZC1jaGVmXzE2MTA4ODMuaHRtI3F1ZXJ5PXN0YWxsJTIwZm9vZCZwb3NpdGlvbj00JmZyb21fdmlldz1zZWFyY2gmdHJhY2s9YWlzJnV1aWQ9MGViM2VlZWUtMjU1Ny00ODI5LThkYjEtNjExNDlhNWZlMjQxXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIk5vb2RsZXMgSWNvbiBieSBGcmVlcGlrXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9pY29uL25vb2RsZXNfNjEwODgwNyNmcm9tVmlldz1yZXNvdXJjZV9kZXRhaWwmcG9zaXRpb249NlwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJSaWNlIEljb24gYnkgRnJlZXBpa1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vaWNvbi9yaWNlXzYxMDgyNzUjZnJvbVZpZXc9cmVzb3VyY2VfZGV0YWlsJnBvc2l0aW9uPTMwXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlNhbGFkIEljb24gYnkgRnJlZXBpa1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vaWNvbi9zYWxhZF82MTA3OTU0I2Zyb21WaWV3PXJlc291cmNlX2RldGFpbCZwb3NpdGlvbj00OFwiLFxuICB9LFxuXG4gIHtcbiAgICB0ZXh0OiBcIkljZSBDcmVhbSBJY29uIGJ5IEZyZWVwaWtcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ljb24vaWNlLWNyZWFtXzYxMDg4NjIjZnJvbVZpZXc9cmVzb3VyY2VfZGV0YWlsJnBvc2l0aW9uPTNcIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiVGVhIEljb24gYnkgRnJlZXBpa1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vaWNvbi90ZWFfNjEwODg0NiNmcm9tVmlldz1yZXNvdXJjZV9kZXRhaWwmcG9zaXRpb249M1wiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJKdWljZS9Db2NrdGFpbCBJY29uIGJ5IEZyZWVwaWtcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ljb24vY29ja3RhaWxfNjEwODc2NiNmcm9tVmlldz1yZXNvdXJjZV9kZXRhaWwmcG9zaXRpb249N1wiLFxuICB9LFxuXTtcblxuY29uc3QgZm9vdGVyQ29udGVudCA9IGBcbk1hZGUgYnkgwqlcbjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vR2FidXJpZWx1XCIgY2xhc3M9XCJsaW5rXCI+R2FidXJpZWx1PC9hPiAyMDIzXG58XG48YSBocmVmPVwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL2Fib3V0XCIgY2xhc3M9XCJsaW5rXCI+VGhlIE9kaW4gUHJvamVjdDwvYT5cbnxcbjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsaW5rXCI+U291cmNlIENvZGUgJiBDcmVkaXQ8L2E+XG5gO1xuXG5mdW5jdGlvbiByZW5kZXJBYm91dCgpIHtcbiAgaWYgKGFib3V0UmVuZGVyQ291bnQgPT09IDApIHtcbiAgICBjb25zdCBjcmVkaXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY3JlZGl0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjcmVkaXQtaGVhZGVyXCIpO1xuICAgIGNyZWRpdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ3JlZGl0XCI7XG5cbiAgICBjb25zdCBjcmVkaXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9sXCIpO1xuICAgIGNyZWRpdExpc3QuY2xhc3NMaXN0LmFkZChcImNyZWRpdC1vbFwiKTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGxpbmsuaHJlZiA9IGl0ZW0ubGluaztcbiAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIGNyZWRpdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJEaXYuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgICBmb290ZXJEaXYuaW5uZXJIVE1MID0gZm9vdGVyQ29udGVudDtcblxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWRpdEhlYWRlcik7XG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlZGl0TGlzdCk7XG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dERpdik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGFib3V0UmVuZGVyQ291bnQrKztcbiAgfSBlbHNlIHtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyQWJvdXQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
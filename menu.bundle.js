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

/***/ "./src/asset/cocktail_6108766.png":
/*!****************************************!*\
  !*** ./src/asset/cocktail_6108766.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "169bae366ed4ea09a1a5.png";

/***/ }),

/***/ "./src/asset/ice-cream_6108862.png":
/*!*****************************************!*\
  !*** ./src/asset/ice-cream_6108862.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c54f4c94767df2d7589.png";

/***/ }),

/***/ "./src/asset/noodles_6108807.png":
/*!***************************************!*\
  !*** ./src/asset/noodles_6108807.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "428197e712f33a697f0f.png";

/***/ }),

/***/ "./src/asset/palamecia-titling.regular.otf":
/*!*************************************************!*\
  !*** ./src/asset/palamecia-titling.regular.otf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bb1342ec7920e5f392f.otf";

/***/ }),

/***/ "./src/asset/rice_6108275.png":
/*!************************************!*\
  !*** ./src/asset/rice_6108275.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db2eee89235e8122cbbd.png";

/***/ }),

/***/ "./src/asset/salad_6107954.png":
/*!*************************************!*\
  !*** ./src/asset/salad_6107954.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d53cade63faad4c1bad.png";

/***/ }),

/***/ "./src/asset/tea_6108846.png":
/*!***********************************!*\
  !*** ./src/asset/tea_6108846.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "289676351bb534c84554.png";

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
/******/ 			"menu": 0
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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenu: () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _asset_noodles_6108807_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/noodles_6108807.png */ "./src/asset/noodles_6108807.png");
/* harmony import */ var _asset_rice_6108275_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/rice_6108275.png */ "./src/asset/rice_6108275.png");
/* harmony import */ var _asset_salad_6107954_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/salad_6107954.png */ "./src/asset/salad_6107954.png");
/* harmony import */ var _asset_ice_cream_6108862_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/ice-cream_6108862.png */ "./src/asset/ice-cream_6108862.png");
/* harmony import */ var _asset_cocktail_6108766_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset/cocktail_6108766.png */ "./src/asset/cocktail_6108766.png");
/* harmony import */ var _asset_tea_6108846_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset/tea_6108846.png */ "./src/asset/tea_6108846.png");








const body = document.getElementById("content");
const container = document.createElement("div");
let menuRenderCount = 0;
container.classList.add("container");

container.id = "container";
let menuList = [];

class dish {
  constructor(name, price, icon, description) {
    this.name = name;
    this.price = price;
    this.icon = icon;
    this.description = description;
  }
}

const ramen = new dish(
  "Signature Ramen",
  10,
  _asset_noodles_6108807_png__WEBPACK_IMPORTED_MODULE_1__,
  "Indulge in our $10 signature Ramen, a perfect harmony of savory soy-ginger sauce, expertly crafted for a quick and flavorful dining experience."
);
const friedRice = new dish(
  "Shrimp Fried Rice",
  12,
  _asset_rice_6108275_png__WEBPACK_IMPORTED_MODULE_2__,
  "Savor our delectable Shrimp Fried Rice priced at $12, a symphony of tender shrimp, fluffy rice, and vibrant veggies wok-tossed to perfection for a delightful burst of flavor in every bite."
);
const salad = new dish(
  "Garden Salad",
  8,
  _asset_salad_6107954_png__WEBPACK_IMPORTED_MODULE_3__,
  "Delight in our crisp and refreshing Garden Salad at $8, a medley of vibrant greens, juicy tomatoes, and zesty vinaigrette that promises a light and wholesome culinary experience."
);
const iceCream = new dish(
  "Three-Flavor Ice Cream",
  6,
  _asset_ice_cream_6108862_png__WEBPACK_IMPORTED_MODULE_4__,
  "Experience the joy of our $6 Three-Flavor Ice Cream, a delightful trio of Japanese matcha, creamy white chocolate, and vanilla strawberry, expertly scooped to satisfy your sweet tooth with every spoonful."
);
const juice = new dish(
  "Fruit Juice",
  4,
  _asset_cocktail_6108766_png__WEBPACK_IMPORTED_MODULE_5__,
  "Quench your thirst with our refreshing Fruit Juice priced at $4, a vibrant blend of freshly squeezed fruits that promises a burst of natural flavors in every sip."
);
const lemonade = new dish(
  "Green Lemonade",
  5,
  _asset_tea_6108846_png__WEBPACK_IMPORTED_MODULE_6__,
  "Sip on our invigorating Green Lemonade Tea for $5, a harmonious fusion of green tea and zesty lemon, creating a revitalizing beverage that strikes the perfect balance between sweet and tangy."
);
menuList.push(ramen);
menuList.push(friedRice);
menuList.push(salad);
menuList.push(iceCream);
menuList.push(juice);
menuList.push(lemonade);

function renderMenu() {
  if (menuRenderCount === 0) {
    menuList.forEach((dish) => {
      const card = document.createElement("div");
      card.classList.add("menu-card");

      const icon = document.createElement("img");
      icon.src = dish.icon;
      icon.alt = dish.name + " icon";
      icon.classList.add("dish-icon");

      const title = document.createElement("h2");
      title.textContent = dish.name;
      title.classList.add("dish-title");

      const price = document.createElement("h2");
      price.textContent = "$" + dish.price;
      price.classList.add("dish-price");

      const description = document.createElement("p");
      description.textContent = dish.description;
      description.classList.add("dish-description");

      card.append(icon);
      card.append(title);
      card.append(price);
      card.append(description);

      container.appendChild(card);
      body.appendChild(container);
      menuRenderCount++;
    });
  } else {
    body.appendChild(container);
  }
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsNENBQTRDLHVJQUFnRDtBQUM1Riw0Q0FBNEMseUhBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFP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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQUk7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L3BhbGFtZWNpYS10aXRsaW5nLnJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9NZXJyaXdlYXRoZXItQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJwYWxhbWVjaWEtdGl0bGluZy5yZWd1bGFyXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyLUJvbGRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBmb250LWZhbWlseTogXCJwYWxhbWVjaWEtdGl0bGluZy5yZWd1bGFyXCI7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiN0aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiBjbGFtcCgzMCUsIDc1cHgsIDEwdncpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBjb2xvcjogcmdiKDQ4LCA2LCA2KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LWZhbWlseTogXCJwYWxhbWVjaWEtdGl0bGluZy5yZWd1bGFyXCI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNuYXZiYXIge1xuICBmb250LWZhbWlseTogXCJwYWxhbWVjaWEtdGl0bGluZy5yZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMjAlLCA0MHB4LCA4dncpO1xuICB3aWR0aDogNzV2dztcbiAgaGVpZ2h0OiAzZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmF2LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5uYXYtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzcsIDcyLCAwLjU2OCk7XG59XG5cbi5uYXYtaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgOTQsIDEsIDAuNik7XG59XG5cbi5jb250YWluZXIge1xuICBmb250LXNpemU6IGNsYW1wKDEyJSwgMjBweCwgNnZ3KTtcbiAgd2lkdGg6IGNsYW1wKDIwJSwgNjAlLCA4MHZ3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjbGFtcCgyNXB4LCAxMHZoLCA1MHB4KTtcbn1cblxuLyogSE9NRSBQQUdFIFNUQVJUKi9cblxuLmhvbWVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbn1cblxuLmhlcm8taW1nIHtcbiAgd2lkdGg6IGNsYW1wKDIwMHB4LCA4MCUsIDgwMHZ3KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogNXB4IHJnYig0OCwgNiwgNikgc29saWQ7XG59XG5cbi5oZXJvLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMjUlLCA1MHB4LCAxMHZ3KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiKDUxLCAxNywgMTcpO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uaGVyby1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi8qIEhPTUUgUEFHRSBFTkQqL1xuLyogTUVOVSBQQUdFIFNUQVJUICovXG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IGNsYW1wKDEwcHgsIDE1cHgsIDI1cHgpO1xufVxuXG4ubWVudS1jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgbWlubWF4KDgwcHgsIDE1MHB4KSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDNmciwgYXV0byk7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJ0aXRsZSB0aXRsZSB0aXRsZSB0aXRsZSAgcHJpY2UgaW1nIGltZyBpbWdcIlxuICAgIFwiZGVzY3JpcCBkZXNjcmlwIGRlc2NyaXAgZGVzY3JpcCAgZGVzY3JpcCBpbWcgaW1nIGltZ1wiXG4gICAgXCJkZXNjcmlwIGRlc2NyaXAgZGVzY3JpcCBkZXNjcmlwICBkZXNjcmlwIGltZyBpbWcgaW1nXCI7XG59XG5cbi5kaXNoLXRpdGxlIHtcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGNvbG9yOiByZ2IoNTEsIDE3LCAxNyk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5kaXNoLXByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGdyaWQtYXJlYTogcHJpY2U7XG4gIGNvbG9yOiByZ2IoMjQsIDI0LCA0Myk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5kaXNoLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBncmlkLWFyZWE6IGltZztcbiAgd2lkdGg6IGNsYW1wKDEyMHB4LCA2NSUsIDc1JSk7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmRpc2gtZGVzY3JpcHRpb24ge1xuICBncmlkLWFyZWE6IGRlc2NyaXA7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjBweCkge1xuICAubWVudS1jYXJkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBhdXRvKTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgXCJ0aXRsZVwiXG4gICAgICBcInByaWNlXCJcbiAgICAgIFwiaW1nXCJcbiAgICAgIFwiZGVzY3JpcFwiO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pO1xuICB9XG4gIC5kaXNoLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbjogMnB4O1xuICB9XG59XG5cbi8qIE1FTlUgUEFHRSBFTkQgKi9cbi8qIEFCT1VUIFBBR0UgU1RBUlQgKi9cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hYm91dERpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmNyZWRpdC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoNTEsIDE3LCAxNyk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLyogQUJPVVQgUEFHRSBFTkQgKi9cblxub2wgbGkge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjYTZhNmE2O1xufVxuYTp2aXNpdGVkIHtcbiAgY29sb3I6IGRhcmtibHVlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0NBQXdDO0VBQ3hDLCtEQUFvRTtBQUN0RTs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQywrREFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSx5REFBK0M7RUFDL0MsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyx3Q0FBd0M7RUFDeEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0NBQXNDO0FBQ3hDOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQSxpQkFBaUI7QUFDakIsb0JBQW9COztBQUVwQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFEQUFxRDtFQUNyRCxxQ0FBcUM7RUFDckM7OzswREFHd0Q7QUFDMUQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQzs7OztlQUlXO0lBQ1gsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFdBQVc7RUFDYjtBQUNGOztBQUVBLGtCQUFrQjtBQUNsQixxQkFBcUI7O0FBRXJCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInBhbGFtZWNpYS10aXRsaW5nLnJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXQvcGFsYW1lY2lhLXRpdGxpbmcucmVndWxhci5vdGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJyaXdlYXRoZXItQm9sZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldC9NZXJyaXdlYXRoZXItQm9sZC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0L2JhY2tncm91bmQuanBnXFxcIik7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicGFsYW1lY2lhLXRpdGxpbmcucmVndWxhclxcXCI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiBjbGFtcCgzMCUsIDc1cHgsIDEwdncpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBjb2xvcjogcmdiKDQ4LCA2LCA2KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBmb250LWZhbWlseTogXFxcInBhbGFtZWNpYS10aXRsaW5nLnJlZ3VsYXJcXFwiO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI25hdmJhciB7XFxuICBmb250LWZhbWlseTogXFxcInBhbGFtZWNpYS10aXRsaW5nLnJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zaXplOiBjbGFtcCgyMCUsIDQwcHgsIDh2dyk7XFxuICB3aWR0aDogNzV2dztcXG4gIGhlaWdodDogM2VtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXYtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uYXYtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM3LCA3MiwgMC41NjgpO1xcbn1cXG5cXG4ubmF2LWl0ZW0uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA5NCwgMSwgMC42KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IGNsYW1wKDEyJSwgMjBweCwgNnZ3KTtcXG4gIHdpZHRoOiBjbGFtcCgyMCUsIDYwJSwgODB2dyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDI1cHgsIDEwdmgsIDUwcHgpO1xcbn1cXG5cXG4vKiBIT01FIFBBR0UgU1RBUlQqL1xcblxcbi5ob21lRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5oZXJvLWltZyB7XFxuICB3aWR0aDogY2xhbXAoMjAwcHgsIDgwJSwgODAwdncpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJvcmRlcjogNXB4IHJnYig0OCwgNiwgNikgc29saWQ7XFxufVxcblxcbi5oZXJvLWhlYWRlciB7XFxuICBmb250LXNpemU6IGNsYW1wKDI1JSwgNTBweCwgMTB2dyk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDUxLCAxNywgMTcpO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmhlcm8tZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4vKiBIT01FIFBBR0UgRU5EKi9cXG4vKiBNRU5VIFBBR0UgU1RBUlQgKi9cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiBjbGFtcCgxMHB4LCAxNXB4LCAyNXB4KTtcXG59XFxuXFxuLm1lbnUtY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgbWlubWF4KDgwcHgsIDE1MHB4KSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzZnIsIGF1dG8pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlICBwcmljZSBpbWcgaW1nIGltZ1xcXCJcXG4gICAgXFxcImRlc2NyaXAgZGVzY3JpcCBkZXNjcmlwIGRlc2NyaXAgIGRlc2NyaXAgaW1nIGltZyBpbWdcXFwiXFxuICAgIFxcXCJkZXNjcmlwIGRlc2NyaXAgZGVzY3JpcCBkZXNjcmlwICBkZXNjcmlwIGltZyBpbWcgaW1nXFxcIjtcXG59XFxuXFxuLmRpc2gtdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgY29sb3I6IHJnYig1MSwgMTcsIDE3KTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5kaXNoLXByaWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogcHJpY2U7XFxuICBjb2xvcjogcmdiKDI0LCAyNCwgNDMpO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmRpc2gtaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IGltZztcXG4gIHdpZHRoOiBjbGFtcCgxMjBweCwgNjUlLCA3NSUpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZGlzaC1kZXNjcmlwdGlvbiB7XFxuICBncmlkLWFyZWE6IGRlc2NyaXA7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkyMHB4KSB7XFxuICAubWVudS1jYXJkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgICBcXFwicHJpY2VcXFwiXFxuICAgICAgXFxcImltZ1xcXCJcXG4gICAgICBcXFwiZGVzY3JpcFxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pO1xcbiAgfVxcbiAgLmRpc2gtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAycHg7XFxuICB9XFxufVxcblxcbi8qIE1FTlUgUEFHRSBFTkQgKi9cXG4vKiBBQk9VVCBQQUdFIFNUQVJUICovXFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFib3V0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY3JlZGl0LWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDUxLCAxNywgMTcpO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4vKiBBQk9VVCBQQUdFIEVORCAqL1xcblxcbm9sIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2E2YTZhNjtcXG59XFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtZW51XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgbm9vZGxlIGZyb20gXCIuL2Fzc2V0L25vb2RsZXNfNjEwODgwNy5wbmdcIjtcbmltcG9ydCByaWNlIGZyb20gXCIuL2Fzc2V0L3JpY2VfNjEwODI3NS5wbmdcIjtcbmltcG9ydCBzYWxhZEljb24gZnJvbSBcIi4vYXNzZXQvc2FsYWRfNjEwNzk1NC5wbmdcIjtcbmltcG9ydCBpY2VDcmVhbUljb24gZnJvbSBcIi4vYXNzZXQvaWNlLWNyZWFtXzYxMDg4NjIucG5nXCI7XG5pbXBvcnQganVpY2VJY29uIGZyb20gXCIuL2Fzc2V0L2NvY2t0YWlsXzYxMDg3NjYucG5nXCI7XG5pbXBvcnQgbGVtb25hZGVJY29uIGZyb20gXCIuL2Fzc2V0L3RlYV82MTA4ODQ2LnBuZ1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxldCBtZW51UmVuZGVyQ291bnQgPSAwO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbmNvbnRhaW5lci5pZCA9IFwiY29udGFpbmVyXCI7XG5sZXQgbWVudUxpc3QgPSBbXTtcblxuY2xhc3MgZGlzaCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBpY29uLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG59XG5cbmNvbnN0IHJhbWVuID0gbmV3IGRpc2goXG4gIFwiU2lnbmF0dXJlIFJhbWVuXCIsXG4gIDEwLFxuICBub29kbGUsXG4gIFwiSW5kdWxnZSBpbiBvdXIgJDEwIHNpZ25hdHVyZSBSYW1lbiwgYSBwZXJmZWN0IGhhcm1vbnkgb2Ygc2F2b3J5IHNveS1naW5nZXIgc2F1Y2UsIGV4cGVydGx5IGNyYWZ0ZWQgZm9yIGEgcXVpY2sgYW5kIGZsYXZvcmZ1bCBkaW5pbmcgZXhwZXJpZW5jZS5cIlxuKTtcbmNvbnN0IGZyaWVkUmljZSA9IG5ldyBkaXNoKFxuICBcIlNocmltcCBGcmllZCBSaWNlXCIsXG4gIDEyLFxuICByaWNlLFxuICBcIlNhdm9yIG91ciBkZWxlY3RhYmxlIFNocmltcCBGcmllZCBSaWNlIHByaWNlZCBhdCAkMTIsIGEgc3ltcGhvbnkgb2YgdGVuZGVyIHNocmltcCwgZmx1ZmZ5IHJpY2UsIGFuZCB2aWJyYW50IHZlZ2dpZXMgd29rLXRvc3NlZCB0byBwZXJmZWN0aW9uIGZvciBhIGRlbGlnaHRmdWwgYnVyc3Qgb2YgZmxhdm9yIGluIGV2ZXJ5IGJpdGUuXCJcbik7XG5jb25zdCBzYWxhZCA9IG5ldyBkaXNoKFxuICBcIkdhcmRlbiBTYWxhZFwiLFxuICA4LFxuICBzYWxhZEljb24sXG4gIFwiRGVsaWdodCBpbiBvdXIgY3Jpc3AgYW5kIHJlZnJlc2hpbmcgR2FyZGVuIFNhbGFkIGF0ICQ4LCBhIG1lZGxleSBvZiB2aWJyYW50IGdyZWVucywganVpY3kgdG9tYXRvZXMsIGFuZCB6ZXN0eSB2aW5haWdyZXR0ZSB0aGF0IHByb21pc2VzIGEgbGlnaHQgYW5kIHdob2xlc29tZSBjdWxpbmFyeSBleHBlcmllbmNlLlwiXG4pO1xuY29uc3QgaWNlQ3JlYW0gPSBuZXcgZGlzaChcbiAgXCJUaHJlZS1GbGF2b3IgSWNlIENyZWFtXCIsXG4gIDYsXG4gIGljZUNyZWFtSWNvbixcbiAgXCJFeHBlcmllbmNlIHRoZSBqb3kgb2Ygb3VyICQ2IFRocmVlLUZsYXZvciBJY2UgQ3JlYW0sIGEgZGVsaWdodGZ1bCB0cmlvIG9mIEphcGFuZXNlIG1hdGNoYSwgY3JlYW15IHdoaXRlIGNob2NvbGF0ZSwgYW5kIHZhbmlsbGEgc3RyYXdiZXJyeSwgZXhwZXJ0bHkgc2Nvb3BlZCB0byBzYXRpc2Z5IHlvdXIgc3dlZXQgdG9vdGggd2l0aCBldmVyeSBzcG9vbmZ1bC5cIlxuKTtcbmNvbnN0IGp1aWNlID0gbmV3IGRpc2goXG4gIFwiRnJ1aXQgSnVpY2VcIixcbiAgNCxcbiAganVpY2VJY29uLFxuICBcIlF1ZW5jaCB5b3VyIHRoaXJzdCB3aXRoIG91ciByZWZyZXNoaW5nIEZydWl0IEp1aWNlIHByaWNlZCBhdCAkNCwgYSB2aWJyYW50IGJsZW5kIG9mIGZyZXNobHkgc3F1ZWV6ZWQgZnJ1aXRzIHRoYXQgcHJvbWlzZXMgYSBidXJzdCBvZiBuYXR1cmFsIGZsYXZvcnMgaW4gZXZlcnkgc2lwLlwiXG4pO1xuY29uc3QgbGVtb25hZGUgPSBuZXcgZGlzaChcbiAgXCJHcmVlbiBMZW1vbmFkZVwiLFxuICA1LFxuICBsZW1vbmFkZUljb24sXG4gIFwiU2lwIG9uIG91ciBpbnZpZ29yYXRpbmcgR3JlZW4gTGVtb25hZGUgVGVhIGZvciAkNSwgYSBoYXJtb25pb3VzIGZ1c2lvbiBvZiBncmVlbiB0ZWEgYW5kIHplc3R5IGxlbW9uLCBjcmVhdGluZyBhIHJldml0YWxpemluZyBiZXZlcmFnZSB0aGF0IHN0cmlrZXMgdGhlIHBlcmZlY3QgYmFsYW5jZSBiZXR3ZWVuIHN3ZWV0IGFuZCB0YW5neS5cIlxuKTtcbm1lbnVMaXN0LnB1c2gocmFtZW4pO1xubWVudUxpc3QucHVzaChmcmllZFJpY2UpO1xubWVudUxpc3QucHVzaChzYWxhZCk7XG5tZW51TGlzdC5wdXNoKGljZUNyZWFtKTtcbm1lbnVMaXN0LnB1c2goanVpY2UpO1xubWVudUxpc3QucHVzaChsZW1vbmFkZSk7XG5cbmZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gIGlmIChtZW51UmVuZGVyQ291bnQgPT09IDApIHtcbiAgICBtZW51TGlzdC5mb3JFYWNoKChkaXNoKSA9PiB7XG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKTtcblxuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpY29uLnNyYyA9IGRpc2guaWNvbjtcbiAgICAgIGljb24uYWx0ID0gZGlzaC5uYW1lICsgXCIgaWNvblwiO1xuICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZGlzaC1pY29uXCIpO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZGlzaC5uYW1lO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImRpc2gtdGl0bGVcIik7XG5cbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBcIiRcIiArIGRpc2gucHJpY2U7XG4gICAgICBwcmljZS5jbGFzc0xpc3QuYWRkKFwiZGlzaC1wcmljZVwiKTtcblxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGlzaC5kZXNjcmlwdGlvbjtcbiAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkaXNoLWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgICBjYXJkLmFwcGVuZChpY29uKTtcbiAgICAgIGNhcmQuYXBwZW5kKHRpdGxlKTtcbiAgICAgIGNhcmQuYXBwZW5kKHByaWNlKTtcbiAgICAgIGNhcmQuYXBwZW5kKGRlc2NyaXB0aW9uKTtcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgbWVudVJlbmRlckNvdW50Kys7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlck1lbnUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
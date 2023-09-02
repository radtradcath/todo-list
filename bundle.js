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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* global */

body {
    margin: 0;
    box-sizing: border-box;
}

button {
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    background-color: inherit;
}

button:hover {
    background: #e6e9ec;
}

/* page container styling */
.page-container {
    min-height: 100vh;
    display: grid;
    grid-template: 8% 1fr 8% / minmax(200px, 20%) 1fr;
}

/* header styling */
header {
    position: relative;
    text-align: center;
    border-bottom: 1px solid black;
    background-color: aliceblue;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
}

header button {
    position: absolute;
    right: 5%;
    top: 50%;
}

/* main content styling */

.main-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
}

.add-task {
    padding: 1em 0;
    display: block;
}

.listed-task {    
    border-left: 12px solid;
    height: 10%;
    background-color: antiquewhite;
    display: grid;
    grid-template: 30% 1fr / 30% 30% 20% 10% 10%;
    grid-template-areas: 
    "domTitle domDate domNoteBtn domDone domEdit"
    "domTitleValue domDateValue domNoteBtn domDoneBtn domEditBtn";
    align-items: center;
}


.domTitle {
    grid-area: domTitle;
}

.domDate {
    grid-area: domDate;
}

.domDone {
    grid-area: domDone;
}

.domEdit {
    grid-area: domEdit;
}

.title-value {
    grid-area: domTitleValue;
}

.date-value {
    grid-area: domDateValue;
}

.note-btn {
    grid-area: domNoteBtn;
    width: 100px;
    height: 40px;
    border: 1px solid black;
}

.done-btn {
    grid-area: domDoneBtn;
}

.edit-btn {
    grid-area: domEditBtn;
}


/* sidebar styling */

.sidebar {
    width: inherit;
    display: grid;
    grid-template-rows: 30% 1fr;
    border-right: 1px solid black;
    background-color: antiquewhite;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
}
    /* first section styling */

.first-section {
    display: flex;
    flex-direction: column;
    background-color: azure;
    grid-row: 1 / 2;
}

.first-section > button {
    padding: 0.5em;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    flex: 1;    
}

button span {
    width: 5em;
}

    /* second section styling */

.second-section {
    display: flex;
    background-color: beige;
    flex-direction: column;
    grid-row: 2 / 3;
}

.second-section  .new-project {
    padding: 1em;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

.project-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4em;
    height: 3em;
}

.project-list i {
    padding: 4px;
}

.project-list i:hover {    
    cursor: pointer;
}

/* footer styling */
footer {
    background-color: aliceblue;
    border-top: 1px solid black;
    grid-row: 3 / 4;
    grid-column: 1 / -1;
}

/* dialog styling */

dialog form {
    display: flex;
    flex-direction: column;
}

form p {
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,WAAW;;AAEX;IACI,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,SAAS;IACT,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;AACvB;;AAEA,2BAA2B;AAC3B;IACI,iBAAiB;IACjB,aAAa;IACb,iDAAiD;AACrD;;AAEA,mBAAmB;AACnB;IACI,kBAAkB;IAClB,kBAAkB;IAClB,8BAA8B;IAC9B,2BAA2B;IAC3B,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;AACZ;;AAEA,yBAAyB;;AAEzB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,8BAA8B;IAC9B,aAAa;IACb,4CAA4C;IAC5C;;iEAE6D;IAC7D,mBAAmB;AACvB;;;AAGA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;;AAGA,oBAAoB;;AAEpB;IACI,cAAc;IACd,aAAa;IACb,2BAA2B;IAC3B,6BAA6B;IAC7B,8BAA8B;IAC9B,eAAe;IACf,kBAAkB;AACtB;IACI,0BAA0B;;AAE9B;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,OAAO;AACX;;AAEA;IACI,UAAU;AACd;;IAEI,2BAA2B;;AAE/B;IACI,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,2BAA2B;IAC3B,2BAA2B;IAC3B,eAAe;IACf,mBAAmB;AACvB;;AAEA,mBAAmB;;AAEnB;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["/* global */\n\nbody {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbutton {\n    font-size: 100%;\n    font-family: inherit;\n    border: 0;\n    padding: 0;\n    background-color: inherit;\n}\n\nbutton:hover {\n    background: #e6e9ec;\n}\n\n/* page container styling */\n.page-container {\n    min-height: 100vh;\n    display: grid;\n    grid-template: 8% 1fr 8% / minmax(200px, 20%) 1fr;\n}\n\n/* header styling */\nheader {\n    position: relative;\n    text-align: center;\n    border-bottom: 1px solid black;\n    background-color: aliceblue;\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n}\n\nheader button {\n    position: absolute;\n    right: 5%;\n    top: 50%;\n}\n\n/* main content styling */\n\n.main-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 20px;\n}\n\n.add-task {\n    padding: 1em 0;\n    display: block;\n}\n\n.listed-task {    \n    border-left: 12px solid;\n    height: 10%;\n    background-color: antiquewhite;\n    display: grid;\n    grid-template: 30% 1fr / 30% 30% 20% 10% 10%;\n    grid-template-areas: \n    \"domTitle domDate domNoteBtn domDone domEdit\"\n    \"domTitleValue domDateValue domNoteBtn domDoneBtn domEditBtn\";\n    align-items: center;\n}\n\n\n.domTitle {\n    grid-area: domTitle;\n}\n\n.domDate {\n    grid-area: domDate;\n}\n\n.domDone {\n    grid-area: domDone;\n}\n\n.domEdit {\n    grid-area: domEdit;\n}\n\n.title-value {\n    grid-area: domTitleValue;\n}\n\n.date-value {\n    grid-area: domDateValue;\n}\n\n.note-btn {\n    grid-area: domNoteBtn;\n    width: 100px;\n    height: 40px;\n    border: 1px solid black;\n}\n\n.done-btn {\n    grid-area: domDoneBtn;\n}\n\n.edit-btn {\n    grid-area: domEditBtn;\n}\n\n\n/* sidebar styling */\n\n.sidebar {\n    width: inherit;\n    display: grid;\n    grid-template-rows: 30% 1fr;\n    border-right: 1px solid black;\n    background-color: antiquewhite;\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n}\n    /* first section styling */\n\n.first-section {\n    display: flex;\n    flex-direction: column;\n    background-color: azure;\n    grid-row: 1 / 2;\n}\n\n.first-section > button {\n    padding: 0.5em;\n    font-size: 1.5em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n    flex: 1;    \n}\n\nbutton span {\n    width: 5em;\n}\n\n    /* second section styling */\n\n.second-section {\n    display: flex;\n    background-color: beige;\n    flex-direction: column;\n    grid-row: 2 / 3;\n}\n\n.second-section  .new-project {\n    padding: 1em;\n    font-size: 1.5em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n}\n\n.project-list {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4em;\n    height: 3em;\n}\n\n.project-list i {\n    padding: 4px;\n}\n\n.project-list i:hover {    \n    cursor: pointer;\n}\n\n/* footer styling */\nfooter {\n    background-color: aliceblue;\n    border-top: 1px solid black;\n    grid-row: 3 / 4;\n    grid-column: 1 / -1;\n}\n\n/* dialog styling */\n\ndialog form {\n    display: flex;\n    flex-direction: column;\n}\n\nform p {\n    text-align: center;\n}"],"sourceRoot":""}]);
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

/***/ "./src/main-dom.js":
/*!*************************!*\
  !*** ./src/main-dom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAllTasksBtn: () => (/* binding */ handleAllTasksBtn)
/* harmony export */ });
/* harmony import */ var _task_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-dom.js */ "./src/task-dom.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");




const tasksContainer = document.querySelector('.main-content');
const allTasksBtn = document.querySelector('.all');

const handleAllTasksBtn = (function() {
     allTasksBtn.addEventListener('click', renderAllTasks);
})();


function renderAllTasks() {
    killAllContent();
    
    _project_js__WEBPACK_IMPORTED_MODULE_1__["default"].myProjects.forEach(project => {
        project.projectTasks.forEach(task => {
            (0,_task_dom_js__WEBPACK_IMPORTED_MODULE_0__.appendTaskToDom)(task.title, task.dueDate, task.priority);
        })
    });
};

function killAllContent() {
    while(tasksContainer.firstChild) {
        tasksContainer.firstChild.remove();
    };
};

/***/ }),

/***/ "./src/project-dom.js":
/*!****************************!*\
  !*** ./src/project-dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewProjectBtn: () => (/* binding */ createNewProjectBtn),
/* harmony export */   handleProjectForm: () => (/* binding */ handleProjectForm),
/* harmony export */   thisProjectId: () => (/* binding */ thisProjectId)
/* harmony export */ });
/* harmony import */ var _task_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-dom.js */ "./src/task-dom.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");





const newProjectBtn = document.querySelector('.new-project');
const projectDialog = document.querySelector('#project-dialog');
const createProjectBtn = document.querySelector('#create-project-btn');
const cancelProjectBtn = document.querySelector('#cancel-project-btn');
const projectTitleInput = document.querySelector('#project-title');
const projectsContainer = document.querySelector('.second-section');
let id = 0;
let thisProjectId;

const createNewProjectBtn = (() => {
    newProjectBtn.addEventListener('click', showProjectDialog);

    function showProjectDialog() {
        projectDialog.showModal();
    }
})();

const handleProjectForm = (() => {
    createProjectBtn.addEventListener('click', saveProjectFormInput);
    cancelProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectDialog.close();
    })
})();

function saveProjectFormInput(e) {
    e.preventDefault();
    let savedProjectInputTitle = projectTitleInput.value;    
    createProject(savedProjectInputTitle);
    projectDialog.close();
};

function createProject(title){
    let new1Project = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"](title);    
    
    _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].addProjectToArray(new1Project);
    appendProjectToList(new1Project);
}

function appendProjectToList(newProject) {
    const project = document.createElement('button');
    const projectTitle = document.createElement('div');
    const deleteProjectBtn = document.createElement('button');
    const deleteProjectIco = document.createElement('i');
    project.classList.add('project-list');
    project.setAttribute('id', id);
    deleteProjectBtn.classList.add('delete-project-button');
    deleteProjectIco.setAttribute('class', "fa-solid fa-trash-can");
    projectTitle.textContent = newProject.title;

    projectsContainer.appendChild(project);
    project.appendChild(projectTitle);
    project.appendChild(deleteProjectBtn);
    deleteProjectBtn.appendChild(deleteProjectIco);    
    
    project.addEventListener('click', renderThisProjectTasks);
    deleteProjectBtn.addEventListener('click', killThisProject);

    id++;
};

function renderThisProjectTasks(e) {
    thisProjectId = e.currentTarget.id;   
    let thisProject = _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].myProjects.find(project => e.currentTarget.id == project.id);
    
    (0,_task_dom_js__WEBPACK_IMPORTED_MODULE_0__.killDomTasks)();
    (0,_task_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderAddTaskBtn)(thisProjectId);

    thisProject.projectTasks.forEach(task => {
        (0,_task_dom_js__WEBPACK_IMPORTED_MODULE_0__.appendTaskToDom)(task.title, task.dueDate, task.priority);
    });
    
};

function killThisProject(e) {
    e.stopPropagation(); 

    const projectDomList = document.querySelectorAll('.project-list');
    projectDomList.forEach(domProject => {
        domProject.id == e.currentTarget.parentNode.id ? domProject.remove() : "";
    });

    let projectToKill = _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].myProjects.find(project => e.currentTarget.parentNode.id == project.id); 
    (0,_task_dom_js__WEBPACK_IMPORTED_MODULE_0__.killDomTasks)(); 
    _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeProjectFromArray(projectToKill);
    
};














/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");


class Project {
    constructor(title) {
        this.id = Project.idCounter;
        this.title = title;

        Project.idCounter++
    }

    static idCounter = 0;

    static myProjects = [];

    static removeProjectFromArray(project) {
        Project.myProjects.splice(Project.myProjects.indexOf(project), 1);
    }

    static addProjectToArray (project) {
        Project.myProjects.push(project);
    }

    projectTasks = [];
    
    addTask(task) {
        this.projectTasks.push(task);
    }

    removeTask(task) {       
        
        this.projectTasks.splice(this.projectTasks.findIndex((obj) => obj.id == task.id), 1);
    }
}




/***/ }),

/***/ "./src/task-dom.js":
/*!*************************!*\
  !*** ./src/task-dom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendTaskToDom: () => (/* binding */ appendTaskToDom),
/* harmony export */   handleTaskForm: () => (/* binding */ handleTaskForm),
/* harmony export */   killDomTasks: () => (/* binding */ killDomTasks),
/* harmony export */   renderAddTaskBtn: () => (/* binding */ renderAddTaskBtn)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _project_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-dom.js */ "./src/project-dom.js");





const taskDialog = document.querySelector('#task-dialog');
const taskTitle = document.querySelector('#task-title');
const taskDate = document.querySelector('#dueDate');
const taskDescription = document.querySelector('#description');
const taskPriority = document.querySelector('#priority');
const taskContainer = document.querySelector('.main-content');

const handleCreateNewTaskBtn = () => {
    const newTaskBtn = document.querySelector('.add-task');
    newTaskBtn.addEventListener('click', showTaskDialog);

    function showTaskDialog() {
        taskDialog.showModal();
    }
};

const handleTaskForm = (() => {
    const addTaskBtn = document.querySelector('#add-task-btn');
    const cancelTaskBtn = document.querySelector('#cancel-task-btn');
    addTaskBtn.addEventListener('click', saveTaskValues);
    cancelTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        taskDialog.close();
    })
})();

function saveTaskValues(e) {
    e.preventDefault();

    createTask(taskTitle.value, taskDescription.value, taskPriority.value, taskDate.value);
    taskDialog.close();
};

function createTask(inputTitle, inputDescription, inputPriority, inputDate) {
    let newTask = new _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"](inputTitle, inputDescription, inputPriority, inputDate);

    let thisProject = _project_js__WEBPACK_IMPORTED_MODULE_1__["default"].myProjects.find(obj => obj.id == _project_dom_js__WEBPACK_IMPORTED_MODULE_2__.thisProjectId);
    thisProject.addTask(newTask);    
    
    updateDomProjectTasks(thisProject);
};

function updateDomProjectTasks(project) {
    killDomTasks();
    renderAddTaskBtn(project.id);
    project.projectTasks.forEach(task => {
        appendTaskToDom(task.title, task.dueDate, task.priority);
    });
}

function appendTaskToDom(objectTitle, objectDate, objectPriority) {
    const domTask = document.createElement('button');
    const domTitle = document.createElement('div');
    const domDate = document.createElement('div');
    const domDone = document.createElement('div');
    const domEdit = document.createElement('div');
    const domTitleValue = document.createElement('div');
    const domDateValue = document.createElement('div');
    const domNoteBtn = document.createElement('button');
    const domDoneBtn = document.createElement('button');
    const doneIco = document.createElement('i');
    const domEditBtn = document.createElement('button');
    const editIco = document.createElement('i');

    domTask.classList.add('listed-task');
    domTitle.classList.add('task-header', 'domTitle');
    domDate.classList.add('task-header', 'domDate');
    domDone.classList.add('task-header', 'domDone');
    domEdit.classList.add('task-header', 'domEdit');
    domTitleValue.classList.add('title-value');
    domDateValue.classList.add('date-value');
    domNoteBtn.classList.add('note-btn');
    domDoneBtn.classList.add('done-btn');
    doneIco.setAttribute('class', 'fa-solid fa-circle-check');
    domEditBtn.classList.add('edit-btn');
    editIco.setAttribute('class', 'fa-solid fa-pen-to-square');

    taskContainer.appendChild(domTask);
    domTask.appendChild(domTitle);
    domTask.appendChild(domDate);
    domTask.appendChild(domDone);
    domTask.appendChild(domEdit);
    domTask.appendChild(domTitleValue);
    domTask.appendChild(domDateValue);
    domTask.appendChild(domNoteBtn);
    domDoneBtn.appendChild(doneIco);
    domTask.appendChild(domDoneBtn);
    domEditBtn.appendChild(editIco);
    domTask.appendChild(domEditBtn);

    domTitle.textContent = "Title";
    domDate.textContent = "Due Date";
    domDone.textContent = "Done";
    domEdit.textContent = "Edit";
    domTitleValue.textContent = objectTitle;
    domDateValue.textContent = objectDate;
    domNoteBtn.textContent = "New Note";

    if (objectPriority === 'low') {
        domTask.setAttribute("style", "border-color: green");
    } else if (objectPriority === 'medium') {
        domTask.setAttribute("style", "border-color: yellow");
    } else if (objectPriority === 'high') {        
        domTask.setAttribute("style", "border-color: red");
    }
};

function killDomTasks() {
    const allDomTasks = document.querySelectorAll('.add-task');
    while (taskContainer.firstChild) {
        taskContainer.firstChild.remove();
        };
    
    allDomTasks.forEach(element => {
        element.remove();
    })
};

function renderAddTaskBtn (projectId) {
    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('add-task');
    newTaskBtn.setAttribute('id', `add-task-${projectId}`);
    const newTaskIco = document.createElement('i');
    newTaskIco.classList.add('fa-solid', 'fa-file-circle-plus');
    const newTaskLabel = document.createElement('span');
    newTaskLabel.textContent = 'New Task';
    newTaskLabel.classList.add('new-task-button');

    taskContainer.appendChild(newTaskBtn);
    newTaskBtn.appendChild(newTaskIco);
    newTaskBtn.appendChild(newTaskLabel);

    newTaskBtn.addEventListener('click', handleCreateNewTaskBtn);
};



/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(title, description, priority, dueDate) {
        this.id = Task.idCounter;
        this.title = title;
        this.description = description;        
        this.priority = priority;
        this.dueDate = dueDate;
        console.log(this.id);

        Task.idCounter++;
    }

    static idCounter = 0;

    static myTasks = [];

    static addTask(task) {
        Task.myTasks.push(task);
    }

    static removeTask(task) {
        Task.myTasks.splice(Task.myTasks.findIndex((obj) => obj.id == task.id), 1);
    }
};

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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-dom.js */ "./src/task-dom.js");
/* harmony import */ var _project_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-dom.js */ "./src/project-dom.js");
/* harmony import */ var _main_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-dom.js */ "./src/main-dom.js");

















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFVBQVU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFJZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3QjtBQUM2QjtBQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi1kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBnbG9iYWwgKi9cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2U2ZTllYztcbn1cblxuLyogcGFnZSBjb250YWluZXIgc3R5bGluZyAqL1xuLnBhZ2UtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDglIDFmciA4JSAvIG1pbm1heCgyMDBweCwgMjAlKSAxZnI7XG59XG5cbi8qIGhlYWRlciBzdHlsaW5nICovXG5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbn1cblxuaGVhZGVyIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICB0b3A6IDUwJTtcbn1cblxuLyogbWFpbiBjb250ZW50IHN0eWxpbmcgKi9cblxuLm1haW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYWRkLXRhc2sge1xuICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGlzdGVkLXRhc2sgeyAgICBcbiAgICBib3JkZXItbGVmdDogMTJweCBzb2xpZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAzMCUgMWZyIC8gMzAlIDMwJSAyMCUgMTAlIDEwJTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcImRvbVRpdGxlIGRvbURhdGUgZG9tTm90ZUJ0biBkb21Eb25lIGRvbUVkaXRcIlxuICAgIFwiZG9tVGl0bGVWYWx1ZSBkb21EYXRlVmFsdWUgZG9tTm90ZUJ0biBkb21Eb25lQnRuIGRvbUVkaXRCdG5cIjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5kb21UaXRsZSB7XG4gICAgZ3JpZC1hcmVhOiBkb21UaXRsZTtcbn1cblxuLmRvbURhdGUge1xuICAgIGdyaWQtYXJlYTogZG9tRGF0ZTtcbn1cblxuLmRvbURvbmUge1xuICAgIGdyaWQtYXJlYTogZG9tRG9uZTtcbn1cblxuLmRvbUVkaXQge1xuICAgIGdyaWQtYXJlYTogZG9tRWRpdDtcbn1cblxuLnRpdGxlLXZhbHVlIHtcbiAgICBncmlkLWFyZWE6IGRvbVRpdGxlVmFsdWU7XG59XG5cbi5kYXRlLXZhbHVlIHtcbiAgICBncmlkLWFyZWE6IGRvbURhdGVWYWx1ZTtcbn1cblxuLm5vdGUtYnRuIHtcbiAgICBncmlkLWFyZWE6IGRvbU5vdGVCdG47XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmRvbmUtYnRuIHtcbiAgICBncmlkLWFyZWE6IGRvbURvbmVCdG47XG59XG5cbi5lZGl0LWJ0biB7XG4gICAgZ3JpZC1hcmVhOiBkb21FZGl0QnRuO1xufVxuXG5cbi8qIHNpZGViYXIgc3R5bGluZyAqL1xuXG4uc2lkZWJhciB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSAxZnI7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG59XG4gICAgLyogZmlyc3Qgc2VjdGlvbiBzdHlsaW5nICovXG5cbi5maXJzdC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4uZmlyc3Qtc2VjdGlvbiA+IGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxZW07XG4gICAgZmxleDogMTsgICAgXG59XG5cbmJ1dHRvbiBzcGFuIHtcbiAgICB3aWR0aDogNWVtO1xufVxuXG4gICAgLyogc2Vjb25kIHNlY3Rpb24gc3R5bGluZyAqL1xuXG4uc2Vjb25kLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbi5zZWNvbmQtc2VjdGlvbiAgLm5ldy1wcm9qZWN0IHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxZW07XG59XG5cbi5wcm9qZWN0LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRlbTtcbiAgICBoZWlnaHQ6IDNlbTtcbn1cblxuLnByb2plY3QtbGlzdCBpIHtcbiAgICBwYWRkaW5nOiA0cHg7XG59XG5cbi5wcm9qZWN0LWxpc3QgaTpob3ZlciB7ICAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogZm9vdGVyIHN0eWxpbmcgKi9cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbn1cblxuLyogZGlhbG9nIHN0eWxpbmcgKi9cblxuZGlhbG9nIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZm9ybSBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7O0FBRVg7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlEQUFpRDtBQUNyRDs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUVBLHlCQUF5Qjs7QUFFekI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDOztpRUFFNkQ7SUFDN0QsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7O0FBR0Esb0JBQW9COztBQUVwQjtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtJQUNJLDBCQUEwQjs7QUFFOUI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsT0FBTztBQUNYOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztJQUVJLDJCQUEyQjs7QUFFL0I7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGdsb2JhbCAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2U2ZTllYztcXG59XFxuXFxuLyogcGFnZSBjb250YWluZXIgc3R5bGluZyAqL1xcbi5wYWdlLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA4JSAxZnIgOCUgLyBtaW5tYXgoMjAwcHgsIDIwJSkgMWZyO1xcbn1cXG5cXG4vKiBoZWFkZXIgc3R5bGluZyAqL1xcbmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNSU7XFxuICAgIHRvcDogNTAlO1xcbn1cXG5cXG4vKiBtYWluIGNvbnRlbnQgc3R5bGluZyAqL1xcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmxpc3RlZC10YXNrIHsgICAgXFxuICAgIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAzMCUgMWZyIC8gMzAlIDMwJSAyMCUgMTAlIDEwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJkb21UaXRsZSBkb21EYXRlIGRvbU5vdGVCdG4gZG9tRG9uZSBkb21FZGl0XFxcIlxcbiAgICBcXFwiZG9tVGl0bGVWYWx1ZSBkb21EYXRlVmFsdWUgZG9tTm90ZUJ0biBkb21Eb25lQnRuIGRvbUVkaXRCdG5cXFwiO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uZG9tVGl0bGUge1xcbiAgICBncmlkLWFyZWE6IGRvbVRpdGxlO1xcbn1cXG5cXG4uZG9tRGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogZG9tRGF0ZTtcXG59XFxuXFxuLmRvbURvbmUge1xcbiAgICBncmlkLWFyZWE6IGRvbURvbmU7XFxufVxcblxcbi5kb21FZGl0IHtcXG4gICAgZ3JpZC1hcmVhOiBkb21FZGl0O1xcbn1cXG5cXG4udGl0bGUtdmFsdWUge1xcbiAgICBncmlkLWFyZWE6IGRvbVRpdGxlVmFsdWU7XFxufVxcblxcbi5kYXRlLXZhbHVlIHtcXG4gICAgZ3JpZC1hcmVhOiBkb21EYXRlVmFsdWU7XFxufVxcblxcbi5ub3RlLWJ0biB7XFxuICAgIGdyaWQtYXJlYTogZG9tTm90ZUJ0bjtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZG9uZS1idG4ge1xcbiAgICBncmlkLWFyZWE6IGRvbURvbmVCdG47XFxufVxcblxcbi5lZGl0LWJ0biB7XFxuICAgIGdyaWQtYXJlYTogZG9tRWRpdEJ0bjtcXG59XFxuXFxuXFxuLyogc2lkZWJhciBzdHlsaW5nICovXFxuXFxuLnNpZGViYXIge1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMCUgMWZyO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuICAgIC8qIGZpcnN0IHNlY3Rpb24gc3R5bGluZyAqL1xcblxcbi5maXJzdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24gPiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbiAgICBmbGV4OiAxOyAgICBcXG59XFxuXFxuYnV0dG9uIHNwYW4ge1xcbiAgICB3aWR0aDogNWVtO1xcbn1cXG5cXG4gICAgLyogc2Vjb25kIHNlY3Rpb24gc3R5bGluZyAqL1xcblxcbi5zZWNvbmQtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbiAgLm5ldy1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxZW07XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0ZW07XFxuICAgIGhlaWdodDogM2VtO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IGkge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QgaTpob3ZlciB7ICAgIFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGZvb3RlciBzdHlsaW5nICovXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLyogZGlhbG9nIHN0eWxpbmcgKi9cXG5cXG5kaWFsb2cgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvcm0gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFwcGVuZFRhc2tUb0RvbSB9IGZyb20gXCIuL3Rhc2stZG9tLmpzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuZXhwb3J0IHtoYW5kbGVBbGxUYXNrc0J0bn07XG5cbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuY29uc3QgYWxsVGFza3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XG5cbmNvbnN0IGhhbmRsZUFsbFRhc2tzQnRuID0gKGZ1bmN0aW9uKCkge1xuICAgICBhbGxUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFsbFRhc2tzKTtcbn0pKCk7XG5cblxuZnVuY3Rpb24gcmVuZGVyQWxsVGFza3MoKSB7XG4gICAga2lsbEFsbENvbnRlbnQoKTtcbiAgICBcbiAgICBQcm9qZWN0Lm15UHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC5wcm9qZWN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGFwcGVuZFRhc2tUb0RvbSh0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHkpO1xuICAgICAgICB9KVxuICAgIH0pO1xufTtcblxuZnVuY3Rpb24ga2lsbEFsbENvbnRlbnQoKSB7XG4gICAgd2hpbGUodGFza3NDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH07XG59OyIsImltcG9ydCB7IHJlbmRlckFkZFRhc2tCdG4sIGtpbGxEb21UYXNrcywgYXBwZW5kVGFza1RvRG9tIH0gZnJvbSAnLi90YXNrLWRvbS5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2tzLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmV4cG9ydCB7Y3JlYXRlTmV3UHJvamVjdEJ0biwgaGFuZGxlUHJvamVjdEZvcm0sIHRoaXNQcm9qZWN0SWR9O1xuXG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG5jb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGlhbG9nJyk7XG5jb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0LWJ0bicpO1xuY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtcHJvamVjdC1idG4nKTtcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1zZWN0aW9uJyk7XG5sZXQgaWQgPSAwO1xubGV0IHRoaXNQcm9qZWN0SWQ7XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3RCdG4gPSAoKCkgPT4ge1xuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UHJvamVjdERpYWxvZyk7XG5cbiAgICBmdW5jdGlvbiBzaG93UHJvamVjdERpYWxvZygpIHtcbiAgICAgICAgcHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9XG59KSgpO1xuXG5jb25zdCBoYW5kbGVQcm9qZWN0Rm9ybSA9ICgoKSA9PiB7XG4gICAgY3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVQcm9qZWN0Rm9ybUlucHV0KTtcbiAgICBjYW5jZWxQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG4gICAgfSlcbn0pKCk7XG5cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0Rm9ybUlucHV0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHNhdmVkUHJvamVjdElucHV0VGl0bGUgPSBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZTsgICAgXG4gICAgY3JlYXRlUHJvamVjdChzYXZlZFByb2plY3RJbnB1dFRpdGxlKTtcbiAgICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcbiAgICBsZXQgbmV3MVByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7ICAgIFxuICAgIFxuICAgIFByb2plY3QuYWRkUHJvamVjdFRvQXJyYXkobmV3MVByb2plY3QpO1xuICAgIGFwcGVuZFByb2plY3RUb0xpc3QobmV3MVByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0VG9MaXN0KG5ld1Byb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKTtcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0SWNvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBcImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0LnRpdGxlO1xuXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0SWNvKTsgICAgXG4gICAgXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclRoaXNQcm9qZWN0VGFza3MpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBraWxsVGhpc1Byb2plY3QpO1xuXG4gICAgaWQrKztcbn07XG5cbmZ1bmN0aW9uIHJlbmRlclRoaXNQcm9qZWN0VGFza3MoZSkge1xuICAgIHRoaXNQcm9qZWN0SWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7ICAgXG4gICAgbGV0IHRoaXNQcm9qZWN0ID0gUHJvamVjdC5teVByb2plY3RzLmZpbmQocHJvamVjdCA9PiBlLmN1cnJlbnRUYXJnZXQuaWQgPT0gcHJvamVjdC5pZCk7XG4gICAgXG4gICAga2lsbERvbVRhc2tzKCk7XG4gICAgcmVuZGVyQWRkVGFza0J0bih0aGlzUHJvamVjdElkKTtcblxuICAgIHRoaXNQcm9qZWN0LnByb2plY3RUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBhcHBlbmRUYXNrVG9Eb20odGFzay50aXRsZSwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5KTtcbiAgICB9KTtcbiAgICBcbn07XG5cbmZ1bmN0aW9uIGtpbGxUaGlzUHJvamVjdChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgXG5cbiAgICBjb25zdCBwcm9qZWN0RG9tTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWxpc3QnKTtcbiAgICBwcm9qZWN0RG9tTGlzdC5mb3JFYWNoKGRvbVByb2plY3QgPT4ge1xuICAgICAgICBkb21Qcm9qZWN0LmlkID09IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmlkID8gZG9tUHJvamVjdC5yZW1vdmUoKSA6IFwiXCI7XG4gICAgfSk7XG5cbiAgICBsZXQgcHJvamVjdFRvS2lsbCA9IFByb2plY3QubXlQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuaWQgPT0gcHJvamVjdC5pZCk7IFxuICAgIGtpbGxEb21UYXNrcygpOyBcbiAgICBQcm9qZWN0LnJlbW92ZVByb2plY3RGcm9tQXJyYXkocHJvamVjdFRvS2lsbCk7XG4gICAgXG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IFByb2plY3QuaWRDb3VudGVyO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG5cbiAgICAgICAgUHJvamVjdC5pZENvdW50ZXIrK1xuICAgIH1cblxuICAgIHN0YXRpYyBpZENvdW50ZXIgPSAwO1xuXG4gICAgc3RhdGljIG15UHJvamVjdHMgPSBbXTtcblxuICAgIHN0YXRpYyByZW1vdmVQcm9qZWN0RnJvbUFycmF5KHByb2plY3QpIHtcbiAgICAgICAgUHJvamVjdC5teVByb2plY3RzLnNwbGljZShQcm9qZWN0Lm15UHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFByb2plY3RUb0FycmF5IChwcm9qZWN0KSB7XG4gICAgICAgIFByb2plY3QubXlQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIHByb2plY3RUYXNrcyA9IFtdO1xuICAgIFxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLnByb2plY3RUYXNrcy5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIHJlbW92ZVRhc2sodGFzaykgeyAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvamVjdFRhc2tzLnNwbGljZSh0aGlzLnByb2plY3RUYXNrcy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IHRhc2suaWQpLCAxKTtcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza3MuanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IHRoaXNQcm9qZWN0SWQgfSBmcm9tIFwiLi9wcm9qZWN0LWRvbS5qc1wiO1xuZXhwb3J0IHsgcmVuZGVyQWRkVGFza0J0biwga2lsbERvbVRhc2tzLCBhcHBlbmRUYXNrVG9Eb20sIGhhbmRsZVRhc2tGb3JtfTtcblxuY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRpYWxvZycpO1xuY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKTtcbmNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG5jb25zdCBoYW5kbGVDcmVhdGVOZXdUYXNrQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Rhc2tEaWFsb2cpO1xuXG4gICAgZnVuY3Rpb24gc2hvd1Rhc2tEaWFsb2coKSB7XG4gICAgICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxufTtcblxuY29uc3QgaGFuZGxlVGFza0Zvcm0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJyk7XG4gICAgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtdGFzay1idG4nKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVRhc2tWYWx1ZXMpO1xuICAgIGNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICB9KVxufSkoKTtcblxuZnVuY3Rpb24gc2F2ZVRhc2tWYWx1ZXMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNyZWF0ZVRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrRGVzY3JpcHRpb24udmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSwgdGFza0RhdGUudmFsdWUpO1xuICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soaW5wdXRUaXRsZSwgaW5wdXREZXNjcmlwdGlvbiwgaW5wdXRQcmlvcml0eSwgaW5wdXREYXRlKSB7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhpbnB1dFRpdGxlLCBpbnB1dERlc2NyaXB0aW9uLCBpbnB1dFByaW9yaXR5LCBpbnB1dERhdGUpO1xuXG4gICAgbGV0IHRoaXNQcm9qZWN0ID0gUHJvamVjdC5teVByb2plY3RzLmZpbmQob2JqID0+IG9iai5pZCA9PSB0aGlzUHJvamVjdElkKTtcbiAgICB0aGlzUHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spOyAgICBcbiAgICBcbiAgICB1cGRhdGVEb21Qcm9qZWN0VGFza3ModGhpc1Byb2plY3QpO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlRG9tUHJvamVjdFRhc2tzKHByb2plY3QpIHtcbiAgICBraWxsRG9tVGFza3MoKTtcbiAgICByZW5kZXJBZGRUYXNrQnRuKHByb2plY3QuaWQpO1xuICAgIHByb2plY3QucHJvamVjdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGFwcGVuZFRhc2tUb0RvbSh0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUYXNrVG9Eb20ob2JqZWN0VGl0bGUsIG9iamVjdERhdGUsIG9iamVjdFByaW9yaXR5KSB7XG4gICAgY29uc3QgZG9tVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRvbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9tRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvbURvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb21FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9tVGl0bGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvbURhdGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvbU5vdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkb21Eb25lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZG9uZUljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb25zdCBkb21FZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZWRpdEljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuICAgIGRvbVRhc2suY2xhc3NMaXN0LmFkZCgnbGlzdGVkLXRhc2snKTtcbiAgICBkb21UaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWhlYWRlcicsICdkb21UaXRsZScpO1xuICAgIGRvbURhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInLCAnZG9tRGF0ZScpO1xuICAgIGRvbURvbmUuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInLCAnZG9tRG9uZScpO1xuICAgIGRvbUVkaXQuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInLCAnZG9tRWRpdCcpO1xuICAgIGRvbVRpdGxlVmFsdWUuY2xhc3NMaXN0LmFkZCgndGl0bGUtdmFsdWUnKTtcbiAgICBkb21EYXRlVmFsdWUuY2xhc3NMaXN0LmFkZCgnZGF0ZS12YWx1ZScpO1xuICAgIGRvbU5vdGVCdG4uY2xhc3NMaXN0LmFkZCgnbm90ZS1idG4nKTtcbiAgICBkb21Eb25lQnRuLmNsYXNzTGlzdC5hZGQoJ2RvbmUtYnRuJyk7XG4gICAgZG9uZUljby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWNpcmNsZS1jaGVjaycpO1xuICAgIGRvbUVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbiAgICBlZGl0SWNvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtcGVuLXRvLXNxdWFyZScpO1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb21UYXNrKTtcbiAgICBkb21UYXNrLmFwcGVuZENoaWxkKGRvbVRpdGxlKTtcbiAgICBkb21UYXNrLmFwcGVuZENoaWxkKGRvbURhdGUpO1xuICAgIGRvbVRhc2suYXBwZW5kQ2hpbGQoZG9tRG9uZSk7XG4gICAgZG9tVGFzay5hcHBlbmRDaGlsZChkb21FZGl0KTtcbiAgICBkb21UYXNrLmFwcGVuZENoaWxkKGRvbVRpdGxlVmFsdWUpO1xuICAgIGRvbVRhc2suYXBwZW5kQ2hpbGQoZG9tRGF0ZVZhbHVlKTtcbiAgICBkb21UYXNrLmFwcGVuZENoaWxkKGRvbU5vdGVCdG4pO1xuICAgIGRvbURvbmVCdG4uYXBwZW5kQ2hpbGQoZG9uZUljbyk7XG4gICAgZG9tVGFzay5hcHBlbmRDaGlsZChkb21Eb25lQnRuKTtcbiAgICBkb21FZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY28pO1xuICAgIGRvbVRhc2suYXBwZW5kQ2hpbGQoZG9tRWRpdEJ0bik7XG5cbiAgICBkb21UaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgICBkb21EYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICAgIGRvbURvbmUudGV4dENvbnRlbnQgPSBcIkRvbmVcIjtcbiAgICBkb21FZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZG9tVGl0bGVWYWx1ZS50ZXh0Q29udGVudCA9IG9iamVjdFRpdGxlO1xuICAgIGRvbURhdGVWYWx1ZS50ZXh0Q29udGVudCA9IG9iamVjdERhdGU7XG4gICAgZG9tTm90ZUJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IE5vdGVcIjtcblxuICAgIGlmIChvYmplY3RQcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgZG9tVGFzay5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogZ3JlZW5cIik7XG4gICAgfSBlbHNlIGlmIChvYmplY3RQcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgZG9tVGFzay5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogeWVsbG93XCIpO1xuICAgIH0gZWxzZSBpZiAob2JqZWN0UHJpb3JpdHkgPT09ICdoaWdoJykgeyAgICAgICAgXG4gICAgICAgIGRvbVRhc2suc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IHJlZFwiKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBraWxsRG9tVGFza3MoKSB7XG4gICAgY29uc3QgYWxsRG9tVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLXRhc2snKTtcbiAgICB3aGlsZSAodGFza0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfTtcbiAgICBcbiAgICBhbGxEb21UYXNrcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pXG59O1xuXG5mdW5jdGlvbiByZW5kZXJBZGRUYXNrQnRuIChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xuICAgIG5ld1Rhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGBhZGQtdGFzay0ke3Byb2plY3RJZH1gKTtcbiAgICBjb25zdCBuZXdUYXNrSWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIG5ld1Rhc2tJY28uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtZmlsZS1jaXJjbGUtcGx1cycpO1xuICAgIGNvbnN0IG5ld1Rhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuZXdUYXNrTGFiZWwudGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuICAgIG5ld1Rhc2tMYWJlbC5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idXR0b24nKTtcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0J0bik7XG4gICAgbmV3VGFza0J0bi5hcHBlbmRDaGlsZChuZXdUYXNrSWNvKTtcbiAgICBuZXdUYXNrQnRuLmFwcGVuZENoaWxkKG5ld1Rhc2tMYWJlbCk7XG5cbiAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ3JlYXRlTmV3VGFza0J0bik7XG59O1xuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBUYXNrLmlkQ291bnRlcjtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247ICAgICAgICBcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcblxuICAgICAgICBUYXNrLmlkQ291bnRlcisrO1xuICAgIH1cblxuICAgIHN0YXRpYyBpZENvdW50ZXIgPSAwO1xuXG4gICAgc3RhdGljIG15VGFza3MgPSBbXTtcblxuICAgIHN0YXRpYyBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgVGFzay5teVRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVRhc2sodGFzaykge1xuICAgICAgICBUYXNrLm15VGFza3Muc3BsaWNlKFRhc2subXlUYXNrcy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09IHRhc2suaWQpLCAxKTtcbiAgICB9XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtoYW5kbGVUYXNrRm9ybX0gZnJvbSAnLi90YXNrLWRvbS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0QnRuLCBoYW5kbGVQcm9qZWN0Rm9ybSB9IGZyb20gJy4vcHJvamVjdC1kb20uanMnO1xuaW1wb3J0IHsgaGFuZGxlQWxsVGFza3NCdG4gfSBmcm9tICcuL21haW4tZG9tLmpzJztcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
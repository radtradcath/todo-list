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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _task_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-dom */ "./src/task-dom.js");




const tasksContainer = document.querySelector('.main-content');
const allTasksBtn = document.querySelector('.all');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleAllTasksBtn = (() => allTasksBtn.addEventListener('click', renderAllTasks))());


function renderAllTasks() {
    killAllContent();
    _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].myTasks.forEach(obj => {
        (0,_task_dom__WEBPACK_IMPORTED_MODULE_1__.appendTaskToDom)(obj.title, obj.dueDate, obj.priority);
    });
}

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
/* harmony export */   renderProject: () => (/* binding */ renderProject),
/* harmony export */   thisProjectId: () => (/* binding */ thisProjectId)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _task_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-dom.js */ "./src/task-dom.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");





const newProjectBtn = document.querySelector('.new-project');
const projectDialog = document.querySelector('#project-dialog');
const createProjectBtn = document.querySelector('#create-project-btn');
const cancelProjectBtn = document.querySelector('#cancel-project-btn');
const projectTitleInput = document.querySelector('#project-title');
const projectsContainer = document.querySelector('.second-section');
let savedProjectInputTitle;
let thisProjectId = 0;
let id = 0;

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

    savedProjectInputTitle = projectTitleInput.value;
    createProject(savedProjectInputTitle);
    projectDialog.close();
};

function createProject(title){
    let new1Project = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"](title);    
    
    _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].addProjectToArray(new1Project);
    appendProjectToList(new1Project);

    return new1Project;
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
    

    let renderThisProject = renderProject.bind(newProject);

    project.addEventListener('click', renderThisProject);
    id++
};

function renderProject() {
    thisProjectId = this.id;
    (0,_task_dom_js__WEBPACK_IMPORTED_MODULE_1__.killDomTasks)();
    (0,_task_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderAddTaskBtn)();
    this.projectTasks.forEach(obj => {        
        (0,_task_dom_js__WEBPACK_IMPORTED_MODULE_1__.appendTaskToDom)(obj.title, obj.dueDate, obj.priority);
    })
}








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

    static addProjectToArray (project) {
        Project.myProjects.push(project);
    }

    projectTasks = [];
    
    addTask(task) {
        this.projectTasks.push(task)
    }

    removeTask(task) {
        this.projectTasks.splice(this.projectTasks.findIndex((obj) => obj.id === task.id), 1);
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
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   handleCreateNewTaskBtn: () => (/* binding */ handleCreateNewTaskBtn),
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

    let savedTaskInputTitle = taskTitle.value;
    let savedTaskInputDate = taskDate.value;
    let savedTaskInputDescription = taskDescription.value;
    let savedTaskInputPriority = taskPriority.value;

    createTask(savedTaskInputTitle, savedTaskInputDescription, savedTaskInputPriority, savedTaskInputDate);
    taskDialog.close();
};

function createTask(inputTitle, inputDescription, inputPriority, inputDate) {
    let newTask = new _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"](inputTitle, inputDescription, inputPriority, inputDate);

    let thisProject = _project_js__WEBPACK_IMPORTED_MODULE_1__["default"].myProjects.find(obj => obj.id == _project_dom_js__WEBPACK_IMPORTED_MODULE_2__.thisProjectId);
    thisProject.addTask(newTask);
    _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(newTask);

    let renderThisProjectTask = _project_dom_js__WEBPACK_IMPORTED_MODULE_2__.renderProject.bind(thisProject);
    renderThisProjectTask();
    console.log(thisProject);
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

function renderAddTaskBtn () {
    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('add-task');
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

        Task.idCounter++;
    }

    static idCounter = 0;

    static myTasks = [];

    static addTask(task) {
        Task.myTasks.push(task);
    }

    static removeTask(task) {
        Task.myTasks.splice(Task.myTasks.findIndex((obj) => obj.id === task.id), 1);
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
/* harmony import */ var _main_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-dom */ "./src/main-dom.js");
















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dEO0FBQ0s7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4tZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogZ2xvYmFsICovXG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlNmU5ZWM7XG59XG5cbi8qIHBhZ2UgY29udGFpbmVyIHN0eWxpbmcgKi9cbi5wYWdlLWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiA4JSAxZnIgOCUgLyBtaW5tYXgoMjAwcHgsIDIwJSkgMWZyO1xufVxuXG4vKiBoZWFkZXIgc3R5bGluZyAqL1xuaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG59XG5cbmhlYWRlciBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNSU7XG4gICAgdG9wOiA1MCU7XG59XG5cbi8qIG1haW4gY29udGVudCBzdHlsaW5nICovXG5cbi5tYWluLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmFkZC10YXNrIHtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxpc3RlZC10YXNrIHsgICAgXG4gICAgYm9yZGVyLWxlZnQ6IDEycHggc29saWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMzAlIDFmciAvIDMwJSAzMCUgMjAlIDEwJSAxMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgXCJkb21UaXRsZSBkb21EYXRlIGRvbU5vdGVCdG4gZG9tRG9uZSBkb21FZGl0XCJcbiAgICBcImRvbVRpdGxlVmFsdWUgZG9tRGF0ZVZhbHVlIGRvbU5vdGVCdG4gZG9tRG9uZUJ0biBkb21FZGl0QnRuXCI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uZG9tVGl0bGUge1xuICAgIGdyaWQtYXJlYTogZG9tVGl0bGU7XG59XG5cbi5kb21EYXRlIHtcbiAgICBncmlkLWFyZWE6IGRvbURhdGU7XG59XG5cbi5kb21Eb25lIHtcbiAgICBncmlkLWFyZWE6IGRvbURvbmU7XG59XG5cbi5kb21FZGl0IHtcbiAgICBncmlkLWFyZWE6IGRvbUVkaXQ7XG59XG5cbi50aXRsZS12YWx1ZSB7XG4gICAgZ3JpZC1hcmVhOiBkb21UaXRsZVZhbHVlO1xufVxuXG4uZGF0ZS12YWx1ZSB7XG4gICAgZ3JpZC1hcmVhOiBkb21EYXRlVmFsdWU7XG59XG5cbi5ub3RlLWJ0biB7XG4gICAgZ3JpZC1hcmVhOiBkb21Ob3RlQnRuO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5kb25lLWJ0biB7XG4gICAgZ3JpZC1hcmVhOiBkb21Eb25lQnRuO1xufVxuXG4uZWRpdC1idG4ge1xuICAgIGdyaWQtYXJlYTogZG9tRWRpdEJ0bjtcbn1cblxuXG4vKiBzaWRlYmFyIHN0eWxpbmcgKi9cblxuLnNpZGViYXIge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMCUgMWZyO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xufVxuICAgIC8qIGZpcnN0IHNlY3Rpb24gc3R5bGluZyAqL1xuXG4uZmlyc3Qtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuLmZpcnN0LXNlY3Rpb24gPiBidXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMWVtO1xuICAgIGZsZXg6IDE7ICAgIFxufVxuXG5idXR0b24gc3BhbiB7XG4gICAgd2lkdGg6IDVlbTtcbn1cblxuICAgIC8qIHNlY29uZCBzZWN0aW9uIHN0eWxpbmcgKi9cblxuLnNlY29uZC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24gIC5uZXctcHJvamVjdCB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMWVtO1xufVxuXG4ucHJvamVjdC1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0ZW07XG4gICAgaGVpZ2h0OiAzZW07XG59XG5cbi5wcm9qZWN0LWxpc3QgaSB7XG4gICAgcGFkZGluZzogNHB4O1xufVxuXG4ucHJvamVjdC1saXN0IGk6aG92ZXIgeyAgICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIGZvb3RlciBzdHlsaW5nICovXG5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG59XG5cbi8qIGRpYWxvZyBzdHlsaW5nICovXG5cbmRpYWxvZyBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmZvcm0gcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXOztBQUVYO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpREFBaUQ7QUFDckQ7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7QUFDWjs7QUFFQSx5QkFBeUI7O0FBRXpCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLDRDQUE0QztJQUM1Qzs7aUVBRTZEO0lBQzdELG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBLG9CQUFvQjs7QUFFcEI7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7SUFDSSwwQkFBMEI7O0FBRTlCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLE9BQU87QUFDWDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7SUFFSSwyQkFBMkI7O0FBRS9CO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBnbG9iYWwgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNlNmU5ZWM7XFxufVxcblxcbi8qIHBhZ2UgY29udGFpbmVyIHN0eWxpbmcgKi9cXG4ucGFnZS1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogOCUgMWZyIDglIC8gbWlubWF4KDIwMHB4LCAyMCUpIDFmcjtcXG59XFxuXFxuLyogaGVhZGVyIHN0eWxpbmcgKi9cXG5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDUlO1xcbiAgICB0b3A6IDUwJTtcXG59XFxuXFxuLyogbWFpbiBjb250ZW50IHN0eWxpbmcgKi9cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBwYWRkaW5nOiAxZW0gMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5saXN0ZWQtdGFzayB7ICAgIFxcbiAgICBib3JkZXItbGVmdDogMTJweCBzb2xpZDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMzAlIDFmciAvIDMwJSAzMCUgMjAlIDEwJSAxMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiZG9tVGl0bGUgZG9tRGF0ZSBkb21Ob3RlQnRuIGRvbURvbmUgZG9tRWRpdFxcXCJcXG4gICAgXFxcImRvbVRpdGxlVmFsdWUgZG9tRGF0ZVZhbHVlIGRvbU5vdGVCdG4gZG9tRG9uZUJ0biBkb21FZGl0QnRuXFxcIjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLmRvbVRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiBkb21UaXRsZTtcXG59XFxuXFxuLmRvbURhdGUge1xcbiAgICBncmlkLWFyZWE6IGRvbURhdGU7XFxufVxcblxcbi5kb21Eb25lIHtcXG4gICAgZ3JpZC1hcmVhOiBkb21Eb25lO1xcbn1cXG5cXG4uZG9tRWRpdCB7XFxuICAgIGdyaWQtYXJlYTogZG9tRWRpdDtcXG59XFxuXFxuLnRpdGxlLXZhbHVlIHtcXG4gICAgZ3JpZC1hcmVhOiBkb21UaXRsZVZhbHVlO1xcbn1cXG5cXG4uZGF0ZS12YWx1ZSB7XFxuICAgIGdyaWQtYXJlYTogZG9tRGF0ZVZhbHVlO1xcbn1cXG5cXG4ubm90ZS1idG4ge1xcbiAgICBncmlkLWFyZWE6IGRvbU5vdGVCdG47XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRvbmUtYnRuIHtcXG4gICAgZ3JpZC1hcmVhOiBkb21Eb25lQnRuO1xcbn1cXG5cXG4uZWRpdC1idG4ge1xcbiAgICBncmlkLWFyZWE6IGRvbUVkaXRCdG47XFxufVxcblxcblxcbi8qIHNpZGViYXIgc3R5bGluZyAqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDFmcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcbiAgICAvKiBmaXJzdCBzZWN0aW9uIHN0eWxpbmcgKi9cXG5cXG4uZmlyc3Qtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uID4gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFlbTtcXG4gICAgZmxleDogMTsgICAgXFxufVxcblxcbmJ1dHRvbiBzcGFuIHtcXG4gICAgd2lkdGg6IDVlbTtcXG59XFxuXFxuICAgIC8qIHNlY29uZCBzZWN0aW9uIHN0eWxpbmcgKi9cXG5cXG4uc2Vjb25kLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24gIC5uZXctcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNGVtO1xcbiAgICBoZWlnaHQ6IDNlbTtcXG59XFxuXFxuLnByb2plY3QtbGlzdCBpIHtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IGk6aG92ZXIgeyAgICBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBmb290ZXIgc3R5bGluZyAqL1xcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbi8qIGRpYWxvZyBzdHlsaW5nICovXFxuXFxuZGlhbG9nIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb3JtIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0IHsgYXBwZW5kVGFza1RvRG9tIH0gZnJvbSBcIi4vdGFzay1kb21cIjtcblxuXG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbmNvbnN0IGFsbFRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbCcpO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBbGxUYXNrc0J0biA9ICgoKSA9PiBhbGxUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFsbFRhc2tzKSkoKTtcblxuXG5mdW5jdGlvbiByZW5kZXJBbGxUYXNrcygpIHtcbiAgICBraWxsQWxsQ29udGVudCgpO1xuICAgIFRhc2subXlUYXNrcy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgIGFwcGVuZFRhc2tUb0RvbShvYmoudGl0bGUsIG9iai5kdWVEYXRlLCBvYmoucHJpb3JpdHkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBraWxsQWxsQ29udGVudCgpIHtcbiAgICB3aGlsZSh0YXNrc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfTtcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza3MuanNcIjtcbmltcG9ydCB7IHJlbmRlckFkZFRhc2tCdG4sIGtpbGxEb21UYXNrcywgYXBwZW5kVGFza1RvRG9tIH0gZnJvbSAnLi90YXNrLWRvbS5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5leHBvcnQge2NyZWF0ZU5ld1Byb2plY3RCdG4sIGhhbmRsZVByb2plY3RGb3JtLCB0aGlzUHJvamVjdElkLCByZW5kZXJQcm9qZWN0fTtcblxuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpO1xuY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRpYWxvZycpO1xuY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdC1idG4nKTtcbmNvbnN0IGNhbmNlbFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXByb2plY3QtYnRuJyk7XG5jb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtc2VjdGlvbicpO1xubGV0IHNhdmVkUHJvamVjdElucHV0VGl0bGU7XG5sZXQgdGhpc1Byb2plY3RJZCA9IDA7XG5sZXQgaWQgPSAwO1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0QnRuID0gKCgpID0+IHtcbiAgICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Byb2plY3REaWFsb2cpO1xuXG4gICAgZnVuY3Rpb24gc2hvd1Byb2plY3REaWFsb2coKSB7XG4gICAgICAgIHByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxufSkoKTtcblxuY29uc3QgaGFuZGxlUHJvamVjdEZvcm0gPSAoKCkgPT4ge1xuICAgIGNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlUHJvamVjdEZvcm1JbnB1dCk7XG4gICAgY2FuY2VsUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xuICAgIH0pXG59KSgpO1xuXG5mdW5jdGlvbiBzYXZlUHJvamVjdEZvcm1JbnB1dChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgc2F2ZWRQcm9qZWN0SW5wdXRUaXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuICAgIGNyZWF0ZVByb2plY3Qoc2F2ZWRQcm9qZWN0SW5wdXRUaXRsZSk7XG4gICAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSl7XG4gICAgbGV0IG5ldzFQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpOyAgICBcbiAgICBcbiAgICBQcm9qZWN0LmFkZFByb2plY3RUb0FycmF5KG5ldzFQcm9qZWN0KTtcbiAgICBhcHBlbmRQcm9qZWN0VG9MaXN0KG5ldzFQcm9qZWN0KTtcblxuICAgIHJldHVybiBuZXcxUHJvamVjdDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kUHJvamVjdFRvTGlzdChuZXdQcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0Jyk7XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QtYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEljby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJmYS1zb2xpZCBmYS10cmFzaC1jYW5cIik7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC50aXRsZTtcblxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEljbyk7ICAgXG4gICAgXG5cbiAgICBsZXQgcmVuZGVyVGhpc1Byb2plY3QgPSByZW5kZXJQcm9qZWN0LmJpbmQobmV3UHJvamVjdCk7XG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVGhpc1Byb2plY3QpO1xuICAgIGlkKytcbn07XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QoKSB7XG4gICAgdGhpc1Byb2plY3RJZCA9IHRoaXMuaWQ7XG4gICAga2lsbERvbVRhc2tzKCk7XG4gICAgcmVuZGVyQWRkVGFza0J0bigpO1xuICAgIHRoaXMucHJvamVjdFRhc2tzLmZvckVhY2gob2JqID0+IHsgICAgICAgIFxuICAgICAgICBhcHBlbmRUYXNrVG9Eb20ob2JqLnRpdGxlLCBvYmouZHVlRGF0ZSwgb2JqLnByaW9yaXR5KTtcbiAgICB9KVxufVxuXG5cblxuXG5cblxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IFByb2plY3QuaWRDb3VudGVyO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG5cbiAgICAgICAgUHJvamVjdC5pZENvdW50ZXIrK1xuICAgIH1cblxuICAgIHN0YXRpYyBpZENvdW50ZXIgPSAwO1xuXG4gICAgc3RhdGljIG15UHJvamVjdHMgPSBbXTtcblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0VG9BcnJheSAocHJvamVjdCkge1xuICAgICAgICBQcm9qZWN0Lm15UHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBwcm9qZWN0VGFza3MgPSBbXTtcbiAgICBcbiAgICBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0VGFza3MucHVzaCh0YXNrKVxuICAgIH1cblxuICAgIHJlbW92ZVRhc2sodGFzaykge1xuICAgICAgICB0aGlzLnByb2plY3RUYXNrcy5zcGxpY2UodGhpcy5wcm9qZWN0VGFza3MuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gdGFzay5pZCksIDEpO1xuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdCwgdGhpc1Byb2plY3RJZCB9IGZyb20gXCIuL3Byb2plY3QtZG9tLmpzXCI7XG5leHBvcnQgeyByZW5kZXJBZGRUYXNrQnRuLCBraWxsRG9tVGFza3MsIGFwcGVuZFRhc2tUb0RvbSwgaGFuZGxlQ3JlYXRlTmV3VGFza0J0biwgaGFuZGxlVGFza0Zvcm0sIGNyZWF0ZVRhc2sgfTtcblxuY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRpYWxvZycpO1xuY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKTtcbmNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG5jb25zdCBoYW5kbGVDcmVhdGVOZXdUYXNrQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Rhc2tEaWFsb2cpO1xuXG4gICAgZnVuY3Rpb24gc2hvd1Rhc2tEaWFsb2coKSB7XG4gICAgICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxufTtcblxuY29uc3QgaGFuZGxlVGFza0Zvcm0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJyk7XG4gICAgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtdGFzay1idG4nKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVRhc2tWYWx1ZXMpO1xuICAgIGNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICB9KVxufSkoKTtcblxuZnVuY3Rpb24gc2F2ZVRhc2tWYWx1ZXMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBzYXZlZFRhc2tJbnB1dFRpdGxlID0gdGFza1RpdGxlLnZhbHVlO1xuICAgIGxldCBzYXZlZFRhc2tJbnB1dERhdGUgPSB0YXNrRGF0ZS52YWx1ZTtcbiAgICBsZXQgc2F2ZWRUYXNrSW5wdXREZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcbiAgICBsZXQgc2F2ZWRUYXNrSW5wdXRQcmlvcml0eSA9IHRhc2tQcmlvcml0eS52YWx1ZTtcblxuICAgIGNyZWF0ZVRhc2soc2F2ZWRUYXNrSW5wdXRUaXRsZSwgc2F2ZWRUYXNrSW5wdXREZXNjcmlwdGlvbiwgc2F2ZWRUYXNrSW5wdXRQcmlvcml0eSwgc2F2ZWRUYXNrSW5wdXREYXRlKTtcbiAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGlucHV0VGl0bGUsIGlucHV0RGVzY3JpcHRpb24sIGlucHV0UHJpb3JpdHksIGlucHV0RGF0ZSkge1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2soaW5wdXRUaXRsZSwgaW5wdXREZXNjcmlwdGlvbiwgaW5wdXRQcmlvcml0eSwgaW5wdXREYXRlKTtcblxuICAgIGxldCB0aGlzUHJvamVjdCA9IFByb2plY3QubXlQcm9qZWN0cy5maW5kKG9iaiA9PiBvYmouaWQgPT0gdGhpc1Byb2plY3RJZCk7XG4gICAgdGhpc1Byb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBUYXNrLmFkZFRhc2sobmV3VGFzayk7XG5cbiAgICBsZXQgcmVuZGVyVGhpc1Byb2plY3RUYXNrID0gcmVuZGVyUHJvamVjdC5iaW5kKHRoaXNQcm9qZWN0KTtcbiAgICByZW5kZXJUaGlzUHJvamVjdFRhc2soKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRhc2tUb0RvbShvYmplY3RUaXRsZSwgb2JqZWN0RGF0ZSwgb2JqZWN0UHJpb3JpdHkpIHtcbiAgICBjb25zdCBkb21UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZG9tVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb21EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9tRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvbUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb21UaXRsZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9tRGF0ZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9tTm90ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRvbURvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkb25lSWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGNvbnN0IGRvbUVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBlZGl0SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gICAgZG9tVGFzay5jbGFzc0xpc3QuYWRkKCdsaXN0ZWQtdGFzaycpO1xuICAgIGRvbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJywgJ2RvbVRpdGxlJyk7XG4gICAgZG9tRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWhlYWRlcicsICdkb21EYXRlJyk7XG4gICAgZG9tRG9uZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWhlYWRlcicsICdkb21Eb25lJyk7XG4gICAgZG9tRWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWhlYWRlcicsICdkb21FZGl0Jyk7XG4gICAgZG9tVGl0bGVWYWx1ZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS12YWx1ZScpO1xuICAgIGRvbURhdGVWYWx1ZS5jbGFzc0xpc3QuYWRkKCdkYXRlLXZhbHVlJyk7XG4gICAgZG9tTm90ZUJ0bi5jbGFzc0xpc3QuYWRkKCdub3RlLWJ0bicpO1xuICAgIGRvbURvbmVCdG4uY2xhc3NMaXN0LmFkZCgnZG9uZS1idG4nKTtcbiAgICBkb25lSWNvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtY2lyY2xlLWNoZWNrJyk7XG4gICAgZG9tRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuICAgIGVkaXRJY28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1wZW4tdG8tc3F1YXJlJyk7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbVRhc2spO1xuICAgIGRvbVRhc2suYXBwZW5kQ2hpbGQoZG9tVGl0bGUpO1xuICAgIGRvbVRhc2suYXBwZW5kQ2hpbGQoZG9tRGF0ZSk7XG4gICAgZG9tVGFzay5hcHBlbmRDaGlsZChkb21Eb25lKTtcbiAgICBkb21UYXNrLmFwcGVuZENoaWxkKGRvbUVkaXQpO1xuICAgIGRvbVRhc2suYXBwZW5kQ2hpbGQoZG9tVGl0bGVWYWx1ZSk7XG4gICAgZG9tVGFzay5hcHBlbmRDaGlsZChkb21EYXRlVmFsdWUpO1xuICAgIGRvbVRhc2suYXBwZW5kQ2hpbGQoZG9tTm90ZUJ0bik7XG4gICAgZG9tRG9uZUJ0bi5hcHBlbmRDaGlsZChkb25lSWNvKTtcbiAgICBkb21UYXNrLmFwcGVuZENoaWxkKGRvbURvbmVCdG4pO1xuICAgIGRvbUVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEljbyk7XG4gICAgZG9tVGFzay5hcHBlbmRDaGlsZChkb21FZGl0QnRuKTtcblxuICAgIGRvbVRpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuICAgIGRvbURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgZG9tRG9uZS50ZXh0Q29udGVudCA9IFwiRG9uZVwiO1xuICAgIGRvbUVkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBkb21UaXRsZVZhbHVlLnRleHRDb250ZW50ID0gb2JqZWN0VGl0bGU7XG4gICAgZG9tRGF0ZVZhbHVlLnRleHRDb250ZW50ID0gb2JqZWN0RGF0ZTtcbiAgICBkb21Ob3RlQnRuLnRleHRDb250ZW50ID0gXCJOZXcgTm90ZVwiO1xuXG4gICAgaWYgKG9iamVjdFByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICBkb21UYXNrLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiBncmVlblwiKTtcbiAgICB9IGVsc2UgaWYgKG9iamVjdFByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgICAgICBkb21UYXNrLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiB5ZWxsb3dcIik7XG4gICAgfSBlbHNlIGlmIChvYmplY3RQcmlvcml0eSA9PT0gJ2hpZ2gnKSB7ICAgICAgICBcbiAgICAgICAgZG9tVGFzay5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1jb2xvcjogcmVkXCIpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGtpbGxEb21UYXNrcygpIHtcbiAgICBjb25zdCBhbGxEb21UYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtdGFzaycpO1xuICAgIHdoaWxlICh0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgIFxuICAgIGFsbERvbVRhc2tzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSlcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckFkZFRhc2tCdG4gKCkge1xuICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XG4gICAgY29uc3QgbmV3VGFza0ljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBuZXdUYXNrSWNvLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWZpbGUtY2lyY2xlLXBsdXMnKTtcbiAgICBjb25zdCBuZXdUYXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmV3VGFza0xhYmVsLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICBuZXdUYXNrTGFiZWwuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9uJyk7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tCdG4pO1xuICAgIG5ld1Rhc2tCdG4uYXBwZW5kQ2hpbGQobmV3VGFza0ljbyk7XG4gICAgbmV3VGFza0J0bi5hcHBlbmRDaGlsZChuZXdUYXNrTGFiZWwpO1xuXG4gICAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNyZWF0ZU5ld1Rhc2tCdG4pO1xufTtcblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmlkID0gVGFzay5pZENvdW50ZXI7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uOyAgICAgICAgXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcblxuICAgICAgICBUYXNrLmlkQ291bnRlcisrO1xuICAgIH1cblxuICAgIHN0YXRpYyBpZENvdW50ZXIgPSAwO1xuXG4gICAgc3RhdGljIG15VGFza3MgPSBbXTtcblxuICAgIHN0YXRpYyBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgVGFzay5teVRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVRhc2sodGFzaykge1xuICAgICAgICBUYXNrLm15VGFza3Muc3BsaWNlKFRhc2subXlUYXNrcy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09PSB0YXNrLmlkKSwgMSk7XG4gICAgfVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aGFuZGxlQ3JlYXRlTmV3VGFza0J0biwgaGFuZGxlVGFza0Zvcm19IGZyb20gJy4vdGFzay1kb20uanMnO1xuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdEJ0biwgaGFuZGxlUHJvamVjdEZvcm0gfSBmcm9tICcuL3Byb2plY3QtZG9tLmpzJztcbmltcG9ydCB7IGhhbmRsZUFsbFRhc2tzQnRuIH0gZnJvbSAnLi9tYWluLWRvbSc7XG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
/* harmony export */   handleAllTasksBtn: () => (/* binding */ handleAllTasksBtn),
/* harmony export */   renderAllTasks: () => (/* binding */ renderAllTasks)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _task_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-dom */ "./src/task-dom.js");





const tasksContainer = document.querySelector('.main-content');
const allTasksBtn = document.querySelector('.all');

let handleAllTasksBtn = (() => allTasksBtn.addEventListener('click', renderAllTasks))();


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
/* harmony import */ var _main_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-dom.js */ "./src/main-dom.js");






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
    project.setAttribute('id', `project-${id}`);
    deleteProjectBtn.classList.add('delete-project-button');
    deleteProjectIco.setAttribute('class', "fa-solid fa-trash-can");
    projectTitle.textContent = newProject.title;

    projectsContainer.appendChild(project);
    project.appendChild(projectTitle);
    project.appendChild(deleteProjectBtn);
    deleteProjectBtn.appendChild(deleteProjectIco);   
    

    let renderThisProject = renderProject.bind(newProject);
    let killThisProject = killProject.bind(newProject);

    project.addEventListener('click', renderThisProject);

    deleteProjectBtn.addEventListener('click', killThisProject);
    id++;
};

function renderProject() {
    thisProjectId = this.id;
    (0,_task_dom_js__WEBPACK_IMPORTED_MODULE_1__.killDomTasks)();
    (0,_task_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderAddTaskBtn)();
    this.projectTasks.forEach(obj => {        
        (0,_task_dom_js__WEBPACK_IMPORTED_MODULE_1__.appendTaskToDom)(obj.title, obj.dueDate, obj.priority);
    })
}

function killProject(e) {
    e.stopImmediatePropagation();    
    const projectPos = document.getElementById(`project-${this.id}`);
    
    this.projectTasks.forEach((obj) => {
        console.log(this);               
        // this.removeTask(obj);
        // Task.removeTask(obj);
    });

    // projectPos.remove();
    // Project.removeProjectFromArray(this); 
    // renderAllTasks();   
       
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
        Project.myProjects.splice(Project.myProjects.findIndex((obj) => obj.id === project.id));
    }

    static addProjectToArray (project) {
        Project.myProjects.push(project);
    }

    projectTasks = [];
    
    addTask(task) {
        this.projectTasks.push(task);
    }

    removeTask(task) {
        console.log(task.id);
        
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
        console.log(this.id);

        Task.idCounter++;
    }

    static idCounter = 0;

    static myTasks = [];

    static addTask(task) {
        console.log(task.id);
        console.log(Task.myTasks);
        Task.myTasks.push(task);
    }

    static removeTask(task) {
        console.log(task.id);
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
/* harmony import */ var _main_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-dom */ "./src/main-dom.js");
















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnRDtBQUNLO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2stZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGdsb2JhbCAqL1xuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTZlOWVjO1xufVxuXG4vKiBwYWdlIGNvbnRhaW5lciBzdHlsaW5nICovXG4ucGFnZS1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogOCUgMWZyIDglIC8gbWlubWF4KDIwMHB4LCAyMCUpIDFmcjtcbn1cblxuLyogaGVhZGVyIHN0eWxpbmcgKi9cbmhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xufVxuXG5oZWFkZXIgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUlO1xuICAgIHRvcDogNTAlO1xufVxuXG4vKiBtYWluIGNvbnRlbnQgc3R5bGluZyAqL1xuXG4ubWFpbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5hZGQtdGFzayB7XG4gICAgcGFkZGluZzogMWVtIDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5saXN0ZWQtdGFzayB7ICAgIFxuICAgIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDMwJSAxZnIgLyAzMCUgMzAlIDIwJSAxMCUgMTAlO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwiZG9tVGl0bGUgZG9tRGF0ZSBkb21Ob3RlQnRuIGRvbURvbmUgZG9tRWRpdFwiXG4gICAgXCJkb21UaXRsZVZhbHVlIGRvbURhdGVWYWx1ZSBkb21Ob3RlQnRuIGRvbURvbmVCdG4gZG9tRWRpdEJ0blwiO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmRvbVRpdGxlIHtcbiAgICBncmlkLWFyZWE6IGRvbVRpdGxlO1xufVxuXG4uZG9tRGF0ZSB7XG4gICAgZ3JpZC1hcmVhOiBkb21EYXRlO1xufVxuXG4uZG9tRG9uZSB7XG4gICAgZ3JpZC1hcmVhOiBkb21Eb25lO1xufVxuXG4uZG9tRWRpdCB7XG4gICAgZ3JpZC1hcmVhOiBkb21FZGl0O1xufVxuXG4udGl0bGUtdmFsdWUge1xuICAgIGdyaWQtYXJlYTogZG9tVGl0bGVWYWx1ZTtcbn1cblxuLmRhdGUtdmFsdWUge1xuICAgIGdyaWQtYXJlYTogZG9tRGF0ZVZhbHVlO1xufVxuXG4ubm90ZS1idG4ge1xuICAgIGdyaWQtYXJlYTogZG9tTm90ZUJ0bjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZG9uZS1idG4ge1xuICAgIGdyaWQtYXJlYTogZG9tRG9uZUJ0bjtcbn1cblxuLmVkaXQtYnRuIHtcbiAgICBncmlkLWFyZWE6IGRvbUVkaXRCdG47XG59XG5cblxuLyogc2lkZWJhciBzdHlsaW5nICovXG5cbi5zaWRlYmFyIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDFmcjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbn1cbiAgICAvKiBmaXJzdCBzZWN0aW9uIHN0eWxpbmcgKi9cblxuLmZpcnN0LXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbiAgICBncmlkLXJvdzogMSAvIDI7XG59XG5cbi5maXJzdC1zZWN0aW9uID4gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFlbTtcbiAgICBmbGV4OiAxOyAgICBcbn1cblxuYnV0dG9uIHNwYW4ge1xuICAgIHdpZHRoOiA1ZW07XG59XG5cbiAgICAvKiBzZWNvbmQgc2VjdGlvbiBzdHlsaW5nICovXG5cbi5zZWNvbmQtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuLnNlY29uZC1zZWN0aW9uICAubmV3LXByb2plY3Qge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFlbTtcbn1cblxuLnByb2plY3QtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNGVtO1xuICAgIGhlaWdodDogM2VtO1xufVxuXG4ucHJvamVjdC1saXN0IGkge1xuICAgIHBhZGRpbmc6IDRweDtcbn1cblxuLnByb2plY3QtbGlzdCBpOmhvdmVyIHsgICAgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBmb290ZXIgc3R5bGluZyAqL1xuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xufVxuXG4vKiBkaWFsb2cgc3R5bGluZyAqL1xuXG5kaWFsb2cgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5mb3JtIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBVzs7QUFFWDtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaURBQWlEO0FBQ3JEOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUEseUJBQXlCOztBQUV6QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUM7O2lFQUU2RDtJQUM3RCxtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQSxvQkFBb0I7O0FBRXBCO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0lBQ0ksMEJBQTBCOztBQUU5QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0lBRUksMkJBQTJCOztBQUUvQjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogZ2xvYmFsICovXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZTZlOWVjO1xcbn1cXG5cXG4vKiBwYWdlIGNvbnRhaW5lciBzdHlsaW5nICovXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDglIDFmciA4JSAvIG1pbm1heCgyMDBweCwgMjAlKSAxZnI7XFxufVxcblxcbi8qIGhlYWRlciBzdHlsaW5nICovXFxuaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1JTtcXG4gICAgdG9wOiA1MCU7XFxufVxcblxcbi8qIG1haW4gY29udGVudCBzdHlsaW5nICovXFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgcGFkZGluZzogMWVtIDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubGlzdGVkLXRhc2sgeyAgICBcXG4gICAgYm9yZGVyLWxlZnQ6IDEycHggc29saWQ7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDMwJSAxZnIgLyAzMCUgMzAlIDIwJSAxMCUgMTAlO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImRvbVRpdGxlIGRvbURhdGUgZG9tTm90ZUJ0biBkb21Eb25lIGRvbUVkaXRcXFwiXFxuICAgIFxcXCJkb21UaXRsZVZhbHVlIGRvbURhdGVWYWx1ZSBkb21Ob3RlQnRuIGRvbURvbmVCdG4gZG9tRWRpdEJ0blxcXCI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5kb21UaXRsZSB7XFxuICAgIGdyaWQtYXJlYTogZG9tVGl0bGU7XFxufVxcblxcbi5kb21EYXRlIHtcXG4gICAgZ3JpZC1hcmVhOiBkb21EYXRlO1xcbn1cXG5cXG4uZG9tRG9uZSB7XFxuICAgIGdyaWQtYXJlYTogZG9tRG9uZTtcXG59XFxuXFxuLmRvbUVkaXQge1xcbiAgICBncmlkLWFyZWE6IGRvbUVkaXQ7XFxufVxcblxcbi50aXRsZS12YWx1ZSB7XFxuICAgIGdyaWQtYXJlYTogZG9tVGl0bGVWYWx1ZTtcXG59XFxuXFxuLmRhdGUtdmFsdWUge1xcbiAgICBncmlkLWFyZWE6IGRvbURhdGVWYWx1ZTtcXG59XFxuXFxuLm5vdGUtYnRuIHtcXG4gICAgZ3JpZC1hcmVhOiBkb21Ob3RlQnRuO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kb25lLWJ0biB7XFxuICAgIGdyaWQtYXJlYTogZG9tRG9uZUJ0bjtcXG59XFxuXFxuLmVkaXQtYnRuIHtcXG4gICAgZ3JpZC1hcmVhOiBkb21FZGl0QnRuO1xcbn1cXG5cXG5cXG4vKiBzaWRlYmFyIHN0eWxpbmcgKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSAxZnI7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG4gICAgLyogZmlyc3Qgc2VjdGlvbiBzdHlsaW5nICovXFxuXFxuLmZpcnN0LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbiA+IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGZsZXg6IDE7ICAgIFxcbn1cXG5cXG5idXR0b24gc3BhbiB7XFxuICAgIHdpZHRoOiA1ZW07XFxufVxcblxcbiAgICAvKiBzZWNvbmQgc2VjdGlvbiBzdHlsaW5nICovXFxuXFxuLnNlY29uZC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uICAubmV3LXByb2plY3Qge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFlbTtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRlbTtcXG4gICAgaGVpZ2h0OiAzZW07XFxufVxcblxcbi5wcm9qZWN0LWxpc3QgaSB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCBpOmhvdmVyIHsgICAgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogZm9vdGVyIHN0eWxpbmcgKi9cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG4vKiBkaWFsb2cgc3R5bGluZyAqL1xcblxcbmRpYWxvZyBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9ybSBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza3MuanNcIjtcbmltcG9ydCB7IGFwcGVuZFRhc2tUb0RvbSB9IGZyb20gXCIuL3Rhc2stZG9tXCI7XG5leHBvcnQge2hhbmRsZUFsbFRhc2tzQnRuLCByZW5kZXJBbGxUYXNrc307XG5cblxuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG5jb25zdCBhbGxUYXNrc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcblxubGV0IGhhbmRsZUFsbFRhc2tzQnRuID0gKCgpID0+IGFsbFRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyQWxsVGFza3MpKSgpO1xuXG5cbmZ1bmN0aW9uIHJlbmRlckFsbFRhc2tzKCkge1xuICAgIGtpbGxBbGxDb250ZW50KCk7XG4gICAgVGFzay5teVRhc2tzLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgYXBwZW5kVGFza1RvRG9tKG9iai50aXRsZSwgb2JqLmR1ZURhdGUsIG9iai5wcmlvcml0eSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGtpbGxBbGxDb250ZW50KCkge1xuICAgIHdoaWxlKHRhc2tzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza3NDb250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9O1xufTsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyQWRkVGFza0J0biwga2lsbERvbVRhc2tzLCBhcHBlbmRUYXNrVG9Eb20gfSBmcm9tICcuL3Rhc2stZG9tLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzIH0gZnJvbSBcIi4vbWFpbi1kb20uanNcIjtcbmV4cG9ydCB7Y3JlYXRlTmV3UHJvamVjdEJ0biwgaGFuZGxlUHJvamVjdEZvcm0sIHRoaXNQcm9qZWN0SWQsIHJlbmRlclByb2plY3R9O1xuXG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG5jb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGlhbG9nJyk7XG5jb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0LWJ0bicpO1xuY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtcHJvamVjdC1idG4nKTtcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1zZWN0aW9uJyk7XG5sZXQgc2F2ZWRQcm9qZWN0SW5wdXRUaXRsZTtcbmxldCB0aGlzUHJvamVjdElkID0gMDtcbmxldCBpZCA9IDA7XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3RCdG4gPSAoKCkgPT4ge1xuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UHJvamVjdERpYWxvZyk7XG5cbiAgICBmdW5jdGlvbiBzaG93UHJvamVjdERpYWxvZygpIHtcbiAgICAgICAgcHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9XG59KSgpO1xuXG5jb25zdCBoYW5kbGVQcm9qZWN0Rm9ybSA9ICgoKSA9PiB7XG4gICAgY3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVQcm9qZWN0Rm9ybUlucHV0KTtcbiAgICBjYW5jZWxQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG4gICAgfSlcbn0pKCk7XG5cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0Rm9ybUlucHV0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzYXZlZFByb2plY3RJbnB1dFRpdGxlID0gcHJvamVjdFRpdGxlSW5wdXQudmFsdWU7XG4gICAgY3JlYXRlUHJvamVjdChzYXZlZFByb2plY3RJbnB1dFRpdGxlKTtcbiAgICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcbiAgICBsZXQgbmV3MVByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7ICAgIFxuICAgIFxuICAgIFByb2plY3QuYWRkUHJvamVjdFRvQXJyYXkobmV3MVByb2plY3QpO1xuICAgIGFwcGVuZFByb2plY3RUb0xpc3QobmV3MVByb2plY3QpO1xuXG4gICAgcmV0dXJuIG5ldzFQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0VG9MaXN0KG5ld1Byb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKTtcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdC0ke2lkfWApO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QtYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEljby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJmYS1zb2xpZCBmYS10cmFzaC1jYW5cIik7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC50aXRsZTtcblxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEljbyk7ICAgXG4gICAgXG5cbiAgICBsZXQgcmVuZGVyVGhpc1Byb2plY3QgPSByZW5kZXJQcm9qZWN0LmJpbmQobmV3UHJvamVjdCk7XG4gICAgbGV0IGtpbGxUaGlzUHJvamVjdCA9IGtpbGxQcm9qZWN0LmJpbmQobmV3UHJvamVjdCk7XG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVGhpc1Byb2plY3QpO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGtpbGxUaGlzUHJvamVjdCk7XG4gICAgaWQrKztcbn07XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QoKSB7XG4gICAgdGhpc1Byb2plY3RJZCA9IHRoaXMuaWQ7XG4gICAga2lsbERvbVRhc2tzKCk7XG4gICAgcmVuZGVyQWRkVGFza0J0bigpO1xuICAgIHRoaXMucHJvamVjdFRhc2tzLmZvckVhY2gob2JqID0+IHsgICAgICAgIFxuICAgICAgICBhcHBlbmRUYXNrVG9Eb20ob2JqLnRpdGxlLCBvYmouZHVlRGF0ZSwgb2JqLnByaW9yaXR5KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBraWxsUHJvamVjdChlKSB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTsgICAgXG4gICAgY29uc3QgcHJvamVjdFBvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LSR7dGhpcy5pZH1gKTtcbiAgICBcbiAgICB0aGlzLnByb2plY3RUYXNrcy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7ICAgICAgICAgICAgICAgXG4gICAgICAgIC8vIHRoaXMucmVtb3ZlVGFzayhvYmopO1xuICAgICAgICAvLyBUYXNrLnJlbW92ZVRhc2sob2JqKTtcbiAgICB9KTtcblxuICAgIC8vIHByb2plY3RQb3MucmVtb3ZlKCk7XG4gICAgLy8gUHJvamVjdC5yZW1vdmVQcm9qZWN0RnJvbUFycmF5KHRoaXMpOyBcbiAgICAvLyByZW5kZXJBbGxUYXNrcygpOyAgIFxuICAgICAgIFxufTtcblxuXG5cblxuXG5cbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBQcm9qZWN0LmlkQ291bnRlcjtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuXG4gICAgICAgIFByb2plY3QuaWRDb3VudGVyKytcbiAgICB9XG5cbiAgICBzdGF0aWMgaWRDb3VudGVyID0gMDtcblxuICAgIHN0YXRpYyBteVByb2plY3RzID0gW107XG5cbiAgICBzdGF0aWMgcmVtb3ZlUHJvamVjdEZyb21BcnJheShwcm9qZWN0KSB7XG4gICAgICAgIFByb2plY3QubXlQcm9qZWN0cy5zcGxpY2UoUHJvamVjdC5teVByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IHByb2plY3QuaWQpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdFRvQXJyYXkgKHByb2plY3QpIHtcbiAgICAgICAgUHJvamVjdC5teVByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuXG4gICAgcHJvamVjdFRhc2tzID0gW107XG4gICAgXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRoaXMucHJvamVjdFRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2suaWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wcm9qZWN0VGFza3Muc3BsaWNlKHRoaXMucHJvamVjdFRhc2tzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gdGFzay5pZCksIDEpO1xuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdCwgdGhpc1Byb2plY3RJZCB9IGZyb20gXCIuL3Byb2plY3QtZG9tLmpzXCI7XG5leHBvcnQgeyByZW5kZXJBZGRUYXNrQnRuLCBraWxsRG9tVGFza3MsIGFwcGVuZFRhc2tUb0RvbSwgaGFuZGxlQ3JlYXRlTmV3VGFza0J0biwgaGFuZGxlVGFza0Zvcm0sIGNyZWF0ZVRhc2sgfTtcblxuY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRpYWxvZycpO1xuY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKTtcbmNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG5jb25zdCBoYW5kbGVDcmVhdGVOZXdUYXNrQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Rhc2tEaWFsb2cpO1xuXG4gICAgZnVuY3Rpb24gc2hvd1Rhc2tEaWFsb2coKSB7XG4gICAgICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxufTtcblxuY29uc3QgaGFuZGxlVGFza0Zvcm0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJyk7XG4gICAgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtdGFzay1idG4nKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVRhc2tWYWx1ZXMpO1xuICAgIGNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICB9KVxufSkoKTtcblxuZnVuY3Rpb24gc2F2ZVRhc2tWYWx1ZXMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBzYXZlZFRhc2tJbnB1dFRpdGxlID0gdGFza1RpdGxlLnZhbHVlO1xuICAgIGxldCBzYXZlZFRhc2tJbnB1dERhdGUgPSB0YXNrRGF0ZS52YWx1ZTtcbiAgICBsZXQgc2F2ZWRUYXNrSW5wdXREZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcbiAgICBsZXQgc2F2ZWRUYXNrSW5wdXRQcmlvcml0eSA9IHRhc2tQcmlvcml0eS52YWx1ZTtcblxuICAgIGNyZWF0ZVRhc2soc2F2ZWRUYXNrSW5wdXRUaXRsZSwgc2F2ZWRUYXNrSW5wdXREZXNjcmlwdGlvbiwgc2F2ZWRUYXNrSW5wdXRQcmlvcml0eSwgc2F2ZWRUYXNrSW5wdXREYXRlKTtcbiAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGlucHV0VGl0bGUsIGlucHV0RGVzY3JpcHRpb24sIGlucHV0UHJpb3JpdHksIGlucHV0RGF0ZSkge1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2soaW5wdXRUaXRsZSwgaW5wdXREZXNjcmlwdGlvbiwgaW5wdXRQcmlvcml0eSwgaW5wdXREYXRlKTtcblxuICAgIGxldCB0aGlzUHJvamVjdCA9IFByb2plY3QubXlQcm9qZWN0cy5maW5kKG9iaiA9PiBvYmouaWQgPT0gdGhpc1Byb2plY3RJZCk7XG4gICAgdGhpc1Byb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBUYXNrLmFkZFRhc2sobmV3VGFzayk7XG5cbiAgICBsZXQgcmVuZGVyVGhpc1Byb2plY3RUYXNrID0gcmVuZGVyUHJvamVjdC5iaW5kKHRoaXNQcm9qZWN0KTtcbiAgICByZW5kZXJUaGlzUHJvamVjdFRhc2soKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kVGFza1RvRG9tKG9iamVjdFRpdGxlLCBvYmplY3REYXRlLCBvYmplY3RQcmlvcml0eSkge1xuICAgIGNvbnN0IGRvbVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkb21UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb21Eb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9tRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvbVRpdGxlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb21EYXRlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb21Ob3RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZG9tRG9uZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRvbmVJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY29uc3QgZG9tRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGVkaXRJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgICBkb21UYXNrLmNsYXNzTGlzdC5hZGQoJ2xpc3RlZC10YXNrJyk7XG4gICAgZG9tVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInLCAnZG9tVGl0bGUnKTtcbiAgICBkb21EYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJywgJ2RvbURhdGUnKTtcbiAgICBkb21Eb25lLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJywgJ2RvbURvbmUnKTtcbiAgICBkb21FZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJywgJ2RvbUVkaXQnKTtcbiAgICBkb21UaXRsZVZhbHVlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLXZhbHVlJyk7XG4gICAgZG9tRGF0ZVZhbHVlLmNsYXNzTGlzdC5hZGQoJ2RhdGUtdmFsdWUnKTtcbiAgICBkb21Ob3RlQnRuLmNsYXNzTGlzdC5hZGQoJ25vdGUtYnRuJyk7XG4gICAgZG9tRG9uZUJ0bi5jbGFzc0xpc3QuYWRkKCdkb25lLWJ0bicpO1xuICAgIGRvbmVJY28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1jaXJjbGUtY2hlY2snKTtcbiAgICBkb21FZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnRuJyk7XG4gICAgZWRpdEljby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXBlbi10by1zcXVhcmUnKTtcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tVGFzayk7XG4gICAgZG9tVGFzay5hcHBlbmRDaGlsZChkb21UaXRsZSk7XG4gICAgZG9tVGFzay5hcHBlbmRDaGlsZChkb21EYXRlKTtcbiAgICBkb21UYXNrLmFwcGVuZENoaWxkKGRvbURvbmUpO1xuICAgIGRvbVRhc2suYXBwZW5kQ2hpbGQoZG9tRWRpdCk7XG4gICAgZG9tVGFzay5hcHBlbmRDaGlsZChkb21UaXRsZVZhbHVlKTtcbiAgICBkb21UYXNrLmFwcGVuZENoaWxkKGRvbURhdGVWYWx1ZSk7XG4gICAgZG9tVGFzay5hcHBlbmRDaGlsZChkb21Ob3RlQnRuKTtcbiAgICBkb21Eb25lQnRuLmFwcGVuZENoaWxkKGRvbmVJY28pO1xuICAgIGRvbVRhc2suYXBwZW5kQ2hpbGQoZG9tRG9uZUJ0bik7XG4gICAgZG9tRWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SWNvKTtcbiAgICBkb21UYXNrLmFwcGVuZENoaWxkKGRvbUVkaXRCdG4pO1xuXG4gICAgZG9tVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gICAgZG9tRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgICBkb21Eb25lLnRleHRDb250ZW50ID0gXCJEb25lXCI7XG4gICAgZG9tRWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGRvbVRpdGxlVmFsdWUudGV4dENvbnRlbnQgPSBvYmplY3RUaXRsZTtcbiAgICBkb21EYXRlVmFsdWUudGV4dENvbnRlbnQgPSBvYmplY3REYXRlO1xuICAgIGRvbU5vdGVCdG4udGV4dENvbnRlbnQgPSBcIk5ldyBOb3RlXCI7XG5cbiAgICBpZiAob2JqZWN0UHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgIGRvbVRhc2suc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IGdyZWVuXCIpO1xuICAgIH0gZWxzZSBpZiAob2JqZWN0UHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgIGRvbVRhc2suc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXItY29sb3I6IHllbGxvd1wiKTtcbiAgICB9IGVsc2UgaWYgKG9iamVjdFByaW9yaXR5ID09PSAnaGlnaCcpIHsgICAgICAgIFxuICAgICAgICBkb21UYXNrLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLWNvbG9yOiByZWRcIik7XG4gICAgfVxufTtcblxuZnVuY3Rpb24ga2lsbERvbVRhc2tzKCkge1xuICAgIGNvbnN0IGFsbERvbVRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC10YXNrJyk7XG4gICAgd2hpbGUgKHRhc2tDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICB0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgXG4gICAgYWxsRG9tVGFza3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gcmVuZGVyQWRkVGFza0J0biAoKSB7XG4gICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcbiAgICBjb25zdCBuZXdUYXNrSWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIG5ld1Rhc2tJY28uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtZmlsZS1jaXJjbGUtcGx1cycpO1xuICAgIGNvbnN0IG5ld1Rhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuZXdUYXNrTGFiZWwudGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuICAgIG5ld1Rhc2tMYWJlbC5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idXR0b24nKTtcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0J0bik7XG4gICAgbmV3VGFza0J0bi5hcHBlbmRDaGlsZChuZXdUYXNrSWNvKTtcbiAgICBuZXdUYXNrQnRuLmFwcGVuZENoaWxkKG5ld1Rhc2tMYWJlbCk7XG5cbiAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ3JlYXRlTmV3VGFza0J0bik7XG59O1xuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBUYXNrLmlkQ291bnRlcjtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247ICAgICAgICBcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcblxuICAgICAgICBUYXNrLmlkQ291bnRlcisrO1xuICAgIH1cblxuICAgIHN0YXRpYyBpZENvdW50ZXIgPSAwO1xuXG4gICAgc3RhdGljIG15VGFza3MgPSBbXTtcblxuICAgIHN0YXRpYyBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc29sZS5sb2codGFzay5pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFRhc2subXlUYXNrcyk7XG4gICAgICAgIFRhc2subXlUYXNrcy5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc29sZS5sb2codGFzay5pZCk7XG4gICAgICAgIFRhc2subXlUYXNrcy5zcGxpY2UoVGFzay5teVRhc2tzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT0gdGFzay5pZCksIDEpO1xuICAgIH1cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2hhbmRsZUNyZWF0ZU5ld1Rhc2tCdG4sIGhhbmRsZVRhc2tGb3JtfSBmcm9tICcuL3Rhc2stZG9tLmpzJztcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RCdG4sIGhhbmRsZVByb2plY3RGb3JtIH0gZnJvbSAnLi9wcm9qZWN0LWRvbS5qcyc7XG5pbXBvcnQgeyBoYW5kbGVBbGxUYXNrc0J0biB9IGZyb20gJy4vbWFpbi1kb20nO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
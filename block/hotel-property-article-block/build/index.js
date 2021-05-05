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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);


var _attributes;






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])('hotel/property-article', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Property Articles', 'hotel'),
  icon: 'images-alt2',
  category: 'hotel',
  supports: {
    // Turn off ability to edit HTML of block content
    html: false,
    // Turn off reusable block feature
    reusable: false,
    // Add alignwide and alignfull options
    align: false
  },
  //custom attr.
  attributes: (_attributes = {
    title: {
      type: 'string',
      selector: 'h3'
    },
    description: {
      type: 'string',
      selector: 'h5'
    },
    articleCount: {
      type: 'number',
      default: 3
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "title", {
    type: 'string',
    selector: '.title_description'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "taxonomies", {
    type: 'object'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "selectTaxonomy", {
    type: 'string'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "term", {
    type: 'object'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "term_id", {
    type: 'string'
  }), _attributes),
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        title = _props$attributes.title,
        description = _props$attributes.description,
        taxonomies = _props$attributes.taxonomies,
        selectTaxonomy = _props$attributes.selectTaxonomy,
        articleCount = _props$attributes.articleCount,
        term = _props$attributes.term,
        term_id = _props$attributes.term_id,
        setAttributes = props.setAttributes;

    if (!taxonomies) {
      wp.apiFetch({
        url: '/wp-json/hotel/v1/properties/all-terms'
      }).then(function (taxonomies) {
        props.setAttributes({
          taxonomies: taxonomies
        });

        if (taxonomies && term_id === undefined) {
          props.setAttributes({
            selectTaxonomy: taxonomies[0].id
          });
          props.setAttributes({
            term: taxonomies[0].data[0]
          });
          props.setAttributes({
            term_id: taxonomies[0].data[0].term_id
          });
        }
      });
    }

    if (!taxonomies) {
      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Loading ...', 'hotel');
    }

    if (!props.attributes.taxonomies && props.attributes.taxonomies.length === 0) {
      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No taxonomies found. Please add some!!', 'hotel');
    }

    function onChangeTaxonomy(e) {
      setAttributes({
        selectTaxonomy: e.target.value
      });
    }

    function onChangeTerm(e) {
      var value = e.target.value;
      setAttributes({
        term_id: value
      });
      taxonomies.filter(function (taxonomy) {
        return taxonomy.id === selectTaxonomy;
      }).map(function (taxonomy) {
        taxonomy.data.map(function (term) {
          if (term.term_id === +value) {
            setAttributes({
              term: term
            });
          }
        });
      });
    }

    function Term(props) {
      var selectTaxonomy = props.selectTaxonomy;

      if (!selectTaxonomy) {
        return true;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "term-list"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Select Term: "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("select", {
        onChange: onChangeTerm,
        value: term_id,
        class: "components-text-control__input"
      }, taxonomies.filter(function (taxonomy) {
        return taxonomy.id === selectTaxonomy;
      }).map(function (taxonomy) {
        return taxonomy.data.map(function (term) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
            value: term.term_id,
            key: term.term_id
          }, term.name);
        });
      }))));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "wp-block-hotel-property-articles"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "taxonomies-list"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Select Taxonomy: "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("select", {
      onChange: onChangeTaxonomy,
      value: selectTaxonomy,
      class: "components-text-control__input"
    }, taxonomies.map(function (taxonomy) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
        value: taxonomy.id,
        key: taxonomy.id
      }, taxonomy.name);
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Term, {
      selectTaxonomy: selectTaxonomy
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      className: "property-articles__title",
      tagName: "h3",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Write title', 'hotel'),
      value: title,
      onChange: function onChange(val) {
        return setAttributes({
          title: val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["TextareaControl"], {
      className: "property-articles__description",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Write Description', 'hotel'),
      value: description,
      onChange: function onChange(val) {
        return setAttributes({
          description: val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, "Select Article Count: "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
      value: articleCount,
      onChange: function onChange(val) {
        return setAttributes({
          articleCount: val
        });
      },
      trackColor: 'red',
      min: 0,
      max: 6
    }));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
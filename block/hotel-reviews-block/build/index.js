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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('hotel/reviews', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reviews', 'hotel'),
  icon: 'format-chat',
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
  attributes: {
    maxReviewCount: {
      type: 'decimalPoint',
      default: 0.0
    },
    cleanlinessProgress: {
      type: 'number',
      selector: '.cleanliness_progress',
      default: 0
    },
    communicationProgress: {
      type: 'number',
      selector: '.communication_progress',
      default: 0
    },
    checkInProgress: {
      type: 'number',
      selector: '.check_in_progress',
      default: 0
    },
    accuracyProgress: {
      type: 'number',
      selector: '.accuracy_progress',
      default: 0
    },
    locationProgress: {
      type: 'number',
      selector: '.location_progress',
      default: 0
    },
    valueProgress: {
      type: 'number',
      selector: '.value_progress',
      default: 0
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        cleanlinessProgress = _props$attributes.cleanlinessProgress,
        communicationProgress = _props$attributes.communicationProgress,
        checkInProgress = _props$attributes.checkInProgress,
        accuracyProgress = _props$attributes.accuracyProgress,
        locationProgress = _props$attributes.locationProgress,
        valueProgress = _props$attributes.valueProgress,
        maxReviewCount = _props$attributes.maxReviewCount,
        setAttributes = props.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("fieldset", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("legend", {
      className: "blocks-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Reviews', 'hotel')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      value: maxReviewCount,
      onChange: function onChange(newval) {
        return setAttributes({
          maxReviewCount: newval
        });
      },
      trackColor: 'red',
      min: 0,
      max: 10
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      class: "reviews-list__title"
    }, "Reviews"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      class: "reviews-list"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      class: "reviews-list__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "reviews-item"
    }, "Cleanliness"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      className: "reviews-item__value cleanliness_progress",
      value: cleanlinessProgress,
      onChange: function onChange(newval) {
        return setAttributes({
          cleanlinessProgress: newval
        });
      },
      withInputField: false,
      trackColor: 'red',
      step: 0.1,
      min: 0,
      max: 5
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      class: "reviews-list__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "reviews-item"
    }, "Communication"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      className: "reviews-item__value cleanliness_progress",
      value: communicationProgress,
      onChange: function onChange(newval) {
        return setAttributes({
          communicationProgress: newval
        });
      },
      withInputField: false,
      trackColor: 'red',
      step: 0.1,
      min: 0,
      max: 5
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      class: "reviews-list__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "reviews-item"
    }, "Check-in"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      className: "reviews-item__value cleanliness_progress",
      value: checkInProgress,
      onChange: function onChange(newval) {
        return setAttributes({
          checkInProgress: newval
        });
      },
      withInputField: false,
      trackColor: 'red',
      step: 0.1,
      min: 0,
      max: 5
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      class: "reviews-list__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "reviews-item"
    }, "Accuracy"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      className: "reviews-item__value cleanliness_progress",
      value: accuracyProgress,
      onChange: function onChange(newval) {
        return setAttributes({
          accuracyProgress: newval
        });
      },
      withInputField: false,
      trackColor: 'red',
      step: 0.1,
      min: 0,
      max: 5
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      class: "reviews-list__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "reviews-item"
    }, "Location"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      className: "reviews-item__value cleanliness_progress",
      value: locationProgress,
      onChange: function onChange(newval) {
        return setAttributes({
          locationProgress: newval
        });
      },
      withInputField: false,
      trackColor: 'red',
      step: 0.1,
      min: 0,
      max: 5
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      class: "reviews-list__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      class: "reviews-item"
    }, "Value"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      className: "reviews-item__value cleanliness_progress",
      value: valueProgress,
      onChange: function onChange(newval) {
        return setAttributes({
          valueProgress: newval
        });
      },
      withInputField: false,
      trackColor: 'red',
      step: 0.1,
      min: 0,
      max: 5
    })))));
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
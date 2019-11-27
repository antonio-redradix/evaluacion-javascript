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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
//import "@babel/polyfill"


Object(_main__WEBPACK_IMPORTED_MODULE_0__["main"])();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function main() {
  var initPixels = 60;
  var maxInflation = 7;
  var pixelsPerInflation = 10;
  var currentInflation;
  var currentPixels;

  function initParameters() {
    currentInflation = 0;
    currentPixels = initPixels;
  }

  function initScene() {
    initParameters();
    createBalloon();
  }

  var currentBalloon;

  var balloon =
  /*#__PURE__*/
  function () {
    function balloon() {
      _classCallCheck(this, balloon);

      this.balloon;
      this.exploded = false;
    }

    _createClass(balloon, [{
      key: "render",
      value: function render() {
        var _this = this;

        this.balloon = document.createElement("div");
        this.balloon.innerHTML = "🎈";
        this.balloon.classList.add("balloon");
        parent = document.getElementById("balloonContainer");
        parent.appendChild(this.balloon);

        this.balloon.onclick = function () {
          _this.explode();
        };
      }
    }, {
      key: "inflate",
      value: function inflate() {
        if (currentInflation < maxInflation && !this.exploded) {
          currentPixels += pixelsPerInflation;
          currentInflation += 1;
          this.balloon.style["font-size"] = currentPixels.toString() + "px";
        } else {
          this.explode();
        }
      }
    }, {
      key: "deinflate",
      value: function deinflate() {
        if (currentInflation > 0 && !this.exploded) {
          currentPixels -= pixelsPerInflation;
          currentInflation -= 1;
          this.balloon.style["font-size"] = currentPixels.toString() + "px";
        }
      }
    }, {
      key: "explode",
      value: function explode() {
        this.exploded = true;
        this.balloon.style["transition"] = "1s";
        this.balloon.style["font-size"] = "0px";
        this.balloon.innerHTML = "💥";
        setTimeout(function () {
          this.destroy;
          initParameters();
          currentBalloon = null;
          button.style["display"] = "block";
        }, 1000);
      }
    }]);

    return balloon;
  }();

  var button = document.getElementById("balloonCreator");
  button.onclick = createBalloon;

  function createBalloon() {
    if (currentBalloon == null) {
      button.style["display"] = "none";
      var newballoon = new balloon();
      currentBalloon = newballoon;
      currentBalloon.render();
    }
  }

  document.onkeydown = checkKey;

  function checkKey(e) {
    if (e.keyCode == '38') {
      if (currentBalloon != null) {
        currentBalloon.inflate();
      }
    } else if (e.keyCode == '40') {
      if (currentBalloon != null) {
        currentBalloon.deinflate();
      }
    }
  }

  initScene();
}

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=build.js.map
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/game/Game */ \"./src/js/game/Game.js\");\n/* harmony import */ var _js_player_a_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/player/a-player */ \"./src/js/player/a-player.js\");\n/* harmony import */ var _js_player_a_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_player_a_player__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n// VR Components\r\n\r\n\r\nlet game = new _js_game_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconsole.log(\"main\");\r\n\r\ngame.setup();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/game/Game.js":
/*!*****************************!*\
  !*** ./src/js/game/Game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\r\n    constructor() {\r\n        console.log(\"game\");\r\n        let self = this;\r\n        this.sceneLoaded = new Promise((resolve,reject) => {\r\n            console.log(\"here1\");\r\n            window.onload = (() => {\r\n                console.log(\"here2\");\r\n                self.sceneEl = document.querySelector('a-scene');\r\n                    // Aframe Scene has loaded\r\n                resolve();\r\n            });\r\n        });\r\n    }\r\n\r\n    setup() {\r\n        this.sceneLoaded.then(() => {\r\n            let el = this.sceneEl.querySelector('#test');\r\n            console.log(\"happened1\");\r\n\r\n            el.body.fixedRotation = true;\r\n            el.body.updateMassProperties();\r\n\r\n            let power = 40;\r\n\r\n            setInterval(() => {\r\n                // el.body.applyImpulse(\r\n                // /* impulse */        new CANNON.Vec3(0, 1, -1),\r\n                // /* world position */ new CANNON.Vec3().copy(el.getComputedAttribute('position'))\r\n                // );\r\n                el.body.applyForce(\r\n                    /* impulse */        new CANNON.Vec3(power, 0, 0),\r\n                    /* world position */ new CANNON.Vec3().copy(el.getComputedAttribute('position'))\r\n                    );\r\n                console.log(\"Power: \", power);\r\n            }, 50);\r\n        });\r\n    }\r\n\r\n    addToScene(obj) {\r\n        \r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/js/game/Game.js?");

/***/ }),

/***/ "./src/js/player/a-player.js":
/*!***********************************!*\
  !*** ./src/js/player/a-player.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("AFRAME.registerComponent('a-player', {\r\n    dependencies: ['dynamic-body'],\r\n    schema: {},\r\n    init: function () {\r\n        //this.asset = //get asset\r\n        //this.geo = //get geo\r\n\r\n        this.el.emit(\"playerinit\", {player: this});\r\n        this.body = this.el.body;\r\n        console.log(\"Body:\", this.body);\r\n\r\n\r\n    },\r\n    update: function () {},\r\n    tick: function () {},\r\n    remove: function () {},\r\n    pause: function () {},\r\n    play: function () {},\r\n\r\n    executeAction: function(command) {\r\n        command.action(this);\r\n    },\r\n\r\n    // Ensures the Player doesn't go faster than intended\r\n    // Needs to be run in each game step\r\n    checkMaxSpeed: function() {\r\n        \r\n        //     if (body.position[a.axis] > a.max) {\r\n        //       body.position[a.axis] = a.max;\r\n        //       body.velocity[a.axis] = 0;\r\n        //     } else if (body.position[a.axis] < a.min) {\r\n        //       body.position[a.axis] = a.min;\r\n        //       body.velocity[a.axis] = 0;\r\n        //     }\r\n        //   }); \r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/js/player/a-player.js?");

/***/ })

/******/ });
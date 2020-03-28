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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var partie = new _Game_Game__WEBPACK_IMPORTED_MODULE_0__["Partie"](15);
partie.initialiser();
partie.round();
partie.display_winner();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partie", function() { return Partie; });
/* harmony import */ var _Heros_Warrior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Heros_Wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _Game_Fight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



var Partie = /** @class */ (function () {
    function Partie(tour) {
        var _this = this;
        this.initialiser = function () {
            var Massi = new _Heros_Warrior__WEBPACK_IMPORTED_MODULE_0__["Warrior"]('Massi');
            var Voldemort = new _Heros_Wizard__WEBPACK_IMPORTED_MODULE_1__["Wizard"]('Voldemort');
            _this.warrior.push(Massi);
            _this.wizard.push(Voldemort);
        };
        this.round = function () {
            var atk = new _Game_Fight__WEBPACK_IMPORTED_MODULE_2__["Combat"]();
            for (var h = 0; h < _this._tour; h++) {
                console.log("\nTour " + h);
                for (var i = 0; i < _this.warrior.length; i++) {
                    for (var j = 0; j < _this.wizard.length; j++) {
                        if (_this.warrior[i].getPv == 0 || _this.wizard[j].getPv == 0) {
                            console.log("Fin de la partie!");
                            return;
                        }
                        else {
                            atk.attack(_this.warrior[i], _this.wizard[j]);
                            console.log("\n" + _this.warrior[i].getName + " vient d'attaquer " + _this.wizard[j].getName);
                            console.log("PV restants de " + _this.wizard[i].getName + " : " + _this.wizard[i].getPv);
                            _this.wizard[j].healing();
                            atk.attack(_this.wizard[j], _this.warrior[i]);
                            console.log("\n" + _this.wizard[i].getName + " vient d'attaquer " + _this.warrior[j].getName);
                            console.log("PV restants de " + _this.warrior[i].getName + " : " + _this.warrior[i].getPv);
                        }
                    }
                }
            }
        };
        this.display_winner = function () {
            for (var i = 0; i < _this.warrior.length; i++) {
                for (var j = 0; j < _this.wizard.length; j++) {
                    if (_this.warrior[i].getPv == 0) {
                        console.log(_this.warrior[i].getName + " a perdu!");
                    }
                    else if (_this.wizard[j].getPv == 0) {
                        console.log(_this.wizard[j].getName + " a perdu!");
                    }
                }
            }
        };
        this._tour = tour;
        this.warrior = new Array();
        this.wizard = new Array();
    }
    return Partie;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warrior", function() { return Warrior; });
/* harmony import */ var _Heros_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(name) {
        return _super.call(this, name) || this;
    }
    return Warrior;
}(_Heros_Default__WEBPACK_IMPORTED_MODULE_0__["Default"]));



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Default", function() { return Default; });
var Default = /** @class */ (function () {
    function Default(nom) {
        this._name = nom;
        this._atk = 20;
        this._pv = 100;
    }
    Object.defineProperty(Default.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Default.prototype, "setName", {
        set: function (nom) {
            this._name = nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Default.prototype, "getAtk", {
        get: function () {
            return this._atk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Default.prototype, "setAtk", {
        set: function (atk) {
            this._atk = atk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Default.prototype, "getPv", {
        get: function () {
            return this._pv;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Default.prototype, "setPv", {
        set: function (pv) {
            this._pv = pv;
        },
        enumerable: true,
        configurable: true
    });
    return Default;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wizard", function() { return Wizard; });
/* harmony import */ var _Heros_Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard(nom) {
        var _this = _super.call(this, nom) || this;
        _this.healing = function () {
            if (_this._mana >= 10) {
                _this._mana = _this._mana - _this.care_mana;
                _this.setPv = _this.getPv + _this.care_mana;
                console.log("\n" + _this.getName + " active sort de soin (+10 PV) | PV total: " + _this.getPv);
                console.log("Mana restante : " + _this.getMana);
            }
        };
        _this._mana = 30;
        _this.care_mana = 10;
        return _this;
    }
    Object.defineProperty(Wizard.prototype, "getMana", {
        get: function () {
            return this._mana;
        },
        enumerable: true,
        configurable: true
    });
    return Wizard;
}(_Heros_Default__WEBPACK_IMPORTED_MODULE_0__["Default"]));



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Combat", function() { return Combat; });
var Combat = /** @class */ (function () {
    function Combat() {
    }
    Combat.prototype.attack = function (striker, target) {
        if ((target.getPv - striker.getAtk) > 0) {
            target.setPv = target.getPv - striker.getAtk;
        }
        else {
            target.setPv = 0;
        }
    };
    return Combat;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hlcm9zL1dhcnJpb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hlcm9zL0RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hlcm9zL1dpemFyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS9GaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQXFDO0FBR3JDLElBQUksTUFBTSxHQUFXLElBQUksaURBQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDckIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2Ys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LEtBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQztnQkFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEQ7UUFDTCxDQUFDO1FBakJHLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztJQUN4QixDQUFDO0lBRUQsc0JBQVcsMkJBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFlTCxhQUFDO0FBQUQsQ0FBQyxDQTdCMkIsc0RBQU8sR0E2QmxDOzs7Ozs7Ozs7QUM1QkQ7QUFBQTtBQUFBO0lBQUE7SUFlQSxDQUFDO0lBWlUsdUJBQU0sR0FBYixVQUFjLE9BQWdCLEVBQUUsTUFBZTtRQUUzQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQ2hEO2FBQ0k7WUFDRCxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFJTCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBQYXJ0aWUgfSBmcm9tICcuL0dhbWUvR2FtZSc7XHJcblxyXG5cclxubGV0IHBhcnRpZTogUGFydGllID0gbmV3IFBhcnRpZSgxNSk7XHJcbnBhcnRpZS5pbml0aWFsaXNlcigpOyBcclxucGFydGllLnJvdW5kKCk7IFxyXG5wYXJ0aWUuZGlzcGxheV93aW5uZXIoKTsgXHJcbiIsImltcG9ydCB7IERlZmF1bHQgfSBmcm9tIFwiLi4vSGVyb3MvRGVmYXVsdFwiO1xyXG5pbXBvcnQgeyBXYXJyaW9yIH0gZnJvbSBcIi4uL0hlcm9zL1dhcnJpb3JcIjtcclxuaW1wb3J0IHsgV2l6YXJkIH0gZnJvbSBcIi4uL0hlcm9zL1dpemFyZFwiO1xyXG5pbXBvcnQgeyBDb21iYXQgfSBmcm9tIFwiLi4vR2FtZS9GaWdodFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfdG91cjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB3YXJyaW9yOiBXYXJyaW9yW107XHJcbiAgICBwcml2YXRlIHdpemFyZDogV2l6YXJkW107XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRvdXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3RvdXIgPSB0b3VyO1xyXG4gICAgICAgIHRoaXMud2FycmlvciA9IG5ldyBBcnJheTxXYXJyaW9yPigpO1xyXG4gICAgICAgIHRoaXMud2l6YXJkID0gbmV3IEFycmF5PFdpemFyZD4oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGluaXRpYWxpc2VyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBNYXNzaTogV2FycmlvciA9IG5ldyBXYXJyaW9yKCdNYXNzaScpO1xyXG4gICAgICAgIGxldCBWb2xkZW1vcnQ6IFdpemFyZCA9IG5ldyBXaXphcmQoJ1ZvbGRlbW9ydCcpO1xyXG5cclxuICAgICAgICB0aGlzLndhcnJpb3IucHVzaChNYXNzaSk7XHJcbiAgICAgICAgdGhpcy53aXphcmQucHVzaChWb2xkZW1vcnQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcm91bmQgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGF0ayA9IG5ldyBDb21iYXQoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCB0aGlzLl90b3VyOyBoKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXG5Ub3VyIFwiICsgaCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53YXJyaW9yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMud2l6YXJkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMud2FycmlvcltpXS5nZXRQdiA9PSAwIHx8IHRoaXMud2l6YXJkW2pdLmdldFB2ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaW4gZGUgbGEgcGFydGllIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXRrLmF0dGFjayh0aGlzLndhcnJpb3JbaV0sIHRoaXMud2l6YXJkW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXG5cIiArIHRoaXMud2FycmlvcltpXS5nZXROYW1lICsgXCIgdmllbnQgZCdhdHRhcXVlciBcIiArIHRoaXMud2l6YXJkW2pdLmdldE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBWIHJlc3RhbnRzIGRlIFwiICsgdGhpcy53aXphcmRbaV0uZ2V0TmFtZSArIFwiIDogXCIgKyB0aGlzLndpemFyZFtpXS5nZXRQdik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpemFyZFtqXS5oZWFsaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0ay5hdHRhY2sodGhpcy53aXphcmRbal0sIHRoaXMud2FycmlvcltpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXFxuXCIgKyB0aGlzLndpemFyZFtpXS5nZXROYW1lICsgXCIgdmllbnQgZCdhdHRhcXVlciBcIiArIHRoaXMud2FycmlvcltqXS5nZXROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQViByZXN0YW50cyBkZSBcIiArIHRoaXMud2FycmlvcltpXS5nZXROYW1lICsgXCIgOiBcIiArIHRoaXMud2FycmlvcltpXS5nZXRQdik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheV93aW5uZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53YXJyaW9yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy53aXphcmQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLndhcnJpb3JbaV0uZ2V0UHYgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2FycmlvcltpXS5nZXROYW1lICsgXCIgYSBwZXJkdSFcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMud2l6YXJkW2pdLmdldFB2ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndpemFyZFtqXS5nZXROYW1lICsgXCIgYSBwZXJkdSFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBEZWZhdWx0IH0gZnJvbSBcIi4uL0hlcm9zL0RlZmF1bHRcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgV2FycmlvciBleHRlbmRzIERlZmF1bHQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyl7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7IFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIERlZmF1bHQge1xyXG5cclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2F0azogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcHY6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihub206IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBub207XHJcbiAgICAgICAgdGhpcy5fYXRrID0gMjA7XHJcbiAgICAgICAgdGhpcy5fcHYgPSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBnZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBzZXROYW1lKG5vbTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5vbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGdldEF0aygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdGs7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBzZXRBdGsoYXRrOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9hdGsgPSBhdGs7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBnZXRQdigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHNldFB2KHB2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9wdiA9IHB2O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGVmYXVsdCB9IGZyb20gJy4uL0hlcm9zL0RlZmF1bHQnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBXaXphcmQgZXh0ZW5kcyBEZWZhdWx0IHtcclxuXHJcbiAgICBwcml2YXRlIF9tYW5hOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGNhcmVfbWFuYTogbnVtYmVyO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihub206IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5vbSk7XHJcbiAgICAgICAgdGhpcy5fbWFuYSA9IDMwO1xyXG4gICAgICAgIHRoaXMuY2FyZV9tYW5hID0gMTA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBnZXRNYW5hKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoZWFsaW5nID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbWFuYSA+PSAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYW5hID0gdGhpcy5fbWFuYSAtIHRoaXMuY2FyZV9tYW5hO1xyXG4gICAgICAgICAgICB0aGlzLnNldFB2ID0gdGhpcy5nZXRQdiArIHRoaXMuY2FyZV9tYW5hO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgXFxuJHt0aGlzLmdldE5hbWV9IGFjdGl2ZSBzb3J0IGRlIHNvaW4gKCsxMCBQVikgfCBQViB0b3RhbDogJHt0aGlzLmdldFB2fWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hbmEgcmVzdGFudGUgOiBcIiArIHRoaXMuZ2V0TWFuYSk7ICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBEZWZhdWx0IH0gZnJvbSAnLi4vSGVyb3MvRGVmYXVsdCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21iYXQge1xyXG5cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNrKHN0cmlrZXI6IERlZmF1bHQsIHRhcmdldDogRGVmYXVsdCkge1xyXG5cclxuICAgICAgICBpZiAoKHRhcmdldC5nZXRQdiAtIHN0cmlrZXIuZ2V0QXRrKSA+IDApIHtcclxuICAgICAgICAgICAgdGFyZ2V0LnNldFB2ID0gdGFyZ2V0LmdldFB2IC0gc3RyaWtlci5nZXRBdGs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXQuc2V0UHYgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
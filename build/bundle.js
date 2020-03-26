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
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Personnages_Personnage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _Partie_Combat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



var rl = readline__WEBPACK_IMPORTED_MODULE_0__["createInterface"]({
    input: process.stdin,
    output: process.stdout
});
var combat = new _Partie_Combat__WEBPACK_IMPORTED_MODULE_2__["Combat"]();
/**
 * Instanciation des guerriers
 */
rl.question('\nEntrer le nom de votre guerrier : ', function (answer) {
    var guerrier1 = new _Personnages_Personnage__WEBPACK_IMPORTED_MODULE_1__["Personnage"](answer);
    guerrier1.atk = 25;
    guerrier1.pv = 100;
    var guerrier2 = new _Personnages_Personnage__WEBPACK_IMPORTED_MODULE_1__["Personnage"]('Hercule');
    console.log("\r\nLe guerrier " + guerrier2.nom + " vous provoque en Duel !");
    guerrier2.atk = 43;
    guerrier2.pv = 100;
    combat.TurnByTurn(guerrier1, guerrier2);
    rl.close();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personnage", function() { return Personnage; });
/* harmony import */ var _Partie_Combat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
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

var Personnage = /** @class */ (function (_super) {
    __extends(Personnage, _super);
    function Personnage(nom) {
        var _this = _super.call(this) || this;
        _this._nom = nom;
        _this._atk = 0;
        _this._def = 0;
        _this._pv = 0;
        return _this;
    }
    Object.defineProperty(Personnage.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "atk", {
        get: function () {
            return this._atk;
        },
        set: function (atk) {
            this._atk = atk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "def", {
        get: function () {
            return this._def;
        },
        set: function (def) {
            this._def = def;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "pv", {
        get: function () {
            return this._pv;
        },
        set: function (pv) {
            this._pv = pv;
        },
        enumerable: true,
        configurable: true
    });
    return Personnage;
}(_Partie_Combat__WEBPACK_IMPORTED_MODULE_0__["Combat"]));



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Combat", function() { return Combat; });
var Combat = /** @class */ (function () {
    function Combat() {
    }
    Combat.prototype.attack = function (atk, target) {
        if ((target.pv - atk) > 0) {
            target.pv = target.pv - atk;
        }
        else {
            target.pv = 0;
        }
    };
    Combat.prototype.TurnByTurn = function (player1, player2) {
        while (player1.pv > 0 || player2.pv > 0) {
            if (player2.pv == 0) {
                console.log("\n" + player1.nom + " est le vainqueur !");
                break;
            }
            this.attack(player2.atk, player1);
            console.log("\n" + player2.nom + " attaque " + player1.nom);
            console.log("PV restant de " + player1.nom + " : " + player1.pv);
            if (player1.pv == 0) {
                console.log("\n" + player2.nom + " est le vainqueur !");
                break;
            }
            this.attack(player1.atk, player2);
            console.log("\n" + player1.nom + " attaque " + player2.nom);
            console.log("PV restant de " + player2.nom + " : " + player2.pv);
        }
    };
    return Combat;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWRsaW5lXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BlcnNvbm5hZ2VzL1BlcnNvbm5hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhcnRpZS9Db21iYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQztBQUNpQjtBQUNiO0FBSXpDLElBQUksRUFBRSxHQUFHLHdEQUF3QixDQUFDO0lBQzlCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztJQUNwQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07Q0FDekIsQ0FBQyxDQUFDO0FBSUgsSUFBSSxNQUFNLEdBQVcsSUFBSSxxREFBTSxFQUFFLENB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QUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssT0FBTyxDQUFDLEdBQUcsaUJBQVksT0FBTyxDQUFDLEdBQUssQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQWlCLE9BQU8sQ0FBQyxHQUFHLFdBQU0sT0FBTyxDQUFDLEVBQUksQ0FBQyxDQUFDO1lBRTVELElBQUksT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxPQUFPLENBQUMsR0FBRyx3QkFBcUIsQ0FBQyxDQUFDO2dCQUNuRCxNQUFNO2FBQ1Q7WUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFLLE9BQU8sQ0FBQyxHQUFHLGlCQUFZLE9BQU8sQ0FBQyxHQUFLLENBQUMsQ0FBQztZQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFpQixPQUFPLENBQUMsR0FBRyxXQUFNLE9BQU8sQ0FBQyxFQUFJLENBQUMsQ0FBQztTQUUvRDtJQUNMLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgKiBhcyByZWFkbGluZSBmcm9tICdyZWFkbGluZSc7XHJcbmltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tICcuL1BlcnNvbm5hZ2VzL1BlcnNvbm5hZ2UnO1xyXG5pbXBvcnQgeyBDb21iYXQgfSBmcm9tICcuL1BhcnRpZS9Db21iYXQnO1xyXG5cclxuXHJcblxyXG5sZXQgcmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xyXG4gICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXHJcbiAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0XHJcbn0pO1xyXG5cclxuXHJcblxyXG5sZXQgY29tYmF0OiBDb21iYXQgPSBuZXcgQ29tYmF0KCk7IFxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW5zdGFuY2lhdGlvbiBkZXMgZ3VlcnJpZXJzXHJcbiAqL1xyXG5ybC5xdWVzdGlvbignXFxuRW50cmVyIGxlIG5vbSBkZSB2b3RyZSBndWVycmllciA6ICcsIChhbnN3ZXIpID0+IHtcclxuXHJcbiAgICBsZXQgZ3VlcnJpZXIxOiBQZXJzb25uYWdlID0gbmV3IFBlcnNvbm5hZ2UoYW5zd2VyKTtcclxuICAgIGd1ZXJyaWVyMS5hdGsgPSAyNTtcclxuICAgIGd1ZXJyaWVyMS5wdiA9IDEwMDtcclxuXHJcblxyXG4gICAgbGV0IGd1ZXJyaWVyMjogUGVyc29ubmFnZSA9IG5ldyBQZXJzb25uYWdlKCdIZXJjdWxlJyk7XHJcbiAgICBjb25zb2xlLmxvZyhgXFxyXFxuTGUgZ3VlcnJpZXIgJHtndWVycmllcjIubm9tfSB2b3VzIHByb3ZvcXVlIGVuIER1ZWwgIWApO1xyXG4gICAgZ3VlcnJpZXIyLmF0ayA9IDQzO1xyXG4gICAgZ3VlcnJpZXIyLnB2ID0gMTAwO1xyXG5cclxuXHJcbiAgICBjb21iYXQuVHVybkJ5VHVybihndWVycmllcjEsIGd1ZXJyaWVyMik7IFxyXG5cclxuICAgIHJsLmNsb3NlKCk7XHJcbn0pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7IiwiaW1wb3J0IHsgQ29tYmF0IH0gZnJvbSAnLi4vUGFydGllL0NvbWJhdCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBlcnNvbm5hZ2UgZXh0ZW5kcyBDb21iYXQge1xyXG5cclxuICAgIHByaXZhdGUgX25vbTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfYXRrOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kZWY6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3B2OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9tOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX25vbSA9IG5vbTtcclxuICAgICAgICB0aGlzLl9hdGsgPSAwO1xyXG4gICAgICAgIHRoaXMuX2RlZiA9IDA7XHJcbiAgICAgICAgdGhpcy5fcHYgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbm9tKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG5vbShub206IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25vbSA9IG5vbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGF0aygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdGs7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBhdGsoYXRrOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9hdGsgPSBhdGs7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkZWYoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZGVmKGRlZjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGVmID0gZGVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcHYoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBwdihwdjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHYgPSBwdjtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgUGVyc29ubmFnZSB9IGZyb20gJy4uL1BlcnNvbm5hZ2VzL1BlcnNvbm5hZ2UnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tYmF0IHtcclxuXHJcblxyXG4gICAgcHVibGljIGF0dGFjayhhdGs6IG51bWJlciwgdGFyZ2V0OiBQZXJzb25uYWdlKSB7XHJcbiAgICAgICAgaWYgKCh0YXJnZXQucHYgLSBhdGspID4gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXQucHYgPSB0YXJnZXQucHYgLSBhdGs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXQucHYgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFR1cm5CeVR1cm4ocGxheWVyMTogUGVyc29ubmFnZSwgcGxheWVyMjogUGVyc29ubmFnZSkge1xyXG5cclxuICAgICAgICB3aGlsZSAocGxheWVyMS5wdiA+IDAgfHwgcGxheWVyMi5wdiA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXIyLnB2ID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBcXG4ke3BsYXllcjEubm9tfSBlc3QgbGUgdmFpbnF1ZXVyICFgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dGFjayhwbGF5ZXIyLmF0aywgcGxheWVyMSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBcXG4ke3BsYXllcjIubm9tfSBhdHRhcXVlICR7cGxheWVyMS5ub219YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQViByZXN0YW50IGRlICR7cGxheWVyMS5ub219IDogJHtwbGF5ZXIxLnB2fWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBsYXllcjEucHYgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFxcbiR7cGxheWVyMi5ub219IGVzdCBsZSB2YWlucXVldXIgIWApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrKHBsYXllcjEuYXRrLCBwbGF5ZXIyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFxcbiR7cGxheWVyMS5ub219IGF0dGFxdWUgJHtwbGF5ZXIyLm5vbX1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFBWIHJlc3RhbnQgZGUgJHtwbGF5ZXIyLm5vbX0gOiAke3BsYXllcjIucHZ9YCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
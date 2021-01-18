webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/db/Firebase */ "./lib/db/Firebase.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_15__);










var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-sapp-userdash\\pages\\signup.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Signup = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Signup, _Component);

  var _super = _createSuper(Signup);

  function Signup(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Signup);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUserFirstNameChange", function (value) {
      _this.setState({
        userFirestName: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUserLastNameChange", function (value) {
      _this.setState({
        userLastName: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUsernameChange", function (value) {
      _this.setState({
        userName: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUserpassChange", function (value) {
      _this.setState({
        userPass: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSignupSubmit", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(event) {
        var signupForm, auth;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.get('shopOrigin'));
                signupForm = {
                  first_name: _this.state.userFirestName,
                  last_name: _this.state.userLastName,
                  email: _this.state.userName,
                  url: js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.get('shopOrigin')
                };
                _context2.next = 4;
                return _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth();

              case 4:
                auth = _context2.sent;
                auth.createUserWithEmailAndPassword(_this.state.userName, _this.state.userPass).then( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid;

                        case 2:
                          signupForm.uid = _context.sent;
                          js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.set('nsns', signupForm.uid);
                          next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/dashboard');

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })), function (error) {
                  console.log(error);
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      isuserLoggedin: false,
      userFirestName: '',
      userLastName: '',
      userName: '',
      userPass: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Page"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Layout"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Card"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Form"], {
              name: "signup-form",
              onSubmit: this.handleSignupSubmit,
              method: "post",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["FormLayout"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
                  source: react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosContact"],
                  backdrop: false
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["DisplayText"], {
                  size: "medium",
                  children: "Sign Up"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["FormLayout"].Group, {
                  condensed: true,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
                    name: "userFirestName",
                    type: "text",
                    placeholder: "First Name *",
                    value: this.state.userFirestName,
                    onChange: this.handleUserFirstNameChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
                    name: "userLastName",
                    type: "text",
                    placeholder: "Last Name ",
                    value: this.state.userLastName,
                    onChange: this.handleUserLastNameChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
                  name: "userName",
                  type: "email",
                  placeholder: "Email Address *",
                  value: this.state.userName,
                  onChange: this.handleUsernameChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
                  name: "userPass",
                  type: "password",
                  placeholder: "Password *",
                  value: this.state.userPass,
                  onChange: this.handleUserpassChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Button"], {
                  name: "signup",
                  size: "medium",
                  primary: true,
                  submit: "true",
                  children: "SIGN UP"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Link"], {
                  url: "/signin",
                  children: "have an account? Sign In"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this);
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInVzZXJGaXJlc3ROYW1lIiwidXNlckxhc3ROYW1lIiwidXNlck5hbWUiLCJ1c2VyUGFzcyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIkNvb2tpZXMiLCJnZXQiLCJzaWdudXBGb3JtIiwiZmlyc3RfbmFtZSIsInN0YXRlIiwibGFzdF9uYW1lIiwiZW1haWwiLCJ1cmwiLCJmaXJlYmFzZSIsImF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJzZXQiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJpc3VzZXJMb2dnZWRpbiIsImhhbmRsZVNpZ251cFN1Ym1pdCIsIklvSW9zQ29udGFjdCIsImhhbmRsZVVzZXJGaXJzdE5hbWVDaGFuZ2UiLCJoYW5kbGVVc2VyTGFzdE5hbWVDaGFuZ2UiLCJoYW5kbGVVc2VybmFtZUNoYW5nZSIsImhhbmRsZVVzZXJwYXNzQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTTs7Ozs7QUFDakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxvT0FXUyxVQUFDQyxLQUFELEVBQVU7QUFBQyxZQUFLQyxRQUFMLENBQWM7QUFBQ0Msc0JBQWMsRUFBQ0Y7QUFBaEIsT0FBZDtBQUFzQyxLQVgxRDs7QUFBQSxtT0FZUSxVQUFDQSxLQUFELEVBQVc7QUFBQyxZQUFLQyxRQUFMLENBQWM7QUFBQ0Usb0JBQVksRUFBQ0g7QUFBZCxPQUFkO0FBQW9DLEtBWnhEOztBQUFBLCtOQWFJLFVBQUNBLEtBQUQsRUFBVztB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c3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmQ5N2UzMzI0NjlmMDc2Zjc3ZWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIEZvcm1MYXlvdXQsIFBhZ2UsIExheW91dCwgQ2FyZCwgVGV4dEZpZWxkLCBCdXR0b24sIEljb24sIERpc3BsYXlUZXh0LCBMaW5rIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7SW9Jb3NDb250YWN0IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCBmaXJlYmFzZSAgZnJvbSAnLi4vbGliL2RiL0ZpcmViYXNlJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ251cCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKSAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXN1c2VyTG9nZ2VkaW46ZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXJGaXJlc3ROYW1lOicnLFxyXG4gICAgICAgICAgICB1c2VyTGFzdE5hbWU6JycsXHJcbiAgICAgICAgICAgIHVzZXJOYW1lOicnLFxyXG4gICAgICAgICAgICB1c2VyUGFzczonJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZVVzZXJGaXJzdE5hbWVDaGFuZ2UgPSAodmFsdWUpID0+e3RoaXMuc2V0U3RhdGUoe3VzZXJGaXJlc3ROYW1lOnZhbHVlfSl9XHJcbiAgICBoYW5kbGVVc2VyTGFzdE5hbWVDaGFuZ2UgPSAodmFsdWUpID0+IHt0aGlzLnNldFN0YXRlKHt1c2VyTGFzdE5hbWU6dmFsdWV9KX1cclxuICAgIGhhbmRsZVVzZXJuYW1lQ2hhbmdlID0gKHZhbHVlKSA9PiB7dGhpcy5zZXRTdGF0ZSh7dXNlck5hbWU6dmFsdWV9KX1cclxuICAgIGhhbmRsZVVzZXJwYXNzQ2hhbmdlID0gKHZhbHVlKSA9PiB7dGhpcy5zZXRTdGF0ZSh7dXNlclBhc3M6dmFsdWV9KX1cclxuXHJcblxyXG4gICAgaGFuZGxlU2lnbnVwU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coQ29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKSlcclxuICAgICAgICBjb25zdCBzaWdudXBGb3JtID0ge1xyXG4gICAgICAgICAgICBmaXJzdF9uYW1lIDogdGhpcy5zdGF0ZS51c2VyRmlyZXN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdF9uYW1lIDogdGhpcy5zdGF0ZS51c2VyTGFzdE5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsIDogdGhpcy5zdGF0ZS51c2VyTmFtZSxcclxuICAgICAgICAgICAgdXJsOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXV0aCA9IGF3YWl0IGZpcmViYXNlLmF1dGgoKVxyXG4gICAgICAgIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKHRoaXMuc3RhdGUudXNlck5hbWUsdGhpcy5zdGF0ZS51c2VyUGFzcykudGhlbiggYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2lnbnVwRm9ybS51aWQgPSBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkO1xyXG4gICAgICAgICAgICBDb29raWVzLnNldCgnbnNucycsc2lnbnVwRm9ybS51aWQpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXHJcbiAgICAgICAgfSxmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBuYW1lPVwic2lnbnVwLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTaWdudXBTdWJtaXR9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHNvdXJjZT17SW9Jb3NDb250YWN0fSBiYWNrZHJvcD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJtZWRpdW1cIj5TaWduIFVwPC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dC5Hcm91cCBjb25kZW5zZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyRmlyZXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWUgKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VyRmlyZXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJGaXJzdE5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWUgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJMYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJMYXN0TmFtZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3MgKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VybmFtZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJQYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCAqXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlclBhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJwYXNzQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwic2lnbnVwXCIgc2l6ZT1cIm1lZGl1bVwiIHByaW1hcnk9e3RydWV9IHN1Ym1pdD1cInRydWVcIj5TSUdOIFVQPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdXJsPVwiL3NpZ25pblwiID5oYXZlIGFuIGFjY291bnQ/IFNpZ24gSW48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD4gICAgXHJcbiAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
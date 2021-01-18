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
                          signupForm.uid = _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth().currentUser.uid;
                          js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.set('nsns', signupForm.uid);
                          next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/dashboard');

                        case 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInVzZXJGaXJlc3ROYW1lIiwidXNlckxhc3ROYW1lIiwidXNlck5hbWUiLCJ1c2VyUGFzcyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIkNvb2tpZXMiLCJnZXQiLCJzaWdudXBGb3JtIiwiZmlyc3RfbmFtZSIsInN0YXRlIiwibGFzdF9uYW1lIiwiZW1haWwiLCJ1cmwiLCJmaXJlYmFzZSIsImF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwidWlkIiwiY3VycmVudFVzZXIiLCJzZXQiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJpc3VzZXJMb2dnZWRpbiIsImhhbmRsZVNpZ251cFN1Ym1pdCIsIklvSW9zQ29udGFjdCIsImhhbmRsZVVzZXJGaXJzdE5hbWVDaGFuZ2UiLCJoYW5kbGVVc2VyTGFzdE5hbWVDaGFuZ2UiLCJoYW5kbGVVc2VybmFtZUNoYW5nZSIsImhhbmRsZVVzZXJwYXNzQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTTs7Ozs7QUFDakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxvT0FXUyxVQUFDQyxLQUFELEVBQVU7QUFBQyxZQUFLQyxRQUFMLENBQWM7QUFBQ0Msc0JBQWMsRUFBQ0Y7QUFBaEIsT0FBZDtBQUFzQyxLQVgxRDs7QUFBQSxtT0FZUSxVQUFDQSxLQUFELEVBQVc7QUFBQyxZQUFLQyxRQUFMLENBQWM7QUFBQ0Usb0JBQVksRUFBQ0g7QUFBZCxPQUFkO0FBQW9DLEtBWnhEOztBQUFBLCtOQWFJLFVBQUNBLEtBQUQsRUFBVztB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cy9zaWdudXAuYWY5NjcxNmFjY2E4NTExYjEyMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgRm9ybUxheW91dCwgUGFnZSwgTGF5b3V0LCBDYXJkLCBUZXh0RmllbGQsIEJ1dHRvbiwgSWNvbiwgRGlzcGxheVRleHQsIExpbmsgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHtJb0lvc0NvbnRhY3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IGZpcmViYXNlICBmcm9tICcuLi9saWIvZGIvRmlyZWJhc2UnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbnVwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc3VzZXJMb2dnZWRpbjpmYWxzZSxcclxuICAgICAgICAgICAgdXNlckZpcmVzdE5hbWU6JycsXHJcbiAgICAgICAgICAgIHVzZXJMYXN0TmFtZTonJyxcclxuICAgICAgICAgICAgdXNlck5hbWU6JycsXHJcbiAgICAgICAgICAgIHVzZXJQYXNzOicnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlVXNlckZpcnN0TmFtZUNoYW5nZSA9ICh2YWx1ZSkgPT57dGhpcy5zZXRTdGF0ZSh7dXNlckZpcmVzdE5hbWU6dmFsdWV9KX1cclxuICAgIGhhbmRsZVVzZXJMYXN0TmFtZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge3RoaXMuc2V0U3RhdGUoe3VzZXJMYXN0TmFtZTp2YWx1ZX0pfVxyXG4gICAgaGFuZGxlVXNlcm5hbWVDaGFuZ2UgPSAodmFsdWUpID0+IHt0aGlzLnNldFN0YXRlKHt1c2VyTmFtZTp2YWx1ZX0pfVxyXG4gICAgaGFuZGxlVXNlcnBhc3NDaGFuZ2UgPSAodmFsdWUpID0+IHt0aGlzLnNldFN0YXRlKHt1c2VyUGFzczp2YWx1ZX0pfVxyXG5cclxuXHJcbiAgICBoYW5kbGVTaWdudXBTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhDb29raWVzLmdldCgnc2hvcE9yaWdpbicpKVxyXG4gICAgICAgIGNvbnN0IHNpZ251cEZvcm0gPSB7XHJcbiAgICAgICAgICAgIGZpcnN0X25hbWUgOiB0aGlzLnN0YXRlLnVzZXJGaXJlc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0X25hbWUgOiB0aGlzLnN0YXRlLnVzZXJMYXN0TmFtZSxcclxuICAgICAgICAgICAgZW1haWwgOiB0aGlzLnN0YXRlLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICB1cmw6Q29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhdXRoID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpXHJcbiAgICAgICAgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQodGhpcy5zdGF0ZS51c2VyTmFtZSx0aGlzLnN0YXRlLnVzZXJQYXNzKS50aGVuKCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzaWdudXBGb3JtLnVpZCA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQ7XHJcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KCduc25zJyxzaWdudXBGb3JtLnVpZCk7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcclxuICAgICAgICB9LGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYWdlPlxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJzaWdudXAtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVNpZ251cFN1Ym1pdH0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gc291cmNlPXtJb0lvc0NvbnRhY3R9IGJhY2tkcm9wPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cIm1lZGl1bVwiPlNpZ24gVXA8L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0Lkdyb3VwIGNvbmRlbnNlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJGaXJlc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZSAqXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJGaXJlc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlckZpcnN0TmFtZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJMYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlckxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlckxhc3ROYW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dC5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzcyAqXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJuYW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlclBhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkICpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VyUGFzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcnBhc3NDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG5hbWU9XCJzaWdudXBcIiBzaXplPVwibWVkaXVtXCIgcHJpbWFyeT17dHJ1ZX0gc3VibWl0PVwidHJ1ZVwiPlNJR04gVVA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB1cmw9XCIvc2lnbmluXCIgPmhhdmUgYW4gYWNjb3VudD8gU2lnbiBJbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PiAgICBcclxuICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
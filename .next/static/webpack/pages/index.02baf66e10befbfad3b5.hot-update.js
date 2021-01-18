webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SettingForm.js":
/*!***********************************!*\
  !*** ./components/SettingForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-sapp-userdash\\components\\SettingForm.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var SettingForm = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SettingForm, _React$Component);

  var _super = _createSuper(SettingForm);

  function SettingForm(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SettingForm);

    _this = _super.call(this, props);
    _this.state = {
      connected: js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get('shopOrigin') ? true : false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SettingForm, [{
    key: "render",
    value: function render() {
      console.log(js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get('shopOrigin'));
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["FormLayout"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Layout"].AnnotatedSection, {
            title: "Connected User",
            description: "Connect to your shopify ac with custom Dashboard",
            children: this.accountConnectionMarkup()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this);
    }
  }, {
    key: "toggleConnection",
    value: function toggleConnection() {
      this.setState(function (_ref) {
        var connected = _ref.connected;
        return {
          connected: !connected
        };
      });
    }
  }, {
    key: "accountConnectionMarkup",
    value: function accountConnectionMarkup() {
      return this.state.connected ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["AccountConnection"], {
        avatarUrl: "#",
        accountName: "Carbojet",
        details: "thisthat.shopify.com",
        action: {
          content: 'Disconnected',
          onAction: this.toggleConnection.bind(this)
        },
        connected: this.state.connected
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["AccountConnection"], {
        title: "Connct To Shop",
        action: {
          content: 'Connect',
          onAction: this.toggleConnection.bind(this)
        },
        details: "No Account Connected",
        connected: this.state.connected,
        termsOfService: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["By Clicking Connect, You are agree to accept our terms and condition's ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Link"], {
            url: "#",
            children: "Terms And Conditions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 95
          }, this), " Its Completly Free to Use"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this);
    }
  }]);

  return SettingForm;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZXR0aW5nRm9ybS5qcyJdLCJuYW1lcyI6WyJTZXR0aW5nRm9ybSIsInByb3BzIiwic3RhdGUiLCJjb25uZWN0ZWQiLCJDb29raWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImFjY291bnRDb25uZWN0aW9uTWFya3VwIiwic2V0U3RhdGUiLCJjb250ZW50Iiwib25BY3Rpb24iLCJ0b2dnbGVDb25uZWN0aW9uIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7O0lBQ3FCQSxXOzs7OztBQUNqQix1QkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGVBQVMsRUFBQ0MsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosSUFBNEIsSUFBNUIsR0FBbUM7QUFEcEMsS0FBYjtBQUZjO0FBS2pCOzs7OzZCQUNPO0FBQ0pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxnREFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixDQUFaO0FBQ0EsMEJBQ1EscUVBQUMscURBQUQ7QUFBQSwrQkFDSSxxRUFBQywyREFBRDtBQUFBLGlDQUNJLHFFQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDSSxpQkFBSyxFQUFDLGdCQURWO0FBRUksdUJBQVcsRUFBQyxrREFGaEI7QUFBQSxzQkFJQyxLQUFLRyx1QkFBTDtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURSO0FBWUg7Ozt1Q0FDaUI7QUFDZCxXQUFLQyxRQUFMLENBQWU7QUFBQSxZQUFFTixTQUFGLFFBQUVBLFNBQUY7QUFBQSxlQUFrQjtBQUFDQSxtQkFBUyxFQUFDLENBQUNBO0FBQVosU0FBbEI7QUFBQSxPQUFmO0FBQ0g7Ozs4Q0FFd0I7QUFDckIsYUFBTyxLQUFLRCxLQUFMLENBQVdDLFNBQVgsZ0JBRUgscUVBQUMsa0VBQUQ7QUFDSSxpQkFBUyxFQUFDLEdBRGQ7QUFFSSxtQkFBVyxFQUFDLFVBRmhCO0FBR0ksZUFBTyxFQUFDLHNCQUhaO0FBSUksY0FBTSxFQUFFO0FBQUNPLGlCQUFPLEVBQUUsY0FBVjtBQUEwQkMsa0JBQVEsRUFBRSxLQUFLQyxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsSUFBM0I7QUFBcEMsU0FKWjtBQUtJLGlCQUFTLEVBQUUsS0FBS1gsS0FBTCxDQUFXQztBQUwxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkcsZ0JBV0gscUVBQUMsa0VBQUQ7QUFDSSxhQUFLLEVBQUMsZ0JBRFY7QUFFSSxjQUFNLEVBQUU7QUFBQ08saUJBQU8sRUFBRSxTQUFWO0FBQW9CQyxrQkFBUSxFQUFFLEtBQUtDLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQjtBQUE5QixTQUZaO0FBR0ksZUFBTyxFQUFDLHNCQUhaO0FBSUksaUJBQVMsRUFBRSxLQUFLWCxLQUFMLENBQVdDLFNBSjFCO0FBS0ksc0JBQWMsZUFDVjtBQUFBLDZHQUEwRSxxRUFBQyxxREFBRDtBQUFNLGVBQUcsRUFBQyxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEo7QUFxQkg7Ozs7RUFoRG9DVyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAyYmFmNjZlMTBiZWZiZmFkM2I1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0LFxyXG4gICAgQWNjb3VudENvbm5lY3Rpb24sXHJcbiAgICBMaW5rLFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1MYXlvdXQsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb25uZWN0ZWQ6Q29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhDb29raWVzLmdldCgnc2hvcE9yaWdpbicpKVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29ubmVjdGVkIFVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJDb25uZWN0IHRvIHlvdXIgc2hvcGlmeSBhYyB3aXRoIGN1c3RvbSBEYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmFjY291bnRDb25uZWN0aW9uTWFya3VwKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVDb25uZWN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSggKHtjb25uZWN0ZWR9KSA9PiAoe2Nvbm5lY3RlZDohY29ubmVjdGVkfSkgKTtcclxuICAgIH1cclxuXHJcbiAgICBhY2NvdW50Q29ubmVjdGlvbk1hcmt1cCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmNvbm5lY3RlZFxyXG4gICAgICAgID8oXHJcbiAgICAgICAgICAgIDxBY2NvdW50Q29ubmVjdGlvblxyXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT1cIkNhcmJvamV0XCJcclxuICAgICAgICAgICAgICAgIGRldGFpbHM9XCJ0aGlzdGhhdC5zaG9waWZ5LmNvbVwiXHJcbiAgICAgICAgICAgICAgICBhY3Rpb249e3tjb250ZW50OiAnRGlzY29ubmVjdGVkJywgb25BY3Rpb246IHRoaXMudG9nZ2xlQ29ubmVjdGlvbi5iaW5kKHRoaXMpfX1cclxuICAgICAgICAgICAgICAgIGNvbm5lY3RlZD17dGhpcy5zdGF0ZS5jb25uZWN0ZWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIDooXHJcbiAgICAgICAgICAgIDxBY2NvdW50Q29ubmVjdGlvblxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDb25uY3QgVG8gU2hvcFwiXHJcbiAgICAgICAgICAgICAgICBhY3Rpb249e3tjb250ZW50OiAnQ29ubmVjdCcsb25BY3Rpb246IHRoaXMudG9nZ2xlQ29ubmVjdGlvbi5iaW5kKHRoaXMpfX1cclxuICAgICAgICAgICAgICAgIGRldGFpbHM9XCJObyBBY2NvdW50IENvbm5lY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQ9e3RoaXMuc3RhdGUuY29ubmVjdGVkfVxyXG4gICAgICAgICAgICAgICAgdGVybXNPZlNlcnZpY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxwPkJ5IENsaWNraW5nIENvbm5lY3QsIFlvdSBhcmUgYWdyZWUgdG8gYWNjZXB0IG91ciB0ZXJtcyBhbmQgY29uZGl0aW9uJ3MgPExpbmsgdXJsPScjJz5UZXJtcyBBbmQgQ29uZGl0aW9uczwvTGluaz4gSXRzIENvbXBsZXRseSBGcmVlIHRvIFVzZTwvcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
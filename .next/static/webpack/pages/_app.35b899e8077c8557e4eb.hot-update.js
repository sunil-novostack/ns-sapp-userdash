webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrappedApp; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json");
var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json", 1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shopify/polaris/dist/styles.css */ "./node_modules/@shopify/polaris/dist/styles.css");
/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _resource_css_style_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../resource/css/style.css */ "./resource/css/style.css");
/* harmony import */ var _resource_css_style_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_resource_css_style_css__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-sapp-userdash\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var WrappedApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WrappedApp, _App);

  var _super = _createSuper(WrappedApp);

  function WrappedApp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WrappedApp);

    _this = _super.call(this, props);
    _this.state = {
      isuserLoggedin: false,
      config: {
        apiKey: "ec7e1b0e4f4879ac841ef8579cd77b9d",
        shopOrigin: js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('shopOrigin'),
        forceRedirect: true
      }
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(WrappedApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.isuserLoggedin) {//Router.push('/')
      } else {//Router.push('/signup')
        }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var config = {
        apiKey: "ec7e1b0e4f4879ac841ef8579cd77b9d",
        shopOrigin: js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('shopOrigin'),
        forceRedirect: false
      };
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
            children: "FB DropShipping"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
            charSet: "utf-8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this), this.state.config.shopOrigin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
          config: this.state.config,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["AppProvider"], {
            i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_12__,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["AppProvider"], {
          i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_12__,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, this);
    }
  }]);

  return WrappedApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJXcmFwcGVkQXBwIiwicHJvcHMiLCJzdGF0ZSIsImlzdXNlckxvZ2dlZGluIiwiY29uZmlnIiwiYXBpS2V5IiwiQVBJX0tFWSIsInNob3BPcmlnaW4iLCJDb29raWVzIiwiZ2V0IiwiZm9yY2VSZWRpcmVjdCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImVuVHJhbnNsYXRpb25zIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxVOzs7OztBQUNuQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNWQyxvQkFBYyxFQUFDLEtBREw7QUFFVkMsWUFBTSxFQUFFO0FBQ1BDLGNBQU0sRUFBRUMsa0NBREQ7QUFFUEMsa0JBQVUsRUFBRUMsaURBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FGTDtBQUdQQyxxQkFBYSxFQUFFO0FBSFI7QUFGRSxLQUFiO0FBRmlCO0FBVWxCOzs7O3dDQUNrQjtBQUNqQixVQUFHLEtBQUtSLEtBQUwsQ0FBV0MsY0FBZCxFQUE2QixDQUMzQjtBQUNELE9BRkQsTUFFSyxDQUNIO0FBQ0Q7QUFDRjs7OzZCQUNRO0FBQUEsd0JBQ3dCLEtBQUtGLEtBRDdCO0FBQUEsVUFDQVUsU0FEQSxlQUNBQSxTQURBO0FBQUEsVUFDV0MsU0FEWCxlQUNXQSxTQURYO0FBRVAsVUFBTVIsTUFBTSxHQUFJO0FBQUVDLGNBQU0sRUFBRUMsa0NBQVY7QUFBbUJDLGtCQUFVLEVBQUVDLGlEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQS9CO0FBQTBEQyxxQkFBYSxFQUFFO0FBQXpFLE9BQWhCO0FBQ0EsMEJBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQU0sbUJBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBTUssS0FBS1IsS0FBTCxDQUFXRSxNQUFYLENBQWtCRyxVQUFsQixnQkFDRCxxRUFBQyxtRUFBRDtBQUFVLGdCQUFNLEVBQUUsS0FBS0wsS0FBTCxDQUFXRSxNQUE3QjtBQUFBLGlDQUNFLHFFQUFDLDZEQUFEO0FBQWEsZ0JBQUksRUFBRVMsOERBQW5CO0FBQUEsbUNBQ0kscUVBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREMsZ0JBT0QscUVBQUMsNkRBQUQ7QUFBYSxjQUFJLEVBQUVDLDhEQUFuQjtBQUFBLGlDQUNJLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFvQkQ7Ozs7RUExQ3FDRSwrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM1Yjg5OWU4MDc3Yzg1NTdlNGViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHtBcHBQcm92aWRlcn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcbmltcG9ydCBlblRyYW5zbGF0aW9ucyBmcm9tICdAc2hvcGlmeS9wb2xhcmlzL2xvY2FsZXMvZW4uanNvbic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCAnQHNob3BpZnkvcG9sYXJpcy9kaXN0L3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4uL3Jlc291cmNlL2Nzcy9zdHlsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3JhcHBlZEFwcCBleHRlbmRzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKSAgXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgaXN1c2VyTG9nZ2VkaW46ZmFsc2UsXHJcbiAgICAgICBjb25maWc6IHtcclxuICAgICAgICBhcGlLZXk6IEFQSV9LRVksIFxyXG4gICAgICAgIHNob3BPcmlnaW46IENvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJyksXHJcbiAgICAgICAgZm9yY2VSZWRpcmVjdDogdHJ1ZVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgaWYodGhpcy5zdGF0ZS5pc3VzZXJMb2dnZWRpbil7XHJcbiAgICAgIC8vUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIC8vUm91dGVyLnB1c2goJy9zaWdudXAnKVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7Q29tcG9uZW50LCBwYWdlUHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGNvbmZpZyAgPSB7IGFwaUtleTogQVBJX0tFWSwgc2hvcE9yaWdpbjogQ29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKSwgZm9yY2VSZWRpcmVjdDogZmFsc2UgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkZCIERyb3BTaGlwcGluZzwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICBcclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbmZpZy5zaG9wT3JpZ2luXHJcbiAgICAgICAgPyA8UHJvdmlkZXIgY29uZmlnPXt0aGlzLnN0YXRlLmNvbmZpZ30+XHJcbiAgICAgICAgICAgIDxBcHBQcm92aWRlciBpMThuPXtlblRyYW5zbGF0aW9uc30+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvQXBwUHJvdmlkZXI+XHJcbiAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgIDxBcHBQcm92aWRlciBpMThuPXtlblRyYW5zbGF0aW9uc30+XHJcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9BcHBQcm92aWRlcj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
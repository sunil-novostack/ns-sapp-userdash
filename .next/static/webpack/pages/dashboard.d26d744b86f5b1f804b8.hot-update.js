webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/CrawlUrl.js":
/*!********************************!*\
  !*** ./components/CrawlUrl.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrawlUrl; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);









var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-sapp-userdash\\components\\CrawlUrl.js",
    _s = $RefreshSig$();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var ExMediaCard = /*#__PURE__*/function (_MediaCard) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ExMediaCard, _MediaCard);

  var _super = _createSuper(ExMediaCard);

  function ExMediaCard() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ExMediaCard);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ExMediaCard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["MediaCard"], {
        price: '<div>123</div>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this);
    }
  }]);

  return ExMediaCard;
}(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["MediaCard"]);

function CrawlUrl() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      searchUrl = _useState[0],
      setSearchUrl = _useState[1];

  var handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (value) {
    return setSearchUrl(value);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(['ebay']),
      selectedEcom = _useState2[0],
      setSelectedEcom = _useState2[1];

  var handleChangeEcom = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (value) {
    return setSelectedEcom(value);
  }, []);
  var handleFecthProductSubmit = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])( /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_event) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_11___default()({
                url: '/detail',
                method: 'post',
                baseURL: 'http://204.44.125.73:8000/data',
                params: {
                  url: searchUrl,
                  ecom: selectedEcom
                }
              });

            case 2:
              response = _context.sent;
              console.log(response);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Layout"].AnnotatedSection, {
      title: "Extract Product",
      description: "With the help of scrap url you can get product from here to your shop",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        sectioned: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Form"], {
          name: "product-fetch-form",
          onSubmit: handleFecthProductSubmit,
          method: "post",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["FormLayout"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["ChoiceList"], {
              title: "ECOM",
              choices: [{
                label: 'Ebay',
                value: 'ebay'
              }, {
                label: 'Sams',
                value: 'sams'
              }, {
                label: 'Boscovs',
                value: 'boscovs'
              }, {
                label: 'Home',
                value: 'home'
              }, {
                label: 'BedBath',
                value: 'bedbath'
              }, {
                label: 'WalMart',
                value: 'walmart'
              }],
              name: "ecom",
              selected: selectedEcom,
              onChange: handleChangeEcom
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
              label: "Paste URL Here",
              name: "searchUrl",
              type: "text",
              value: searchUrl,
              onChange: handleSearchChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Button"], {
              icon: "",
              primary: true,
              name: "fetchproduct",
              submit: "true",
              children: "Extract"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Layout"], {
      sectioned: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Layout"].Section, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["MediaCard"], {
          title: "This is product title",
          primaryAction: {
            content: 'Import It',
            onAction: function onAction() {}
          },
          description: "This will be default product description if any",
          size: "small",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: 'cover',
              objectPosition: 'center'
            },
            src: "https://burst.shopifycdn.com/photos/smiling-businesswoman-in-office.jpg?width=1850"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 13
  }, this);
}

_s(CrawlUrl, "PmR83iUbdOtFzDnPFhMzZw+sNew=");

_c = CrawlUrl;

var _c;

$RefreshReg$(_c, "CrawlUrl");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJFeE1lZGlhQ2FyZCIsIk1lZGlhQ2FyZCIsIkNyYXdsVXJsIiwidXNlU3RhdGUiLCJzZWFyY2hVcmwiLCJzZXRTZWFyY2hVcmwiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwic2VsZWN0ZWRFY29tIiwic2V0U2VsZWN0ZWRFY29tIiwiaGFuZGxlQ2hhbmdlRWNvbSIsImhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCIsIl9ldmVudCIsImF4aW9zIiwidXJsIiwibWV0aG9kIiwiYmFzZVVSTCIsInBhcmFtcyIsImVjb20iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbCIsImNvbnRlbnQiLCJvbkFjdGlvbiIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFVQTs7SUFDTUEsVzs7Ozs7Ozs7Ozs7Ozs2QkFDTTtBQUNKLDBCQUNJLHFFQUFDLDJEQUFEO0FBQ0ksYUFBSyxFQUFFO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBTUg7Ozs7RUFScUJDLDJEOztBQVVYLFNBQVNDLFFBQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxFQUFELENBRFg7QUFBQSxNQUN2QkMsU0FEdUI7QUFBQSxNQUNiQyxZQURhOztBQUU5QixNQUFNQyxrQkFBa0IsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0gsWUFBWSxDQUFDRyxLQUFELENBQXZCO0FBQUEsR0FBRCxFQUFnQyxFQUFoQyxDQUF0Qzs7QUFGOEIsbUJBR1VMLHNEQUFRLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FIbEI7QUFBQSxNQUd2Qk0sWUFIdUI7QUFBQSxNQUdUQyxlQUhTOztBQUk5QixN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QUFFO0FBRlAsV0FGbkI7QUFNSSxxQkFBVyxFQUFDLGlEQU5oQjtBQU9JLGNBQUksRUFBQyxPQVBUO0FBQUEsaUNBU0k7QUFDSSxlQUFHLEVBQUMsRUFEUjtBQUVJLGlCQUFLLEVBQUMsTUFGVjtBQUdJLGtCQUFNLEVBQUMsTUFIWDtBQUlJLGlCQUFLLEVBQUU7QUFDUEMsdUJBQVMsRUFBRSxPQURKO0FBRVBDLDRCQUFjLEVBQUU7QUFGVCxhQUpYO0FBUUksZUFBRyxFQUFDO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUjtBQThESDs7R0FqRnVCekIsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuZDI2ZDc0NGI4NmY1YjFmODA0YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IHVzZVN0YXRlLHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgSW5wdXQsXHJcbn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0LFxyXG4gICAgQ2FyZCxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtTGF5b3V0LFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgQ2hvaWNlTGlzdCxcclxuICAgIE1lZGlhQ2FyZCxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY2xhc3MgRXhNZWRpYUNhcmQgZXh0ZW5kcyBNZWRpYUNhcmR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxNZWRpYUNhcmRcclxuICAgICAgICAgICAgICAgIHByaWNlPXsnPGRpdj4xMjM8L2Rpdj4nfVxyXG4gICAgICAgICAgICA+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L01lZGlhQ2FyZD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3Jhd2xVcmwoKXtcclxuICAgIGNvbnN0IFtzZWFyY2hVcmwsc2V0U2VhcmNoVXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0U2VhcmNoVXJsKHZhbHVlKSxbXSwpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkRWNvbSwgc2V0U2VsZWN0ZWRFY29tXSA9IHVzZVN0YXRlKFsnZWJheSddKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUVjb20gPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHNldFNlbGVjdGVkRWNvbSh2YWx1ZSksIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQgPSB1c2VDYWxsYmFjayggYXN5bmMgKF9ldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICB1cmwgOiAnL2RldGFpbCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXHJcbiAgICAgICAgICAgIGJhc2VVUkw6J2h0dHA6Ly8yMDQuNDQuMTI1LjczOjgwMDAvZGF0YScsXHJcbiAgICAgICAgICAgIHBhcmFtczp7XHJcbiAgICAgICAgICAgICAgICB1cmw6c2VhcmNoVXJsLFxyXG4gICAgICAgICAgICAgICAgZWNvbTpzZWxlY3RlZEVjb21cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgfSlcclxuICAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkV4dHJhY3QgUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldpdGggdGhlIGhlbHAgb2Ygc2NyYXAgdXJsIHlvdSBjYW4gZ2V0IHByb2R1Y3QgZnJvbSBoZXJlIHRvIHlvdXIgc2hvcFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBuYW1lPVwicHJvZHVjdC1mZXRjaC1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdH0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaG9pY2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVDT01cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0ViYXknLCB2YWx1ZTogJ2ViYXknfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdTYW1zJywgdmFsdWU6ICdzYW1zJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQm9zY292cycsIHZhbHVlOiAnYm9zY292cyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0hvbWUnLCB2YWx1ZTogJ2hvbWUnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCZWRCYXRoJywgdmFsdWU6ICdiZWRiYXRoJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnV2FsTWFydCcsIHZhbHVlOiAnd2FsbWFydCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVjb21cIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZEVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXN0ZSBVUkwgSGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJcIiBwcmltYXJ5PXt0cnVlfSBuYW1lPVwiZmV0Y2hwcm9kdWN0XCIgc3VibWl0PVwidHJ1ZVwiPkV4dHJhY3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuICAgICAgICAgICAgPExheW91dCBzZWN0aW9uZWQ9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPE1lZGlhQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGhpcyBpcyBwcm9kdWN0IHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdJbXBvcnQgSXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgd2lsbCBiZSBkZWZhdWx0IHByb2R1Y3QgZGVzY3JpcHRpb24gaWYgYW55XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2J1cnN0LnNob3BpZnljZG4uY29tL3Bob3Rvcy9zbWlsaW5nLWJ1c2luZXNzd29tYW4taW4tb2ZmaWNlLmpwZz93aWR0aD0xODUwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYUNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
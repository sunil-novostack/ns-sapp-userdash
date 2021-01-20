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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-sapp-userdash\\components\\CrawlUrl.js",
    _s = $RefreshSig$();





function CrawlUrl() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      searchUrl = _useState[0],
      setSearchUrl = _useState[1];

  var handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (value) {
    return setSearchUrl(value);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(['ebay']),
      selectedEcom = _useState2[0],
      setSelectedEcom = _useState2[1];

  var handleChangeEcom = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (value) {
    return setSelectedEcom(value);
  }, []);
  var handleFecthProductSubmit = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])( /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_event) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default()({
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Layout"].AnnotatedSection, {
      title: "Extract Product",
      description: "With the help of scrap url you can get product from here to your shop",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        sectioned: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Form"], {
          name: "product-fetch-form",
          onSubmit: handleFecthProductSubmit,
          method: "post",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["FormLayout"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["ChoiceList"], {
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
              lineNumber: 46,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
              label: "Paste URL Here",
              name: "searchUrl",
              type: "text",
              value: searchUrl,
              onChange: handleSearchChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              icon: "",
              primary: true,
              name: "fetchproduct",
              submit: "true",
              children: "Extract"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
      sectioned: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Layout"].Section, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["MediaCard"], {
          title: "This is product title",
          primaryAction: {
            content: 'Import It',
            onAction: function onAction() {}
          },
          description: "This will be default product description if any",
          size: "small",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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
              lineNumber: 84,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Price : $ 125.00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJDcmF3bFVybCIsInVzZVN0YXRlIiwic2VhcmNoVXJsIiwic2V0U2VhcmNoVXJsIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsInNlbGVjdGVkRWNvbSIsInNldFNlbGVjdGVkRWNvbSIsImhhbmRsZUNoYW5nZUVjb20iLCJoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQiLCJfZXZlbnQiLCJheGlvcyIsInVybCIsIm1ldGhvZCIsImJhc2VVUkwiLCJwYXJhbXMiLCJlY29tIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJjb250ZW50Iiwib25BY3Rpb24iLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQVVBO0FBRWUsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBLE1BQ3ZCQyxTQUR1QjtBQUFBLE1BQ2JDLFlBRGE7O0FBRTlCLE1BQU1DLGtCQUFrQixHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXSCxZQUFZLENBQUNHLEtBQUQsQ0FBdkI7QUFBQSxHQUFELEVBQWdDLEVBQWhDLENBQXRDOztBQUY4QixtQkFHVUwsc0RBQVEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUhsQjtBQUFBLE1BR3ZCTSxZQUh1QjtBQUFBLE1BR1RDLGVBSFM7O0FBSTlCLE1BQU1DLGdCQUFnQixHQUFHSix5REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXRSxlQUFlLENBQUNGLEtBQUQsQ0FBMUI7QUFBQSxHQUFELEVBQW9DLEVBQXBDLENBQXBDO0FBRUEsTUFBTUksd0JBQXdCLEdBQUdMLHlEQUFXO0FBQUEsZ01BQUUsaUJBQU9NLE1BQVA7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RUFBRTtBQUNQQyx5QkFBUyxFQUFFLE9BREo7QUFFUEMsOEJBQWMsRUFBRTtBQUZULGVBSlg7QUFRSSxpQkFBRyxFQUFDO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxlQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUjtBQWlFSDs7R0FwRnVCekIsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuNzdhNDAyYzcyYmFmZTM5MDBmYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IHVzZVN0YXRlLHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgSW5wdXQsXHJcbn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0LFxyXG4gICAgQ2FyZCxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtTGF5b3V0LFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgQ2hvaWNlTGlzdCxcclxuICAgIE1lZGlhQ2FyZCxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyYXdsVXJsKCl7XHJcbiAgICBjb25zdCBbc2VhcmNoVXJsLHNldFNlYXJjaFVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHNldFNlYXJjaFVybCh2YWx1ZSksW10sKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEVjb20sIHNldFNlbGVjdGVkRWNvbV0gPSB1c2VTdGF0ZShbJ2ViYXknXSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VFY29tID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRTZWxlY3RlZEVjb20odmFsdWUpLCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmVjdGhQcm9kdWN0U3VibWl0ID0gdXNlQ2FsbGJhY2soIGFzeW5jIChfZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgdXJsIDogJy9kZXRhaWwnLFxyXG4gICAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgICAgICAgICBiYXNlVVJMOidodHRwOi8vMjA0LjQ0LjEyNS43Mzo4MDAwL2RhdGEnLFxyXG4gICAgICAgICAgICBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgdXJsOnNlYXJjaFVybCxcclxuICAgICAgICAgICAgICAgIGVjb206c2VsZWN0ZWRFY29tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIH0pXHJcbiAgICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJFeHRyYWN0IFByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXaXRoIHRoZSBoZWxwIG9mIHNjcmFwIHVybCB5b3UgY2FuIGdldCBwcm9kdWN0IGZyb20gaGVyZSB0byB5b3VyIHNob3BcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInByb2R1Y3QtZmV0Y2gtZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXR9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hvaWNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFQ09NXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdFYmF5JywgdmFsdWU6ICdlYmF5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU2FtcycsIHZhbHVlOiAnc2Ftcyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0Jvc2NvdnMnLCB2YWx1ZTogJ2Jvc2NvdnMnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdIb21lJywgdmFsdWU6ICdob21lJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQmVkQmF0aCcsIHZhbHVlOiAnYmVkYmF0aCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1dhbE1hcnQnLCB2YWx1ZTogJ3dhbG1hcnQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlY29tXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRFY29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzdGUgVVJMIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hVcmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwiXCIgcHJpbWFyeT17dHJ1ZX0gbmFtZT1cImZldGNocHJvZHVjdFwiIHN1Ym1pdD1cInRydWVcIj5FeHRyYWN0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxMYXlvdXQgc2VjdGlvbmVkPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxNZWRpYUNhcmRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRoaXMgaXMgcHJvZHVjdCB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnSW1wb3J0IEl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGlzIHdpbGwgYmUgZGVmYXVsdCBwcm9kdWN0IGRlc2NyaXB0aW9uIGlmIGFueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2J1cnN0LnNob3BpZnljZG4uY29tL3Bob3Rvcy9zbWlsaW5nLWJ1c2luZXNzd29tYW4taW4tb2ZmaWNlLmpwZz93aWR0aD0xODUwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+UHJpY2UgOiAkIDEyNS4wMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYUNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
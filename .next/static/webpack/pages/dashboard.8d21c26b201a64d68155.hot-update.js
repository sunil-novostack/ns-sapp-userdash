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
      var apiReq;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              apiReq = new axios__WEBPACK_IMPORTED_MODULE_6___default.a();

            case 1:
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Layout"].AnnotatedSection, {
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
            lineNumber: 34,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
            label: "Paste URL Here",
            name: "searchUrl",
            type: "text",
            value: searchUrl,
            onChange: handleSearchChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            icon: "",
            primary: true,
            name: "fetchproduct",
            submit: "true",
            children: "Extract"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJDcmF3bFVybCIsInVzZVN0YXRlIiwic2VhcmNoVXJsIiwic2V0U2VhcmNoVXJsIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsInNlbGVjdGVkRWNvbSIsInNldFNlbGVjdGVkRWNvbSIsImhhbmRsZUNoYW5nZUVjb20iLCJoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQiLCJfZXZlbnQiLCJhcGlSZXEiLCJheGlvcyIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBU0E7QUFDZSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsRUFBRCxDQURYO0FBQUEsTUFDdkJDLFNBRHVCO0FBQUEsTUFDYkMsWUFEYTs7QUFFOUIsTUFBTUMsa0JBQWtCLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdILFlBQVksQ0FBQ0csS0FBRCxDQUF2QjtBQUFBLEdBQUQsRUFBZ0MsRUFBaEMsQ0FBdEM7O0FBRjhCLG1CQUdVTCxzREFBUSxDQUFDLENBQUMsTUFBRCxDQUFELENBSGxCO0FBQUEsTUFHdkJNLFlBSHVCO0FBQUEsTUFHVEMsZUFIUzs7QUFJOUIsTUFBTUMsZ0JBQWdCLEdBQUdKLHlEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdFLGVBQWUsQ0FBQ0YsS0FBRCxDQUExQjtBQUFBLEdBQUQsRUFBb0MsRUFBcEMsQ0FBcEM7QUFFQSxNQUFNSSx3QkFBd0IsR0FBR0wseURBQVc7QUFBQSxnTUFBRSxpQkFBT00sTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcENDLG9CQURvQyxHQUMzQixJQUFJQyw0Q0FBSixFQUQyQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTVDO0FBSUEsc0JBQ1EscUVBQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNJLFNBQUssRUFBQyxpQkFEVjtBQUVJLGVBQVcsRUFBQyx1RUFGaEI7QUFBQSwyQkFJSSxxRUFBQyxxREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFBLDZCQUNJLHFFQUFDLHFEQUFEO0FBQU0sWUFBSSxFQUFDLG9CQUFYO0FBQWdDLGdCQUFRLEVBQUVILHdCQUExQztBQUFvRSxjQUFNLEVBQUMsTUFBM0U7QUFBQSwrQkFDSSxxRUFBQywyREFBRDtBQUFBLGtDQUNJLHFFQUFDLDJEQUFEO0FBQ0EsaUJBQUssRUFBQyxNQUROO0FBRUEsbUJBQU8sRUFBRSxDQUNMO0FBQUNJLG1CQUFLLEVBQUUsTUFBUjtBQUFnQlIsbUJBQUssRUFBRTtBQUF2QixhQURLLEVBRUw7QUFBQ1EsbUJBQUssRUFBRSxNQUFSO0FBQWdCUixtQkFBSyxFQUFFO0FBQXZCLGFBRkssRUFHTDtBQUFDUSxtQkFBSyxFQUFFLFNBQVI7QUFBbUJSLG1CQUFLLEVBQUU7QUFBMUIsYUFISyxFQUlMO0FBQUNRLG1CQUFLLEVBQUUsTUFBUjtBQUFnQlIsbUJBQUssRUFBRTtBQUF2QixhQUpLLEVBS0w7QUFBQ1EsbUJBQUssRUFBRSxTQUFSO0FBQW1CUixtQkFBSyxFQUFFO0FBQTFCLGFBTEssRUFNTDtBQUFDUSxtQkFBSyxFQUFFLFNBQVI7QUFBbUJSLG1CQUFLLEVBQUU7QUFBMUIsYUFOSyxDQUZUO0FBVUEsZ0JBQUksRUFBQyxNQVZMO0FBV0Esb0JBQVEsRUFBRUMsWUFYVjtBQVlBLG9CQUFRLEVBQUVFO0FBWlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQWVJLHFFQUFDLDBEQUFEO0FBQ0ksaUJBQUssRUFBQyxnQkFEVjtBQUVJLGdCQUFJLEVBQUMsV0FGVDtBQUdJLGdCQUFJLEVBQUMsTUFIVDtBQUlJLGlCQUFLLEVBQUVQLFNBSlg7QUFLSSxvQkFBUSxFQUFFRTtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZkosZUFzQkkscUVBQUMsdURBQUQ7QUFBUSxnQkFBSSxFQUFDLEVBQWI7QUFBZ0IsbUJBQU8sRUFBRSxJQUF6QjtBQUErQixnQkFBSSxFQUFDLGNBQXBDO0FBQW1ELGtCQUFNLEVBQUMsTUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBbUNIOztHQTdDdUJKLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjhkMjFjMjZiMjAxYTY0ZDY4MTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSx1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIElucHV0LFxyXG59IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5pbXBvcnQgeyBcclxuICAgIExheW91dCxcclxuICAgIENhcmQsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIEJ1dHRvbixcclxuICAgIENob2ljZUxpc3QsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyYXdsVXJsKCl7XHJcbiAgICBjb25zdCBbc2VhcmNoVXJsLHNldFNlYXJjaFVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHNldFNlYXJjaFVybCh2YWx1ZSksW10sKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEVjb20sIHNldFNlbGVjdGVkRWNvbV0gPSB1c2VTdGF0ZShbJ2ViYXknXSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VFY29tID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRTZWxlY3RlZEVjb20odmFsdWUpLCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmVjdGhQcm9kdWN0U3VibWl0ID0gdXNlQ2FsbGJhY2soIGFzeW5jIChfZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBhcGlSZXEgPSBuZXcgYXhpb3MoKTtcclxuICAgIH0pXHJcbiAgICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJFeHRyYWN0IFByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXaXRoIHRoZSBoZWxwIG9mIHNjcmFwIHVybCB5b3UgY2FuIGdldCBwcm9kdWN0IGZyb20gaGVyZSB0byB5b3VyIHNob3BcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInByb2R1Y3QtZmV0Y2gtZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXR9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hvaWNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFQ09NXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdFYmF5JywgdmFsdWU6ICdlYmF5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU2FtcycsIHZhbHVlOiAnc2Ftcyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0Jvc2NvdnMnLCB2YWx1ZTogJ2Jvc2NvdnMnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdIb21lJywgdmFsdWU6ICdob21lJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQmVkQmF0aCcsIHZhbHVlOiAnYmVkYmF0aCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1dhbE1hcnQnLCB2YWx1ZTogJ3dhbG1hcnQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlY29tXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRFY29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzdGUgVVJMIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hVcmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwiXCIgcHJpbWFyeT17dHJ1ZX0gbmFtZT1cImZldGNocHJvZHVjdFwiIHN1Ym1pdD1cInRydWVcIj5FeHRyYWN0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
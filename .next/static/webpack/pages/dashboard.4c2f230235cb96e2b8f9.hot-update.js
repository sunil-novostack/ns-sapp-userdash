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
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("http://204.44.125.73:8000/data/detail");

            case 2:
              response = _context.sent;

            case 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJDcmF3bFVybCIsInVzZVN0YXRlIiwic2VhcmNoVXJsIiwic2V0U2VhcmNoVXJsIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsInNlbGVjdGVkRWNvbSIsInNldFNlbGVjdGVkRWNvbSIsImhhbmRsZUNoYW5nZUVjb20iLCJoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQiLCJfZXZlbnQiLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBU0E7QUFDZSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsRUFBRCxDQURYO0FBQUEsTUFDdkJDLFNBRHVCO0FBQUEsTUFDYkMsWUFEYTs7QUFFOUIsTUFBTUMsa0JBQWtCLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdILFlBQVksQ0FBQ0csS0FBRCxDQUF2QjtBQUFBLEdBQUQsRUFBZ0MsRUFBaEMsQ0FBdEM7O0FBRjhCLG1CQUdVTCxzREFBUSxDQUFDLENBQUMsTUFBRCxDQUFELENBSGxCO0FBQUEsTUFHdkJNLFlBSHVCO0FBQUEsTUFHVEMsZUFIUzs7QUFJOUIsTUFBTUMsZ0JBQWdCLEdBQUdKLHlEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdFLGVBQWUsQ0FBQ0YsS0FBRCxDQUExQjtBQUFBLEdBQUQsRUFBb0MsRUFBcEMsQ0FBcEM7QUFFQSxNQUFNSSx3QkFBd0IsR0FBR0wseURBQVc7QUFBQSxnTUFBRSxpQkFBT00sTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDekJDLDRDQUFLLENBQUNDLElBQU4seUNBRHlCOztBQUFBO0FBQzFDQyxzQkFEMEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE1QztBQUlBLHNCQUNRLHFFQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDSSxTQUFLLEVBQUMsaUJBRFY7QUFFSSxlQUFXLEVBQUMsdUVBRmhCO0FBQUEsMkJBSUkscUVBQUMscURBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBQSw2QkFDSSxxRUFBQyxxREFBRDtBQUFNLFlBQUksRUFBQyxvQkFBWDtBQUFnQyxnQkFBUSxFQUFFSix3QkFBMUM7QUFBb0UsY0FBTSxFQUFDLE1BQTNFO0FBQUEsK0JBQ0kscUVBQUMsMkRBQUQ7QUFBQSxrQ0FDSSxxRUFBQywyREFBRDtBQUNBLGlCQUFLLEVBQUMsTUFETjtBQUVBLG1CQUFPLEVBQUUsQ0FDTDtBQUFDSyxtQkFBSyxFQUFFLE1BQVI7QUFBZ0JULG1CQUFLLEVBQUU7QUFBdkIsYUFESyxFQUVMO0FBQUNTLG1CQUFLLEVBQUUsTUFBUjtBQUFnQlQsbUJBQUssRUFBRTtBQUF2QixhQUZLLEVBR0w7QUFBQ1MsbUJBQUssRUFBRSxTQUFSO0FBQW1CVCxtQkFBSyxFQUFFO0FBQTFCLGFBSEssRUFJTDtBQUFDUyxtQkFBSyxFQUFFLE1BQVI7QUFBZ0JULG1CQUFLLEVBQUU7QUFBdkIsYUFKSyxFQUtMO0FBQUNTLG1CQUFLLEVBQUUsU0FBUjtBQUFtQlQsbUJBQUssRUFBRTtBQUExQixhQUxLLEVBTUw7QUFBQ1MsbUJBQUssRUFBRSxTQUFSO0FBQW1CVCxtQkFBSyxFQUFFO0FBQTFCLGFBTkssQ0FGVDtBQVVBLGdCQUFJLEVBQUMsTUFWTDtBQVdBLG9CQUFRLEVBQUVDLFlBWFY7QUFZQSxvQkFBUSxFQUFFRTtBQVpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFlSSxxRUFBQywwREFBRDtBQUNJLGlCQUFLLEVBQUMsZ0JBRFY7QUFFSSxnQkFBSSxFQUFDLFdBRlQ7QUFHSSxnQkFBSSxFQUFDLE1BSFQ7QUFJSSxpQkFBSyxFQUFFUCxTQUpYO0FBS0ksb0JBQVEsRUFBRUU7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWZKLGVBc0JJLHFFQUFDLHVEQUFEO0FBQVEsZ0JBQUksRUFBQyxFQUFiO0FBQWdCLG1CQUFPLEVBQUUsSUFBekI7QUFBK0IsZ0JBQUksRUFBQyxjQUFwQztBQUFtRCxrQkFBTSxFQUFDLE1BQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUjtBQW1DSDs7R0E3Q3VCSixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC40YzJmMjMwMjM1Y2I5NmUyYjhmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgdXNlU3RhdGUsdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBJbnB1dCxcclxufSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IHsgXHJcbiAgICBMYXlvdXQsXHJcbiAgICBDYXJkLFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1MYXlvdXQsXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBDaG9pY2VMaXN0LFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmF3bFVybCgpe1xyXG4gICAgY29uc3QgW3NlYXJjaFVybCxzZXRTZWFyY2hVcmxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRTZWFyY2hVcmwodmFsdWUpLFtdLCk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRFY29tLCBzZXRTZWxlY3RlZEVjb21dID0gdXNlU3RhdGUoWydlYmF5J10pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlRWNvbSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0U2VsZWN0ZWRFY29tKHZhbHVlKSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCA9IHVzZUNhbGxiYWNrKCBhc3luYyAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vMjA0LjQ0LjEyNS43Mzo4MDAwL2RhdGEvZGV0YWlsYCk7XHJcbiAgICB9KVxyXG4gICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiRXh0cmFjdCBQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2l0aCB0aGUgaGVscCBvZiBzY3JhcCB1cmwgeW91IGNhbiBnZXQgcHJvZHVjdCBmcm9tIGhlcmUgdG8geW91ciBzaG9wXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJwcm9kdWN0LWZldGNoLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlRmVjdGhQcm9kdWN0U3VibWl0fSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENob2ljZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRUNPTVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9pY2VzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnRWJheScsIHZhbHVlOiAnZWJheSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1NhbXMnLCB2YWx1ZTogJ3NhbXMnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCb3Njb3ZzJywgdmFsdWU6ICdib3Njb3ZzJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnSG9tZScsIHZhbHVlOiAnaG9tZSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0JlZEJhdGgnLCB2YWx1ZTogJ2JlZGJhdGgnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdXYWxNYXJ0JywgdmFsdWU6ICd3YWxtYXJ0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWNvbVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VFY29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3RlIFVSTCBIZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoVXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cIlwiIHByaW1hcnk9e3RydWV9IG5hbWU9XCJmZXRjaHByb2R1Y3RcIiBzdWJtaXQ9XCJ0cnVlXCI+RXh0cmFjdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
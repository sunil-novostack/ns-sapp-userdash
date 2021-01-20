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
              /*
              const response = await axios({
                  url : '/detail',
                  method:'post',
                  baseURL:'http://204.44.125.73:8000/data',
                  params:{
                      url:searchUrl,
                      ecom:selectedEcom
                  }
              });
              */
              console.log(selectedEcom[0]);

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
              lineNumber: 48,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
              label: "Paste URL Here",
              name: "searchUrl",
              type: "text",
              value: searchUrl,
              onChange: handleSearchChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              icon: "",
              primary: true,
              name: "fetchproduct",
              submit: "true",
              children: "Extract"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
              lineNumber: 86,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Price : $ 125.00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJDcmF3bFVybCIsInVzZVN0YXRlIiwic2VhcmNoVXJsIiwic2V0U2VhcmNoVXJsIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsInNlbGVjdGVkRWNvbSIsInNldFNlbGVjdGVkRWNvbSIsImhhbmRsZUNoYW5nZUVjb20iLCJoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQiLCJfZXZlbnQiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJjb250ZW50Iiwib25BY3Rpb24iLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQVVBO0FBRWUsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBLE1BQ3ZCQyxTQUR1QjtBQUFBLE1BQ2JDLFlBRGE7O0FBRTlCLE1BQU1DLGtCQUFrQixHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXSCxZQUFZLENBQUNHLEtBQUQsQ0FBdkI7QUFBQSxHQUFELEVBQWdDLEVBQWhDLENBQXRDOztBQUY4QixtQkFHVUwsc0RBQVEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUhsQjtBQUFBLE1BR3ZCTSxZQUh1QjtBQUFBLE1BR1RDLGVBSFM7O0FBSTlCLE1BQU1DLGdCQUFnQixHQUFHSix5REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXRSxlQUFlLENBQUNGLEtBQUQsQ0FBMUI7QUFBQSxHQUFELEVBQW9DLEVBQXBDLENBQXBDO0FBRUEsTUFBTUksd0JBQXdCLEdBQUdMLHlEQUFXO0FBQUEsZ01BQUUsaUJBQU9NLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFI7QUFpRUg7O0dBdEZ1QmxCLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjZiN2M4MDc3MGJhNzI3NWY4ZGYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSx1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIElucHV0LFxyXG59IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5pbXBvcnQgeyBcclxuICAgIExheW91dCxcclxuICAgIENhcmQsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIEJ1dHRvbixcclxuICAgIENob2ljZUxpc3QsXHJcbiAgICBNZWRpYUNhcmQsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmF3bFVybCgpe1xyXG4gICAgY29uc3QgW3NlYXJjaFVybCxzZXRTZWFyY2hVcmxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRTZWFyY2hVcmwodmFsdWUpLFtdLCk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRFY29tLCBzZXRTZWxlY3RlZEVjb21dID0gdXNlU3RhdGUoWydlYmF5J10pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlRWNvbSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0U2VsZWN0ZWRFY29tKHZhbHVlKSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCA9IHVzZUNhbGxiYWNrKCBhc3luYyAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgdXJsIDogJy9kZXRhaWwnLFxyXG4gICAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgICAgICAgICBiYXNlVVJMOidodHRwOi8vMjA0LjQ0LjEyNS43Mzo4MDAwL2RhdGEnLFxyXG4gICAgICAgICAgICBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgdXJsOnNlYXJjaFVybCxcclxuICAgICAgICAgICAgICAgIGVjb206c2VsZWN0ZWRFY29tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAqL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRWNvbVswXSlcclxuICAgIH0pXHJcbiAgICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJFeHRyYWN0IFByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXaXRoIHRoZSBoZWxwIG9mIHNjcmFwIHVybCB5b3UgY2FuIGdldCBwcm9kdWN0IGZyb20gaGVyZSB0byB5b3VyIHNob3BcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInByb2R1Y3QtZmV0Y2gtZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXR9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hvaWNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFQ09NXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdFYmF5JywgdmFsdWU6ICdlYmF5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU2FtcycsIHZhbHVlOiAnc2Ftcyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0Jvc2NvdnMnLCB2YWx1ZTogJ2Jvc2NvdnMnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdIb21lJywgdmFsdWU6ICdob21lJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQmVkQmF0aCcsIHZhbHVlOiAnYmVkYmF0aCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1dhbE1hcnQnLCB2YWx1ZTogJ3dhbG1hcnQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlY29tXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRFY29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzdGUgVVJMIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hVcmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwiXCIgcHJpbWFyeT17dHJ1ZX0gbmFtZT1cImZldGNocHJvZHVjdFwiIHN1Ym1pdD1cInRydWVcIj5FeHRyYWN0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxMYXlvdXQgc2VjdGlvbmVkPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxNZWRpYUNhcmRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRoaXMgaXMgcHJvZHVjdCB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnSW1wb3J0IEl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGlzIHdpbGwgYmUgZGVmYXVsdCBwcm9kdWN0IGRlc2NyaXB0aW9uIGlmIGFueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2J1cnN0LnNob3BpZnljZG4uY29tL3Bob3Rvcy9zbWlsaW5nLWJ1c2luZXNzd29tYW4taW4tb2ZmaWNlLmpwZz93aWR0aD0xODUwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+UHJpY2UgOiAkIDEyNS4wMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYUNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
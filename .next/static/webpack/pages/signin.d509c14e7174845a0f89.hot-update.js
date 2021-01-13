webpackHotUpdate_N_E("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");


var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-sapp-userdash\\pages\\signin.js",
    _s = $RefreshSig$();




function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isUserLogged = _useState[0],
      setIsUserLogged = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      userName = _useState2[0],
      setUserName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      userPass = _useState3[0],
      setUserPass = _useState3[1];

  var handleSigninSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (_event) {
    console.log(process.env.SHOPIFY_API_KEY);
    console.log(process.env.SHOPIFY_API_SECRET_KEY);
    setIsUserLogged(true);
    setUserName('');
    setUserPass('');
  }, []);
  var handleUsernameChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    return setUserName(value);
  }, []);
  var handleUserpassChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    return setUserPass(value);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        sectioned: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          name: "signin-form",
          onSubmit: handleSigninSubmit,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["FormLayout"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
              source: react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoMdLock"],
              backdrop: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["DisplayText"], {
              size: "medium",
              children: "Sign In"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
              name: "userName",
              type: "email",
              placeholder: "Email Address *",
              onChange: handleUsernameChange,
              value: userName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
              name: "userPass",
              type: "password",
              placeholder: "Password *",
              onChange: handleUserpassChange,
              value: userPass
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              icon: "",
              name: "login",
              size: "medium",
              primary: true,
              children: "SIGN IN"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              url: "/resetpass",
              children: "Forgot Password?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              url: "/signup",
              children: "Don't have an account? Sign Up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 75
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

_s(Login, "OBrtwOl6VA3IRGCui3MzwHZhxCs=");

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwidXNlU3RhdGUiLCJpc1VzZXJMb2dnZWQiLCJzZXRJc1VzZXJMb2dnZWQiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwidXNlclBhc3MiLCJzZXRVc2VyUGFzcyIsImhhbmRsZVNpZ25pblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwiX2V2ZW50IiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJTSE9QSUZZX0FQSV9LRVkiLCJTSE9QSUZZX0FQSV9TRUNSRVRfS0VZIiwiaGFuZGxlVXNlcm5hbWVDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZVVzZXJwYXNzQ2hhbmdlIiwiSW9NZExvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEtBQUQsQ0FEbkI7QUFBQSxNQUNyQkMsWUFEcUI7QUFBQSxNQUNSQyxlQURROztBQUFBLG1CQUVHRixzREFBUSxDQUFDLEVBQUQsQ0FGWDtBQUFBLE1BRXJCRyxRQUZxQjtBQUFBLE1BRVpDLFdBRlk7O0FBQUEsbUJBR0dKLHNEQUFRLENBQUMsRUFBRCxDQUhYO0FBQUEsTUFHckJLLFFBSHFCO0FBQUEsTUFHWkMsV0FIWTs7QUFNNUIsTUFBTUMsa0JBQWtCLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsTUFBRCxFQUFZO0FBQy9DQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBQXhCO0FBQ0FKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsc0JBQXhCO0FBQ0FiLG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FFLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNILEdBTnFDLEVBTW5DLEVBTm1DLENBQXRDO0FBT0EsTUFBTVUsb0JBQW9CLEdBQUdSLHlEQUFXLENBQUMsVUFBQ1MsS0FBRDtBQUFBLFdBQVdiLFdBQVcsQ0FBQ2EsS0FBRCxDQUF0QjtBQUFBLEdBQUQsRUFBK0IsRUFBL0IsQ0FBeEM7QUFDQSxNQUFNQyxvQkFBb0IsR0FBR1YseURBQVcsQ0FBQyxVQUFDUyxLQUFEO0FBQUEsV0FBV1gsV0FBVyxDQUFDVyxLQUFELENBQXRCO0FBQUEsR0FBRCxFQUErQixFQUEvQixDQUF4QztBQUNGLHNCQUNNLHFFQUFDLHFEQUFEO0FBQUEsMkJBQ0kscUVBQUMsdURBQUQ7QUFBQSw2QkFDSSxxRUFBQyxxREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBQSwrQkFDSSxxRUFBQyxxREFBRDtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQXlCLGtCQUFRLEVBQUVWLGtCQUFuQztBQUFBLGlDQUNJLHFFQUFDLDJEQUFEO0FBQUEsb0NBQ0kscUVBQUMscURBQUQ7QUFBTSxvQkFBTSxFQUFFWSx1REFBZDtBQUF3QixzQkFBUSxFQUFFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSSxxRUFBQyw0REFBRDtBQUFhLGtCQUFJLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSSxxRUFBQywwREFBRDtBQUNJLGtCQUFJLEVBQUMsVUFEVDtBQUVJLGtCQUFJLEVBQUMsT0FGVDtBQUdJLHlCQUFXLEVBQUMsaUJBSGhCO0FBSUksc0JBQVEsRUFBRUgsb0JBSmQ7QUFLSSxtQkFBSyxFQUFFYjtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEosZUFVSSxxRUFBQywwREFBRDtBQUNJLGtCQUFJLEVBQUMsVUFEVDtBQUVJLGtCQUFJLEVBQUMsVUFGVDtBQUdJLHlCQUFXLEVBQUMsWUFIaEI7QUFJSSxzQkFBUSxFQUFFZSxvQkFKZDtBQUtJLG1CQUFLLEVBQUViO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWSixlQWlCSSxxRUFBQyx1REFBRDtBQUFRLGtCQUFJLEVBQUMsRUFBYjtBQUFnQixrQkFBSSxFQUFDLE9BQXJCO0FBQTZCLGtCQUFJLEVBQUMsUUFBbEM7QUFBMkMscUJBQU8sRUFBRSxJQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFqQkosZUFrQkkscUVBQUMscURBQUQ7QUFBTSxpQkFBRyxFQUFDLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEJKLGVBa0JrRCxxRUFBQyxxREFBRDtBQUFNLGlCQUFHLEVBQUMsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFsQmxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETjtBQThCRDs7R0E3Q3VCTixLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi5kNTA5YzE0ZTcxNzQ4NDVhMGY4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSwgUGFnZSwgRm9ybUxheW91dCwgTGF5b3V0LCBDYXJkLCBUZXh0RmllbGQsIEJ1dHRvbiwgSWNvbiwgRGlzcGxheVRleHQsIExpbmsgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHtJb01kTG9jayB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gICAgY29uc3QgW2lzVXNlckxvZ2dlZCxzZXRJc1VzZXJMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJOYW1lLHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1c2VyUGFzcyxzZXRVc2VyUGFzc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU2lnbmluU3VibWl0ID0gdXNlQ2FsbGJhY2soKF9ldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlNIT1BJRllfQVBJX0tFWSlcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5TSE9QSUZZX0FQSV9TRUNSRVRfS0VZKVxyXG4gICAgICAgIHNldElzVXNlckxvZ2dlZCh0cnVlKVxyXG4gICAgICAgIHNldFVzZXJOYW1lKCcnKVxyXG4gICAgICAgIHNldFVzZXJQYXNzKCcnKVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgaGFuZGxlVXNlcm5hbWVDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHNldFVzZXJOYW1lKHZhbHVlKSxbXSwpO1xyXG4gICAgY29uc3QgaGFuZGxlVXNlcnBhc3NDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHNldFVzZXJQYXNzKHZhbHVlKSxbXSwpO1xyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPFBhZ2U+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInNpZ25pbi1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVNpZ25pblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gc291cmNlPXtJb01kTG9ja30gYmFja2Ryb3A9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJtZWRpdW1cIj5TaWduIEluPC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzICpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVc2VybmFtZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyUGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkICpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVc2VycGFzc0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlclBhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwiXCIgbmFtZT1cImxvZ2luXCIgc2l6ZT1cIm1lZGl1bVwiIHByaW1hcnk9e3RydWV9PlNJR04gSU48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHVybD1cIi9yZXNldHBhc3NcIj5Gb3Jnb3QgUGFzc3dvcmQ/PC9MaW5rPjxMaW5rIHVybD1cIi9zaWdudXBcIiA+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyBTaWduIFVwPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L1BhZ2U+ICAgIFxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
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

  var handleSigninSubmit = (function (_event) {
    console.log(process.env.SHOPIFY_API_KEY);
    console.log(process.env.SHOPIFY_API_SECRET_KEY);
    console.log(_event);
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
              lineNumber: 28,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["DisplayText"], {
              size: "medium",
              children: "Sign In"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
              name: "userName",
              type: "email",
              placeholder: "Email Address *",
              onChange: handleUsernameChange,
              value: userName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
              name: "userPass",
              type: "password",
              placeholder: "Password *",
              onChange: handleUserpassChange,
              value: userPass
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              icon: "",
              name: "login",
              size: "medium",
              primary: true,
              children: "SIGN IN"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              url: "/resetpass",
              children: "Forgot Password?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              url: "/signup",
              children: "Don't have an account? Sign Up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 75
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

_s(Login, "WmAkP7Btr8N0tsroaLBNMUkzVSY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwidXNlU3RhdGUiLCJpc1VzZXJMb2dnZWQiLCJzZXRJc1VzZXJMb2dnZWQiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwidXNlclBhc3MiLCJzZXRVc2VyUGFzcyIsImhhbmRsZVNpZ25pblN1Ym1pdCIsIl9ldmVudCIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiU0hPUElGWV9BUElfS0VZIiwiU0hPUElGWV9BUElfU0VDUkVUX0tFWSIsImhhbmRsZVVzZXJuYW1lQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsImhhbmRsZVVzZXJwYXNzQ2hhbmdlIiwiSW9NZExvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEtBQUQsQ0FEbkI7QUFBQSxNQUNyQkMsWUFEcUI7QUFBQSxNQUNSQyxlQURROztBQUFBLG1CQUVHRixzREFBUSxDQUFDLEVBQUQsQ0FGWDtBQUFBLE1BRXJCRyxRQUZxQjtBQUFBLE1BRVpDLFdBRlk7O0FBQUEsbUJBR0dKLHNEQUFRLENBQUMsRUFBRCxDQUhYO0FBQUEsTUFHckJLLFFBSHFCO0FBQUEsTUFHWkMsV0FIWTs7QUFNNUIsTUFBTUMsa0JBQWtCLElBQUksVUFBQ0MsTUFBRCxFQUFZO0FBQ3BDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBQXhCO0FBQ0FKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsc0JBQXhCO0FBQ0FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0FOLG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FFLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNILEdBUDJCLEVBT3pCLEVBUHFCLENBQXhCO0FBUUEsTUFBTVMsb0JBQW9CLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdiLFdBQVcsQ0FBQ2EsS0FBRCxDQUF0QjtBQUFBLEdBQUQsRUFBK0IsRUFBL0IsQ0FBeEM7QUFDQSxNQUFNQyxvQkFBb0IsR0FBR0YseURBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV1gsV0FBVyxDQUFDVyxLQUFELENBQXRCO0FBQUEsR0FBRCxFQUErQixFQUEvQixDQUF4QztBQUNGLHNCQUNNLHFFQUFDLHFEQUFEO0FBQUEsMkJBQ0kscUVBQUMsdURBQUQ7QUFBQSw2QkFDSSxxRUFBQyxxREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBQSwrQkFDSSxxRUFBQyxxREFBRDtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQXlCLGtCQUFRLEVBQUVWLGtCQUFuQztBQUFBLGlDQUNJLHFFQUFDLDJEQUFEO0FBQUEsb0NBQ0kscUVBQUMscURBQUQ7QUFBTSxvQkFBTSxFQUFFWSx1REFBZDtBQUF3QixzQkFBUSxFQUFFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSSxxRUFBQyw0REFBRDtBQUFhLGtCQUFJLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSSxxRUFBQywwREFBRDtBQUNJLGtCQUFJLEVBQUMsVUFEVDtBQUVJLGtCQUFJLEVBQUMsT0FGVDtBQUdJLHlCQUFXLEVBQUMsaUJBSGhCO0FBSUksc0JBQVEsRUFBRUosb0JBSmQ7QUFLSSxtQkFBSyxFQUFFWjtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEosZUFVSSxxRUFBQywwREFBRDtBQUNJLGtCQUFJLEVBQUMsVUFEVDtBQUVJLGtCQUFJLEVBQUMsVUFGVDtBQUdJLHlCQUFXLEVBQUMsWUFIaEI7QUFJSSxzQkFBUSxFQUFFZSxvQkFKZDtBQUtJLG1CQUFLLEVBQUViO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWSixlQWlCSSxxRUFBQyx1REFBRDtBQUFRLGtCQUFJLEVBQUMsRUFBYjtBQUFnQixrQkFBSSxFQUFDLE9BQXJCO0FBQTZCLGtCQUFJLEVBQUMsUUFBbEM7QUFBMkMscUJBQU8sRUFBRSxJQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFqQkosZUFrQkkscUVBQUMscURBQUQ7QUFBTSxpQkFBRyxFQUFDLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEJKLGVBa0JrRCxxRUFBQyxxREFBRDtBQUFNLGlCQUFHLEVBQUMsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFsQmxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETjtBQThCRDs7R0E5Q3VCTixLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi41MmFhMDAwYTlkYTI4M2IxYWNiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSwgUGFnZSwgRm9ybUxheW91dCwgTGF5b3V0LCBDYXJkLCBUZXh0RmllbGQsIEJ1dHRvbiwgSWNvbiwgRGlzcGxheVRleHQsIExpbmsgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHtJb01kTG9jayB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gICAgY29uc3QgW2lzVXNlckxvZ2dlZCxzZXRJc1VzZXJMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJOYW1lLHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1c2VyUGFzcyxzZXRVc2VyUGFzc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU2lnbmluU3VibWl0ID0gKChfZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5TSE9QSUZZX0FQSV9LRVkpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuU0hPUElGWV9BUElfU0VDUkVUX0tFWSlcclxuICAgICAgICBjb25zb2xlLmxvZyhfZXZlbnQpXHJcbiAgICAgICAgc2V0SXNVc2VyTG9nZ2VkKHRydWUpXHJcbiAgICAgICAgc2V0VXNlck5hbWUoJycpXHJcbiAgICAgICAgc2V0VXNlclBhc3MoJycpXHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBoYW5kbGVVc2VybmFtZUNoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0VXNlck5hbWUodmFsdWUpLFtdLCk7XHJcbiAgICBjb25zdCBoYW5kbGVVc2VycGFzc0NoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0VXNlclBhc3ModmFsdWUpLFtdLCk7XHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBuYW1lPVwic2lnbmluLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU2lnbmluU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBzb3VyY2U9e0lvTWRMb2NrfSBiYWNrZHJvcD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cIm1lZGl1bVwiPlNpZ24gSW48L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3MgKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVVzZXJuYW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJQYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQgKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVVzZXJwYXNzQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyUGFzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJcIiBuYW1lPVwibG9naW5cIiBzaXplPVwibWVkaXVtXCIgcHJpbWFyeT17dHJ1ZX0+U0lHTiBJTjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdXJsPVwiL3Jlc2V0cGFzc1wiPkZvcmdvdCBQYXNzd29yZD88L0xpbms+PExpbmsgdXJsPVwiL3NpZ251cFwiID5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gVXA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvUGFnZT4gICAgXHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
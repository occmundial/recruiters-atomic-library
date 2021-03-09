webpackHotUpdate_N_E("pages/headerLoggedComplete",{

/***/ "./pages/headerLoggedComplete.js":
/*!***************************************!*\
  !*** ./pages/headerLoggedComplete.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var C_Users_pc_Documents_Repos_recruiters_atomic_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @occmundial/occ-atomic */ "./node_modules/@occmundial/occ-atomic/build/index.js");
/* harmony import */ var _occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/index */ "./components/index.js");
/* harmony import */ var _components_organisms_headerOrg_config_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/organisms/headerOrg/config/links */ "./components/organisms/headerOrg/config/links.tsx");


var _jsxFileName = "C:\\Users\\pc\\Documents\\Repos\\recruiters-atomic-library\\pages\\headerLoggedComplete.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_pc_Documents_Repos_recruiters_atomic_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var defaultProps = {
  showCenter: true,
  logged: true,
  showContingency: true,
  cartItems: 0,
  chatItems: 0,
  userName: 'Moises Rojas',
  userPhoto: 'https://i.imgur.com/I80W1Q0.png',
  email: 'irojas@occ.com.mx',
  logout: function logout() {},
  tabSelected: 0,
  organizationTabSelected: 0
};
function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_occmundial_occ_atomic__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_index__WEBPACK_IMPORTED_MODULE_3__["HeaderOrg"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      cartItems: 2,
      chatItems: 2,
      showCounts: true,
      organizationName: "Nombre de la organizaci\xF3n",
      orgMenuLinks: Object(_components_organisms_headerOrg_config_links__WEBPACK_IMPORTED_MODULE_4__["dummyOrganizations"])()
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVhZGVyTG9nZ2VkQ29tcGxldGUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwic2hvd0NlbnRlciIsImxvZ2dlZCIsInNob3dDb250aW5nZW5jeSIsImNhcnRJdGVtcyIsImNoYXRJdGVtcyIsInVzZXJOYW1lIiwidXNlclBob3RvIiwiZW1haWwiLCJsb2dvdXQiLCJ0YWJTZWxlY3RlZCIsIm9yZ2FuaXphdGlvblRhYlNlbGVjdGVkIiwiSG9tZSIsImR1bW15T3JnYW5pemF0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUdBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxZQUFVLEVBQUUsSUFETztBQUVuQkMsUUFBTSxFQUFFLElBRlc7QUFHbkJDLGlCQUFlLEVBQUUsSUFIRTtBQUluQkMsV0FBUyxFQUFFLENBSlE7QUFLbkJDLFdBQVMsRUFBRSxDQUxRO0FBTW5CQyxVQUFRLEVBQUUsY0FOUztBQU9uQkMsV0FBUyxFQUFFLGlDQVBRO0FBUW5CQyxPQUFLLEVBQUUsbUJBUlk7QUFTbkJDLFFBQU0sRUFBRSxrQkFBTSxDQUFHLENBVEU7QUFVbkJDLGFBQVcsRUFBRSxDQVZNO0FBV25CQyx5QkFBdUIsRUFBRTtBQVhOLENBQXJCO0FBY2UsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QixzQkFDRSxxRUFBQywyREFBRDtBQUFBLDJCQUNFLHFFQUFDLDJEQUFELGtDQUFlWixZQUFmO0FBQTZCLGVBQVMsRUFBRSxDQUF4QztBQUEyQyxlQUFTLEVBQUUsQ0FBdEQ7QUFBeUQsZ0JBQVUsTUFBbkU7QUFBb0Usc0JBQWdCLEVBQUMsOEJBQXJGO0FBQWlILGtCQUFZLEVBQUVhLHVHQUFrQjtBQUFqSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7S0FOdUJELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGVhZGVyTG9nZ2VkQ29tcGxldGUuYWUwYTdlYWYzNGIxOTVhN2NkZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgR3JpZCwgVGV4dCxcclxufSBmcm9tICdAb2NjbXVuZGlhbC9vY2MtYXRvbWljJztcclxuaW1wb3J0IHtcclxuICBIZWFkZXJPcmdcclxufSBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHsgZHVtbXlPcmdhbml6YXRpb25zIH0gZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvaGVhZGVyT3JnL2NvbmZpZy9saW5rcyc7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2hvd0NlbnRlcjogdHJ1ZSxcclxuICBsb2dnZWQ6IHRydWUsXHJcbiAgc2hvd0NvbnRpbmdlbmN5OiB0cnVlLFxyXG4gIGNhcnRJdGVtczogMCxcclxuICBjaGF0SXRlbXM6IDAsXHJcbiAgdXNlck5hbWU6ICdNb2lzZXMgUm9qYXMnLFxyXG4gIHVzZXJQaG90bzogJ2h0dHBzOi8vaS5pbWd1ci5jb20vSTgwVzFRMC5wbmcnLFxyXG4gIGVtYWlsOiAnaXJvamFzQG9jYy5jb20ubXgnLFxyXG4gIGxvZ291dDogKCkgPT4geyB9LFxyXG4gIHRhYlNlbGVjdGVkOiAwLFxyXG4gIG9yZ2FuaXphdGlvblRhYlNlbGVjdGVkOiAwLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQ+XHJcbiAgICAgIDxIZWFkZXJPcmcgey4uLmRlZmF1bHRQcm9wc30gY2FydEl0ZW1zPXsyfSBjaGF0SXRlbXM9ezJ9IHNob3dDb3VudHMgb3JnYW5pemF0aW9uTmFtZT1cIk5vbWJyZSBkZSBsYSBvcmdhbml6YWNpw7NuXCIgb3JnTWVudUxpbmtzPXtkdW1teU9yZ2FuaXphdGlvbnMoKX0gLz5cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
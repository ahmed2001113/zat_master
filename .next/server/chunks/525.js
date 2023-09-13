exports.id = 525;
exports.ids = [525];
exports.modules = {

/***/ 202:
/***/ ((module) => {

// Exports
module.exports = {
	"left": "sign_left__8tn5r",
	"g": "sign_g__EY0PZ",
	"submit": "sign_submit__qCmd8",
	"right": "sign_right__U7IpK",
	"cooo": "sign_cooo__2G1Ty"
};


/***/ }),

/***/ 3225:
/***/ ((module) => {

// Exports
module.exports = {
	"group": "FormContro_group__HpDlr",
	"form_input": "FormContro_form_input__Gkjyz",
	"form_input-label": "FormContro_form_input-label__I2xZ4",
	"shrink": "FormContro_shrink__WoQSX"
};


/***/ }),

/***/ 7355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/google.93676c61.svg","height":64,"width":64,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 9334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormContro_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3225);
/* harmony import */ var _FormContro_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FormContro_module_css__WEBPACK_IMPORTED_MODULE_2__);



const FormInputComponent = ({ HandleChange, label, errormessage, ...otherProps })=>{
    const [focused, SetFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleFocus = (e)=>{
        SetFocus(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_FormContro_module_css__WEBPACK_IMPORTED_MODULE_2___default().group)}`,
        children: [
            label ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: ` ${(_FormContro_module_css__WEBPACK_IMPORTED_MODULE_2___default().form_input_label)}`,
                children: label
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: `${(_FormContro_module_css__WEBPACK_IMPORTED_MODULE_2___default().form_input)}`,
                onChange: HandleChange,
                ...otherProps,
                onBlur: handleFocus,
                focused: focused.toString()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: errormessage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormInputComponent);


/***/ })

};
;
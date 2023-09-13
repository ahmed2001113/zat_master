"use strict";
exports.id = 283;
exports.ids = [283];
exports.modules = {

/***/ 1283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BT: () => (/* binding */ userSelectMemo),
/* harmony export */   Nx: () => (/* binding */ loadingUser),
/* harmony export */   TO: () => (/* binding */ ErrorMessageSelector)
/* harmony export */ });
/* unused harmony export selectImageUser */
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6814);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

const ErorMessage = (state)=>{
    return state;
};
const selectUSer = (state)=>{
    return state.user;
};
const ErrorMessageSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    selectUSer
], (user)=>user);
const userSelectMemo = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    selectUSer
], (user)=>user.currentUser);
const selectImageUser = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    userSelectMemo
], (user)=>user.imageUrl);
const loadingUser = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    selectUSer
], ({ loading })=>{
    return loading;
});


/***/ })

};
;
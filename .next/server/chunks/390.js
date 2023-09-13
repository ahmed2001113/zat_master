"use strict";
exports.id = 390;
exports.ids = [390];
exports.modules = {

/***/ 3390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bx: () => (/* binding */ totalCart),
/* harmony export */   L9: () => (/* binding */ cartItems),
/* harmony export */   _j: () => (/* binding */ totalPaid),
/* harmony export */   gE: () => (/* binding */ CartOpen)
/* harmony export */ });
/* unused harmony export carts */
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6814);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

const CartOpenReducer = (state)=>state.cart.open;
const cartItemsReducer = (state)=>state.cart;
const currentstate = (state)=>state;
const cartItems = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    cartItemsReducer
], (cart)=>{
    return cart.items;
});
const carts = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    currentstate
], (state)=>({
        ...state.cart
    }));
const CartOpen = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    CartOpenReducer
], (isOpen)=>isOpen);
const totalPaid = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    cartItemsReducer
], (cart)=>cart.items.length !== 0 ? cart.items.reduce((price, item)=>{
        return price + item.price * item.quantity;
    }, 0) : 0);
const totalCart = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    cartItemsReducer
], (cart)=>cart.items.length !== 0 ? cart.items.reduce((total, product)=>{
        return total + product.quantity;
    }, 0) : 0);


/***/ })

};
;
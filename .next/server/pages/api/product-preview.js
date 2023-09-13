"use strict";
(() => {
var exports = {};
exports.id = 861;
exports.ids = [861];
exports.modules = {

/***/ 1824:
/***/ ((module) => {

module.exports = require("@woocommerce/woocommerce-rest-api");

/***/ }),

/***/ 8080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _woocommerce_woocommerce_rest_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/* harmony import */ var _woocommerce_woocommerce_rest_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_woocommerce_rest_api__WEBPACK_IMPORTED_MODULE_0__);

const api = new (_woocommerce_woocommerce_rest_api__WEBPACK_IMPORTED_MODULE_0___default())({
    url: "https://zat98.com",
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
});
async function handler(req, res) {
    const { product_id } = req.query;
    console.warn(id);
    const responseData = {
        success: false,
        products: {}
    };
    try {
        const { data } = await api.get(`products/reviews/product_id?=${product_id}`);
        responseData.success = true;
        responseData.products = data;
        return res.json(responseData);
    } catch (error) {
        responseData.error = error.message;
        return res.status(500).json(responseData);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8080));
module.exports = __webpack_exports__;

})();
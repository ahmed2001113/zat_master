"use strict";
(() => {
var exports = {};
exports.id = 228;
exports.ids = [228];
exports.modules = {

/***/ 1824:
/***/ ((module) => {

module.exports = require("@woocommerce/woocommerce-rest-api");

/***/ }),

/***/ 6835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const WooCommerceRestApi = (__webpack_require__(1824)["default"]);
const api = new WooCommerceRestApi({
    url: "https://zat98.com",
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
});
/**
 * Get Products.
 *
 * Endpoint /api/get-products or '/api/get-products?perPage=2'
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */ async function handler(req, res) {
    const responseData = {
        success: false,
        products: []
    };
    const { perPage } = req?.query ?? {};
    try {
        const { data } = await api.get("products", {
            per_page: perPage || 50
        });
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
var __webpack_exports__ = (__webpack_exec__(6835));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 1824:
/***/ ((module) => {

module.exports = require("@woocommerce/woocommerce-rest-api");

/***/ }),

/***/ 8727:
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
async function handler(req, res) {
    const responseData = {
        orderId: "",
        total: "",
        status: ""
    };
    const { id } = req.query;
    try {
        const { data } = await api.get(`orders/${id}`);
        responseData.orderId = data.id;
        responseData.total = data.total;
        responseData.status = data.status;
        res.json(responseData);
    } catch (error) {
        ;
        /**
		 * Request usually fails if the data in req.body is not sent in the format required.
		 *
		 * @see Data shape expected: https://stackoverflow.com/questions/49349396/create-an-order-with-coupon-lines-in-woocomerce-rest-api
		 */ responseData.error = error.message;
        res.status(500).json(responseData);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8727));
module.exports = __webpack_exports__;

})();
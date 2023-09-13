"use strict";
(() => {
var exports = {};
exports.id = 329;
exports.ids = [329];
exports.modules = {

/***/ 1824:
/***/ ((module) => {

module.exports = require("@woocommerce/woocommerce-rest-api");

/***/ }),

/***/ 6507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "lodash/isEmpty"
const isEmpty_namespaceObject = require("lodash/isEmpty");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/create-order.js
const WooCommerceRestApi = (__webpack_require__(1824)["default"]);

const api = new WooCommerceRestApi({
    url: "https://zat98.com",
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
});
/**
 * Create order endpoint.
 *
 * @see http://woocommerce.github.io/woocommerce-rest-api-docs/?javascript#create-an-order
 *
 * @param {Object} req Request.
 * @param {Object} res Response.
 *
 * @return {Promise<{orderId: string, success: boolean, error: string}>}
 */ async function handler(req, res) {
    const responseData = {
        success: false,
        orderId: "",
        total: "",
        currency: "",
        error: "",
        status: "",
        date_created: ""
    };
    if (isEmpty_default()(req.body)) {
        responseData.error = "Required data not sent";
        return responseData;
    }
    const data = req.body;
    data.status = "processing";
    data.set_paid = false;
    try {
        const { data } = await api.post("orders", req.body);
        responseData.success = true;
        responseData.orderId = data.number;
        responseData.total = data.total;
        responseData.currency = data.currency;
        responseData.paymentUrl = data.payment_url;
        responseData.date_created = data.date_created;
        res.json(responseData);
    } catch (error) {
        ;
        /**
		 * Request usually fails if the data in req.body is not sent in the format required.
		 *
		 * @see Data shape expected: https://stackoverflow.com/questions/49349396/create-an-order-with-coupon-lines-in-woocomerce-rest-api
		 */ console.log(error);
        responseData.error = error.message;
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
var __webpack_exports__ = (__webpack_exec__(6507));
module.exports = __webpack_exports__;

})();
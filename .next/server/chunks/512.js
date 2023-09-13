"use strict";
exports.id = 512;
exports.ids = [512];
exports.modules = {

/***/ 2512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ModifyObjectOrArray)
/* harmony export */ });
function ModifyObjectOrArray(products) {
    if (Array.isArray(products)) {
        if (products.length) {
            return products.map((products)=>{
                return {
                    description: products.description,
                    name: products.name,
                    onSale: products.onSale,
                    shortDescription: products.shortDescription,
                    stockQuantity: products?.stockQuantity,
                    stockStatus: products?.stockStatus,
                    images: [
                        ...products.galleryImages?.nodes,
                        products?.image
                    ],
                    id: products?.id,
                    product_id: products?.productId,
                    price: products.price,
                    regularPrice: products.regularPrice,
                    categoryInfo: products?.productCategories || {}
                };
            });
        } else {
            return [];
        }
    } else if (typeof products === "object") {
        if (Object.keys(products).length) {
            return {
                description: products.description,
                name: products.name,
                onSale: products.onSale,
                shortDescription: products.shortDescription,
                stockQuantity: products?.stockQuantity,
                stockStatus: products?.stockStatus,
                images: [
                    ...products.galleryImages?.nodes,
                    products?.image
                ],
                id: products?.id,
                product_id: products?.productId,
                price: products.price,
                regularPrice: products.regularPrice
            };
        } else {
            return {};
        }
    } else {
        return "it is not an array and not a object ";
    }
}


/***/ })

};
;
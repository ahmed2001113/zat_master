"use strict";
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 6213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ ProductsInfinteScroll)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(825);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const ProductsInfinteScroll = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
query getProducts($first: Int, $after: String, $before: String, 
  $last: Int, $minPrice: Float, $maxPrice: Float, $stockStatues: [StockStatusEnum], 
  $onSale: Boolean, $category: [String], $orderby: [ProductsOrderbyInput]) {
  products(
    first: $first
    after: $after
    before: $before
    last: $last
    where: {minPrice: $minPrice, maxPrice: $maxPrice, 
      onSale: $onSale, stockStatus: $stockStatues, 
      categoryIn: $category, orderby: $orderby,
      type: SIMPLE}
  ) {
    pageInfo {
      hasNextPage
      endCursor
      hasPreviousPage
      startCursor
    }
    nodes {
      id
      slug
      name
      shortDescription
      productId
      description
      averageRating
      reviewCount
      productCategories {
        nodes {
          name
        }
      }
      image {
        altText
        srcSet
        sourceUrl
        title
        uri
        id
      }
      ... on SimpleProduct {
        price(format: RAW)
        regularPrice(format: RAW)
        stockStatus
        stockQuantity
        onSale
        galleryImages {
          nodes {
            sourceUrl
            altText
            srcSet
          }
        }
      }
    }
  }
}
`;


/***/ }),

/***/ 3563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ getPage)
/* harmony export */ });
/* harmony import */ var _src_EndPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7164);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getPage = async (pageSlug = "")=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_src_EndPoints__WEBPACK_IMPORTED_MODULE_1__/* .GET_PAGES_ENDPOINT */ .x}?slug=${pageSlug}&_embed`).then((res)=>{
        if (200 === res.status) {
            return res.data;
        } else {
            return [];
        }
    }).catch((err)=>{
        return [];
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
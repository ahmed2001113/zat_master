exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 4267:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "swipe_wrapper__1_pW0",
	"fixed": "swipe_fixed__TdI9x",
	"buttons_wrapper": "swipe_buttons_wrapper__Tiu5x",
	"words": "swipe_words__RQLDm",
	"new": "swipe_new__PSY0Z",
	"word": "swipe_word__J5fJe"
};


/***/ }),

/***/ 2303:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2184);
/* harmony import */ var _products_productMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3013);
/* harmony import */ var _swipe_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4267);
/* harmony import */ var _swipe_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swipe_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_store_wishlist_wishlistSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6221);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _buttons_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7025);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper_modules__WEBPACK_IMPORTED_MODULE_3__, _products_productMain__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper_modules__WEBPACK_IMPORTED_MODULE_3__, _products_productMain__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function SwippeCentered({ products, isHome = true, words = "", ...others }) {
    const { wishlistItems } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_src_store_wishlist_wishlistSelector__WEBPACK_IMPORTED_MODULE_7__/* .wishlistSelector */ .W);
    const isWishlist = (id)=>{
        return wishlistItems.some((item)=>item.id === id);
    };
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const ToShop = ()=>{
        router.push("/shop?filter=new_arrival");
    };
    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(products)) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_swipe_module_css__WEBPACK_IMPORTED_MODULE_10___default().wrapper)}`,
        ...others,
        children: [
            isHome ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: words.length > 4 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: `${(_swipe_module_css__WEBPACK_IMPORTED_MODULE_10___default()["new"])} moNotFound`,
                            children: words
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_swipe_module_css__WEBPACK_IMPORTED_MODULE_10___default().fixed)}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "notfoundword",
                                    children: words
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: `${(_swipe_module_css__WEBPACK_IMPORTED_MODULE_10___default()["new"])}`,
                            children: "New Arrivals"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_swipe_module_css__WEBPACK_IMPORTED_MODULE_10___default().fixed)}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    children: [
                                        "New",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Arrivalls"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        color: "#fff",
                                        bk: "#000",
                                        onClick: ToShop,
                                        children: "Shop Now"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                className: `${(_swipe_module_css__WEBPACK_IMPORTED_MODULE_10___default().sw)} ${!isHome ? `${(_swipe_module_css__WEBPACK_IMPORTED_MODULE_10___default().word)}` : ""} mySwiper sw_2`,
                breakpoints: {
                    // when window width is >= 640px
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 2
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    992: {
                        slidesPerView: 3.2,
                        spaceBetween: 10
                    },
                    1024: {
                        slidesPerView: 3.2,
                        spaceBetween: 10
                    }
                },
                children: products.filter((item, idx)=>idx < 9).map((product)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_products_productMain__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            product: product,
                            isLove: isWishlist(product.id)
                        })
                    }, product.id);
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwippeCentered);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
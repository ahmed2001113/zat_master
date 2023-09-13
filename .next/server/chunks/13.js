exports.id = 13;
exports.ids = [13];
exports.modules = {

/***/ 6132:
/***/ ((module) => {

// Exports
module.exports = {
	"imageWrapper": "mainproduct_imageWrapper__bb_WH",
	"image_carousel": "mainproduct_image_carousel__gcwhz",
	"heart": "mainproduct_heart__E9tKc",
	"product": "mainproduct_product__Sf__K",
	"flex_v": "mainproduct_flex_v__heY9a",
	"porduct_d": "mainproduct_porduct_d__47Hvp",
	"Add": "mainproduct_Add__g80Am",
	"Title": "mainproduct_Title__9eKzz",
	"Desc": "mainproduct_Desc__sKQan",
	"price": "mainproduct_price__FM4J_",
	"new_style": "mainproduct_new_style__kaJ2m"
};


/***/ }),

/***/ 7594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CustomButton_2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9093);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_2__);



function CustomButton_2({ children, bk, color, ...others }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${(_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn_2)}
     ${(_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn_3)}
      ${(_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn_hover_border_3)}`,
        ...others,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: children
        })
    });
}


/***/ }),

/***/ 4783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProductCarouselImages)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6964);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _productMain_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6132);
/* harmony import */ var _productMain_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_productMain_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






function ProductCarouselImages({ images, id, isItem }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3___default()), {
        defaultActiveIndex: 0,
        interval: null,
        className: "product_carousel",
        children: images.map((image)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3___default().Item), {
                children: isItem ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: `/product/${id}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_productMain_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_5___default().image_carousel),
                            height: 500,
                            width: 557,
                            objectFit: "cover",
                            sizes: "100vw",
                            alt: image?.altText,
                            src: image?.sourceUrl
                        }),
                        "                "
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: (_productMain_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_5___default().image_carousel),
                    height: 500,
                    width: 557,
                    objectFit: "cover",
                    sizes: "100vw",
                    alt: image?.altText,
                    src: image?.sourceUrl
                })
            }, image?.id);
        })
    });
}


/***/ }),

/***/ 3013:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6132);
/* harmony import */ var _mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_store_preview_preview_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6927);
/* harmony import */ var _src_store_cart_cart_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4433);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_store_wishlist_wishlistslice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3212);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6197);
/* harmony import */ var _customsComponents_buttons_CustomButton_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7594);
/* harmony import */ var _src_store_wishlist_wishlistSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6221);
/* harmony import */ var _src_store_user_user_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1283);
/* harmony import */ var _productCarouselImages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4783);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_8__]);
framer_motion__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function ProdutItemMain({ product, isLove = false, className }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const OpenPreview = ()=>dispatch(_src_store_preview_preview_slice__WEBPACK_IMPORTED_MODULE_4__/* .PreviewActions */ .Xr.OPENPREVIEW(product));
    const label = {
        inputProps: {
            "aria-label": "Checkbox demo"
        }
    };
    const { wishlistItems } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_src_store_wishlist_wishlistSelector__WEBPACK_IMPORTED_MODULE_10__/* .wishlistSelector */ .W);
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_src_store_user_user_selector__WEBPACK_IMPORTED_MODULE_11__/* .userSelectMemo */ .BT);
    const openCart = ()=>{
        dispatch(_src_store_cart_cart_reducer__WEBPACK_IMPORTED_MODULE_5__/* .CartActions */ .$.setCartOpen(true));
        dispatch(_src_store_cart_cart_reducer__WEBPACK_IMPORTED_MODULE_5__/* .CartActions */ .$.addItemToCart(product));
    };
    const addToWishlist = ()=>{
        dispatch(_src_store_wishlist_wishlistslice__WEBPACK_IMPORTED_MODULE_7__/* .wishlistActions */ .wl.setWishListItem(product));
    // AddToWishLIst(wishlistItems,dispatch,product,user)
    // dispatch(UploadUserDataStart({'wishlist':wishlistItems},{...user}))
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: className,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: false
                },
                transition: {
                    duration: 1
                },
                variants: {
                    visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    hidden: {
                        opacity: 0,
                        scale: 1,
                        y: 40
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13___default().product)}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13___default().imageWrapper)}`,
                            children: [
                                product.images.length > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_productCarouselImages__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    isItem: true,
                                    images: product.images,
                                    id: product?.id
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    href: `/product/${product?.id}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: product?.images[0]?.sourceUrl || product?.images[0]?.src,
                                        placeholder: "blur",
                                        blurDataURL: product?.images[0]?.sourceUrl || product?.images[0]?.src,
                                        height: 500,
                                        width: 557,
                                        objectFit: "cover",
                                        sizes: "100vw",
                                        alt: product?.images[0]?.altText || product?.images[0]?.altText
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${(_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13___default().flex_v)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: `${(_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13___default().heart)}`,
                                        onClick: addToWishlist,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa-solid fa-heart",
                                            style: {
                                                color: isLove ? "#623d67" : "#333"
                                            }
                                        })
                                    })
                                }),
                                product?.onSale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sale",
                                    children: "On Sale"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13___default().porduct_d)}  p-2 position-relative bg-white `,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13___default().Title)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            children: product.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: `${(_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13___default().price)}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "priceBefore",
                                                    children: [
                                                        " ",
                                                        product.regularPrice
                                                    ]
                                                }),
                                                product?.price,
                                                "LE"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: product?.shortDescription
                                    },
                                    className: `${(_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13___default().Desc)}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `${(_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13___default().new_style)}`,
                                    children: "New Style"
                                }),
                                product?.stockStatus === "IN_STOCK" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "centered",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_customsComponents_buttons_CustomButton_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            bk: "#fff",
                                            onClick: openCart,
                                            className: `${(_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13___default().Add)}`,
                                            children: "Add To Cart"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_customsComponents_buttons_CustomButton_2__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            bk: "#fff",
                                            className: `${(_mainproduct_module_css__WEBPACK_IMPORTED_MODULE_13___default().Add)}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                href: `/checkout/${product?.id}`,
                                                style: {
                                                    color: "#000",
                                                    textDecoration: "none"
                                                },
                                                children: "Buy Now"
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "out_s",
                                    children: "Out Of Stock"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProdutItemMain);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
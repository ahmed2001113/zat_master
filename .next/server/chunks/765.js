exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 9945:
/***/ ((module) => {

// Exports
module.exports = {
	"Top_Bar": "store_Top_Bar__pYuVy",
	"Top_Bar_scroll": "store_Top_Bar_scroll__8tWP1",
	"filterOptions": "store_filterOptions___U9R5",
	"res": "store_res__ELpoD",
	"sorting": "store_sorting__ChmyS",
	"title": "store_title__uwEf2",
	"button": "store_button__wWb73",
	"chip": "store_chip__KlFLD",
	"flex": "store_flex__Ahd0J",
	"Drawer": "store_Drawer__Dlk9P",
	"chipItem": "store_chipItem__RIXuL",
	"no_products": "store_no_products__6XKzB",
	"mob": "store_mob__XB2qy",
	"statics_words": "store_statics_words__DRMvw",
	"product": "store_product__4bWLW"
};


/***/ }),

/***/ 163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/filter.36976ab9.svg","height":1000,"width":1000,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 5427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Sortoptions)
/* harmony export */ });
const Sortoptions = {
    label: "sort By",
    name: "sort",
    innerOptions: [
        {
            label: "Name",
            value: "name"
        },
        {
            label: "price Heigh TO Low",
            value: "priceDESC"
        },
        {
            label: "price low To High",
            value: "priceAsc"
        },
        {
            label: "Most Rated ",
            value: "most"
        },
        {
            label: "New Arrival",
            value: "new_arrival"
        }
    ]
};


/***/ }),

/***/ 6751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SortDropDown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8582);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2__);



function SortDropDown({ name, label, options = [], defaultValue = "", onChange, ...others }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
        variant: "standard",
        sx: {
            width: 150,
            marginTop: 0
        },
        size: "small",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
                className: "sortLabel",
                children: "Sort By"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Select, {
                label: "sort",
                onChange: onChange,
                required: true,
                name: "sort",
                ...others,
                children: options.map((option)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                        value: option.value,
                        children: option.label
                    }, option.key);
                })
            })
        ]
    });
}


/***/ }),

/***/ 6024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8098);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(441);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5__);







const Skelton2 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 pb-3 m-auto pb-md-6 pb-xl-8",
        width: "380PX",
        style: {
            height: "500px"
        },
        sx: {
            marginRight: 0.5,
            my: 1
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default()), {
                variant: "rectangular",
                style: {
                    height: "500px"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                sx: {
                    pt: 0.5
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_5___default()), {
                        width: "60%"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skelton2);


/***/ }),

/***/ 5231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProductsDataQuery)
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(825);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const ProductsDataQuery = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
query productPrice($category:[String]){
  products(first: 1000,where:{categoryIn: $category}) {
    nodes {
         ... on SimpleProduct {
        price(format: RAW)
      }
      productCategories {
        nodes {
          slug
          name
        }
      }
    }
    
  }
}`;


/***/ }),

/***/ 4655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ FilterDrawer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__(8350);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__(6320);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);
;// CONCATENATED MODULE: ./src/components/customsComponents/checkbox/materilChec.jsx





const useStyles = (0,styles_.makeStyles)({
    root: {
        "&$checked": {
            color: "#000"
        }
    },
    checked: {},
    wrap: {
        width: "100%",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 0
    },
    label: {
        fontSize: ".8rem",
        fontFamily: `'Raleway', sans-serif`
    }
});
const CheckboxButtons = ({ changeChecked, stock })=>{
    const classes = useStyles();
    const { checked, label, id } = stock;
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime.jsx((FormControlLabel_default()), {
            classes: {
                label: classes.label,
                root: classes.wrap
            },
            control: /*#__PURE__*/ jsx_runtime.jsx((Checkbox_default()), {
                classes: {
                    checked: classes.checked,
                    root: classes.root
                },
                size: "small",
                checked: checked,
                onChange: ()=>changeChecked(id),
                inputProps: {
                    "aria-label": "checkbox with small size"
                }
            }),
            label: label
        })
    });
};
/* harmony default export */ const materilChec = (CheckboxButtons);

// EXTERNAL MODULE: ./src/storeModule/store.module.css
var store_module = __webpack_require__(9945);
var store_module_default = /*#__PURE__*/__webpack_require__.n(store_module);
// EXTERNAL MODULE: ./src/store/global/globalStore.Selector.js
var globalStore_Selector = __webpack_require__(2466);
// EXTERNAL MODULE: external "react-bootstrap/Offcanvas"
var Offcanvas_ = __webpack_require__(6865);
var Offcanvas_default = /*#__PURE__*/__webpack_require__.n(Offcanvas_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/components/customsComponents/drawers/CustmDrawer.jsx




function Drawer({ show, setShow, children, title, placement, ...others }) {
    //   const [show, setShow] = useState(false);
    const handleClose = ()=>setShow(false);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Offcanvas_default()), {
            placement: placement,
            ...others,
            show: show,
            onHide: handleClose,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Offcanvas_default()).Header, {
                    closeButton: true,
                    children: /*#__PURE__*/ jsx_runtime.jsx((Offcanvas_default()).Title, {
                        children: title
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Offcanvas_default()).Body, {
                    children: children
                })
            ]
        })
    });
}
/* harmony default export */ const CustmDrawer = (Drawer);

// EXTERNAL MODULE: external "@material-ui/core/Slider"
var Slider_ = __webpack_require__(5562);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_);
;// CONCATENATED MODULE: ./src/components/customsComponents/sliders/priceRange.jsx




const priceRange_useStyles = (0,styles_.makeStyles)({
    root: {
        width: "100%"
    },
    thumb: {
        color: "#000"
    },
    rail: {
        color: `rgba(0, 0, 0, 0.26)`
    },
    track: {
        color: "#000"
    }
});
const SliderPrice = ({ value, changePrice, min, max })=>{
    const classes = priceRange_useStyles();
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: classes.root,
        children: /*#__PURE__*/ jsx_runtime.jsx((Slider_default()), {
            value: value,
            onChange: changePrice,
            valueLabelDisplay: "on",
            min: min,
            max: max,
            classes: {
                thumb: classes.thumb,
                rail: classes.rail,
                track: classes.track
            }
        })
    });
};
/* harmony default export */ const priceRange = (SliderPrice);

// EXTERNAL MODULE: external "graphql"
var external_graphql_ = __webpack_require__(7343);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/store/filters/filter.slice.js
var filter_slice = __webpack_require__(2638);
// EXTERNAL MODULE: ./src/store/filters/filtersSelectores.js
var filtersSelectores = __webpack_require__(4457);
// EXTERNAL MODULE: external "lodash/isArray"
var isArray_ = __webpack_require__(5599);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray_);
// EXTERNAL MODULE: external "lodash/isObject"
var isObject_ = __webpack_require__(5795);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject_);
;// CONCATENATED MODULE: ./src/utls/functions/FilterObjectsWithTypes.js


// Define a function that takes an object as a parameter
function filterObjectValues(obj, callback) {
    const keys = Object.keys(obj);
    // Filter out the keys that have values that are empty array, empty string, or zero
    const filteredKeys = keys.filter((key)=>!(Array.isArray(obj[key]) && obj[key].length === 0 || obj[key] === "" || obj[key] === 0 || key === "orderby"));
    // Reduce the filtered keys to a new object with the same values
    const filteredObject = filteredKeys.reduce((acc, key)=>{
        // Check if the value is an object
        // Otherwise, assign the value as it is
        if (isArray_default()(obj[key])) {
            console.log(obj[key].filter((a)=>!isObject_default()(a)));
            acc[key] = obj[key].filter((a)=>!isObject_default()(a));
        }
        acc[key] = obj[key];
        return acc;
    }, {});
    console.log(filteredObject);
    // Return the filtered object
    return callback(filteredObject);
} // Test the function with an example object
 //   const myObject = { arr: [], str: "", number: 42, bool: true };
 //   ); // {number: 42, bool: true}

// EXTERNAL MODULE: ./src/store/categories/category.selector.js + 1 modules
var category_selector = __webpack_require__(4884);
// EXTERNAL MODULE: external "lodash/isBoolean"
var isBoolean_ = __webpack_require__(2327);
var isBoolean_default = /*#__PURE__*/__webpack_require__.n(isBoolean_);
;// CONCATENATED MODULE: ./src/storeModule/filterDrawer.jsx

















const initial = [
    {
        id: 1,
        checked: false,
        label: "in stock",
        value: "IN_STOCK"
    },
    {
        id: 2,
        checked: false,
        label: "Out of stock",
        value: "OUT_OF_STOCK"
    }
];
function FilterDrawer({ show, setShow, products, setProducts, loading }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { IsMatch } = (0,external_react_redux_.useSelector)(globalStore_Selector/* GlobalSelector */.G);
    const [Stock, SetStock] = (0,external_react_.useState)(initial);
    const { prices: price, Filtered, Filters } = (0,external_react_redux_.useSelector)(filtersSelectores/* FilterSelector */.N);
    const { minPrice, maxPrice } = price;
    const [onSale, setOnSale] = (0,external_react_.useState)(true);
    const [prices, setPrice] = (0,external_react_.useState)([
        minPrice,
        maxPrice
    ]);
    const handleDelete = (chipToDelete)=>()=>{
            ;
            dispatch(filter_slice/* FiltersAction */.NH.DeleteKey(chipToDelete));
        };
    const handleChangeOnSale = (e)=>{
        setOnSale(e.target.checked);
        SetStock;
    };
    const handleChangePrice = (event, value)=>{
        setPrice(value);
    };
    const handleChangeChecked = (id)=>{
        const StockStateList = Stock;
        const changeCheckedCuisines = StockStateList.map((item)=>item.id === id ? {
                ...item,
                checked: !item.checked
            } : item);
        SetStock(changeCheckedCuisines);
    };
    (0,external_react_.useEffect)(()=>{
        if (!Filtered) {
            SetStock(initial);
        }
    }, [
        Filtered
    ]);
    // Define a function to apply filters
    const applyFilters = ()=>{
        // let updatedList = [...products]; 
        dispatch(filter_slice/* FiltersAction */.NH.addFilter({
            minPrice: prices[0],
            maxPrice: prices[1],
            stockStatues: Stock.filter((item)=>item.checked).map(({ value })=>value),
            onSale
        }));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CustmDrawer, {
        show: show,
        title: "Filter",
        setShow: setShow,
        placement: IsMatch ? "bottom" : "start",
        className: `${(store_module_default()).Drawer}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tags",
                children: filterObjectValues(Filters, (filters)=>{
                    let icon;
                    return Object.keys(filters).filter((key)=>{
                        return key;
                    }).map((key)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx(material_.Chip, {
                            className: `${(store_module_default()).chipItem} col-md-6`,
                            icon: icon,
                            label: `${key} ${isBoolean_default()(filters[key]) ? "" : filters[key] || isObject_default()(filters[key] ? "" : filters[key])}`,
                            onDelete: handleDelete(key)
                        }, key);
                    });
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "body mb-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        children: "Avalibility"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "stock",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "input-group",
                            children: Stock.map((item)=>{
                                return /*#__PURE__*/ jsx_runtime.jsx(materilChec, {
                                    changeChecked: handleChangeChecked,
                                    stock: item
                                }, item.id);
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        children: "Sale"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.FormControlLabel, {
                        classes: {
                            root: {
                                "&$checked": {
                                    color: "#000"
                                },
                                width: "100%",
                                display: "flex",
                                flexDirection: "row-reverse",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginLeft: 0,
                                color: "#000"
                            },
                            label: {
                                fontSize: ".8rem",
                                fontFamily: `'Raleway', sans-serif`
                            }
                        },
                        label: "On Sale",
                        control: /*#__PURE__*/ jsx_runtime.jsx(material_.Checkbox, {
                            checked: onSale,
                            onChange: handleChangeOnSale,
                            inputProps: {
                                "aria-label": "controlled"
                            }
                        })
                    }),
                    minPrice === maxPrice ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                children: "Price"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(priceRange, {
                                value: prices,
                                min: minPrice === maxPrice ? 0 : minPrice,
                                max: maxPrice,
                                changePrice: handleChangePrice
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bottom mt-auto",
                children: [
                    Filtered && /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "  submit mb-3",
                        disabled: loading,
                        onClick: ()=>dispatch(filter_slice/* FiltersAction */.NH.resetFilters()),
                        children: loading ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                            children: "loading"
                        }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                            children: "Reset Filters"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "submit",
                        onClick: ()=>applyFilters(),
                        disabled: loading,
                        children: loading ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                            children: "loading"
                        }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                            children: "Apply Filters"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_svgs_filter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(163);
/* harmony import */ var _store_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9945);
/* harmony import */ var _store_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_store_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_customsComponents_dropdowns_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6751);
/* harmony import */ var _components_customsComponents_dropdowns_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5427);
/* harmony import */ var _components_products_productMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3013);
/* harmony import */ var _filterDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4655);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_filters_filtersSelectores__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4457);
/* harmony import */ var _store_filters_filter_slice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2638);
/* harmony import */ var _components_skelton_skeltonswipecenterd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6024);
/* harmony import */ var _store_wishlist_wishlistSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6221);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_products_productMain__WEBPACK_IMPORTED_MODULE_5__]);
_components_products_productMain__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















function Store({ products = [], category = "", loading, setLoading, ...others }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const { Filters, Filtered } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_filters_filtersSelectores__WEBPACK_IMPORTED_MODULE_9__/* .FilterSelector */ .N);
    console.log(Filters);
    const [scroll, setScroll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { wishlistItems } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_wishlist_wishlistSelector__WEBPACK_IMPORTED_MODULE_12__/* .wishlistSelector */ .W);
    const isWishlist = (id)=>{
        return wishlistItems.some((item)=>item.id === id);
    };
    function Scroll() {
        const scrolls = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
        setScroll(scrolls);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function handleScroll() {
            return Scroll();
        }
        ;
        document.body.addEventListener("scroll", handleScroll);
        return ()=>{
            document.body.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [productData, setproducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(products || []);
    const [sort, SetSort] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("sort By");
    const onChange = (e)=>{};
    const onChangeSort = (e)=>{
        const { value } = e.target;
        SetSort(value);
    };
    const showFilter = ()=>{
        setShow(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        switch(sort){
            case "priceAsc":
                //  const priceAsc = productData.sort((a,b)=>a.price-b.price);
                return dispatch(_store_filters_filter_slice__WEBPACK_IMPORTED_MODULE_10__/* .FiltersAction */ .NH.addFilter({
                    orderby: [
                        {
                            field: "PRICE",
                            order: "ASC"
                        }
                    ]
                }));
            case "priceDESC":
                return dispatch(_store_filters_filter_slice__WEBPACK_IMPORTED_MODULE_10__/* .FiltersAction */ .NH.addFilter({
                    orderby: [
                        {
                            field: "PRICE",
                            order: "DESC"
                        }
                    ]
                }));
            case "name":
                return dispatch(_store_filters_filter_slice__WEBPACK_IMPORTED_MODULE_10__/* .FiltersAction */ .NH.addFilter({
                    orderby: [
                        {
                            field: "NAME",
                            order: "DESC"
                        }
                    ]
                }));
            case "most":
                return dispatch(_store_filters_filter_slice__WEBPACK_IMPORTED_MODULE_10__/* .FiltersAction */ .NH.addFilter({
                    orderby: [
                        {
                            field: "RATING",
                            order: "DESC"
                        }
                    ]
                }));
            case "new_arrival":
                return dispatch(_store_filters_filter_slice__WEBPACK_IMPORTED_MODULE_10__/* .FiltersAction */ .NH.addFilter({
                    orderby: [
                        {
                            field: "MODIFIED",
                            order: "DESC"
                        }
                    ]
                }));
            default:
                setproducts([
                    ...products
                ]);
        }
    }, [
        sort
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setproducts(products);
    }, [
        products
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            category.toLocaleLowerCase() !== "search" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().statics_words)} `,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: "Shop"
                    }),
                    category.toLocaleLowerCase() !== "shop" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: `${(_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().title)}  `,
                        children: category
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Sale Now On Up To 30% OFF"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ...others,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: `${(_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().title)} ${(_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().mob)}`,
                        children: category
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().Top_Bar)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().flex)}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: `${(_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().title)}`,
                                    children: category
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${scroll && (_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().Top_Bar_scroll)} ${(_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().filterOptions)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_customsComponents_dropdowns_sort__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            className: `${(_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().sorting)} sor`,
                                            onChange: onChangeSort,
                                            label: _components_customsComponents_dropdowns_options__WEBPACK_IMPORTED_MODULE_4__/* .Sortoptions */ .B.label,
                                            defaultValue: "sort",
                                            valueOpt: sort.toLocaleLowerCase(),
                                            name: _components_customsComponents_dropdowns_options__WEBPACK_IMPORTED_MODULE_4__/* .Sortoptions */ .B.name,
                                            options: _components_customsComponents_dropdowns_options__WEBPACK_IMPORTED_MODULE_4__/* .Sortoptions */ .B.innerOptions
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: `${(_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().button)}`,
                                            onClick: ()=>showFilter(),
                                            children: [
                                                "fliter",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    alt: "filter",
                                                    src: _public_svgs_filter_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                                    width: 25,
                                                    height: 25
                                                }),
                                                " "
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            paddingLeft: "5px"
                        },
                        className: "products_container container m-auto row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_filterDrawer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                products: products,
                                setProducts: setproducts,
                                show: show,
                                setShow: setShow,
                                loading: loading
                            }),
                            productData?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: productData.map((product)=>{
                                    return loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skelton_skeltonswipecenterd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}, product.id) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_productMain__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        isLove: isWishlist(product.id),
                                        className: `col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 pb-3
     pb-md-6 pb-xl-8 ${(_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().product)}`,
                                        product: product
                                    }, product.id);
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_store_module_css__WEBPACK_IMPORTED_MODULE_13___default().no_products)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: ` We're sorry, no products were found that match your filter selection.`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "black",
                                            onClick: ()=>dispatch(_store_filters_filter_slice__WEBPACK_IMPORTED_MODULE_10__/* .FiltersAction */ .NH.resetFilters()),
                                            children: "clear Filters"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ FilterSelector)
/* harmony export */ });
/* unused harmony export filterState */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const filterState = (state)=>state.filter;
const FilterSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    filterState
], (state)=>state);


/***/ })

};
;
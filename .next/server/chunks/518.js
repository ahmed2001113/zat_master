exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 2766:
/***/ ((module) => {

// Exports
module.exports = {
	"right": "checkout_right__tm1Gl",
	"cartItem": "checkout_cartItem__MnJDR",
	"image": "checkout_image__k_Y7Q",
	"left": "checkout_left__sIC5N",
	"thankWrapper": "checkout_thankWrapper__3e7dd",
	"all": "checkout_all__4b68m"
};


/***/ }),

/***/ 4836:
/***/ ((module) => {

// Exports
module.exports = {
	"element": "checkout_element__4a_aT",
	"userInfo": "checkout_userInfo__y3ode",
	"container": "checkout_container__Wpr0N",
	"button_ch": "checkout_button_ch__OcLTC",
	"wrapper": "checkout_wrapper__wNsxo",
	"css-1u3bzj6-MuiFormControl-root-MuiTextField-root": "checkout_css-1u3bzj6-MuiFormControl-root-MuiTextField-root__w_h3j",
	"input": "checkout_input__2GjJl"
};


/***/ }),

/***/ 7304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ NewAddress)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/components/checkout/checkout.module.css
var checkout_module = __webpack_require__(4836);
var checkout_module_default = /*#__PURE__*/__webpack_require__.n(checkout_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utls/apolloConfigrations/apolloClient.js
var apolloClient = __webpack_require__(4637);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(825);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
;// CONCATENATED MODULE: ./src/lib/queries/EgyptStatesQuery.js

const EgyptStateQuery = (external_graphql_tag_default())`

query {
    allowedCountryStates(country: EG){
      code
      name
      
    }
  }`;

;// CONCATENATED MODULE: ./src/components/checkout/NewAddress.js






const Address = ({ input, handleOnChange, isShipping, isbilling, gov })=>{
    const [states, setStates] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            const { data } = await apolloClient/* default */.ZP.query({
                query: EgyptStateQuery
            });
            setStates(data.allowedCountryStates);
        })();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `${(checkout_module_default()).wrapper}`,
                children: /*#__PURE__*/ jsx_runtime.jsx(material_.TextField, {
                    name: "email",
                    type: "email",
                    defaultValue: input?.email,
                    required: true,
                    onChange: handleOnChange,
                    label: "Email",
                    className: "  w-full m-auto"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${(checkout_module_default()).wrapper}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(material_.TextField, {
                        required: true,
                        name: "firstname",
                        id: "outlined-required",
                        label: "firstname",
                        defaultValue: input?.firstname,
                        onChange: handleOnChange,
                        className: `${(checkout_module_default()).input}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.TextField, {
                        required: true,
                        id: "outlined-required",
                        label: "lastname",
                        defaultValue: input?.lastname,
                        onChange: handleOnChange,
                        name: "lastname",
                        className: `${(checkout_module_default()).input}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.TextField, {
                        name: "phone",
                        defaultValue: input?.phone,
                        required: true,
                        onChange: handleOnChange,
                        label: "Phone",
                        className: `${(checkout_module_default()).input}`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `${(checkout_module_default()).wrapper}`,
                children: /*#__PURE__*/ jsx_runtime.jsx(material_.TextField, {
                    required: true,
                    id: "outlined-required",
                    label: "street address",
                    defaultValue: input?.streetaddress,
                    onChange: handleOnChange,
                    className: " w-full m-auto",
                    placeholder: "House number and street name",
                    name: "streetaddress"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${(checkout_module_default()).wrapper}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(material_.TextField, {
                        required: true,
                        id: "outlined-required",
                        label: "Town/City",
                        defaultValue: input?.city,
                        onChange: handleOnChange,
                        className: `${(checkout_module_default()).input}`,
                        placeholder: "City Name",
                        name: "city"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.TextField, {
                        name: "zip",
                        id: "outlined-required",
                        label: "Post code",
                        defaultValue: input?.zip,
                        onChange: handleOnChange,
                        className: `${(checkout_module_default()).input}`,
                        placeholder: "House number and street name"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.FormControl, {
                        style: {
                            marginLeft: "auto",
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_.InputLabel, {
                                children: "government"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Select, {
                                label: "government",
                                onChange: handleOnChange,
                                required: true,
                                name: "state",
                                defaultValue: input?.state,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.MenuItem, {
                                        value: ""
                                    }),
                                    states.map((state)=>{
                                        return /*#__PURE__*/ jsx_runtime.jsx(material_.MenuItem, {
                                            value: state.code,
                                            children: state.name
                                        }, state.name);
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const NewAddress = (Address);


/***/ }),

/***/ 2430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ CheckOutPayments)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/store/checkoutSteps/checkout.selector.js
var checkout_selector = __webpack_require__(9299);
// EXTERNAL MODULE: ./src/store/checkoutSteps/checkoutSteps.js
var checkoutSteps = __webpack_require__(6456);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/checkout/checkout.module.css
var checkout_module = __webpack_require__(4836);
var checkout_module_default = /*#__PURE__*/__webpack_require__.n(checkout_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/store/cart/cart.selector.js
var cart_selector = __webpack_require__(3390);
// EXTERNAL MODULE: ./src/components/checkout/NewAddress.js + 1 modules
var NewAddress = __webpack_require__(7304);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/components/checkout/form-elements/checkbox.jsx


const CheckboxField = ({ handleOnChange, checked, name, label, placeholder, containerClassNames })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: containerClassNames,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
            className: "leading-7 text-md text-gray-700 flex items-center cursor-pointer",
            htmlFor: name,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("input", {
                    onChange: handleOnChange,
                    placeholder: placeholder,
                    type: "checkbox",
                    checked: checked,
                    name: name,
                    id: name
                }),
                /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "ml-2",
                    children: label || ""
                })
            ]
        })
    });
};
CheckboxField.propTypes = {
    handleOnChange: (external_prop_types_default()).func,
    checked: (external_prop_types_default()).bool,
    name: (external_prop_types_default()).string,
    type: (external_prop_types_default()).string,
    label: (external_prop_types_default()).string,
    placeholder: (external_prop_types_default()).string,
    containerClassNames: (external_prop_types_default()).string
};
CheckboxField.defaultProps = {
    handleOnChange: ()=>null,
    checked: false,
    name: "",
    label: "",
    placeholder: "",
    errors: {},
    containerClassNames: ""
};
/* harmony default export */ const form_elements_checkbox = (CheckboxField);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/checkout/functions.js + 1 modules
var functions = __webpack_require__(4598);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/store/cart/cart.reducer.js
var cart_reducer = __webpack_require__(4433);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(9699);
// EXTERNAL MODULE: external "lodash/isNull"
var isNull_ = __webpack_require__(495);
;// CONCATENATED MODULE: ./src/components/checkout/checkout.payments.jsx

















const defaultUser = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    streetaddress: "",
    apartment: "",
    city: "",
    state: "",
    postcode: "",
    address1: "",
    errors: null,
    company: ""
};
const CheckOutPayments = ({ item })=>{
    const router = (0,router_.useRouter)();
    const [value, setSelectedValue] = (0,external_react_.useState)("option1");
    const { IsPaypal, current, total } = (0,external_react_redux_.useSelector)(checkout_selector/* CheckOutSelector */.MS);
    const dispatch = (0,external_react_redux_.useDispatch)();
    let carts = [];
    let TotalCart = 0;
    carts = (0,external_react_redux_.useSelector)(cart_selector/* cartItems */.L9);
    TotalCart = (0,external_react_redux_.useSelector)(cart_selector/* totalPaid */._j);
    const inintializeUserInferomation = (0,external_react_redux_.useSelector)(checkout_selector/* UserInferomationCheckoutSelector */.hz);
    const initial = {
        billing: {
            ...defaultUser
        },
        shipping: {
            ...inintializeUserInferomation
        },
        ordernotes: "",
        billingDifferentThanShipping: false,
        paymentMethod: IsPaypal ? "visa" : "cod"
    };
    const [input, setInput] = (0,external_react_.useState)(initial);
    const [requestError, setRequestError] = (0,external_react_.useState)(null);
    const [isOrderProcessing, setIsOrderProcessing] = (0,external_react_.useState)(false);
    const [createdOrderData, setCreatedOrderData] = (0,external_react_.useState)({});
    if (item) {
        carts = [
            item
        ];
        TotalCart = item.price;
    }
    (0,external_react_.useEffect)(()=>{
        dispatch(checkoutSteps/* checkoutActions */.ep.setItems(carts));
        dispatch(checkoutSteps/* checkoutActions */.ep.setInput(input));
    }, []);
    const HandleFormSubmit = async (e)=>{
        e.preventDefault();
        setInput({
            ...input,
            billing: {
                ...input.billing
            }
        });
        if ("visa" === input.paymentMethod) {} else {
            const createdOrderData = await (0,functions/* handleOtherPaymentMethodCheckout */.xu)(input, carts, setRequestError, setIsOrderProcessing, setCreatedOrderData);
        }
    };
    const HandleOnChange = (event, isBillingOrShipping = false, isShipping = false)=>{
        const { target: { name, value } } = event || {};
        if (name === "billingDifferentThanShipping") {
            // handleBillingDifferentThanShipping(input,setInput,target);
            const newState = {
                ...input,
                [name]: !input.billingDifferentThanShipping
            };
            setInput(newState);
        } else if (isBillingOrShipping) {
            if (isShipping) {
                //handle shipping change
                const newState = {
                    ...input,
                    shipping: {
                        ...input?.shipping,
                        [name]: value
                    }
                };
                setInput(newState);
            } else {
                //billing change
                setBillingValid(false);
                const newState = {
                    ...input,
                    billing: {
                        ...input?.billing,
                        [name]: value
                    }
                };
                setInput(newState);
                dispatch(checkoutSteps/* checkoutActions */.ep.setInput(input));
            }
        } else if (name === "paymentMethod") {
            const newState = {
                ...input,
                [name]: value
            };
            setInput(newState);
            if (value === "visa") {
                dispatch(checkoutSteps/* checkoutActions */.ep.SetPaymentMethod([
                    true,
                    TotalCart
                ]));
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            } else {
                dispatch(checkoutSteps/* checkoutActions */.ep.SetPaymentMethod([
                    false,
                    TotalCart
                ]));
                document.body.scrollTop = 190;
                document.documentElement.scrollTop = 190;
            }
        } else {
            const newState = {
                ...input,
                [name]: value
            };
            setInput(newState);
        }
    };
    const HandlePrev = ()=>{
        return dispatch(checkoutSteps/* checkoutActions */.ep.prev());
    };
    (0,external_react_.useEffect)(()=>{
        if (Object.keys(createdOrderData).length !== 0) {
            if (item) {
                dispatch(checkoutSteps/* checkoutActions */.ep.SetUserOrder({
                    cartItems: carts,
                    orderCreation: createdOrderData,
                    TotalCart,
                    orderInferomation: input.billingDifferentThanShipping ? input.billing : input.shipping
                }));
            } else {
                //  checkout/SetUserOrder
                dispatch(checkoutSteps/* checkoutActions */.ep.SetUserOrder({
                    cartItems: carts,
                    orderCreation: createdOrderData,
                    TotalCart,
                    orderInferomation: input.billingDifferentThanShipping ? input.billing : input.shipping
                }));
                dispatch(cart_reducer/* CartActions */.$.EmptyCartItems());
            }
            router.push("/checkout/thankYou");
        }
    }, [
        createdOrderData
    ]);
    const breadcrumbs = [
        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
            underline: "hover",
            color: "inherit",
            href: "/",
            className: "link",
            children: "Home"
        }, "1"),
        ,
        /*#__PURE__*/ jsx_runtime.jsx("button", {
            color: "text.primary",
            onClick: HandlePrev,
            className: "link",
            children: "Shoping Information"
        }, "3"),
        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
            color: "text.primary",
            className: "link",
            children: "Billing And Payment Process"
        }, "3")
    ];
    const addressString = `${inintializeUserInferomation?.firstname} 
    ${inintializeUserInferomation?.lastname}, ${inintializeUserInferomation?.streetaddress}/${inintializeUserInferomation?.apartment}/${inintializeUserInferomation?.city},
     ${inintializeUserInferomation?.government}, ${inintializeUserInferomation?.zip}, Egypt`;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(material_.Breadcrumbs, {
                separator: "›",
                "aria-label": "breadcrumb",
                children: breadcrumbs
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${(checkout_module_default()).container} mt-5`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: `${(checkout_module_default()).element}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "contact"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: inintializeUserInferomation?.email
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: HandlePrev,
                                children: "change"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: `${(checkout_module_default()).element}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "ship To"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: `${(checkout_module_default()).userInfo}`,
                                children: addressString
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: HandlePrev,
                                children: "change"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                        children: carts ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                onSubmit: HandleFormSubmit,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                        className: "mt-2",
                                        children: "Payment"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "All transactions are secure and encrypted."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "form_visa",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "form-check woo-next-payment-input-container mt-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "form-check-label",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            onChange: HandleOnChange,
                                                            value: "cod",
                                                            className: "form-check-input mr-3 ra",
                                                            name: "paymentMethod",
                                                            type: "radio",
                                                            checked: "cod" === input.paymentMethod
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "woo-next-payment-content",
                                                            children: "cash on Delivery "
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "form-check woo-next-payment-input-container mt-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "form-check-label",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            onChange: HandleOnChange,
                                                            value: "visa",
                                                            className: "form-check-input mr-3 ra",
                                                            name: "paymentMethod",
                                                            type: "radio",
                                                            checked: "visa" === input.paymentMethod
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "woo-next-payment-content",
                                                            children: "Pay with Visa"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.TextField, {
                                        fullWidth: true,
                                        name: "ordernotes",
                                        label: "ORDER NOTE ",
                                        className: "notes mt-5",
                                        onChange: HandleOnChange,
                                        id: "fullWidth"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(form_elements_checkbox, {
                                        name: "billingDifferentThanShipping",
                                        type: "checkbox",
                                        checked: input?.billingDifferentThanShipping,
                                        handleOnChange: HandleOnChange,
                                        label: "Billing different than shipping",
                                        containerClassNames: "mb-4 pt-4"
                                    }),
                                    input?.billingDifferentThanShipping ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "billing-details",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-xl font-medium mb-4",
                                                children: "Billing Details"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(NewAddress/* default */.Z, {
                                                input: input?.billing,
                                                handleOnChange: (event)=>HandleOnChange(event, true, false),
                                                isShipping: false,
                                                isBillingOrShipping: true
                                            })
                                        ]
                                    }) : null,
                                    !IsPaypal && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "woo-next-place-order-btn-wrap mt-5",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            disabled: isOrderProcessing,
                                            className: external_classnames_default()("bg-black-600 black centered ml-auto p-5 text-white px-5 py-3 rounded-sm w-auto xl:w-full", {
                                                "opacity-50": isOrderProcessing
                                            }),
                                            type: "submit",
                                            children: "Complete the order"
                                        })
                                    }),
                                    isOrderProcessing && /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Processing The Order..."
                                    }),
                                    requestError && /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "error_Order mt-2",
                                        children: "There is an error while Processing Your Order Please check Your clock and Try Again OR Contact Us"
                                    })
                                ]
                            })
                        }) : null
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 5342:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ CheckOutForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _src_store_checkoutSteps_checkout_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9299);
/* harmony import */ var _src_store_checkoutSteps_checkoutSteps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6456);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5838);
/* harmony import */ var react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _NewAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7304);
/* harmony import */ var _src_store_user_user_selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1283);
/* harmony import */ var _checkout_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4836);
/* harmony import */ var _checkout_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_checkout_module_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const CheckOutForm = ({ item })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const inintializeUserInferomation = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_src_store_checkoutSteps_checkout_selector__WEBPACK_IMPORTED_MODULE_1__/* .UserInferomationCheckoutSelector */ .hz);
    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(inintializeUserInferomation);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const [isFormValid, setIsFormValid] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_src_store_user_user_selector__WEBPACK_IMPORTED_MODULE_10__/* .userSelectMemo */ .BT);
    const OnSubmit = (e)=>{
        e.preventDefault();
        dispatch(_src_store_checkoutSteps_checkoutSteps__WEBPACK_IMPORTED_MODULE_2__/* .checkoutActions */ .ep.SetUserInferomation(input));
        dispatch(_src_store_checkoutSteps_checkoutSteps__WEBPACK_IMPORTED_MODULE_2__/* .checkoutActions */ .ep.next());
    };
    const HandleOnChange = (event, isShipping, isBilling)=>{
        const { target: { name, value } } = event || {};
        const newState = {
            ...input,
            [name]: value
        };
        setInput(newState);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get("https://raw.githubusercontent.com/Tech-Labs/egypt-governorates-and-cities-db/master/governorates.json").then((response)=>{
            Object.values(response.data).map((key)=>{
                setData(key?.data);
            });
        }).catch((error)=>{
            ;
        });
    }, []);
    const breadcrumbs = [
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            underline: "hover",
            color: "inherit",
            href: "/",
            className: "link",
            children: "Home"
        }, "1"),
        ,
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            color: "text.primary",
            className: "link",
            children: "Shoping Information"
        }, "3")
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Stack__WEBPACK_IMPORTED_MODULE_7___default()), {
                spacing: 2,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Breadcrumbs, {
                    separator: "›",
                    "aria-label": "breadcrumb",
                    children: breadcrumbs
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: OnSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border-b border-gray-900/10 pb-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-base font-semibold leading-7 mt-4 text-gray-900",
                                children: "SHoping  Information"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-1 text-sm leading-6 text-gray-600",
                                children: "Use a permanent address where you can receive mail."
                            }),
                            !user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "si",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: [
                                    "sign Up for Best Experince",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/auth/signup",
                                        className: "mt-1 ms-2 text-sm leading-6 text-gray-600",
                                        children: "sign up"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-1",
                                children: "Contacts    "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewAddress__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                input: input,
                                handleOnChange: (event)=>HandleOnChange(event, true, true),
                                isShipping: true,
                                gov: data
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "button",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: `black ${(_checkout_module_css__WEBPACK_IMPORTED_MODULE_11___default().button_ch)}`,
                            type: "submit",
                            children: "Continue To Payment"
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  QM: () => (/* binding */ PaypalCheckout),
  xu: () => (/* binding */ handleOtherPaymentMethodCheckout)
});

// UNUSED EXPORTS: getCreateOrderLineItems

;// CONCATENATED MODULE: ./src/validator/is-empty.js
/**
 * Returns true if the value is undefined/null/empty object/empty string.
 *
 * @param value
 * @return {boolean}
 */ const isEmpty = (value)=>value === undefined || value === null || typeof value === "object" && Object.keys(value).length === 0 || typeof value === "string" && value.trim().length === 0;
/* harmony default export */ const is_empty = (isEmpty);

// EXTERNAL MODULE: external "@apollo/client/utilities"
var utilities_ = __webpack_require__(7596);
;// CONCATENATED MODULE: ./src/components/checkout/functions.js
//formating data


const { v4 } = __webpack_require__(5828);
const getCreateOrderLineItems = (products, total = 0)=>{
    ;
    const totalPrice = products.reduce((total, item)=>total + item.price, 0);
    if (is_empty(products) || !(0,utilities_.isArray)(products)) {
        return [];
    }
    return products?.map((item)=>{
        return {
            quantity: item?.quantity,
            product_id: item?.productId || item?.product_id
        };
    });
};
const getCreateOrderData = (order, products, set_paid = false)=>{
    // Set the billing Data to shipping, if applicable.
    const billingData = order.billingDifferentThanShipping ? order.billing : order.shipping;
    // Checkout data.
    return {
        shipping: {
            first_name: order?.shipping?.firstname,
            last_name: order?.shipping?.lastname,
            address_1: order?.shipping?.streetaddress,
            address_2: order?.shipping?.address2,
            city: order?.shipping?.city,
            country: order?.shipping?.country || "",
            state: order?.shipping?.state || "",
            postcode: order?.shipping?.zip,
            email: order?.shipping?.email,
            phone: order?.shipping?.phone,
            company: order?.shipping?.company || ""
        },
        billing: {
            first_name: billingData?.firstName,
            last_name: billingData?.lastName,
            address_1: billingData?.address1,
            address_2: billingData?.address2,
            city: billingData?.city,
            country: billingData?.country,
            state: billingData?.state,
            postcode: billingData?.postcode,
            email: billingData?.email,
            phone: billingData?.phone,
            company: billingData?.company
        },
        payment_method: order?.paymentMethod,
        payment_method_title: order?.paymentMethod,
        line_items: getCreateOrderLineItems(products),
        shipping_lines: [
            {
                method_id: "flat_rate",
                method_title: "Flat Rate",
                total: "65.00"
            }
        ],
        set_paid
    };
};
const createTheOrder = async (orderData, setOrderFailedError, previousRequestError)=>{
    let response = {
        orderId: null,
        total: "",
        currency: "",
        error: "",
        date_created: ""
    };
    // Don't proceed if previous request has error.
    if (previousRequestError) {
        response.error = previousRequestError;
        return response;
    }
    setOrderFailedError("");
    try {
        const request = await fetch("http://localhost:3000/api/create-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        });
        const result = await request.json();
        if (result.error) {
            response.error = result.error;
            setOrderFailedError("Something went wrong. Order creation failed. Please try again");
        }
        response.orderId = result?.orderId ?? "";
        response.total = result.total ?? "";
        response.currency = result.currency ?? "";
        response.paymentUrl = result.paymentUrl ?? "";
        response.date_created = result.date_created ?? Date.now();
    } catch (error) {
        // @TODO to be handled later.
        console.warn("Handle create order error", error?.message);
    }
    return response;
};
const handleOtherPaymentMethodCheckout = async (input, products, setRequestError, setIsOrderProcessing, setCreatedOrderData, total)=>{
    setIsOrderProcessing(true);
    const orderData = getCreateOrderData(input, products, total);
    const customerOrderData = await createTheOrder(orderData, setRequestError, "");
    setIsOrderProcessing(false);
    console.log(orderData, customerOrderData);
    if (is_empty(customerOrderData?.orderId)) {
        setRequestError("Clear cart failed");
        return null;
    }
    setCreatedOrderData(customerOrderData);
    return customerOrderData;
};
const PaypalCheckout = async (input, products, setRequestError, setIsOrderProcessing, setCreatedOrderData, total, set_paid = false)=>{
    setIsOrderProcessing(true);
    const orderData = getCreateOrderData(input, products, total, set_paid);
    const customerOrderData = await createTheOrder(orderData, setRequestError, "");
    setIsOrderProcessing(false);
    if (is_empty(customerOrderData?.orderId)) {
        setRequestError("Clear cart failed");
        return null;
    }
    setCreatedOrderData(customerOrderData);
    return customerOrderData;
}; /**
 * Get the updated items in the below format required for mutation input
 * 
 * **/ 


/***/ }),

/***/ 3542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _src_store_checkoutSteps_checkout_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9299);
/* harmony import */ var _src_store_checkoutSteps_checkoutSteps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6456);
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2929);
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _checkout_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4598);









const PaypalButtonCheckout = ()=>{
    const { IsPaypal, current, total, input, items } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_src_store_checkoutSteps_checkout_selector__WEBPACK_IMPORTED_MODULE_1__/* .CheckOutSelector */ .MS);
    const [paid, setPaid] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const [requestError, setRequestError] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const [isOrderProcessing, setIsOrderProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [createdOrderData, setCreatedOrderData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({});
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    console.log(items, input);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (Object.keys(createdOrderData).length !== 0) {
            dispatch(_src_store_checkoutSteps_checkoutSteps__WEBPACK_IMPORTED_MODULE_2__/* .checkoutActions */ .ep.SetUserOrder({
                cartItems: carts,
                orderCreation: createdOrderData,
                TotalCart,
                orderInferomation: input.billingDifferentThanShipping ? input.billing : input.shipping
            }));
            //  checkout/SetUserOrder
            dispatch(CartActions.EmptyCartItems());
        }
    }, [
        createdOrderData
    ]);
    const HandleApproved = async (data)=>{
        const payment = await (0,_checkout_functions__WEBPACK_IMPORTED_MODULE_8__/* .PaypalCheckout */ .QM)(input, items, setRequestError, setIsOrderProcessing, setCreatedOrderData, total, true);
    };
    if (error) {
        alert(error);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "paypalButtons",
        children: IsPaypal && current === 1 && total !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_3__.PayPalButtons, {
            style: {
                color: "silver",
                layout: "vertical",
                height: 50,
                shape: "pill"
            },
            createOrder: (data, action)=>{
                return action.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: total
                            }
                        }
                    ]
                });
            },
            onApprove: async (data, actions)=>{
                const order = await actions.order.capture();
                ;
                HandleApproved(order.id);
            },
            onInit: ()=>{},
            onError: (err)=>{
                setError(err);
            }
        }) : null
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaypalButtonCheckout);


/***/ }),

/***/ 9299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EV: () => (/* binding */ currentStepSelector),
/* harmony export */   MS: () => (/* binding */ CheckOutSelector),
/* harmony export */   dz: () => (/* binding */ ordersSelector),
/* harmony export */   hz: () => (/* binding */ UserInferomationCheckoutSelector),
/* harmony export */   vm: () => (/* binding */ order)
/* harmony export */ });
/* unused harmony export StepsSelector */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const StepsSelector = (state)=>state.checkout;
const UserInferomationCheckoutSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    StepsSelector
], ({ userInferomations })=>{
    return userInferomations;
});
const order = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    StepsSelector
], ({ order })=>{
    return order;
});
const ordersSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    StepsSelector
], ({ orders })=>{
    return orders;
});
const CheckOutSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    StepsSelector
], (state)=>state);
const currentStepSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)([
    StepsSelector
], ({ current, steps })=>{
    return {
        current,
        steps
    };
});


/***/ })

};
;
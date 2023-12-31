//formating data

import isEmpty from '@/src/validator/is-empty';
import { isArray } from '@apollo/client/utilities';

const { v4 } = require('uuid');

export const getCreateOrderLineItems = ( products ,total=0) => {
	 ;
	const totalPrice = products.reduce((total, item) => total + item.price, 0);

	if ( isEmpty( products ) || ! isArray( products ) ) {
		return [];
	}
 	return products?.map(
		( item ) => {
			return {
				quantity:item?.quantity,
				product_id:item?.productId||item?.product_id				,
 				// variation_id: '', // @TODO to be added.
			};
		},
	);
};


const getCreateOrderData = ( order, products,set_paid=false ) => {
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
			country: order?.shipping?.country||'',
			state: order?.shipping?.state||'',
			postcode: order?.shipping?.zip,
			email: order?.shipping?.email,
			phone: order?.shipping?.phone,
			company: order?.shipping?.company||'',
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
			company: billingData?.company,
		},
		payment_method: order?.paymentMethod,
		payment_method_title: order?.paymentMethod,
		line_items: getCreateOrderLineItems( products ),
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
const createTheOrder = async ( orderData, setOrderFailedError, previousRequestError ) => {
	let response = {
		orderId: null,
		total: '',
		currency: '',
		error: '',
		date_created:''
	};
	
	// Don't proceed if previous request has error.
	if ( previousRequestError ) {
		response.error = previousRequestError;
		return response;
	}
	
	setOrderFailedError( '' );
	
	try {
		const request = await fetch( 'http://localhost:3000/api/create-order', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( orderData ),
		} );
		
		const result = await request.json();
		if ( result.error ) {
			response.error = result.error;
			setOrderFailedError( 'Something went wrong. Order creation failed. Please try again' );
		}
		response.orderId = result?.orderId ?? '';
		response.total = result.total ?? '';
		response.currency = result.currency ?? '';
		response.paymentUrl = result.paymentUrl ?? '';
		response.date_created=result.date_created??Date.now()
	} catch ( error ) {
		// @TODO to be handled later.
		console.warn( 'Handle create order error', error?.message );
	}
	
	return response;
};

export const handleOtherPaymentMethodCheckout = async ( input, products, setRequestError, setIsOrderProcessing, setCreatedOrderData,total ) => {
	setIsOrderProcessing( true );
	const orderData = getCreateOrderData( input, products,total);
	const customerOrderData = await createTheOrder( orderData, setRequestError, '' );
  
	setIsOrderProcessing( false );
	console.log(orderData,customerOrderData)
	if ( isEmpty( customerOrderData?.orderId ) ) {
		setRequestError( 'Clear cart failed' );
		return null;
	}
	
	setCreatedOrderData( customerOrderData );
	
	return customerOrderData;
};
export const PaypalCheckout = async ( 
	input, products,
	 setRequestError, setIsOrderProcessing,
	 setCreatedOrderData,total ,set_paid=false) => {
	setIsOrderProcessing( true );
	const orderData = getCreateOrderData( input, products,total,set_paid);
	const customerOrderData = await createTheOrder( orderData, setRequestError, '' );
  
	setIsOrderProcessing( false );
	
	if ( isEmpty( customerOrderData?.orderId ) ) {
		setRequestError( 'Clear cart failed' );
		return null;
	}
	
	setCreatedOrderData( customerOrderData );
	
	return customerOrderData;
};

 
/**
 * Get the updated items in the below format required for mutation input
 * 
 * **/
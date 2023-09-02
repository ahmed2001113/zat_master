import { CheckOutSelector, UserInferomationCheckoutSelector } from "@/src/store/checkoutSteps/checkout.selector"
import { checkoutActions } from "@/src/store/checkoutSteps/checkoutSteps"
import { useDispatch, useSelector } from "react-redux"
import styles from './checkout.module.css'
import { Breadcrumbs, TextField, Typography  } from '@mui/material';
import { useEffect, useState } from "react"
 import { cartItems, totalPaid } from "@/src/store/cart/cart.selector";
import Address from "./NewAddress"
import CheckboxField from "./form-elements/checkbox"
import cx from 'classnames';
import {  handleOtherPaymentMethodCheckout, handleOtherPaymentMethodCheckoutGraphed } from "./functions";
import { useRouter } from "next/router";
 
import { CartActions } from "@/src/store/cart/cart.reducer";
import Link from "next/link";
  const defaultUser = {
    firstname:'', 
    lastname:'',
    phone:'',
    email:'',
    streetaddress:''
    ,apartment:'',
    city:''
    ,government:''
    ,postcode:''
    ,address2:''
    ,errors:null,
    company:''

}

export const CheckOutPayments = ({item})=>{
    const router = useRouter()
    const [value, setSelectedValue] =  useState('option1');
    const {IsPaypal,current,total}= useSelector(CheckOutSelector);

    let carts = [];
    let TotalCart = 0;
    carts= useSelector(cartItems);
    TotalCart = useSelector(totalPaid);
    const inintializeUserInferomation = useSelector(UserInferomationCheckoutSelector);
    const initial = {
        billing:{
    ...defaultUser
     },
     shipping:{
       ...inintializeUserInferomation
    
     },
      ordernotes:'',
     billingDifferentThanShipping :false,
     paymentMethod:'cod'
    }
    const [input,setInput]= useState(initial) ;
    const [requestError,setRequestError]=useState(null)
    const [isOrderProcessing,setIsOrderProcessing] =useState(false);
    const [createOrderData,setCreateOrderData] = useState(initial);
    const [orderData,submitOrderData]=useState({});
    const [ createdOrderData, setCreatedOrderData ] = useState( {} );
    const [paymentMethods, setPaymentMethods] = useState([]);
 
if(item){
 carts = [item]
TotalCart = item.price
} 
 

 



    const HandleFormSubmit  =async(e)=>{
      e.preventDefault();
       
      setInput( {
        ...input,
        billing: { ...input.billing  },
       } );
       
      if ( 'visa' === input.paymentMethod ) {
  
  
      }else{
     
        const createdOrderData= await handleOtherPaymentMethodCheckout(  input, carts, setRequestError,setIsOrderProcessing,setCreatedOrderData );

  
      }
 

    }

const dispatch = useDispatch()
const HandleOnChange = (event,isBillingOrShipping=false,isShipping=false)=>{    
    const {target:{name,value}} = event || {};
       if(name ==='billingDifferentThanShipping'){
        // handleBillingDifferentThanShipping(input,setInput,target);


         
        const newState = { ...input, [name ]: ! input.billingDifferentThanShipping };
      setInput( newState );}
      else if(isBillingOrShipping){
        if(isShipping){
    //handle shipping change
    const newState = { ...input,
       shipping: { ...input?.shipping, [ name ]: value } };
    setInput( newState );
        }else{
            //billing change
            const newState = { ...input, billing: { ...input?.billing, [ name ]: value } };
        setInput( newState );
        }
    } else if(name==='paymentMethod'){
      const newState ={...input,[name]:value}
      setInput(newState);
       
 if(value==="visa"){
  dispatch(checkoutActions.SetPaymentMethod([true,TotalCart]))
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 }else{
  dispatch(checkoutActions.SetPaymentMethod([false,TotalCart]))
  document.body.scrollTop =100;
  document.documentElement.scrollTop = 120;
 }
      
    }else{
         const newState ={...input,[name]:value}
        setInput(newState)
     } 


  }

    const HandlePrev=()=>{
         return dispatch(checkoutActions.prev())
    }
 useEffect(()=>{

if(Object.keys(createdOrderData).length!==0){

  if(item){
    dispatch(checkoutActions.SetUserOrder({
      cartItems:carts,
      orderCreation:createdOrderData,
      TotalCart,
      orderInferomation:input.billingDifferentThanShipping?input.billing:input.shipping
  
    }));
  }else{
      //  checkout/SetUserOrder
   dispatch(checkoutActions.SetUserOrder({
    cartItems:carts,
    orderCreation:createdOrderData,
    TotalCart,
    orderInferomation:input.billingDifferentThanShipping?input.billing:input.shipping

  }));
    dispatch(CartActions.EmptyCartItems())

  }

  router.push('/checkout/thankYou')
}

 },[createdOrderData]);
 const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/" 
  className="link" >
    Home
  </Link>,
  ,
  <button key="3" color="text.primary" onClick={HandlePrev} className="link">
Shoping Information

  </button>,
  <Typography key="3" color="text.primary" className="link">
Billing  Information

  </Typography>,
];
    const addressString = `${inintializeUserInferomation?.firstname} 
    ${inintializeUserInferomation?.lastname}, ${inintializeUserInferomation?.streetaddress}/${inintializeUserInferomation?.apartment}/${inintializeUserInferomation?.city},
     ${inintializeUserInferomation?.government}, ${inintializeUserInferomation?.zip}, Egypt`;
    return(
    
    <>
     <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    <div className={`${styles.container} mt-5`}>
        <div className={`${styles.element}`}>
            <p>contact</p>
            <p>{inintializeUserInferomation?.email}</p>
            <button onClick={HandlePrev}>change</button>
        </div>
        <div className={`${styles.element}`}>
            <p>ship To</p>
            <p className={`${styles.userInfo}`}>{addressString}</p>
            <button onClick={HandlePrev}>change</button>
        </div>


    </div>

{/* 
<div>
    <h6 className="mt-2 mb-2">Payment</h6>
 All transactions are secure and encrypted.</div>
<div>
    <h6 className="mt-2 mb-2">Billing address
</h6>
    
    Select the address that matches your card or payment method.


.</div> */}
<div>
 <div>
{/*  
      <h6>
      </h6> */}
        <>
  
  {carts?
    
<>
<form  onSubmit={HandleFormSubmit}>
 <h6 className="mt-2">Payment</h6>
 <p>All transactions are secure and encrypted.</p>
 
 
<div className="form_visa">
   
 <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={HandleOnChange } value="cod" 
					className="form-check-input mr-3 ra"  name="paymentMethod" 
 
					type="radio" checked={'cod' === input.paymentMethod}/>
					<span className="woo-next-payment-content">cash on Delivery </span>
				</label>
			</div>
			{/*Check Payments*/}
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ HandleOnChange } value="visa"  
           className="form-check-input mr-3 ra" name="paymentMethod" 
           type="radio" checked={'visa' === input.paymentMethod}/>
					<span className="woo-next-payment-content">Pay with Visa</span>
				</label>
			</div>

</div>

 
<TextField fullWidth  name="ordernotes" label="ORDER NOTE " className="notes mt-5" onChange={HandleOnChange} id="fullWidth" />
<CheckboxField  
									name="billingDifferentThanShipping"
									type="checkbox"
									checked={ input?.billingDifferentThanShipping }
									handleOnChange={ HandleOnChange }
									label="Billing different than shipping"
									containerClassNames="mb-4 pt-4" 
								/>



    { input?.billingDifferentThanShipping ? (
								<div className="billing-details">
									<h2 className="text-xl font-medium mb-4">Billing Details</h2>
									<Address
 										input={ input?.billing }
										handleOnChange={ ( event ) => HandleOnChange( event, true, false ) }
 										isShipping={ false }
										isBillingOrShipping
									/>
								</div>
							) : null }
{
  !IsPaypal&&<div className="woo-next-place-order-btn-wrap mt-5">
  <button
    disabled={ isOrderProcessing }
    className={ cx(
      'bg-black-600 black centered ml-auto p-5 text-white px-5 py-3 rounded-sm w-auto xl:w-full',
      { 'opacity-50': isOrderProcessing },
    ) }
    type="submit"
  >
    Complete the order
  </button>
</div>
}


	{/* Checkout Loading*/ }
    { isOrderProcessing && <p>Processing The Order...</p> }
							{ requestError&& <p className="error_Order mt-2" >
         There is an error while Processing Your Order Please
         check Your clock 
         and Try Again 
         OR Contact Us
                </p> }
</form>
    </>:null}


	{/*	Show message if Order Success*/}
	{/* <OrderSuccess response={checkoutResponse}/> */}
</>
 </div>
 
 
    </div>
 
      </>
    )
}
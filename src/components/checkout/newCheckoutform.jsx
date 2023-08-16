import { cartItems, totalPaid } from "@/src/store/cart/cart.selector"
import { UserInferomationCheckoutSelector } from "@/src/store/checkoutSteps/checkout.selector"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Address from "./address"
import CheckboxField from "./form-elements/checkbox"
import validateAndSanitizeCheckoutForm from "@/src/validator/checkout"
import cx from 'classnames';
import { useQuery,useMutation } from "@apollo/client"
import OrderSuccess from "./orderSuccess"
import CHECKOUT_MUTATION from "@/src/mutations/checkout"
import { createCheckoutData, handleOtherPaymentMethodCheckout } from "./functions"
const  CheckoutF = ()=>{

const cartElements = useSelector(cartItems)

const dispatch = useDispatch()
const inintializeUserInferomation = useSelector(UserInferomationCheckoutSelector);
const initial = {
    billing:{
...inintializeUserInferomation
 },
 shipping:{
   ...inintializeUserInferomation

 },
  ordernotes:'',
 billingDifferentThanShipping :false,
 paymentMethod:'cod'
}
 
const [input,setInput]= useState(initial) ;
const [requestError,setRequestError]=useState(initial)
const [isOrderProcessing,setIsOrderProcessing] =useState(false);
const [createOrderData,setCreateOrderData] = useState(initial);
const [orderData,submitOrderData]=useState({});
const [ createdOrderData, setCreatedOrderData ] = useState( {} );
const carts = useSelector(cartItems);;
const totalCart = useSelector(totalPaid)
console.log(carts)
 
 
const HandleFormSubmit  = async(e)=>{
e.preventDefault();
const billingValidationResult = input?.billingDifferentThanShipping ?
 validateAndSanitizeCheckoutForm( input?.billing) : {
	errors: null,
	isValid: true,
};
const shippingValidationResult = validateAndSanitizeCheckoutForm( input?.shipping );

setInput( {
	...input,
	billing: { ...input.billing, errors: billingValidationResult.errors },
	shipping: { ...input.shipping, errors: shippingValidationResult.errors },
} );

// If there are any errors, return.
if ( ! shippingValidationResult.isValid || ! billingValidationResult.isValid ) {
	return null;
}

// // const createdOrderData = await handleOtherPaymentMethodCheckout( input, carts, setRequestError, setIsOrderProcessing, setCreatedOrderData ,totalCart);


//  console.log(createdOrderData,createdOrderData,requestError)

 

}

const HandleOnChange = (event,isBillingOrShipping=false,isShipping=false)=>{
const {target:{name,value}} = event || {};
if(name ==='billingDifferentThanShipping'){
    // handleBillingDifferentThanShipping(input,setInput,target);
	const newState = { ...input, [name ]: ! input.billingDifferentThanShipping };
	setInput( newState );

}else if(isBillingOrShipping){
    if(isShipping){
//handle shipping change
const newState = { ...input, shipping: { ...input?.shipping, [ name ]: value } };
setInput( newState );
    }else{
        //billing change
        const newState = { ...input, billing: { ...input?.billing, [ name ]: value } };
		setInput( newState );
    }
}
else{
    const newState ={...input,[name]:value}
    setInput(newState)
 }
 console.log(input)
}
useEffect(()=>{
 

 
},[orderData])

return(

  <>
  
  {cartElements?
    
<>
<form  onSubmit={HandleFormSubmit}>
    <Address
    input={input?.shipping}
    handleOnChange={(event)=>HandleOnChange(event,true,true)}
    isShipping
    
    />
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

<div className="woo-next-place-order-btn-wrap mt-5">
								<button
									disabled={ isOrderProcessing }
									className={ cx(
										'bg-purple-600 text-white px-5 py-3 rounded-sm w-auto xl:w-full',
										{ 'opacity-50': isOrderProcessing },
									) }
									type="submit"
								>
									Place Order
								</button>
							</div>

	{/* Checkout Loading*/ }
    { isOrderProcessing && <p>Processing Order...</p> }
							{/* { requestError && <p>Error : { requestError } ? Please try again</p> } */}
</form>
    </>:null}


	{/*	Show message if Order Success*/}
	{/* <OrderSuccess response={checkoutResponse}/> */}
</>
)
}

export default CheckoutF
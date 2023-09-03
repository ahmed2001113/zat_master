import { CheckOutSelector } from "@/src/store/checkoutSteps/checkout.selector"
import { checkoutActions } from "@/src/store/checkoutSteps/checkoutSteps";
import { PayPalButtons } from "@paypal/react-paypal-js"
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { PaypalCheckout } from "../checkout/functions";

const PaypalButtonCheckout = ()=>{
    const {IsPaypal,current,total,input,items}= useSelector(CheckOutSelector);
    const [paid,setPaid]=useState(false);
    const [error,setError]=useState(null);
     const [requestError,setRequestError]=useState(null)
    const [isOrderProcessing,setIsOrderProcessing] =useState(false);
     const [ createdOrderData, setCreatedOrderData ] = useState( {} );
     const router = useRouter();
     const dispatch = useDispatch()
console.log(items,input);
useEffect(()=>{

    if(Object.keys(createdOrderData).length!==0){
    
    
        dispatch(checkoutActions.SetUserOrder({
          cartItems:carts,
          orderCreation:createdOrderData,
          TotalCart,
          orderInferomation:input.billingDifferentThanShipping?input.billing:input.shipping
      
        }))
 
          //  checkout/SetUserOrder
       
        dispatch(CartActions.EmptyCartItems())
    
    
    
     }
    
     },[createdOrderData]);
    const HandleApproved = async(data)=>{
         
    const payment=  await PaypalCheckout(input,items,setRequestError,setIsOrderProcessing,setCreatedOrderData,total,true)
    }
   
    if(error){
 
        alert(error)
    }

      return(
        <div className="paypalButtons">
   {
    IsPaypal && current===1&&total!==0?
    <PayPalButtons
    style={{
        color:"silver",
        layout:"vertical",
        height:50,
        shape:"pill",
        
    }}
    createOrder={(data,action)=>{
        return action.order.create({
            purchase_units:[{
                    amount:{
                        value:total
                    }}]
        })
        
    }

}
onApprove={async(data,actions)=>{

const order = await actions.order.capture();
 ;
HandleApproved(order.id)

}}
onInit={()=>{
    console.log('clicked')
}}
onError={(err)=>{
    setError(err);
     
}}
 
 
    />
  :   null
   }
     </div> 
    )
}

export default PaypalButtonCheckout
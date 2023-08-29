import { CheckOutSelector } from "@/src/store/checkoutSteps/checkout.selector"
import { PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react";
import { useSelector } from "react-redux"

const PaypalButtonCheckout = ()=>{
    const [paid,setPaid]=useState(false);
    const [error,setError]=useState(null);
    const {IsPaypal,current,total}= useSelector(CheckOutSelector);

    const HandleApproved = (data)=>{
        //fullfuil the order



        //set Paid To True
        setPaid(true)
        //refresh user Account With dispatch


        //if the response ==error
        alert(`Your Payment Was Processed succefully,However,
        we're unable To fulfil Your purchesed please Contact Us for assistant
        
        `)
    }
    if(paid){
alert('thank you for')
    }
    if(error){
        //display error 

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
onError={(err)=>{
    setError(err);
     
}}
onCancel={()=>{
    alert('canceled')
}}
    />
  :   null
   }
     </div> 
    )
}

export default PaypalButtonCheckout
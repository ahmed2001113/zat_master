import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
 
import styles from './checkout.module.css'
import { Badge, Divider, StepButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { cartItems, totalCart, totalPaid } from '@/src/store/cart/cart.selector';
import Image from 'next/image';
import { CheckOutForm } from '@/src/components/checkout/checkoutform';
import { CheckOutPayments } from '@/src/components/checkout/checkout.payments';
import { currentStepSelector } from '@/src/store/checkoutSteps/checkout.selector';
  import PaypalButtonCheckout from '@/src/components/paypalButton/paypalButton';
import Head from 'next/head';
 
export default function CheckOut() {
  const CartElments = useSelector(cartItems)
  const CheckoutComponents = [CheckOutForm,CheckOutPayments]
  const CartTotal = useSelector(totalPaid)
  
  const {current,steps} = useSelector(currentStepSelector)
  const Component = CheckoutComponents[current]
 
  
   return (
<>
<Head>
    <title>
     {` Checkout - zat98`}
    </title>
  </Head>
 
  <div className={`row container-fluid ${styles.all}`}  >
<div className={`${styles.left} col-md-7`}>
<div className={`${styles.wrapper} container `}>
<Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={current}>
        {steps.map((label, index) => (
          <Step key={label}  >
            <StepButton color="inherit ">
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
         
          <React.Fragment>
            
            <div className={`${styles.checkContent}`}>
 
           <Component />
 
         
         </div>
        
          </React.Fragment>
        
      </div>
    </Box>
 </div>
</div>
<div className="col-md-4">
  <div className="CheckoutCart">
    {
      CartElments.map(el=>{
        return    <div  key={el.id} className={`${styles.cartItem}`}>
          <div className="row">
            <div className="col-md-3" style={{position:'relative'}}>
            <Badge badgeContent={el.quantity} color="secondary">

              <Image className={`${styles.image}`} 
              src={`${el.images[0].sourceUrl}`} width={70} 
              alt={el.images[0].altText}
              height={70}/>
              </Badge>
            </div>
<div className={`${styles.right} col`}>
<p>{el.name}</p>
<p>
 LE {el.price} 
</p>
</div>
          </div>
          <Divider light />

        </div>
       
      })
    }
    
   </div>
   <div className="total centered">
<h6>Sub Total </h6>
<p>
  {CartTotal} LE
</p>
   </div>
   <div className="total centered">
<h6>Shipping </h6>
<p>
65,00  LE   
</p>
   </div>
   <div className="total centered">
<h6>Total</h6>
<p>
LE  {(+CartTotal+65)}
</p>
   </div>
   <PaypalButtonCheckout/>

</div>
    </div>
</>
);

}

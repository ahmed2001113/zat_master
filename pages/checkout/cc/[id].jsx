import client from '@/src/utls/apolloConfigrations/apolloClient';
import { All_PRODUCTS_QUERY } from '@/src/utls/queries';
 import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
  import styles from '../checkout.module.css'
import { Badge, Divider, StepButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { cartItems, totalCart, totalPaid } from '@/src/store/cart/cart.selector';
import Image from 'next/image';
import { CheckOutForm } from '@/src/components/checkout/checkoutform';
import { CheckOutPayments } from '@/src/components/checkout/checkout.payments';
import { currentStepSelector } from '@/src/store/checkoutSteps/checkout.selector';
 import { ApolloProvider } from '@apollo/client';
 import * as React from 'react';

export default function CheckOut() {
  const CartElments = useSelector(cartItems)
  const CheckoutComponents = [CheckOutForm,CheckOutPayments]
  const CartTotal = useSelector(totalPaid)
  
  const {current,steps} = useSelector(currentStepSelector)
  const Component = CheckoutComponents[current]
 
  
   return (
    <div className="row container-fluid " style={{height:'100vh'}}>
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
              <ApolloProvider client={client}>

           <Component item={'cart'}/>
              </ApolloProvider>

         
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
        return <>
        <div className={`${styles.cartItem}`}>
          <div className="row">
            <div className="col-md-3" style={{position:'relative'}}>
            <Badge badgeContent={el.quantity} color="secondary">

              <Image className={`${styles.image}`} src={`${el.images[0].sourceUrl}`} width={70} height={70}/>
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
        </>
      })
    }
    
   </div>
 
   <div className="total centered">
<h6>Total</h6>
<p>
LE  {CartTotal}
</p>
   </div>
</div>

    </div>

);

}


export const getStaticProps =async ({params})=>{

const {id}=params;
const product = {}

try {
  const {data:{product:{productCategories:{nodes}}}} = await client.query({
      query:PRODUCT_BY_ID,
      variables:{id:id.trim()}
  });

relatedProducts = nodes[0]?.products?.nodes;
} catch (error) {

console.warn(error)
}


return{
  props:{
    product:'ss'
  }
}
}

export async function  getStaticPaths(){

  const {data} = await client.query({
      query:All_PRODUCTS_QUERY
   });
   const products = data?.products?.nodes;


  const paths = products.map(product=>{

      return{
          params:{id:product.id}
      }
  })

return{
  paths,
  fallback:false
}

}
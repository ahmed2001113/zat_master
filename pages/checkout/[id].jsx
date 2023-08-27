import client from '@/src/utls/apolloConfigrations/apolloClient';
import { All_PRODUCTS_QUERY } from '@/src/utls/queries';
 import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
  import styles from './checkout.module.css'
import { Badge, Divider, StepButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { cartItems, totalCart, totalPaid } from '@/src/store/cart/cart.selector';
import Image from 'next/image';
import { CheckOutForm } from '@/src/components/checkout/checkoutform';
import { CheckOutPayments } from '@/src/components/checkout/checkout.payments';
import { currentStepSelector } from '@/src/store/checkoutSteps/checkout.selector';
 import { ApolloProvider } from '@apollo/client';
 import * as React from 'react';
import { useRouter } from 'next/router';
 import { CheckOutProduct } from '@/src/lib/queries/checkoutProduct';
import PaypalButtonCheckout from '@/src/components/paypalButton/paypalButton';

export default function CheckOut({product}) {
  const {current,steps} = useSelector(currentStepSelector)
   const CartElments =  product
  const CheckoutComponents = [CheckOutForm,CheckOutPayments];
  const router = useRouter();
  const {id}=router.query;
  const CartTotal = product.price;
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

           <Component item={product}/>
              </ApolloProvider>

         
         </div>
        
          </React.Fragment>
        
      </div>
    </Box>
 </div>
</div>
<div className="col-md-4">
  
  
         <div className={`${styles.cartItem}`}>
          <div className="row">
            <div className="col-md-3" style={{position:'relative'}}>
            <Badge badgeContent={'1'} color="secondary">

              <Image className={`${styles.image}`}
               src={`${product?.image?.sourceUrl}`} width={70}
               alt={product?.image?.altText}
                height={70}/>
              </Badge>
            </div>
<div className={`${styles.right} col`}>
<p>{product.name}</p>
<p>
 LE {product.price} 
</p>
</div>
          </div>
          <Divider light />

    
    
   </div>
 
   <div className="total centered">
<h6>Total</h6>
<p>
LE  {CartTotal}
</p>
   </div>
   <PaypalButtonCheckout
   
   />

</div>

    </div>

);

}


export const getServerSideProps =async ({params})=>{

let {id}=params;
let productItem = {}

try {
     const {data:{product}} = await client.query({
      query:CheckOutProduct,
      variables:{id:id.trim()}
  });
  productItem = product
 } catch (error) {

console.warn(error)
}


return{
  props:{
    product:productItem||{}
  }
}
}

// export async function  getStaticPaths(){

//   const {data} = await client.query({
//       query:All_PRODUCTS_QUERY
//    });
//    const products = data?.products?.nodes;


//   const paths = products.map(product=>{

//       return{
//           params:{id:product.id}||[]
//       }
//   })

// return{
//   paths,
//   fallback:false
// }

// }
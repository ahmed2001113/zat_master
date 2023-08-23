import React from 'react'
import styles from './checkout.module.css'
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { order } from '@/src/store/checkoutSteps/checkout.selector';
import { cartItems } from '@/src/store/cart/cart.selector';
import { Badge, Divider } from '@mui/material';
import succesImage from '../../public/svgs/success.svg'
import { useRouter } from 'next/router';
 function ThankYou() {
  const orders = useSelector(order);
  const cart = useSelector(cartItems)
  console.log(orders,cart);
  const router = useRouter()
  return (
 
  <div className={`${styles.thankWrapper}`}>
<div className="row">
  <div className="col-md-7 les">
<div className="th">
<Image src={succesImage}
    alt='order'
    width={100}
    height={100}
    />
<h1>THank You   <br />
 {orders?.orderInferomation.firstname}
 <br />
  For Ordering</h1>

</div>
<div className="centered elements">
  <h5>
    Your Order Id :
  </h5>
  <span>{orders?.orderCreator?.orderId}</span>
</div>
<div className="centered elements">
  <h6>
    Address :
  </h6>
  <span>{orders?.orderInferomation.streetaddress}</span>
</div>
<div className="centered elements">
  <h6>
    City : 
  </h6>
  <span>{orders?.orderInferomation.city}</span>
</div>
<div className="centered elements">
  <h6>
  email :
  </h6>
  <span>{orders?.orderInferomation.email}</span>
</div>
<div className="centered elements">
  <h6>
  Phone Number : 
  </h6>
  <span>{orders?.orderInferomation.phone}</span>
</div>
<div className="centered elements">
  <h6>
  government : 
  </h6>
  <span>{orders?.orderInferomation.government}</span>
</div>
  </div>
  <div className="col-md-5">
  <div className="CheckoutCart">
    {
      orders.cartItems.map(el=>{
        return <>
        <div className={`${styles.cartItem}`}>
          <div className="row">
            <div className="col-md-3" style={{position:'relative'}}>
            <Badge badgeContent={el.quantity} color="secondary">

              <Image className={`${styles.image}`} 
              src={`${el.images[0].sourceUrl}`} width={70}
              alt={el.images[0]?.altText}
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
        </>
      })
      
    }
    <div className="centered elements">
  <h5>
  Total Order : 
  </h5>
  <h6>{orders?.TotalCart
}</h6>
</div>

<button className='black  m-auto' style={{width:'90%'}} onClick={()=>{router.push('/')}}>continue shopping</button>
   </div>
  </div>
</div>
  

  </div>
  )
}

export default ThankYou
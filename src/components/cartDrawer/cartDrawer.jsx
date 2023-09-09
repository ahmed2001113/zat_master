import { CartActions } from '@/src/store/cart/cart.reducer';
import { CartOpen, cartItems, totalCart, totalPaid } from '@/src/store/cart/cart.selector';
 import React, { useEffect, useState } from 'react'
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styles  from './cart.module.css'
import CartItem from './cartItem';
import { useRouter } from 'next/router';
import { GlobalSelector } from '@/src/store/global/globalStore.Selector';
import { userSelectMemo } from '@/src/store/user/user.selector';
export default function CartDrawer() {
  const cartOpenS = useSelector(CartOpen)
const dispatch = useDispatch()
  const CartIems  = useSelector(cartItems);
  const Total = useSelector(totalPaid);
  const router = useRouter();
  const {IsMatch} =useSelector(GlobalSelector) ;
  const [cartInfo,setCatInfo]=useState({
    total:Total,
    carts:CartIems
  })
  const user = useSelector(userSelectMemo)
 

  useEffect(()=>{
   if(user){
     const totalPaidCart = user?.cart?.length!==0? user?.cart?.reduce((price,item)=>{
    return price+item.price*item.quantity
},0):0;

setCatInfo({
  ...cartInfo,
  total :totalPaidCart,
  carts:user?.cart
})


   }
  },[])
const CheckoutCard = ()=>{

  router.push('/checkout');
  
}
  
   const handleClose = () => dispatch(CartActions.setCartOpen(false));
   return (
    < >
          <Offcanvas show={cartOpenS} placement={IsMatch?'bottom':'start'}  className={styles.CartDrawer} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
   
   <div className={`${styles.cartitems}`}>
    {
      cartInfo.carts.map(item=>{
        return <CartItem  key={item.id} item={item}/>

      })
    }
   </div>

   <p className="centered">
  Total <span>{cartInfo.total} LE</span>
   </p>
   <p>Shipping and taxes calculated at checkout.</p>
   <div className={`${styles.button}`}>
    <button onClick={handleClose} className={`${styles.ci}`}>
      Continue shopping
    </button>
    <button className='black' onClick={CheckoutCard}>CheckOut</button>
   </div>
        </Offcanvas.Body>
      </Offcanvas>
    </ >
  )
}

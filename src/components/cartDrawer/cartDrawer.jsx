import { CartActions } from '@/src/store/cart/cart.reducer';
import { CartOpen, cartItems, totalCart, totalPaid } from '@/src/store/cart/cart.selector';
import Image from 'next/image';
import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styles  from './cart.module.css'
import CartItem from './cartItem';
import { useRouter } from 'next/router';
export default function CartDrawer() {
  const cartOpenS = useSelector(CartOpen)
const dispatch = useDispatch()
  const CartIems  = useSelector(cartItems);
  const Total = useSelector(totalPaid);
  const router = useRouter()
const CheckoutCard = ()=>{

  router.push('/checkout');
      const handleClose = () => dispatch(CartActions.setCartOpen(false));

}
  console.log(CartIems)
    const handleClose = () => dispatch(CartActions.setCartOpen(false));
   return (
    < >
          <Offcanvas show={cartOpenS} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
   
   <div className={`${styles.cartitems}`}>
    {
      CartIems.map(item=>{
        return <CartItem  key={item.id} item={item}/>

      })
    }
   </div>

   <p className="centered">
  Total <span>{Total} LE</span>
   </p>
   <p>Shipping and taxes calculated at checkout.</p>
   <div className={`${styles.button}`}>
    <button className={`${styles.ci}`}>
      Continue shopping
    </button>
    <button className='black' onClick={CheckoutCard}>CheckOut</button>
   </div>
        </Offcanvas.Body>
      </Offcanvas>
    </ >
  )
}

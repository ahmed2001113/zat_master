
import { wishlistSelector } from '@/src/store/wishlist/wishlistSelector';
import { wishlistActions } from '@/src/store/wishlist/wishlistslice';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import WishlistItem from './wishlistitem';
import styles from './wishlist.module.css'

function WishListDrawer() {
     const {open,wishlistItems} = useSelector(wishlistSelector);
const dispatch= useDispatch()
    const handleShowClose = () => dispatch(wishlistActions.setWishlistOpen());
 
  return (
    <>
 

      <Offcanvas show={open} onHide={handleShowClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>WishList</Offcanvas.Title>
        </Offcanvas.Header>
    <div className={`${styles.body}`}>
    {wishlistItems.map(item=>{
        return <WishlistItem key={item?.name} item={item}/>
      })}
    </div>
      


      </Offcanvas>
    </>
  );
}

export default WishListDrawer;

import { wishlistSelector } from '@/src/store/wishlist/wishlistSelector';
import { wishlistActions } from '@/src/store/wishlist/wishlistslice';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import WishlistItem from './wishlistitem';
import styles from './wishlist.module.css'
import { GlobalSelector } from '@/src/store/global/globalStore.Selector';
import { userSelectMemo } from '@/src/store/user/user.selector';

function WishListDrawer() {
  const dispatch= useDispatch();
    const currentUser = useSelector(userSelectMemo)
      const {open,wishlistItems} = useSelector(wishlistSelector);
      const handleShowClose = () => dispatch(wishlistActions.setWishlistOpen());
      const {IsMatch} =useSelector(GlobalSelector) 
    const[ wishlists,setWishlists] =useState(wishlistItems);
   useEffect(()=>{
    if(currentUser){
      const {wishlist} =currentUser;
      setWishlists(wishlist)
    }
   },[])
  return (
    <>
 

      <Offcanvas show={open} placement={IsMatch?'bottom':'end'} className={styles.wishlistDrawer} onHide={handleShowClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>WishList</Offcanvas.Title>
        </Offcanvas.Header>
    <div className={`${styles.body}`}>
    {wishlists.map(item=>{
        return <WishlistItem key={item?.name} item={item}/>
      })}
    </div>
      


      </Offcanvas>
    </>
  );
}

export default WishListDrawer;
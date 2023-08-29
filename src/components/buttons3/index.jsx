import { useDispatch } from 'react-redux'
import styles from './style.module.css'
import { CartActions } from '@/src/store/cart/cart.reducer'
import { wishlistActions } from '@/src/store/wishlist/wishlistslice'
import { useRouter } from 'next/router'
const ActionButtons = ({item={}})=>{
    const dispatch = useDispatch();
    const route = useRouter()
const addToCart= ()=>{
    dispatch(CartActions.addItemToCart(item));
    dispatch(CartActions.setCartOpen(true));
} 
const addToWishlist= ()=>{
    dispatch(wishlistActions.setWishListItem(item));

}
const BuyNow = ()=>{
    route.push(`/checkout/${item.id}`)
}

return(
    <div className={'row ${styles.divbtn}'}>
     <button onClick={addToWishlist} className={`col-md-1 ml-auto p-2 col-2 ${styles.btn_heart}` }>
            <i className="fa-regular fa-heart"
            ></i></button>
            <button onClick={addToCart} className={`col-md-5 p-2 col-10  ${styles.btn}`}>Add To Cart</button>
        <button onClick={BuyNow} className={` col-md-6 col-12  p-2 ml-auto col-10 ${styles.btn}`}>
            By Now</button>
       

    </div>
)}


export const TwoButtons =(item)=>{
    const addToCart= ()=>{
        dispatch(CartActions.addItemToCart(item));
        dispatch(CartActions.setCartOpen(true));
    } 
    const addToWishlist= ()=>{
        dispatch(wishlistActions.setWishListItem(item));
    
    }
 return(
    <div className={` row ${styles.b_2}`}>
    <button onClick={addToWishlist} className={`col-md-2 ml-auto p-2 col-2 ${styles.btn_heart}` }>
           <i className="fa-regular fa-heart"
           ></i></button>
           <button onClick={addToCart} className={`col-md-10 p-2 col-10  ${styles.btn}`}>Add To Cart</button>
        
      

   </div>
 )
 
}
export default ActionButtons;
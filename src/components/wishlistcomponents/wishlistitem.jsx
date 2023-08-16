import Image from "next/image";
import styles from './wishlist.module.css'
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { wishlistActions } from "@/src/store/wishlist/wishlistslice";
import { CartActions } from "@/src/store/cart/cart.reducer";
export default function WishlistItem({item}){
    const dispatch = useDispatch();
     const openCart = ()=>{
  dispatch( CartActions.setCartOpen(true))
 dispatch(CartActions.addItemToCart(item))
 dispatch(wishlistActions.setWishlistOpen())
  
}
const removeFromCart  =()=>{
    dispatch(wishlistActions.setWishListItem(item))
}
    

    return<>
    <div className={`row ${styles.item}`} > 

<div className="col-md-3">

    <Image src={item?.images[0].sourceUrl} width={250} height={250}/> 
</div>

<div className="col-md-9">
<div className={`${styles.first}`}>
<h6>{
        item?.name
        }</h6>
<Tooltip placement="right" title="Remove Form WishList">
<button className={`${styles.button}`} onClick={removeFromCart}>
            saved <i class="fa-solid fa-heart"></i>
        </button>

</Tooltip>

</div>
        <p dangerouslySetInnerHTML={{__html:item?.shortDescription}}/>

        <div  className={`${styles.price}`}>
        <p>{item.price} LE</p>

<p>        {item.onSale&&'on sale'}
</p>
        </div>
        <div className={`${styles.first}`}>

<button onClick={openCart}>
    Add To Cart
    </button>
    <button>
Buy Now
    </button>

</div>

</div>
    </div>
    
    
    
    </>


}
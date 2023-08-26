import Image from 'next/image'
import React from 'react'
import styles from './mainproduct.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { PreviewActions } from '@/src/store/preview/preview.slice';
import { CartActions } from '@/src/store/cart/cart.reducer';
import Link from 'next/link';
import { wishlistActions } from '@/src/store/wishlist/wishlistslice';
import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import { wishlistSelector } from '@/src/store/wishlist/wishlistSelector';
import CustomButton from '../../customsComponents/buttons/button';
import CustomButton_2 from '../../customsComponents/buttons/CustomButton_2';
function  ProdutItemMain({product,isLove=false,className}) {
 const dispatch= useDispatch();

 const OpenPreview =()=> dispatch(PreviewActions.OPENPREVIEW(product));
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const openCart = ()=>{
  dispatch( CartActions.setCartOpen(true))
 dispatch(CartActions.addItemToCart(product))
  
}
 const addToWishlist =()=>{
      dispatch(wishlistActions.setWishListItem(product))
 }
  
 
return (
 
 
 
    <>
<div className={className}>
<div className={`${styles.product}`}>
      
      <div className={`${styles.imageWrapper}`}>
      
<Link href={`/product/${product?.id}`}>
<Image
       src={product?.images[0]?.sourceUrl||product?.images[0]?.src}
      height={500}
       width={557} 
       objectFit='cover'
      sizes='100vw'
      alt={product?.images[0]?.altText}
      />
</Link>
      
      
  <div className={`${styles.flex_v}`}>
  <button className={`${styles.heart}`} onClick={addToWishlist}>
<i className="fa fa-heart fa-solid" style={{
         color:isLove?'red':'black'
      }}></i>

      </button>
      
      <button onClick={OpenPreview} className={`${styles.heart}`}>
      <i className="fa-regular fa-eye"  ></i>     
       </button>
  </div>
  {product?.onSale&&
  <div className="sale">
   On Sale 
  </div>}

      </div>
      <div className={`${styles.porduct_d}  p-2 position-relative bg-white `}>
         <div  className={`${styles.Title}`} >
            <h6>{product.name}</h6>
            <p className={`${styles.price}`}>
            <span className="priceBefore"> {product.regularPrice}</span>{product?.price}LE


               </p> 

         </div>
         <div  dangerouslySetInnerHTML={{__html:product?.shortDescription}} className={`${styles.Desc}`}/> 
         <div className='centered'>

           <CustomButton_2  bk={'#fff'}  onClick={openCart} 
           className={`${styles.Add}`}>
            Add To Cart 
            </CustomButton_2>
           <CustomButton_2   bk={'#fff'} className={`${styles.Add}`}>
           <Link href={`/checkout/${product?.id}`}>
            Buy Now
           </Link>
            </CustomButton_2>
         </div>
      </div>
      </div>
</div>
 </>
  )
  // 383∶575
}

export default  ProdutItemMain
 
 
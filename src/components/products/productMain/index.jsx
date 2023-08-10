import Image from 'next/image'
import React from 'react'
import styles from './mainproduct.module.css'
import { useDispatch } from 'react-redux'
import { PreviewActions } from '@/src/store/preview/preview.slice';
import { CartActions } from '@/src/store/cart/cart.reducer';
function  ProdutItemMain({product}) {
const dispatch= useDispatch();
const OpenPreview =()=> dispatch(PreviewActions.OPENPREVIEW(product));
console.log(product)
const openCart = ()=>{
  dispatch( CartActions.setCartOpen(true))
 dispatch(CartActions.addItemToCart(product))
  
}
  
// c
return (
    <>
<div className="col-md-3 mb-2">
<div className={`${styles.product}`}>
      
      <div className={`${styles.imageWrapper}`}>
      
      <Image
       src={product?.images[0]?.sourceUrl||product?.images[0]?.src}
      height={500}
       width={557} 
       objectFit='cover'
      sizes='100vw'/>
      
      
  <div className={`${styles.flex_v}`}>
  <button className={`${styles.heart}`}>
      <i className="fa-solid fa-heart"></i>
      </button>
      
      <button onClick={OpenPreview} className={`${styles.heart}`}>
      <i className="fa-regular fa-eye"></i>     
       </button>
  </div>
      </div>
      <div className={`${styles.porduct_d}`}>
         <div  className={`${styles.Title}`} >
            <h6>{product.name}</h6>
            <p className={`${styles.price}`}>
            <span className="priceBefore"> {product.regularPrice}</span>{product?.price}LE


               </p> 

         </div>
         <div  dangerouslySetInnerHTML={{__html:product?.shortDescription}} className={`${styles.Desc}`}/> 
         <div className='centered'>

           <button onClick={openCart} className={`${styles.Add}`}>
            Add To Cart 
            <i className="fa-solid fa-arrow-right-long"></i>
           </button>
           <button className={`${styles.Add}`}>
            Buy Now
            <i className="fa-solid fa-arrow-right-long"></i>
           </button>
         </div>
      </div>
      </div>
</div>
 </>
  )
  // 383∶575
}

export default  ProdutItemMain
 
 
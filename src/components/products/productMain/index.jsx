import Image from 'next/image'
import React from 'react'
import styles from './mainproduct.module.css'
import { useDispatch } from 'react-redux'
import { PreviewActions } from '@/src/store/preview/preview.slice';
import { CartActions } from '@/src/store/cart/cart.reducer';
import Link from 'next/link';
function  ProdutItemMain({product}) {
const dispatch= useDispatch();
const OpenPreview =()=> dispatch(PreviewActions.OPENPREVIEW(product));
console.log(product)
const openCart = ()=>{
  dispatch( CartActions.setCartOpen(true))
 dispatch(CartActions.addItemToCart(product))
  
}
// test
   return (
    <>
<div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 pb-3 pb-md-6 pb-xl-8">
<div className={`${styles.product}`}>
      
      <div className={`${styles.imageWrapper}`}>
      
<Link href={`/product/${product?.id}`}>
<Image
       src={product?.images[0]?.sourceUrl||product?.images[0]?.src}
      height={500}
       width={557} 
       objectFit='cover'
      sizes='100vw'/>
</Link>
      
      
  <div className={`${styles.flex_v}`}>
  <button className={`${styles.heart}`}>
      <i className="fa-solid fa-heart"></i>
      </button>
      
      <button onClick={OpenPreview} className={`${styles.heart}`}>
      <i className="fa-regular fa-eye"></i>     
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
 
 
import React from 'react'
import ProdutItemMain from '../products/productMain';
import Product_show from '../products/productMain/product_show';
import { useSelector } from 'react-redux';
import { wishlistSelector } from '@/src/store/wishlist/wishlistSelector';
import SwippeCentered from '../customsComponents/SwippeCentered';

export default function RelatedProducts({products,id}) {
  const {wishlistItems} =useSelector(wishlistSelector)
    const productsAfter = products.filter(product=>product.id!==id.trim()).map(product=>{
        return {
    description:product.description,
    name:product.name,
    onSale:product.onSale,
    shortDescription:product.shortDescription,
    stockQuantity:product?.stockQuantity,
    stockStatus:product?.stockStatus,
    images:[...product.galleryImages?.nodes,product?.image],
    id:product?.id,
    product_id:product?.productId,
    price:product.price,
    regularPrice:product.regularPrice
         }
      }) ||[];

   
   return (
    
    
    <div className="row">

        {
          <SwippeCentered  isHome={false} products={productsAfter} style={{margin:'0px'}}/>
            // productsAfter.filter((i,idx)=>idx<4).map(product=>{


            //   return  <ProdutItemMain isLove={isWishlist(product.id)} key={product.id} className={'col-md-3'} product={product}/>
            // })
        }
    </div>
  )
}
//s
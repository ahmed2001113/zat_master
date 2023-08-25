import React from 'react'
import ProdutItemMain from '../products/productMain';
import Product_show from '../products/productMain/product_show';

export default function RelatedProducts({products,id}) {
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
            productsAfter.filter((i,idx)=>idx<4).map(product=>{


              return  <Product_show key={product.id} className={'col-md-3'} product={product}/>
            })
        }
    </div>
  )
}
//s
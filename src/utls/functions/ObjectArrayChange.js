export default function ModifyObjectOrArray(products) {
    if (Array.isArray(products)){
       if(products.length){
    return  products.map(products=>{
       return  {
           description:products.description,
           name:products.name,
           onSale:products.onSale,
           shortDescription:products.shortDescription,
           stockQuantity:products?.stockQuantity,
           stockStatus:products?.stockStatus,
           images:[...products.galleryImages?.nodes,products?.image],
           id:products?.id,
           product_id:products?.productId,
           price:products.price,
           regularPrice:products.regularPrice
         }
     })
       }else{
         return []
       }
     }      
     else if(typeof products === "object"){
       if (Object.keys(products).length) {
         return  {
           description:products.description,
           name:products.name,
           onSale:products.onSale,
           shortDescription:products.shortDescription,
           stockQuantity:products?.stockQuantity,
           stockStatus:products?.stockStatus,
           images:[...products.galleryImages?.nodes,products?.image],
           id:products?.id,
           product_id:products?.productId,
           price:products.price,
           regularPrice:products.regularPrice
         }
     }else {
       return {}
     }
   }else{
     return "it is not an array and not a object "
   }
 }
  
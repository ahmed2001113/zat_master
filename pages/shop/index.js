import ProdutItemMain from "@/src/components/products/productMain";
import client from "@/src/utls/apolloConfigrations/apolloClient";
  // import {  getProductsData } from "@/src/utls/productCategories";
import { All_PRODUCTS_QUERY } from "@/src/utls/queries";
 
 import { useEffect } from "react";
 
const AllCategoriesProducts = ({products})=>{
console.log(products)
  //return array of params
useEffect(()=>{
//  async function get (){
//   let productsData = []
//  try {
  
//   console.log(productsData,products)
//  } catch (error) {
//   console.log(error)
//  }
//  }
//  get()
})
     return(

        <>
        <div className="row">
             {
                products.map(product=>{

                  return  <ProdutItemMain  product={product}/>
                })
            }
         </div>
        </>
    )
}


export default AllCategoriesProducts


export async function getStaticProps(){
      let productsData =[];
 try {
  const { data: {products} } = await client.query({
    query:All_PRODUCTS_QUERY
  });
  
    productsData = products?.nodes?.map(product=>{
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
} catch (error) {
    console.log(error)
    
}
    return{
        props:{
            products:productsData,
          },
          revalidate:10
    }


}
 
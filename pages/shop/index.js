import { HEADER_FOOTER_ENDPOINT } from "@/src/EndPoints";
import RootLayout from "@/src/components/layout";
import ProdutItemMain from "@/src/components/products/productMain";
import Store from "@/src/storeModule/store";
import client from "@/src/utls/apolloConfigrations/apolloClient";
  // import {  getProductsData } from "@/src/utls/productCategories";
import { All_PRODUCTS_QUERY } from "@/src/utls/queries";
import axios from "axios";
 
 import { useEffect } from "react";
 
const AllCategoriesProducts = ({products,footer_header})=>{
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
          <RootLayout headerFooter={footer_header}>
          <Store 
           products={products}/>

 
         </RootLayout>
        </>
    )
}


export default AllCategoriesProducts

let footer_header ={}  
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
try {
    footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);

} catch (error) {
  console.log(error)

}
    return{
        props:{
            products:productsData,
            footer_header:footer_header?.data,
          },
          revalidate:10
    }


}
 
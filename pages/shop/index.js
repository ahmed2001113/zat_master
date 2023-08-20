 import { HEADER_FOOTER_ENDPOINT } from "@/src/EndPoints";
 import RootLayout from "@/src/components/layout";
 import { ProductsInfinteScroll } from "@/src/lib/queries/fetchcategoriesproductsinfinte";
import Store from "@/src/storeModule/store";
import client from "@/src/utls/apolloConfigrations/apolloClient";
import ModifyObjectOrArray from "@/src/utls/functions/ObjectArrayChange";
import { getPage } from "@/src/utls/functions/get-page-seo";
  // import {  getProductsData } from "@/src/utls/productCategories";
import { All_PRODUCTS_QUERY } from "@/src/utls/queries";
import axios from "axios";
import { Router, useRouter } from "next/router";
 
 import { useEffect, useRef, useState } from "react";
 
const AllCategoriesProducts = ({products,footer_header,seo,...others})=>{


// this function it's worked correctly as i want 
 const {pageInfo,nodes}= products;
const [loading,setLoading]=useState(false);
const [pageInferomation,setPageInfo]=useState(pageInfo)
const [productsData,setProductsData]=useState(ModifyObjectOrArray(nodes));
 

     return(
        <>
          <RootLayout headerFooter={footer_header} seo={seo}>
 
 <Store  
           products={productsData}/>
    
  {/* {productsScroll.map(item=>{
  console.log(item)
  return <h1 style={{height:'500px'}}>{item.name}</h1>
})} */}
 
         </RootLayout>
        </>
    )
}


export default AllCategoriesProducts

let footer_header ={}  ;
let seo = []
let categoryInferomation  = {}
export async function getStaticProps(){
      let productsData =[]; 
 try {
  const { data: {products} } = await client.query({
    query:ProductsInfinteScroll,
    variables:{ first: 1000, after: null }
  });
  categoryInferomation=products
  
} catch (error) {
    console.log(error)
    
}
try {
    footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);

} catch (error) {
  console.log(error)

}try {
  seo = await getPage('shop');

} catch (error) {
  
}
    return{
        props:{
            products:categoryInferomation,
            footer_header:footer_header?.data,
            seo:seo[0],
           },
          revalidate:10
    }


}
 
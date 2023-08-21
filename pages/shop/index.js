 import { HEADER_FOOTER_ENDPOINT } from "@/src/EndPoints";
 import RootLayout from "@/src/components/layout";
import { ProductsDataQuery } from "@/src/lib/queries/GET_PRODUCTSDATA";
 import { ProductsInfinteScroll } from "@/src/lib/queries/fetchcategoriesproductsinfinte";
import { FiltersAction } from "@/src/store/filters/filter.slice";
import { FilterSelector } from "@/src/store/filters/filtersSelectores";
import Store from "@/src/storeModule/store";
import client from "@/src/utls/apolloConfigrations/apolloClient";
import ModifyObjectOrArray from "@/src/utls/functions/ObjectArrayChange";
import { getPage } from "@/src/utls/functions/get-page-seo";
  // import {  getProductsData } from "@/src/utls/productCategories";
import { All_PRODUCTS_QUERY } from "@/src/utls/queries";
import { useQuery } from "@apollo/client";
import axios from "axios";
import { Router, useRouter } from "next/router";
 
 
 import { useEffect, useRef, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import InfiniteScroll from  "react-infinite-scroller"
import { useDispatch, useSelector } from "react-redux";
const AllCategoriesProducts = ({products,footer_header,seo,price,...others})=>{
 const dispatch = useDispatch()
  dispatch(FiltersAction.addPrices(price))
 const {Filters} = useSelector(FilterSelector)
console.log(Filters)
// this function it's worked correctly as i want 
 const {pageInfo,nodes}= products;
const [loadings,setLoading]=useState(false);
const [pageInferomation,setPageInfo]=useState(pageInfo)
const [productsData,setProductsData]=useState(ModifyObjectOrArray(nodes));


const FilterFunction = async()=>{
  console.log({...Filters});

try{
  const {data,loading,error}= await client.query({
    query:ProductsInfinteScroll,
    variables:{
      first:10,
      ...Filters
    }
  });
  console.log(data,error)
  setLoading(loading)
  setProductsData(ModifyObjectOrArray(data?.products?.nodes));
  setPageInfo(data?.products?.pageInfo)
}
catch(err){
  console.log(err)
}
}
useEffect(()=>{

  FilterFunction()
},[Filters])

 console.log(pageInferomation)
const loadMore = async()=>{
  const {data,loading}= await client.query({
    query:ProductsInfinteScroll,
    variables:{
      first:10,
      after:pageInferomation.endCursor
    }
  });
  setLoading(loading)
  setProductsData(ModifyObjectOrArray(data?.products?.nodes));
  setPageInfo(data?.products?.pageInfo)

}
const loadLess = async()=>{
  const {data,loading}= await client.query({
    query:ProductsInfinteScroll,
    variables:{
      last:10,
      before:pageInferomation.startCursor
    }
  });
  setProductsData(ModifyObjectOrArray(data?.products?.nodes));
  setPageInfo(data?.products?.pageInfo);
  console.log(loading)
  setLoading(loading)

}
console.log(loadings);

     return(
        <>
          <RootLayout headerFooter={footer_header} seo={seo}>
 
 <Store  
           products={productsData}/>
 
 

<div className="end_nav">
<Button  variant="dark" onClick={loadLess} disabled={!pageInferomation.hasPreviousPage}>
    
        Previous Page
    {
      loadings&&      <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
    }   
      </Button> 
<Button variant="dark" onClick={loadMore}   disabled={!pageInferomation.hasNextPage}>
    
        Next Page
    {
      loadings&& <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
    }   
      </Button> 
 

</div>
{   loadings&& <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />}
         </RootLayout>
        </>
    )
}


export default AllCategoriesProducts

let footer_header ={}  ;
let seo = []
let categoryInferomation  = {};
let MaxPrice = 0;
let MinPrice= 0
export async function getStaticProps(){
      let productsData =[]; 
 try {
  const { data: {products} } = await client.query({
    query:ProductsInfinteScroll,
    variables:{ first: 10, after: null }
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
try{
  const {data:{products:{nodes}}, error,loading}=await client.query({query:ProductsDataQuery});
  console.log(nodes);
  
   MaxPrice = Math.max(...nodes.map(({price})=>price));
   MinPrice = Math.min(...nodes.map(({price})=>price));
     }catch(err){
      console.log(err)
    }
    return{
        props:{
            products:categoryInferomation,
            footer_header:footer_header?.data,
            seo:seo[0],
            price:[MinPrice,MaxPrice]
           },
          revalidate:10
    }


}
 
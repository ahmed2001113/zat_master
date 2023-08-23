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
import { Button } from "react-bootstrap";
import InfiniteScroll from  "react-infinite-scroller"
import { useDispatch, useSelector } from "react-redux";
const AllCategoriesProducts = ({products,footer_header,seo,price,load,...others})=>{
 const dispatch = useDispatch ()
 const {Filters,sort} = useSelector(FilterSelector)
console.log(Filters)
  const {pageInfo,nodes}= products;
const [loadings,setLoading]=useState(load);
const [pageInferomation,setPageInfo]=useState(pageInfo)
const [productsData,setProductsData]=useState(ModifyObjectOrArray(nodes));
const router = useRouter()
useEffect(()=>{
  dispatch(FiltersAction.addPrices(price ))

})
const FilterFunction = async()=>{

  setLoading(true)
dispatch(FiltersAction.setLoading(false))
try{
 
  const {data,loading,error}= await client.query({
    query:ProductsInfinteScroll,
    variables:{
      first:10,
      ...Filters,
     }
  });
  console.log(data,error)
   setProductsData(ModifyObjectOrArray(data?.products?.nodes));
  setPageInfo(data?.products?.pageInfo);
  setLoading(false)
 
}
catch(err){
  dispatch(FiltersAction.setLoading(true))

  console.log(err);
  setLoading(false)

}
}
useEffect(()=>{

  FilterFunction();
},[Filters,sort]);

useEffect(() => {
  // Define your function here
  const handlePageLeave = () => {
    // Do something when the user leaves the page
    dispatch(FiltersAction.resetFilters())

  };

  // Add event listeners for both events
  window.addEventListener("beforeunload", handlePageLeave);
  router.events.on("routeChangeStart", handlePageLeave);

   return () => {
    window.removeEventListener("beforeunload", handlePageLeave);
    router.events.off("routeChangeStart", handlePageLeave);
  };
}, []);
 console.log(pageInferomation)
const loadMore = async()=>{
try {
  setLoading(true)
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
} catch (error) {
  setLoading(false)

}

}
const loadLess = async()=>{
  setLoading(true)
try {
  const {data,loading}= await client.query({
    query:ProductsInfinteScroll,
    variables:{
      last:10,
      before:pageInferomation.startCursor
    }
  });
  setProductsData(ModifyObjectOrArray(data?.products?.nodes));
  setPageInfo(data?.products?.pageInfo);
   setLoading(loading)
} catch (error) {
  setLoading(false)
}


}
console.log(loadings);

     return(
        <>
          <RootLayout headerFooter={footer_header} seo={seo}>
 {loadings?
 <h1>
  loading
 </h1>
 :null}

 {console.log(loadings)}
 <Store setLoading={setLoading} loading={loadings} category="Shop"
           products={productsData}/>
 
 

<div className="end_nav">
<Button  variant="dark" onClick={loadLess} disabled={!pageInferomation.hasPreviousPage}>
    
        Previous Page
    {
      loadings&&    <>loading</>
    }   
      </Button> 
<Button variant="dark" onClick={loadMore}   disabled={!pageInferomation.hasNextPage}>
    
        Next Page
    {
      loadings&&   <>loading</>
    }   
      </Button> 
 

</div>
{   loadings&&   <>loading</>}
         </RootLayout>
        </>
    )
}

export default AllCategoriesProducts


export async function getStaticProps(){
  let footer_header ={}  ;
let seo = []
let categoryInferomation  = {};
let MaxPrice = 0;
let MinPrice= 0;
let load =false;
 let productsData =[]; 
 try {
  const { data: {products},loading } = await client.query({
    query:ProductsInfinteScroll,
    variables:{ first: 10, after: null }
  });
  load=true
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
            price:[MinPrice,MaxPrice],
            load
           },
          revalidate:10
    }


}
 
import { SearchQuery } from "@/src/lib/queries/searchQuery"
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
 
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import { SearchPriceuery } from "@/src/lib/queries/searchPrice";
import handleRedirectsAndReturnData from "@/src/utls/functions/HandleRedirect";
 const Search =({search,SearchData,footer_header,seo,price })=>{
    const dispatch = useDispatch()
    const {Filters,sort} = useSelector(FilterSelector)
   
     const {pageInfo,nodes}= SearchData;
   const [loadings,setLoading]=useState(false);
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
       query:SearchQuery,
       variables:{
         first:10,
         ...Filters,
         search
        }
     });
     
      setProductsData(ModifyObjectOrArray(data?.products?.nodes));
     setPageInfo(data?.products?.pageInfo);
     setLoading(false)
    
   }
   catch(err){
     dispatch(FiltersAction.setLoading(true))
   
     ;
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
    
        return(
           <>
             <RootLayout headerFooter={footer_header} seo={seo}>
    {
        nodes.length?
 
        <Store setLoading={setLoading} loading={loadings} category="Shop"
        products={productsData}/>
        :<h1 className="searchNotFound">
            THere is no Search Found Please Try different Words
        </h1>
    }
   

    
    
   
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
   
 export default Search



 export async function getServerSideProps({params}){
const {search}= params;
let SearchData = []
  let footer_header ={}  ;
let seo = []
 let MaxPrice = 0;
let MinPrice= 0;
let load =false;
try {
    const { data: {products},loading } = await client.query({
      query:SearchQuery,
      variables:{ first: 10, after: null , search}
    });
    SearchData=products
    
  } catch (error) {
      
      
  }

  try {
    footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);

} catch (error) {
  

}try {
  seo = await getPage('search');

} catch (error) {
  
}
try{
  const {data:{products:{nodes}}, error,loading}=await
   client.query({query:SearchPriceuery,
variables:{
    search
}});
   
   MaxPrice = Math.max(...nodes.map(({price})=>price));
   MinPrice = Math.min(...nodes.map(({price})=>price));
     }catch(err){
      
    }
    const defaultProps= {
      props:{
        search,
        SearchData:SearchData||[],
        footer_header:footer_header?.data||{},
        seo:seo[0]||{},
        price:[MinPrice,MaxPrice]||[],
    }
    }
   
    return  handleRedirectsAndReturnData(defaultProps,SearchData)

 }
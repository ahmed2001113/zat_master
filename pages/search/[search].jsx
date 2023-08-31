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
 import { isEqual } from "lodash";
import { useLazyQuery } from "@apollo/client";
import LoadingImage from "@/src/components/customsComponents/image";
import Head from "next/head";
 const Search =({search,SearchData,footer_header,seo,price })=>{
    const dispatch = useDispatch()
    const {Filters,sort,Filtered} = useSelector(FilterSelector)
   
     const {pageInfo,nodes}= SearchData;
   const [loadings,setLoading]=useState(false);
   const [pageInferomation,setPageInfo]=useState(pageInfo)
   const [productsData,setProductsData]=useState(ModifyObjectOrArray(nodes));
   const router = useRouter();
   useEffect(() => {
    // Compare the previous and current DefaultData objects
    if (!isEqual(SearchData, productsData)) {
      dispatch(FiltersAction.addPrices(price))

      // If they are different, update the state and save the current DefaultData as prevDefaultData
      setProductsData(ModifyObjectOrArray(nodes));
      // productsData = DefaultData;
    }
  }, [SearchData]);
   useEffect(()=>{
     dispatch(FiltersAction.addPrices(price ))
    //  / Define your function here
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
   },[]);
   const initialRender = useRef(true);

   const [getData, { loading, error, data,refetch  }] = 
   useLazyQuery(SearchQuery,
    {
      onCompleted:(data)=>{
         

        setProductsData(ModifyObjectOrArray(data?.products?.nodes));
        setPageInfo(data?.products?.pageInfo);
        setLoading(loading)
  
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
    );
   const FilterFunction = async()=>{
   
     setLoading(true)

   dispatch(FiltersAction.setLoading(false))
   try{
    getData({
      variables:{
        first:100,

         ...Filters,

        search
       }
    })  }
   catch(err){
     dispatch(FiltersAction.setLoading(true))
   
     ;
     setLoading(false)
   
   }
   }
   useEffect(()=>{
    if (!initialRender.current) {

      FilterFunction();
    }
    initialRender.current = false;

   },[Filters ,Filtered]);
 
   const loadMore = async()=>{
   try {
     setLoading(true)
     getData({
      variables:{
        first:10,
        after:pageInferomation.endCursor,
        ...Filters,
        search
       }
    }) 
    
   } catch (error) {
     setLoading(false)
   
   }
   
   }
   const loadLess = async()=>{
     setLoading(true)
   try {
    getData({
      variables:{
        last:10,
        before:pageInferomation.startCursor,
        ...Filters,
        search
       }
    }) 
    
    
   } catch (error) {
     setLoading(false)
   }
   
   
   }
     
        return(
           <>
           <Head>
    <title>
 {`    Search - zat98`}
    </title>
  </Head>
           {
            loadings&&<LoadingImage/>
           }
             <RootLayout headerFooter={footer_header} seo={seo}>
    {
        nodes.length?
 
        <Store  setLoading={setLoading} loading={loadings} category="Search"
        products={productsData}/>
        :<h1 className="searchNotFound">
            THere is no Search Found Please Try different Words
        </h1>
    }
   

    
    {
       
    }
   
   {/* <div className="end_nav"> */}
   {/* <Button  variant="dark" onClick={loadLess}
    disabled={!pageInferomation.hasPreviousPage}>
       
           Previous Page
       {
         loadings&&    <>loading</>
       }    */}
         {/* </Button> 
   <Button variant="dark" onClick={loadMore}  
    disabled={!pageInferomation.hasNextPage}>
       
           Load More
       {
         loadings&&   <>loading</>
       }   
         </Button> 
    
   
   </div>
   {   loadings&&   <>loading</>} */}
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
      variables:{ first:100, search}
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
  first:100,
    search
}});
   
   MaxPrice = Math.max(...nodes.map(({price})=>price));
   MinPrice = Math.min(...nodes.map(({price})=>price));
     }catch(err){
      
    }

   
    return   {
      props:{
        search,
        SearchData:SearchData||[],
        footer_header:footer_header?.data||{},
        seo:seo[0]||{},
        price:[MinPrice,MaxPrice]||[],
    }
    }

 }
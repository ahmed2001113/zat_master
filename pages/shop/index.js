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
  import { useLazyQuery, useQuery } from "@apollo/client";
import axios from "axios";
import {   useRouter } from "next/router";
 
 
 import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
 import { useDispatch, useSelector } from "react-redux";
const AllCategoriesProducts = ({products,footer_header,seo,price,load,...others})=>{
  const dispatch = useDispatch ()
 const {Filters,sort} = useSelector(FilterSelector)

  const {pageInfo,nodes}= products;
const [loadings,setLoading]=useState(load);
const [pageInferomation,setPageInfo]=useState(pageInfo)
const [productsData,setProductsData]=useState(ModifyObjectOrArray(nodes));
const router = useRouter()
useEffect(()=>{
  dispatch(FiltersAction.addPrices(price ))

});
const [getData, { loading, error, data,refetch  }] = useLazyQuery(ProductsInfinteScroll,
  {
    onCompleted:(data)=>{
       setProductsData(ModifyObjectOrArray(data?.products?.nodes));
      setPageInfo(data?.products?.pageInfo)


    }
  }
  );

const FilterFunction = async()=>{

  setLoading(true)
dispatch(FiltersAction.setLoading(false))
try{
  getData({  variables:{
    first:10,
    ...Filters,
   }})
  
   

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
  setLoading(true)
try {
  
  getData({   variables:{
    first:10,
    after:pageInferomation.endCursor
  }});
    setLoading(false)


} catch (error) {
  setLoading(false)

}

}
const loadLess = async()=>{
 try {
  getData({   variables:{
    last:10,
    before:pageInferomation.startCursor
  }})
 
  setProductsData(ModifyObjectOrArray(data?.products?.nodes));
  setPageInfo(data?.products?.pageInfo);
   setLoading(false)
} catch (error) {
  setLoading(false)
}


}
;

     return(
        <>
          <RootLayout headerFooter={footer_header} seo={seo}>
 

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
    
    
}
try {
    footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);

} catch (error) {
  

}try {
  seo = await getPage('shop');

} catch (error) {
  
}
try{
  const {data:{products:{nodes}}, error,loading}=await client.query({query:ProductsDataQuery});
  ;
  
   MaxPrice = Math.max(...nodes.map(({price})=>price));
   MinPrice = Math.min(...nodes.map(({price})=>price));
     }catch(err){
      
    }
    return{
        props:{
            products:categoryInferomation||[],
            footer_header:footer_header?.data||{},
            seo:seo[0]||{},
            price:[MinPrice,MaxPrice]||[],
            load
           },
          revalidate:10
    }


}
 
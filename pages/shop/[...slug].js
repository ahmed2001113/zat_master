import { HEADER_FOOTER_ENDPOINT } from "@/src/EndPoints";
import RootLayout from "@/src/components/layout";
import Big from "@/src/components/skelton/skeltonswippe";
import { productCategoriesBySlug } from "@/src/lib/queries/productsBySlug";
import { FiltersAction } from "@/src/store/filters/filter.slice";
import { FilterSelector } from "@/src/store/filters/filtersSelectores";
import Store from "@/src/storeModule/store";
import client from "@/src/utls/apolloConfigrations/apolloClient";
import { FormattingProductsArray } from "@/src/utls/functions/GroupSubCategoriesByparentName";
import ModifyObjectOrArray from "@/src/utls/functions/ObjectArrayChange";
 import { GET_CATEGORIES } from "@/src/utls/queries";
import axios from "axios";
// import { getProductsData } from "@/src/utls/productCategories";
import gql from "graphql-tag";
import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect, useLayoutEffect, useState } from "react";
import { Button } from "react-bootstrap";
 import { useDispatch, useSelector } from "react-redux";

const Cat = ({data,footer_header,price,slug,loadingApi})=>{
  const {Filters,sort} = useSelector(FilterSelector)
  const [loadings,setLoading]=useState(loadingApi)
  const dispatch = useDispatch()
  const {description,  image, name } =data
 const [pageInferomation,setPageInfo]=useState(data?.products?.pageInfo)
const [productsData,setProductsData]=useState(ModifyObjectOrArray(data?.products?.nodes));
dispatch(FiltersAction.addPrices(price))
    const router = useRouter();
    ;


//  const {query:{slug} ,asPath } = router;
 console.log(slug)
// const path = asPath.split('/')
 
 // const lastparam = slug.pop();
//return array of params
const loadMore = async()=>{
  setLoading(true)
  const {data:NewData,loading}= await client.query({
    query:productCategoriesBySlug,
    variables:{
      first:10,
      after:pageInferomation.endCursor,
      slug:slug
    }
  });
  const {productCategories:{nodes:productsCat}} =NewData;
  const {products} =productsCat[0]
  const {pageInfo,nodes}=products;
 
  console.log( products)
  setLoading(loading)
  setProductsData(ModifyObjectOrArray(nodes));
  setPageInfo(pageInfo)

}
const loadLess = async()=>{
  setLoading(true)

  const {data:NewData,loading}= await client.query({
    query:productCategoriesBySlug,
    variables:{
      last:10,
      before:pageInferomation.startCursor,
      slug:slug
    }
  });
  const {productCategories:{nodes:productsCat}} =NewData;
  const {products} =productsCat[0]
  const {pageInfo,nodes}=products;
 
  console.log( products)
  setLoading(loading)
  setProductsData(ModifyObjectOrArray(nodes));
  setPageInfo(pageInfo)

}

const FilterFunction = async()=>{
  setLoading(true)

 
try{
  const {data:NewData,loading,error}= await client.query({
    query:productCategoriesBySlug,
    variables:{
      first:10,
      ...Filters,
      slug
      }
  });
 
  const {productCategories:{nodes:productsCat}} =NewData;
  const {products} =productsCat[0]
  const {pageInfo,nodes}=products;
 
  console.log( products,NewData)
  setLoading(loading)
  setProductsData(ModifyObjectOrArray(nodes));
  setPageInfo(pageInfo);
  console.log( products)

} 
catch(err){
  console.log(err)
}
}
useEffect(()=>{

  FilterFunction();
 },[Filters]);
 useLayoutEffect(()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 },[])
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
     return(

        <>
  <RootLayout headerFooter={footer_header}>
    <div className="image_handler" > 

 {loadings?<Big/>:
   image&&image.sourceUrl?
  <Image src={image?.sourceUrl||''} 
  alt={image?.altText}
   srcSet={image?.srcSet} fill/>:
<>
  
</>
 }



    </div>
     {productsData&&
     <Store  loading={loadings}
     products={productsData}/>
     } 
       <div className="end_nav">
<Button  variant="dark" onClick={loadLess} disabled={!pageInferomation.hasPreviousPage}>
    
        Previous Page
    {
      loadings&&      <>loading</>
    }   
      </Button> 
<Button 
variant="dark" onClick={loadMore}   disabled={!pageInferomation.hasNextPage}>
    
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


export default Cat


export async function getStaticProps ({params}) {
  const footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);
  let MaxPrice = 0;
  let MinPrice= 0;
  let loadingApi = true;
	const { slug } = params || {};
  // this will return the last params in slug like women/dress will return dress
  const LastParam = slug.pop()
  // let slug = 'men'
let data = {}
  // productCategoriesBySlug
  try {

   const  {data:{productCategories:{nodes}},loading,error}  = await client.query({
    query:productCategoriesBySlug ,
    variables:{slug:LastParam,first:10}
  });
  loadingApi=loading
 data =nodes[0]
  

  } catch (error) {
    console.log(error)
 }
 try{
  const {data:{products:{nodes}}, error,loading}
  =await client.query({query:ProductsDataQuery});
  console.log(nodes);
  
   MaxPrice = Math.max(...nodes.map(({price})=>price));
   MinPrice = Math.min(...nodes.map(({price})=>price));
     }catch(err){
      console.log(err)
    }

    return{
        props:{
          data,
          footer_header:footer_header?.data,
          price:[MinPrice,MaxPrice],
          slug:LastParam,
          loadingApi

        },
        revalidate:10

        // revalidate:1
         
    }


}
 
export async function getStaticPaths() {
  
    // Call the GraphQL server with the query
    const { data } = await client.query({
      query: GET_CATEGORIES
    });
   const categories = data?.productCategories?.nodes;
      let paths = [];
    for (const category of categories) {
      // Add the top-level category path
      paths.push({ params: { slug: [category.slug] } });
  
    //   Check if the category has any children
      // if (category.children?.nodes.length > 0) {
      //   // Add the child category paths
      //   for (const childCategory of category.children?.nodes) {
      //     paths.push({ params: { slug: [category.slug, childCategory.slug] } });
      //   }
      // }
    }
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  }
import { HEADER_FOOTER_ENDPOINT } from "@/src/EndPoints";
import LoadingImage from "@/src/components/customsComponents/image";
import RootLayout from "@/src/components/layout";
import { FetchCategories } from "@/src/lib/FeatchCategories";
 import { ProductsDataQuery } from "@/src/lib/queries/GET_PRODUCTSDATA";
import { ProductCategoryByCategory } from "@/src/lib/queries/productCategoryByCateg";
import { productCategoriesBySlug } from "@/src/lib/queries/productsBySlug";
import { FiltersAction } from "@/src/store/filters/filter.slice";
import { FilterSelector } from "@/src/store/filters/filtersSelectores";
import Store from "@/src/storeModule/store";
import client from "@/src/utls/apolloConfigrations/apolloClient";
  import ModifyObjectOrArray from "@/src/utls/functions/ObjectArrayChange";
 import { GET_CATEGORIES } from "@/src/utls/queries";
import { useLazyQuery } from "@apollo/client";
import axios from "axios";
import { isEqual } from "lodash";
import Head from "next/head";
// import { getProductsData } from "@/src/utls/productCategories";
 import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect,  useRef,  useState } from "react";
import { Button } from "react-bootstrap";
 import { useDispatch, useSelector } from "react-redux";

const Cat = ({data:DefaultData,footer_header,price,slug,loadingApi,categories:catLinks})=>{
  const [productsData,setProductsData] =useState(ModifyObjectOrArray(DefaultData?.nodes));
   const {Filters,sort,Filtered} = useSelector(FilterSelector)
  const [loadings,setLoading]=useState(loadingApi)
  const dispatch = useDispatch()
  const {description,  image, name } =DefaultData
  const [pageInferomation,setPageInfo]=useState(DefaultData?.pageInfo)
  const initialRender = useRef(true);
     useEffect(() => {
     if (!isEqual(DefaultData, productsData)) {
      dispatch(FiltersAction.addPrices(price))
        

      setProductsData(ModifyObjectOrArray(DefaultData?.nodes));

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

     }
  }, [DefaultData]);  
 
 
  const [getData, { loading, error, data,refetch,fetchMore  }] =
   useLazyQuery(ProductCategoryByCategory,
    {
      onCompleted:(data)=>{
         const {products} =data;
        const {pageInfo,nodes}=products;
        
        setProductsData(ModifyObjectOrArray(nodes));
        setPageInfo(pageInfo);
         
        setLoading(loading);
         
   
       },
       onError:(err)=>{
         
       }
    }
    );
  
     const FilterFunction = async()=>{
      setLoading(true)
    
     
    try{
  getData({
        variables:{
          first:6,
          ...Filters,
          category:slug
          }
      })
   
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } 
    catch(err){
       
    }
    }
    useEffect(()=>{
      if (!initialRender.current) {
  
        FilterFunction();
      }
      initialRender.current = false;
   
  
    },[Filters,Filtered]);
  
  const loadMore = async()=>{
    setLoading(true)
    getData({
      variables:{
        first:6,
        ...Filters,
        after:pageInferomation.endCursor,
        category:slug
      }
  })
   
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 
  }
const loadLess = async()=>{
  setLoading(true)
  getData({
    variables:{
      last:6,
      before:pageInferomation.startCursor,
      ...Filters,
      category:slug

    }
  })
   
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 
}

 
 
      return(

        <>
          <Head>
    <title>
     {name} - zat98
    </title>
  </Head>
      {
        loadings? <LoadingImage/>:null
      } 
  <RootLayout headerFooter={footer_header} categories={catLinks}>
    {/* <div className="image_handler" > 

 {loadings?<Big/>:
   image&&image.sourceUrl?
  <Image src={image?.sourceUrl||''} 
  alt={image?.altText}
   srcSet={image?.srcSet} fill/>:
<>
  
</>
 } */}



    {/* </div> */}
     {productsData&&
     <Store category={name}  loading={loadings}
     products={productsData}/>
     

} 
       <div className="end_nav">
<Button  variant="dark" onClick={loadLess} 
disabled={!pageInferomation.hasPreviousPage&&!loading}>
    
        Previous Page
    {
      loadings&&      <>loading</>
    }   
      </Button> 
<Button 
variant="dark" onClick={loadMore}   disabled={!pageInferomation.hasNextPage&&!loading}>
    
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
   let data = {};
  let categories =[]
  try {
  categories =  await FetchCategories()
 
 } catch (error) {
  
 }
 
   try {

   const  {data:{products},loading,error}  = await client.query({
    query:ProductCategoryByCategory ,
    variables:{category:slug,first:6}
  });
  loadingApi=loading
 data =products
  

  } catch (error) {
     
 }
 try{
  const {data:{products:{nodes}}, error,loading}
  =await client.query({query:ProductCategoryByCategory,
    variables:{category:slug}

 });
   ;
  
   MaxPrice = Math.max(...nodes.map(({price})=>price));
   MinPrice = Math.min(...nodes.map(({price})=>price));
     }catch(err){
       
    }
 

    return  {
      props:{
        data:data||{},
        footer_header:footer_header?.data,
        price:[MinPrice,MaxPrice]||[],
        slug:slug,
        loadingApi,
        categories:categories||[]
        
      },
      revalidate:10
    }
     

}
 
export async function getStaticPaths() {
  
    // Call the GraphQL server with the query
    const { data } = await client.query({
      query: GET_CATEGORIES
    });
     
   const categories = data?.productCategories?.nodes;
    const paths=   categories.map(item=>{
           
          return {params:{slug:item.slug}}
        })
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  }
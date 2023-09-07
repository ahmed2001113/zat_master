 import { Inter } from 'next/font/google'
 import RootLayout from '@/src/components/layout'
import axios from 'axios'
import { HEADER_FOOTER_ENDPOINT } from '../src/EndPoints'
  import client from '../src/utls/apolloConfigrations/apolloClient'
 import {  useEffect, useRef, useState } from 'react'
     import SwippeCentered from '@/src/components/customsComponents/SwippeCentered'
 import WithNoParentCategories from '@/src/components/productWithNoCategories/WithNoParentCategories'
 import { getPage } from '@/src/utls/functions/get-page-seo'
 
import SwippedCenteredSkelton from '@/src/components/skelton/centered'
import { GETCATEGORIES_WITH_NO_PARENT } from '@/src/lib/queries/categoriesWithPictures';
 import ModifyObjectOrArray from '@/src/utls/functions/ObjectArrayChange'
import { PRODUCTS_QUERY } from '@/src/lib/queries/Product_query'
import Swipecarousel from '@/src/components/customsComponents/swipe_carousel/swipe.carousel'
import { useInView } from 'framer-motion'
import Head from 'next/head'
import Big from '@/src/components/skelton/skeltonswippe'
import { FetchCategories } from '@/src/lib/FeatchCategories'
export default function Home({footer_header,products,categoriesWithNoParent,load,seo,categories}) {
 const [loading,setLoading]=useState(load);
   let ref2=useRef();
  let isInView2 = useInView(ref2 , {once: true});
  useEffect(()=>{
    setLoading(false)
  },[])
     return (
    <>
   <RootLayout headerFooter={footer_header} seo={seo} categories={categories}>
   <Head>
        <title>
          {`Home - zat98`}
        </title>
      </Head>
 {loading?<Big/>:

<Swipecarousel />

}    
   {loading?
<SwippedCenteredSkelton/>:   
  <SwippeCentered isHome={true} products={products}/>
} 

<div ref={ref2} style={{width:'1px',height:'1px'}}></div>

{isInView2 && <WithNoParentCategories categories={categoriesWithNoParent} />}
      </RootLayout>
    </>
  )
}



export const   getStaticProps = async( )=>{
 const footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);
 let  productResults = [];
let categoriesWithNoParent = [];
let load=false;
 let categories =[]
  try {
  categories =  await FetchCategories()

 } catch (error) {
  
 }
 let seo = []
try{
  const products =  await client.query({query:PRODUCTS_QUERY});
  console.warn(products)
  productResults =ModifyObjectOrArray( products?.data?.products?.nodes)
 ||[]
load=true
 }catch(error){
  ;
  load=true
}

try{
  const {data:{productCategories:{nodes}}} =await client.query({
    query:GETCATEGORIES_WITH_NO_PARENT });

    categoriesWithNoParent = nodes

    load=true

  }catch(err){

}
try {
  seo = await getPage('home');
  load=true

} catch (error) {
}

 return   {
  props:{
    footer_header:footer_header?.data||{},
    products:productResults||[],
    categoriesWithNoParent:categoriesWithNoParent||[],
    seo:seo[0]||[],
    load,
    categories:categories||[]

   },
   revalidate:10

}

}

 import { Inter } from 'next/font/google'
 import RootLayout from '@/src/components/layout'
import axios from 'axios'
import { HEADER_FOOTER_ENDPOINT } from '../src/EndPoints'
  import client from '../src/utls/apolloConfigrations/apolloClient'
 import {  useRef, useState } from 'react'
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
export default function Home({footer_header,products,categoriesWithNoParent,load,seo}) {
 const [loading,setLoading]=useState(load);
   
  let ref2=useRef();
  let isInView2 = useInView(ref2 , {once: true});
     return (
    <>
   <RootLayout headerFooter={footer_header} seo={seo}>
   <Head>
        <title>
          {`Home - zat98`}
        </title>
      </Head>
 {/* {loading?<Big/>:


}     */}
    <Swipecarousel />
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
 const SpecifiedCategories = ["Shirts","Unisex Hoodes"];
 let seo = []
try{
  const products =  await client.query({query:PRODUCTS_QUERY});
  console.warn(products)
  productResults =ModifyObjectOrArray( products?.data?.products?.nodes)
 ||[]
load=false
 }catch(error){
  ;
  load=false
}

try{
  const {data:{productCategories:{nodes}}} =await client.query({
    query:GETCATEGORIES_WITH_NO_PARENT });

    categoriesWithNoParent = nodes
console.warn(categoriesWithNoParent)
 }catch(err){

}
try {
  seo = await getPage('home');

} catch (error) {
  
}
 
 return   {
  props:{
    footer_header:footer_header?.data||{},
    products:productResults||[],
    categoriesWithNoParent:categoriesWithNoParent||[],
    seo:seo[0]||[],
    load
   },
   revalidate:10

}

}

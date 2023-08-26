 import { Inter } from 'next/font/google'
 import RootLayout from '@/src/components/layout'
import axios from 'axios'
import { HEADER_FOOTER_ENDPOINT } from '../src/EndPoints'
 const inter = Inter({ subsets: ['latin'] })
  import client from '../src/utls/apolloConfigrations/apolloClient'
 import { useEffect, useState } from 'react'
import {  PRODUCTS_QUERY } from '../src/utls/queries'
    import SwippeCentered from '@/src/components/customsComponents/SwippeCentered'
   import { isEmpty } from 'lodash'
import WithNoParentCategories from '@/src/components/productWithNoCategories/WithNoParentCategories'
 import { getPage } from '@/src/utls/functions/get-page-seo'
 
import SwippedCenteredSkelton from '@/src/components/skelton/centered'
 import { useRouter } from 'next/dist/client/router'
import { GETCATEGORIES_WITH_NO_PARENT } from '@/src/lib/queries/categoriesWithPictures';
import handleRedirectsAndReturnData from '../src/utls/functions/HandleRedirect.js'
import ModifyObjectOrArray from '@/src/utls/functions/ObjectArrayChange'
export default function Home({footer_header,products,categoriesWithNoParent,load,seo}) {
 const [loading,setLoading]=useState(load);
 const router= useRouter()
useEffect(()=>{
  setLoading(router.isFallback )
},[])
  if ( isEmpty( products ) ) {
		return null;
	}
     return (
    <>
   <RootLayout headerFooter={footer_header} seo={seo}>
{/* {loading?<Big/>:
    <Swipecarousel />

}     */}

   {loading?
<SwippedCenteredSkelton/>:   
  <SwippeCentered products={products}/>
} 
<WithNoParentCategories categories={categoriesWithNoParent}/>
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
const defaultProps  ={
  props:{
    footer_header:footer_header?.data||{},
    products:productResults||[],
    categoriesWithNoParent:categoriesWithNoParent||[],
    seo:seo[0]||[],
    load
   },
   revalidate:10

}
 return   handleRedirectsAndReturnData(defaultProps,productResults)


}

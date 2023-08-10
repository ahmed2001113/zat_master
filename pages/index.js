 import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainHeader from '@/src/components/layout/mainHeader'
import RootLayout from '@/src/components/layout'
import axios from 'axios'
import { HEADER_FOOTER_ENDPOINT } from '../src/EndPoints'
 const inter = Inter({ subsets: ['latin'] })
  import client from '../src/utls/apolloConfigrations/apolloClient'
 import { useEffect } from 'react'
import { Categories_query, Categories_query_all, PRODUCTS_QUERY } from '../src/utls/queries'
import MainSlider from '@/src/components/Sliders/MainSlider'
import Title from '@/src/components/title'
import groupObjects from '@/src/utls/functions/GroupSubCategoriesByparentName'
import ProdutItemMain from '@/src/components/products/productMain'
import SwippeCentered from '@/src/components/customsComponents/SwippeCentered'
import PreviewComponent from '@/src/components/previewComponent'
import CartDrawer from '@/src/components/cartDrawer/cartDrawer'
import Swipecarousel from '@/src/components/customsComponents/swipe_carousel/swipe.carousel'
import { isEmpty } from 'lodash'
 
export default function Home({footer_header,products}) {
  // console.log(footer_header?.data)
  if ( isEmpty( products ) ) {
		return null;
	}
 console.log(products)
    return (
    <>
   <RootLayout headerFooter={footer_header}>
    <Swipecarousel />
    

     <SwippeCentered products={products}/>


      </RootLayout>
    </>
  )
}



export const   getStaticProps = async( )=>{
 const footer_header = await axios.get(HEADER_FOOTER_ENDPOINT);
let  productResults = []
 const SpecifiedCategories = ["Shirts","Unisex Hoodes"]
try{
  const products =  await client.query({query:PRODUCTS_QUERY});
  console.warn(products)
  productResults = products?.data?.products?.nodes?.map(product=>{
    return {
description:product.description,
name:product.name,
onSale:product.onSale,
shortDescription:product.shortDescription,
stockQuantity:product?.stockQuantity,
stockStatus:product?.stockStatus,
images:[...product.galleryImages?.nodes,product?.image],
id:product?.id,
product_id:product?.productId,
price:product.price,
regularPrice:product.regularPrice
     }
  }) ||[]

 }catch(error){
  console.log(error.response.data)
}
 return{
  props:{
    footer_header:footer_header?.data,
    products:productResults
  }
}

}
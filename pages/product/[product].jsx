import client from '@/src/utls/apolloConfigrations/apolloClient'
import { All_PRODUCTS_QUERY, PRODUCT_BY_ID } from '@/src/utls/queries'
import React, { useEffect } from 'react'
import styles from './product.module.css'
import Image from 'next/image'
import Certifications from '@/src/components/certifications'
import Quantity from '@/src/components/customsComponents/quantity/Quantity';
import love from '../../public/svgs/love.svg'
import RootLayout from '@/src/components/layout'
import { HEADER_FOOTER_ENDPOINT } from '@/src/EndPoints'
import axios from 'axios'
import RelatedProducts from '@/src/components/relatedproducts/RelatedProducts'
import { useRouter } from 'next/router'
import ModifyObjectOrArray from '@/src/utls/functions/ObjectArrayChange'
export default function Product({product,footer_header,relatedProducts}) {
const router = useRouter();
const {product:id}=router.query;
      useEffect(()=>{
         const get = (async()=>{
       

        })()
    },[])
 const {stockQuantity,
    slug,
    name,
    stockStatus,
    image,
    galleryImages,
    ...others
 }=product;
  function getImages(images) {
    // Using object destructuring to get the length and the last element
    const {length, [length - 1]: lastImage} = images;
  
    // Using array destructuring to get the second element
    const [, secondImage,...restImages] = images;
  
    // Using the slice() method to get the rest of the elements, excluding the first and the last
   
    // Returning an array of second image, last image and rest of images
     return [secondImage, lastImage, restImages];
  }
  
     const productAfterValidate = {
name,
stockStatus,
images:[...galleryImages?.nodes,image],
...others
     }
  const [second,lastImage,restImages]= getImages(productAfterValidate?.images)
//  const [ ,second,,...restImages] = productAfterValidate?.images;
   return (
<>
<RootLayout headerFooter={footer_header}>
    
<div className="row">
     
     <div className={`${styles.left} col-md-7`}>
     <div className="row" style={{padding:'0px'}}>
     <div className='col-md-12 image_holder'>
 
    {productAfterValidate.images?.length >2 ?
      <Image style={{objectFit:'cover'}} className={`${styles.image_holder}`} src={second?.sourceUrl}
       srcSet={second?.srcSet}  fill/>:
      <Image   style={{objectFit:'cover'}}  className={`${styles.image_holder}`} src={image?.sourceUrl} 
      srcSet={image?.srcSet}  fill/>
      }
     
     </div>
     {
     
     productAfterValidate.images?.length && restImages.slice(0,-1).map(image=>{
         return<div className='col-md-6 image_holder' style={{padding:'0px'}}>
 
 {image !==null&&<Image src={image?.sourceUrl} srcSet={image?.srcSet} width={600} height={800}/>}
             </div>
     })
 }
    
     </div>
     </div>
     <div className={`${styles.right   } container col-md-5`}>
        <h6 className={`${styles.name}`}>{name}</h6>
        <p  className={`${styles.desc}`} dangerouslySetInnerHTML={{__html:productAfterValidate?.shortDescription}}></p>
        <p className={`${styles.price}`}>
         {productAfterValidate?.price} LE
      
        </p>
     
     <p>
         Select Quentity
     </p>
        <Quantity item={product}/>
     
     
     
           <h6 className={`${styles.chec}`}>
         Checkout securely with
     
         </h6>
         <Certifications/>
     
         <div className={`${styles.buttons}`}>
     <button className="black">
         Add To Cart </button>
         <button className={`black ${styles.love}`}>
         Buy Now
             </button>
     </div>
     
     </div>
     </div>

<div className={`${styles.think}`}>
    
<h4>
     You may also like

     </h4>
     <p>
     We think these styles match yours. Discover your <br/> next favourite piece.
     </p>


     <RelatedProducts id={id} products={relatedProducts} />
</div>
</RootLayout>
</>
  )
}



export async function getStaticProps({params}){
    const {product} =params;
    let footer_header = {}
    let productData ={}
    let relatedProducts = []

    try {
        footer_header =await axios.get(HEADER_FOOTER_ENDPOINT);
    } catch (error) {
        
    }
    try {
        const {data} = await client.query({
            query:All_PRODUCTS_QUERY
         });
         const products = data?.products?.nodes;
    
          productData =  products.find(item=>item.id ===product);
    } catch (error) {
        
    }
     try {
        const {data:{product:{productCategories:{nodes}}}} = await client.query({
            query:PRODUCT_BY_ID,
            variables:{id:product.trim()}
        });
    
    relatedProducts = nodes[0]?.products?.nodes;
    } catch (error) {
    }
     return{
    props:{
        product:productData,
        footer_header:footer_header?.data,
        relatedProducts:relatedProducts
    } 
}

}

export async function  getStaticPaths(){

    const {data} = await client.query({
        query:All_PRODUCTS_QUERY
     });
     const products = data?.products?.nodes;


    const paths = products.map(product=>{

        return{
            params:{product:product.id}
        }
    })

return{
    paths,
    fallback:false
}

}
import client from '@/src/utls/apolloConfigrations/apolloClient'
 import React, {  useEffect, useRef, useState } from 'react'
import styles from './product.module.css'
import Image from 'next/image'
import Certifications from '@/src/components/certifications'
import Quantity from '@/src/components/customsComponents/quantity/Quantity';
 import RootLayout from '@/src/components/layout'
import { HEADER_FOOTER_ENDPOINT } from '@/src/EndPoints'
import axios from 'axios'
import RelatedProducts from '@/src/components/relatedproducts/RelatedProducts'
  import { ProductPage } from '@/src/lib/queries/productPage'
import ReviewContainer from '@/src/components/reviewsComponents/productreviewContainter';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import ImagePreview from '@/src/components/Image_preview/images_preview'
 import { ProductPathsQuery } from '@/src/lib/queries/productsPaths'
import ActionButtons, { TwoButtons } from '@/src/components/buttons3'
import { Breadcrumbs, Rating, Typography } from '@mui/material'
import Link from 'next/link'
import Head from 'next/head'
import ProductCarouselImages from '@/src/components/products/productCarouselImages'
  export default function Product({product,footer_header}) {
  const [show ,setShow]=useState(false)
const [imagePrev,setImage] = useState({});
const [imageArray,setImageArray] =useState([]);
const divRef = useRef(null);
     const [match,setMatch]=useState(false);
    useEffect(()=>{
      function myFunction(x) {
        if (x.matches) { // If media query matches
    setMatch(true)
    } else {
    setMatch(false)
           
        }
      }
      
      const  x = window.matchMedia("(max-width: 700px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction);
    
    },[])
 
const {
    price,
    seo
    ,slug,
    name,
    stockQuantity,
    stockStatus
    ,regularPrice,
    onSale,
    productCategories,
    averageRating,
    comments,
    galleryImages,
    image,
    id,
    reviewCount,
    reviews,
    reviewsAllowed,
    commentCount,
    commentStatus,
    databaseId,
    status


}=product
   
const reviews_={
    reviewCount,
    reviews,
    reviewsAllowed,
    averageRating,
    databaseId,

}
const similarProducts = productCategories?.nodes[0]?.products?.nodes;

const images  = [image,...galleryImages?.nodes];
const [first,...otherImages]=images
      
const handleShow = (imag)=>{
    setImage(imag)
    setImageArray(images);
    setShow(true)
}
//  const [ ,second,,...restImages] = productAfterValidate?.images;
   return (
<>
<RootLayout headerFooter={footer_header}>
<Head>
    <title>
     { `${name} - zat98`}
    </title>
  </Head>
<div ref={divRef}  className="row" style={{background:'#fff',margin:'0px' ,padding:'0px' ,width:'100%'}}>
     
     <div className={`${styles.left} col-md-7`}>
   {!match?
     <div className="row" style={{padding:'0px'}}>
     <div className='col-md-12 image_holder'>
     <Image style={{objectFit:'cover'}} 
     className={`${styles.image_holder}`}
     alt={image?.altText}
     src={image?.sourceUrl}
       srcSet={image?.srcSet}  fill/>

       <button className={`${styles.previewImage}`} onClick={()=>handleShow(image)}>
    + 
       </button>
     
     </div>
     {
     
    images?.length >1&& otherImages.map(image=>{
         return<div key={image.id} className='col-md-6 col-6 image_holder position-relative' style={{padding:'0px'}}>
 
 {image !==null&&<Image src={image?.sourceUrl}
 alt={image?.altText}
  srcSet={image?.srcSet} width={600} height={800}/>}
      <button className={`${styles.previewImage} `} onClick={()=>handleShow(image)}>
               + 
                  </button>
             </div>
           
     })
 }
    
     </div>
     :<>
     <ProductCarouselImages isItem={false} images={images}/>
     </>}
     </div>
     <div className={`${styles.right} container col-md-5`}>
     <Breadcrumbs aria-label="breadcrumb">

     <Link  style={{color:'#333'}} color="inherit" href="/">
    Home
  </Link>
  <Typography  style={{color:'#333'}} color="inherit"  
  >
        {productCategories?.nodes[0]?.name}

  </Typography>
   <Typography color="text.primary">{name}</Typography>
</Breadcrumbs>
        <div className={`new`}>
            new
        </div>
        <h4 className={`${styles.name}`}>{name}</h4>
<div className={`${styles.rating}`}>
{averageRating}
<Rating name="disabled" value={averageRating} disabled />
<p>
    {reviewCount} Reviews
</p>

</div>
        <p  className={`${styles.desc}`} dangerouslySetInnerHTML={{__html:product?.description??product?.shortDescription}}/>
        <p className={`${styles.price}`}>
         {price} LE
      
        </p>
     
     {/* <p>
         Select Quentity
     </p>
        <Quantity item={product}/> */}
     
     
     
           <h6 className={`${styles.chec}`}>
         Checkout securely with
     
         </h6>
         <Certifications/>
     {
        stockStatus==="OUT_OF_STOCK"?
        <p className={`${styles.avalability}`}>This Product Is Not Avalible right Now</p>:
        <div className={`${styles.buttons}`}>
        <ActionButtons item={product}/>
            </div>
     }
       
     

     <div className={`${styles.d} row`}>
        <div className="col-6 text-center">

<Link href="#review" color='default' style={{color:'#000',textDecoration:'none'}} >
    <InfoSharpIcon/>
Review Details
</Link>
        </div>
        <div className="col-6 text-center">
 Made In Egypt
        </div>
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


     <RelatedProducts id={id} products={similarProducts} />

<div className="containe">
<div data-bs-spy="scroll" data-bs-target="#review" data-bs-root-margin="0px 0px -40%"
 data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">

     <ReviewContainer reviews={reviews_} id={'review'} image={image} i_name={name} />
     </div>
</div>
</div>
{}
<ImagePreview show={show} setShow={setShow} image={imagePrev} array={imageArray}/>

{/* <TwoButtons/> */}
</RootLayout>
</>
  )
}



export async function getStaticProps({params}){
    const {product:id} =params;
    let footer_header = {}
    let productData ={}
 
    try {
        footer_header =await axios.get(HEADER_FOOTER_ENDPOINT);
    } catch (error) {
        
    }
    try {
        const {data} = await client.query({
            query:ProductPage,
            variables:{id}
         });
     
          productData =   data?.product;
    } catch (error) {
        
    }

    
      return    {
        props:{
            product:productData||{},
            footer_header:footer_header?.data||{},
         } ,
        revalidate:10
      }
}

export async function  getStaticPaths(){

    const {data} = await client.query({
        query:ProductPathsQuery
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
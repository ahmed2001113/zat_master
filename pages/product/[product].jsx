import client from '@/src/utls/apolloConfigrations/apolloClient'
import { All_PRODUCTS_QUERY, PRODUCTS_QUERY, PRODUCT_BY_ID } from '@/src/utls/queries'
import React, {  useState } from 'react'
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
import { ProductPage } from '@/src/lib/queries/productPage'
import ReviewContainer from '@/src/components/reviewsComponents/productreviewContainter';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import ImagePreview from '@/src/components/Image_preview/images_preview'
import handleRedirectsAndReturnData from '@/src/utls/functions/HandleRedirect'
  export default function Product({product,footer_header}) {
const router = useRouter();
 const [show ,setShow]=useState(false)
const [imagePrev,setImage] = useState({});
const [imageArray,setImageArray] =useState([])
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
if(status!=="publish")return

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
    
<div className="row" style={{background:'#fff',margin:'0px' ,padding:'0px' ,width:'100%'}}>
     
     <div className={`${styles.left} col-md-7`}>
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
     
    images?.length >2&& otherImages.map(image=>{
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
     </div>
     <div className={`${styles.right   } container col-md-5`}>
        <h6 className={`${styles.name}`}>{name}</h6>
        <p  className={`${styles.desc}`} dangerouslySetInnerHTML={{__html:product?.shortDescription}}/>
        <p className={`${styles.price}`}>
         {price} LE
      
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
     

     <div className={`${styles.d} row`}>
        <div className="col-6 text-center">

<a href="#review" color='default' style={{color:'#000',textDecoration:'none'}} >
    <InfoSharpIcon/>
Review Details
</a>
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

    const defaultProps={
        props:{
            product:productData||{},
            footer_header:footer_header?.data||{},
         } ,
        revalidate:10
    }
      return    handleRedirectsAndReturnData(defaultProps,productData)


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
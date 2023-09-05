import Image from 'next/image';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from './productMain/mainproduct.module.css'
import Link from 'next/link';
  export default function ProductCarouselImages({images,id,isItem}) {
   return (
    <Carousel defaultActiveIndex={0} interval={null} 
    className={'product_carousel'} 
    >
        {
            images.map(image=>{

                return(
                    <Carousel.Item  
                     
                    key={image.sourceUrl}

                     >
                      {
                        isItem?
                        <Link href={`/product/${id}`}>
                
                        <Image     
                        className={styles.image_carousel} 
                         height={500}
                        width={557} 
                        objectFit='cover'
                        sizes='100vw'
                        alt={image?.altText}
                        src={image?.sourceUrl}
/>                </Link>
:
<Image     
className={styles.image_carousel} 
 height={500}
width={557} 
objectFit='cover'
sizes='100vw'
alt={image?.altText}
src={image?.sourceUrl}
/>    
                      }
                             
                    </Carousel.Item>
                )
            })
        }

  </Carousel>
  )
}

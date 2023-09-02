import Image from 'next/image';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from './productMain/mainproduct.module.css'
 export default function ProductCarouselImages({images}) {
    console.log(images)
  return (
    <Carousel defaultActiveIndex={0} interval={null} className={'product_carousel'} data-bs-theme="dark">
        {
            images.map(image=>{

                return(
                    <Carousel.Item  
                     
                     
                     >
                        <Image     
                        key={image.sourceUrl}
                        className={styles.image_carousel} 
                         height={500}
                        width={557} 
                        objectFit='cover'
                        sizes='100vw'
                        alt={image?.altText}
                        src={image?.sourceUrl}
/>
                    </Carousel.Item>
                )
            })
        }

  </Carousel>
  )
}

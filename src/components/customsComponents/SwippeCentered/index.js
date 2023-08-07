import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProdutItemMain from '../../products/productMain';
import styles from './swipe.module.css'
import { isEmpty } from 'lodash';
function SwippeCentered({products}) {
  if ( isEmpty( products ) ) {
		return null;
	}
    return (
<div className={`${styles.wrapper}`}>
  <div className={`${styles.fixed}`}>

<h1>New 
  <br/>
   Arrivalls</h1>

<div className={`${styles.buttons_wrapper}`}>
  <button >
    shop Men
  </button>
  <button>
    SHOP WOMMAN
  </button>
</div>
  </div>
  <Swiper
    slidesPerView={3.3}
    spaceBetween={30}
       className={`${styles.sw} mySwiper sw_2`}
 
  >
    {
      products.filter((item,idx)=>idx<9)
      .map(product=>{
        console.log(product.id)
        return(

          <SwiperSlide key={product.id}>

          <ProdutItemMain product={product}/>
          </SwiperSlide>

        )
      })
    }

  
  </Swiper>
</div>
  )
}

export default SwippeCentered

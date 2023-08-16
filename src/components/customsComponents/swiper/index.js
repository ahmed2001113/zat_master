import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './swiper.module.css'

// import required modules
import { Grid ,Pagination} from 'swiper/modules';
import { Row } from 'react-bootstrap';
import Title from '../../title';
import { isEmpty } from 'lodash';
function ProductSliderGrid({products}) {
  if ( isEmpty( products ) ) {
		return null;
	}
   return (
    <div>
         <>
      <Title text={' New Arrivals'}>

      </Title>
         <Swiper
        slidesPerView={1}
        spaceBetween={10}
         
        modules={[Grid, Pagination]}
        className="mySwiper row"
      >
       
        {
            products.map(item=>{

                return(
                    <SwiperSlide className='col-md-3'>
         <div className={`${styles.item}`}>
         <img src={item?.image?.sourceUrl}/>
                        {item.name}
         </div>
                    </SwiperSlide>

                )
            })
        }
         <SwiperSlide className='col-md-3'>
                
                    </SwiperSlide>
 
      </Swiper>
    </>
    </div>
  )
}

export default ProductSliderGrid

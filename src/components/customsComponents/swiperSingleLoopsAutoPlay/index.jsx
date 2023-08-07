import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
 

 
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { isEmpty } from 'lodash';

export default function SwipperSingleLoopAuto({products}) {
  if ( isEmpty( products ) ) {
		return null;
	}
  console.log(products)
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction:false
         }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        {
            products.map(image=>{

            return    <SwiperSlide key={image?.id}>

                <Image  layout='intrinsic'  src={image?.sourceUrl} alt={image?.altText} sizes='100vw' width={200} height={200}/>
            </SwiperSlide>
            })
        }
 
      </Swiper>
    </>
  );
}

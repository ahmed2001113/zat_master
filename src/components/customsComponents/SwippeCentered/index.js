import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProdutItemMain from '../../products/productMain';
import styles from './swipe.module.css'
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import { wishlistSelector } from '@/src/store/wishlist/wishlistSelector';
import { useSelector } from 'react-redux';
import CustomButton from '../buttons/button';

function SwippeCentered({products}) {
  const {wishlistItems} = useSelector(wishlistSelector);
  const isWishlist=(id)=>{
   return wishlistItems.some(item=>item.id===id)
  };

  const router = useRouter();
  const ToShop = ()=>{
    
    router.push('/shop?filter=new_arrival')
  }
  if ( isEmpty( products ) ) {
		return null;
	}
    return (
<div className={`${styles.wrapper}`}>
  <div className={`${styles.fixed}`}>

<h1>New 
  <br/>
   Arrivalls</h1>

<div >
  <CustomButton color={'#fff'} bk={'#000'}   onClick={ToShop} >
   
   New Arrivals
  </CustomButton>
   
</div>
  </div>
  <Swiper
    slidesPerView={3.3}
        className={`${styles.sw} mySwiper sw_2`}
 
  >
    {
      products.filter((item,idx)=>idx<9)
      .map(product=>{
         return(

          <SwiperSlide key={product.id}>

          <ProdutItemMain  product={product} 
          isLove={isWishlist(product.id)}/>
          </SwiperSlide>

        )
      })
    }

  
  </Swiper>
</div>
  )
}

export default SwippeCentered

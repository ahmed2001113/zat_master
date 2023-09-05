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

function SwippeCentered({products,isHome=true,words="",...others}) {
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
<div className={`${styles.wrapper}`} {...others}>

{ 
 isHome?
<>
{
  words.length>4?
  <div>
  <h3 className={`${styles.new} moNotFound`}>
     {words}
    </h3>
     <div className={`${styles.fixed}`}>
  
  <h2 className='notfoundword'>
    
    { words}
    </h2>
  
  <div >
  
     
  </div>
    </div>
  </div>: 
   <div>
  <h3 className={`${styles.new}`}>
      New Arrivals
    </h3>
     <div className={`${styles.fixed}`}>
  
  <h1>New 
    <br/>
     Arrivalls</h1>
  
  <div >
    <CustomButton color={'#fff'} bk={'#000'}   onClick={ToShop} >
     
     Shop Now
    </CustomButton>
     
  </div>
    </div>
  </div>
}
</>
  :null
     
}



  <Swiper

        className={`${styles.sw} ${!isHome?`${styles.word}`:''} mySwiper sw_2`}
   breakpoints={{
    // when window width is >= 640px
    0:{
      slidesPerView: 1.2,
      spaceBetween:10

    },
    640: {
       slidesPerView: 2,
     }
    ,
    // when window width is >= 768px
    768: {
       slidesPerView: 2,
      spaceBetween:10

    },
    992:{
      slidesPerView:3.2,
      spaceBetween:10
      
    },
    1024:{
      slidesPerView:3.2,
      spaceBetween:10
      
    }
  }}
  
    
       
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

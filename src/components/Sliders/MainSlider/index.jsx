import React from 'react'
import styles from './main_styles.module.css'
import CustomCarouselComponent from '../../customsComponents/customCarousel'
// import ProductSliderGrid from '../../customsComponents/swiper'
 
function MainSlider() {
   return (
<>
<div className={`${styles.main} row`}>
  <div className={`col-md-4 ${styles.first}`}>

<div className="row">
  <div className={`${styles.char} col-md-5`}>z</div>
  <div className={`${styles.char} col-md-5`}>a</div>
  <div className={`${styles.char} col-md-5`}>t</div>
  <div className={`${styles.char} col-md-5`}>98</div>
</div>
 <div className={`col-md-9`}>
  {/* <ProductSliderGrid products={new_Arrival}/> */}

  </div>
  </div>
<div className="col-md-4">
<div className={`${styles.welcom}`}>
  The Up  Comming 
   <br /> 
  
    <span>Best</span> Egypt Brand  
</div>
<div className={`${styles.buttons}`}>
  <button>
    catelgoe
    </button>
    
    <button>
    shop now

    </button>
</div>

<div className={`${styles.offers}`}>
<div className="offer">
  <h1>25% <span>off</span></h1>
  <p>our all-new Arrival </p>

  <p className="last">
    +
  </p>
</div>

<div className={`${styles.explore}`}>
  Explore
  <br />
  More
</div>
</div>
</div>
 
  <div className={`   col-md-4`}>
 <CustomCarouselComponent/>

  </div>
  {/* <div className={`  col-md-5`}>
    <h1>
      Check Out 
      <br/>
      Our New Arrivalls

    </h1>
  </div> */}

 <div className={`${styles.follow_us}`}>
<p className={`${styles.text_ver}`}>Follow Us On </p>
<div className="icons">
<i className="fa-brands fa-instagram"></i>
</div>
<div className="icons"><i className="fa-brands fa-facebook-f"></i></div>
  </div>
</div>


 </>
  )
}

export default MainSlider

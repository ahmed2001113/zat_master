import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './modal.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { previewData } from '@/src/store/preview/previewSelectors';
import { PreviewActions } from '@/src/store/preview/preview.slice';
import Image from 'next/image';
import SwipperSingleLoopAuto from '../customsComponents/swiperSingleLoopsAutoPlay';
import Link from 'next/link';
 function PreviewComponent() {
  const dispatch= useDispatch()
const {open,product}= useSelector(previewData);
 console.log(open,product)
 const handleClose = () => dispatch(PreviewActions.closepreview()) ;
 const minVal = 1;
 const maxVal=20
    const [value, setValue] = useState(minVal);

    const increaseValue = () => {
      if (value < maxVal) {
        setValue(value + 1);
      }
    };
  
    const decreaseValue = () => {
      if (value > minVal) {
        setValue(value - 1);
      }
    }
   return (
    <div>
      {Object.keys(product).length !==0&&
        <Modal
        size='lg'
        centered={true}
        contentClassName={`${styles.content}`}
        show={open} onHide={handleClose} 
        
        dialogClassName="modal-90w"
        >
      
        <Modal.Body className={`${styles.bo}`}>
         
            <div className={`${styles.content}`}>
                <div className='row'>

<div className={`${styles.le} col-md-6`}>


<SwipperSingleLoopAuto products={product?.images}/>
</div>
<div className={`${styles.ri} col-md-6`}>
<Modal.Header className={`${styles.modal_header}`} closeButton>
          <Modal.Title className={`${styles.modal_title}`}>
            <h2>

            {product?.name}
            </h2>
          </Modal.Title>
        </Modal.Header>
        <div className={styles.price} dangerouslySetInnerHTML={{__html:product?.price+'lE'}} />
         
        

 

  <div className={`${styles.stockStatues} ${styles.holder}`}>
 
  {product.stockStatus ==="IN_STOCK"?
  <p divlassName={`${styles.stock}`}>
<i  class="fa-solid fa-circle fa-beat  s me-2" style={{color:'#54c63a',fontSize:'10px'}}></i>
  inStock Ready To Ship
</p>:
<p className={`${styles.stock} `}>
<i  class="fa-solid fa-circle text-danger me-2"></i>

out of stock
</p>
}



  </div>
  {/* <div className={`${styles.qu} ${styles.holder}`}>
<h6>
  select Quentity
</h6>
<div className={`${styles.qe}`}>
<div className="qtySelector text-center">
      <i className="fa fa-minus decreaseQty" onClick={decreaseValue}></i>
      <input type="text" className="qtyValue" value={value} readOnly />
      <i className="fa fa-plus increaseQty" onClick={increaseValue}></i>
    </div>

</div>
  </div> */}
    <div class="proCard_size">
                                        <h4>Size</h4>
                                        <ul>
                                            <li class="proCard_active"><span>S</span></li>
                                            <li><span>M</span></li>
                                            <li><span>L</span></li>
                                            <li><span>XL</span></li>
                                            <li><span>XXL</span></li>
                                        </ul>
                                    </div>
  <p className='mt-auto'>
    <h6>Description</h6>
  Men's Basic Sweatpants Slim Fit Casual Trousers in Gray tone with Side Pockets and Elastic Waist Made of 100% Cotton Both comfortable and fashionable.

• More Info
• Elastic waist - Medium Stretch - Long length- High Waist Fitted fit for all-day comfort
• Machine wash at 30°C
• high quality soft cotton
  </p>
<div className={`${styles.button_c} mt-auto`}>
<button className=" ">
      Add To Wish List
   <i className="fa fa-heart"></i>
  </button>
  <button className="outline">
    Buy Now
  </button>
  <button className="black">
    Add To Cart 
  </button>

</div>
</div>
            </div>
            </div>



        </Modal.Body>
         
      </Modal>}
    </div>
  )
}

export default PreviewComponent
 

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
import Certifications from '../certifications';
 function PreviewComponent() {
  const dispatch= useDispatch()
const {open,product}= useSelector(previewData);
 
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
  <h6 className={`${styles.chec}`}>
         Checkout securely with
     
         </h6>
         <Certifications/>
 
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
 

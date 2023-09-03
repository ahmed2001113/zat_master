import { useEffect, useState } from 'react';
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
import ActionButtons from '../buttons3';
import { Rating } from '@mui/material';
import { useRouter } from 'next/router';
 function PreviewComponent() {
  const dispatch= useDispatch()
const {open,product}= useSelector(previewData);
 const route = useRouter()
 const handleClose = () => dispatch(PreviewActions.closepreview()) ;
 const minVal = 1;
 const maxVal=20
    const [value, setValue] = useState(minVal);
    const [match,setMatch]=useState(false);
    useEffect(()=>{
      function myFunction(x) {
        if (x.matches) { // If media query matches
    setMatch(true)
    } else {
    setMatch(false)
           
        }
      }
      
      const  x = window.matchMedia("(max-width: 700px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction);
    
    },[])
const goProduct = ()=>{
  dispatch(PreviewActions.closepreview()) 
  route.push(`/product/${product.id}`);
}
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
        size="sm"
        centered={true}
        contentClassName={`${styles.content}`}
        show={open} onHide={handleClose} 
        
        dialogClassName="modal-90w"
        >
      
        <Modal.Body   >
         
            <div  >
                <div className='row'>

<div className={` col-md-6`}>


<SwipperSingleLoopAuto products={product?.images}/>
</div>
<div className={`${styles.ri} col-md-6`}>
<h4>

{product?.name}
</h4>

        <div className={styles.price} dangerouslySetInnerHTML={{__html:product?.price+'lE'}} />
<p className={`${styles.desc}`} dangerouslySetInnerHTML={{__html:product?.shortDescription}}/> 
         
        

 

  <div className={`${styles.stockStatues} ${styles.holder}`}>
 
  {product.stockStatus ==="IN_STOCK"?
  <p divlassName={`${styles.stock}`}>
<i  className="fa-solid fa-circle fa-beat  s me-2" style={{color:'#54c63a',fontSize:'10px'}}></i>
  inStock Ready To Ship
</p>:
<p className={`${styles.stock} `}>
<i  className="fa-solid fa-circle text-danger me-2"></i>

out of stock
</p>
}



  </div>

         <div className={`new`}>
            new
        </div>
        <div className={`${styles.rating}`}>
{product?.averageRating}
 

</div>
<div className="">
 
  <div id="container">
  <button className="learn-more" 
   onClick={goProduct}
  >
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text">   more Details</span>
  </button>
</div>
</div>
<div className={`${styles.button_c} mt-auto`}>
{
        product?.stockStatus==="OUT_OF_STOCK"?
        <p className={`${styles.avalability}`}>This Product Is Not Avalible right Now</p>:
        <div className={`${styles.buttons}`}>
        <ActionButtons item={product}/>
            </div>
     }
   <h6 className={`${styles.chec}`}>
         Checkout securely with
     
         </h6>
         <Certifications/>
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
 

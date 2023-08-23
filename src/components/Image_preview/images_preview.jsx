import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import styles from './image.module.css'
import Image from "next/image";
 export default function ImagePreview({image:main_image,array,title,show,setShow}){
console.log(main_image,array)
if(!!main_image) return;
const [previewVisible, setPreviewVisible] = useState(main_image);
 const [imageArray,setImageArray]= useState(array)
const changeImage=(image)=>{
    setPreviewVisible(image)
}
useEffect(()=>{
 setPreviewVisible(main_image);
 
},[main_image])
return(
    <>
    
    <Offcanvas show={show} placement="bottom" style={{height:'90%'}} onHide={()=>setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className={`${styles.image}`}>
             
            <Image src={`${previewVisible?.sourceUrl}`} alt={previewVisible?.altText} 
           fill
            />
        </div>

        <div className={`${styles.image_preview}`}>

        {  array.map((ima)=>{
      return  <div          
            onClick={()=>changeImage(ima)}
        >
            <Image src={ima?.sourceUrl} height={100} width={100}
             alt={ima?.altText}
             
             />
        </div>
    })
}
</div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
)
}
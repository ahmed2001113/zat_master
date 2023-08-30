import Image from 'next/image';
import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
 
import Toast from 'react-bootstrap/Toast';

export default function MessageToast({setShow,show,message}) {
  // autohide
  return (
   <>
   
   <ToastContainer position='middle-center' className="position-fixed">

<Toast onClose={() => setShow(false)} show={show} delay={3000} >
  <Toast.Header>
    <Image
    height={100}
    width={100}
      src="holder.js/20x20?text=%20"
      className="rounded me-2"
      alt=""
    />
    <strong className="me-auto">Zat.98</strong>
   </Toast.Header>
  <Toast.Body>
    {message}
  </Toast.Body>
</Toast>

</ToastContainer>
   </>
       
  );
}

 
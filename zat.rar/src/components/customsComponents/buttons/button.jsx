import React from 'react'
import styles from './button.module.css'
export default function CustomButton({children,bk,color,className,...others}) {
  return (
    <button style={{background:`${bk}`}} {...others}  className={`${styles.c_btn} ${styles.btn_btn_border-5}  ${className}`}>

      <span  style={{color:`${color}`}} className={`${styles.c_btn__text}`}>
      {children}
   </span>
   <span className={styles.c_btn__arrow}  ></span>

    </button>
  )
}


 
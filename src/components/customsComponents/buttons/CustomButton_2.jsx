import React from 'react'
import styles from './button.module.css'
export default function CustomButton_2({children,bk,color,...others}) {
  return (
    <button className={`${styles.btn_2}
     ${styles.btn_3}
      ${styles.btn_hover_border_3}`}>
    <span>{children}</span>
  </button>
  )
}

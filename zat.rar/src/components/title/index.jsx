import React from 'react'
import styles from './tutle.module.css'
function Title({text,...props}) {
  return (
    <div className={`${styles.title}` } {...props}>
        {text}
      
    </div>
  )
}

export default Title

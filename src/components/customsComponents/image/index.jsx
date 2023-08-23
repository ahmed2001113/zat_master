import styles from './style.module.css'
import topleft from './Icon-Png.png'
import topright from './topright.jpeg'
import bottomleft from './bottomleft.jpeg'
import { LinearProgress } from '@mui/material'
import Image from 'next/image'

const LoadingImage=()=>{
    return(
<div className={styles.imgdiv}>
    <div className={styles.left}>
 <div className={styles.bottomleft}><Image src={bottomleft} alt="tp"
 className={styles.blimg}
 
 /></div>
    </div>
<div className={styles.right}>
<div className={styles.topright}><Image src={topright} alt="tp"
 className={styles.trimg}/></div>
<div className={styles.bottomright}><LinearProgress
 style={{height:"8px", background:"gray" }} className={styles.prog}/></div>
</div>
</div>
    )
}
export default LoadingImage;
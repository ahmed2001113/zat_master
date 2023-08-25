import styles from './style.module.css'
import topleft from './Icon-Png.png'
import topright from './topright.jpeg'
import bottomleft from './bottomleft.jpeg'
import { LinearProgress } from '@mui/material'
import Image from 'next/image'

const LoadingImage=()=>{
    return(
<div className={styles.preloader}>
  <div className={styles.loader}></div>
</div>
    )
}
export default LoadingImage;
import styles from './style.module.css'
 
const LoadingImage=()=>{
    return(
<div className={styles.preloader}>
  <div className={styles.loader}></div>
</div>
    )
}
export default LoadingImage;
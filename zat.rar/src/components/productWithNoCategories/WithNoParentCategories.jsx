import Image from 'next/image'
import React from 'react'
 import styles from './styles.module.css'
import Link from 'next/link'
   import CustomButton from '../customsComponents/buttons/button'
import {motion} from 'framer-motion';

export default function WithNoParentCategories({categories}) {
  
  return (
<>
<div className="container_fluid mt-2  bg-white">
<div className={styles.main_grid}>
{categories&&categories?.map(cat=>{
 
 
 return   <div key={cat?.name} className={` col-12 col-md-6 m-auto relative mt-5 ${styles.left} `} >
        
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once:false }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1, y:0 },
        hidden: { opacity: 0, scale: 1 , y:40}
      }}
    > 
        <div className={`${styles.description}`}>
        <h2>
          Shop <br/>
                {cat.name.toUpperCase()}
            </h2>
          

            {  <Link   href={`shop/${cat.slug}`}>
             <CustomButton className={`${styles.button}`} bk={'#fff'} color={'#000'} >
              Shop Now
             </CustomButton>
             
            </Link>  }
        </div>
            <Image style={{objectFit:'cover'}} className={styles.image_cat}
             src={cat?.image?.sourceUrl} 
             alt={cat?.image?.altText} srcSet={cat?.image?.srcSet} 
             height={600} width={700} 
              />
              </motion.div>
        </div>
        
        
      })}
      </div>
</div>

</>
 
  )
}

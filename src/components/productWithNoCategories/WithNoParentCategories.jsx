import Image from 'next/image'
import React from 'react'
import ProdutItemMain from '../products/productMain'
import styles from './styles.module.css'
import Link from 'next/link'
import Product_show from '../products/productMain/product_show';
import right from '../../../public/svgs/rightarrow.svg'
import simpleLightbox from 'simplelightbox'
import CustomButton from '../customsComponents/buttons/button'
export default function WithNoParentCategories({categories}) {
  console.log(categories)
  return (
<>
<div className="container_fluid pt-10 bg-white">
<div className={styles.main_grid}>
{categories&&categories?.map(cat=>{
 
 
 return   <div key={cat?.name} className={` col-12 col-md-6 m-auto relative mt-5 ${styles.left} `} >
        {/* <h1> Descover</h1>
<h1>
                Our New Arraivals <br/>
                Of    {cat.name.toUpperCase()}
            </h1> */}
        <div className={`${styles.description}`}>
        <h2>
          Shop <br/>
                {cat.name.toUpperCase()}
            </h2>
          

            {  <Link   href={`shop/${cat.slug}`}>
             <CustomButton bk={'#fff'} color={'#000'} >
              Shop Now
             </CustomButton>
             
            </Link>  }
        </div>
            <Image style={{objectFit:'cover'}} className={styles.image_cat}
             src={cat?.image?.sourceUrl} 
             alt={cat?.image?.altText} srcSet={cat?.image?.srcSet} 
             height={600} width={700} 
              />
        </div>
        
        
      })}
      </div>
</div>

</>
 
  )
}

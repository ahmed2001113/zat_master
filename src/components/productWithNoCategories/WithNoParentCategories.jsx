import Image from 'next/image'
import React from 'react'
import ProdutItemMain from '../products/productMain'
import styles from './styles.module.css'
import Link from 'next/link'
import Product_show from '../products/productMain/product_show';
import right from '../../../public/svgs/rightarrow.svg'
import simpleLightbox from 'simplelightbox'
export default function WithNoParentCategories({categories}) {
  return (
<>
{categories&&categories?.map(cat=>{
var lightbox = new simpleLightbox('.gallery a', { /* options */ });

return <div className="container-fluid">
<div className="row">

        <div className={`col-md-5 relative ${styles.left}`} style={{padding:'0px'}}>
        {/* <h1> Descover</h1>
<h1>
                Our New Arraivals <br/>
                Of    {cat.name.toUpperCase()}
            </h1> */}
        <div className={`${styles.description}`}>
        <h1>
                {cat.name.toUpperCase()}
            </h1>
          

            {  <Link className={`${styles.button} black`} href={`shop/${cat.slug}`}>
                Shop Now
            </Link>  }
        </div>
            <Image style={{objectFit:'cover'}} src={cat?.image?.sourceUrl}  alt={cat?.image?.altText} srcSet={cat?.image?.srcSet} fill/>
        </div>
        <div className="col-md-7" style={{padding:'0px'}}>
        <div className={`${styles.top_bar}`}>
        <h1>
            {cat?.name}

        </h1>


<Image src={right} width={50} height={50}/>
    </div>
<div className="row">
  
  {cat?.products?.nodes?.map(product=>{
    const {image,galleryImages,...rest}=product
    const productAfter = {
        images:[...galleryImages.nodes,image],
        ...rest
    }
return<>
 <Product_show product={productAfter}  className={'col-md-6 mb-2'}/>
</>
  })}
</div>
        </div>
        </div>
</div>

})}

</>
 
  )
}

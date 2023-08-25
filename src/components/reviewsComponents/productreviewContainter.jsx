import { useState } from 'react';
import ReviewItem from './ReviewItem';
import ReviewComponent from './WriteReviewComponent.modal';
import styles from './product.module.css'
import RevCount from './reviewsCount';
export default function ReviewContainer({reviews,image,i_name,...others}){
 
    const [show,setShow]=useState(false)
 
// const{ name,email,content,id} = node
return<>
<div className={`${styles.review_header} `} {...others}>
    <h3>
        Reviews
    </h3>
{
    reviews?.reviewsAllowed&&<button className="black" onClick={()=>setShow(true)}>
    Write a Review
</button>

}

</div>
<RevCount rev={reviews} count={reviews.reviewCount}/>
<div >

{ reviews.reviews.edges.length?
    reviews.reviews.edges.map(review=>{
  
        return<ReviewItem  content={review?.node?.content}
         key={review?.node?.id} 
        name={review?.node?.author?.node?.name} 
         email={review?.node?.author?.node?.email}
         rating={review?.rating}
         date={review?.node?.date}
         replies={review?.node?.replies}
        //  addetional={}
         />
    }):
    <>
    <h5 style={{textAlign:'center', textTransform:'capitalizeh5'}} className={`${styles.th}`}>
  {`      There's no review on this Product`}
    </h5>
    </>
}

</div>
 {/* container=>reviewitem=>modal=> */}
<ReviewComponent setShow={setShow} show={show}
 image={image} name={i_name} id={reviews?.databaseId}/>

</>
 } 
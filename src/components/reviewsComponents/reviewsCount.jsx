import React, { useEffect } from 'react'
import styles from './product.module.css'
export default function RevCount({rev:{reviews},count}) {
console.log(count)
    const rev =  reviews.edges;
    let ratings = [0, 0, 0, 0, 0];
  
    rev.forEach(function(review) {
        console.log(review)
     let rating = review.rating;
       return ratings[rating - 1]++;
      });
      console.log(ratings)
      let percentages = ratings.map(function(rating) {
        return (rating / count) * 100;
      });
      useEffect(()=>{
        const progressDone = document.querySelectorAll('.progress-done');

progressDone.forEach(progress => {
	progress.style.width = progress.getAttribute('data-done') + '%';
});


  
      },[reviews,count])
  return (
    <div>
 
<div className="reviews-container">
    <div className={`${styles.headr}`}>

        
    <h4 >
    {reviews?.averageRating}
        <i className="fas fa-star"></i>
   
    </h4>
    <p>
    {reviews?.edges?.length}  reviews 
    </p>
    </div>
    <div className="review">
        <span className="icon-container">5 <i className="fas fa-star"></i></span>
        <div className="progress">
            <div className="progress-done" data-done={percentages[4]}></div>
        </div>
        <span className="percent">{ratings[4]}</span>
    </div>
    <div className="review">
        <span className="icon-container">4 <i className="fas fa-star"></i></span>
        <div className="progress">
            <div className="progress-done" data-done={percentages[3]}></div>
        </div>
        <span className="percent">{ratings[3]}</span> 
    </div>
    <div className="review">
        <span className="icon-container">3 <i className="fas fa-star"></i></span>
        <div className="progress">
            <div className="progress-done" data-done={percentages[2]}></div>
        </div>
        <span className="percent"> {ratings[2]}</span>
    </div>
    <div className="review">
        <span className="icon-container">2 <i className="fas fa-star"></i></span>
        <div className="progress">
            <div className="progress-done" data-done={percentages[1]}></div>
        </div>
        <span className="percent">{ratings[1]}</span> 
    </div>
    <div className="review">
        <span className="icon-container">1 <i className="fas fa-star"></i></span>
        <div className="progress">
            <div className="progress-done" data-done={percentages[0]}></div>
        </div>
        <span className="percent">{ratings[0]}</span>
    </div>
</div>
    </div>
  )
}

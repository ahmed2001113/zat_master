import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../../../public/imagewitherased/slide1.png'
import styles from './carousel.module.css'
function CustomCarouselComponent() {
    const slides =[
        {
            image:'https://images.canadagoose.com/image/upload/w_1920,c_scale,f_auto,q_auto:best/v1687292015/product-image/7403M2H_99_fsph.jpg',
            title:'Elevated Exploration',
            description:'Discover your new head-to-toe essentials for the season.',
            id:1
        }
        ,
        {
            image:'https://images.canadagoose.com/image/upload/w_1920,c_scale,f_auto,q_auto:best/v1663329451/product-image/6829MB_699_fsph.jpg',
            title:'Elevated Exploration',
            description:'Discover your new head-to-toe essentials for the season.'
            ,
            id:2
        },
        {

            image:'https://images.canadagoose.com/image/upload/w_1920,c_scale,f_auto,q_auto:best/v1679591292/product-image/2062M_433_fsph.jpg',
            title:'Elevated Exploration',
            description:'Discover your new head-to-toe essentials for the season.'
            ,
            id:3
        }

    ]
  return (
<>
<Carousel className={`${styles.custom}`}>
    {
        slides.map(item=>{
            return(
                <Carousel.Item 
                className={`${styles.custom}  `}
                 key={item.id}> 
                <img
                  className="d-block w-100  "
                  src={`${item.image}`}
                  alt={item.title}
                />
                <Carousel.Caption className={`${styles.caption}`}>
                {/* <h3>{item.title} </h3>
                  <p>{item.description}</p> */}
                  {/* <button className={`${styles.button}`}>shop now</button> */}
                </Carousel.Caption>
              </Carousel.Item>


            )
        })
    }
     
 
    </Carousel>
</>
  )
}

export default CustomCarouselComponent
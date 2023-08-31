import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../../../public/imagewitherased/slide1.png'
import styles from './carousel.module.css'
import Image from 'next/image';
function CustomCarouselComponent() {
    const slides =[
        {
          image:'http://zat98.com/wp-content/uploads/2022/10/Final-1-scaled.jpg',
          title:'UNLEASH THE POWER',
            description:'WELCOME TO THE FAMILY',
            id:1
        }
        ,
        {
          image:'http://zat98.com/wp-content/uploads/2022/10/Final-1-scaled.jpg',
          title:'UNLEASH THE POWER',
            description:'WELCOME TO THE FAMILY'
            ,
            id:2
        },
        {

            image:'http://zat98.com/wp-content/uploads/2022/10/Final-1-scaled.jpg',
            title:'UNLEASH THE POWER',
            description:'WELCOME TO THE FAMILY'
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
                <Image
                height={500}
                width={1000}
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
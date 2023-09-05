import Image from 'next/image';
import React from 'react'
import {Carousel} from "react-bootstrap";
 import styles from './carousel.module.css';
 import {motion} from 'framer-motion';
 export default function Swipecarousel() {
  const slides =[
    {
      image:'/slides/slide(1).jpg',
      title:'UNLEASH THE POWER',
        description:'WELCOME TO THE FAMILY',
        id:1
    }
    ,
    {
      image:'/slides/slide(3).jpg',
      title:'UNLEASH THE POWER',
        description:'WELCOME TO THE FAMILY'
        ,
        id:2
    },
    {

      image:'/slides/slide(5).jpg',
        title:'UNLEASH THE POWER',
        description:'WELCOME TO THE FAMILY'
        ,
        id:3
    }

]
    return (
    
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
        <Carousel>
          {
            slides.map(slide=>{
              return(
                <Carousel.Item key={slide.id} className={`${styles.car_item}`}  >
                <Image src={slide.image}
                placeholder='blur'
                blurDataURL={slide.image}
                  alt={slide.title}  fill />
                    <Carousel.Caption>
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <button className={`${styles.black} black`}>Shop Now </button>
          
                  </Carousel.Caption>

      </Carousel.Item>

              )
            })
          }
   
   
    </Carousel>
    </motion.div>
      )

    }

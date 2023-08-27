import Image from 'next/image';
import React from 'react'
import {Carousel} from "react-bootstrap";
 import styles from './carousel.module.css';
 import {motion} from 'framer-motion';

export default function Swipecarousel() {
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
                <Carousel.Item  >
                <Image src={slide.image}  alt={slide.title} width='4000' height={600}  />
                   <Carousel.Caption>
                    <h1>First slide label</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button className='black'>Shop Now </button>
          
                  </Carousel.Caption>

      </Carousel.Item>

              )
            })
          }
   
   
    </Carousel>
    </motion.div>
      )

    }

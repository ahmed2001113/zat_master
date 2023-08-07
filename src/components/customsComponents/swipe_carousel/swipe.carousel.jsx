import Image from 'next/image';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
 
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
        <Carousel>
      <Carousel.Item>
      <Image src={slides[0].image}   width='4000' height={600}  />
         <Carousel.Caption>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className='black'>Shop Now </button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={slides[1].image}   width='4000' height={600}  />

         <Carousel.Caption>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='black'>Shop Now </button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{position:'relative'}}>
      <Image src={slides[2].image}   width='4000' height={600}  />
 
         <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button className='black'>Shop Now </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      )

    }

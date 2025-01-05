import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import C1 from './images/c1.avif';
import C2 from './images/c2.jpg';
import C3 from './images/c3.jpg';
import C4 from './images/c4.jpg';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './MyCarousel.css'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function MyCarousel() {
    const itemData = [
        {
            id:0,
            imgUrl: C4
        },
        {
            id:1,
            imgUrl: C2
        },
        {
            id:2,
            imgUrl: C3
        },
        {
            id:3,
            imgUrl: C1
        }

    ]


  return (
    <>
     <Swiper 
       pagination={{
        clickable:true,
      }} 
      modules={[Pagination, Autoplay]} 
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }} 
      speed={1000}
      className="mySwiper ">

        {itemData.map((item)=> {
            return <SwiperSlide className='mySwiperslide'><img src={item.imgUrl} alt="" /></SwiperSlide>
        })}
        
      </Swiper>
    </>
  );
}

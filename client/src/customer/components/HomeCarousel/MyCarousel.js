import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



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
            imgUrl: "/carousal/c1.webp"
        },
        {
            id:1,
            imgUrl: "/carousal/c2.webp"
        },
        {
            id:2,
            imgUrl: "/carousal/c3.webp"
        },
        {
            id:3,
            imgUrl: "/carousal/c4.webp"
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
            return <SwiperSlide className='mySwiperslide -z-20'><img src={item.imgUrl} alt="" /></SwiperSlide>
        })}
        
      </Swiper>
    </>
  );
}

import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Autoplay, Mousewheel, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeCard from './HomeCard';
import './HomeSlider.css'
import { menTshirt } from '../../../data/mensTshirt';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';



const HomeSlider = ({id, category}) => {

    const prevButtonSelector = `.${id}-prev-button`;
    const nextButtonSelector = `.${id}-next-button`;
    
    console.log(category);
    

  return (
  //  category &&
    <div className="cards flex flex-col mx-4 my-4 mt-[50px] relative h-full">
        <h2 className='text-2xl font-semibold mx-5 capitalize'>{`${category[0]?.topLevelCategory} ${category[0]?.thirdLevelCategory}`}</h2>
        <Swiper
        direction={'horizontal'}
          slidesPerView={5.4}
          spaceBetween={20}
          freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}
          // autoplay={{
          // delay: 1000,
          // disableOnInteraction: false,
          //  }} 
          mousewheel={false}
          keyboard={true}
          navigation={true}
          modules={[FreeMode, Pagination, Autoplay, Mousewheel, Keyboard, Navigation]}
          className="productSwiper"
          id={`${id}-productSwiper`}
          navigation={{
            nextEl: `.${id}-next-button`,
            prevEl: `.${id}-prev-button`,
          }}
        >
          {category.slice(0, 9).map((data, index)=> {
            return (
              <SwiperSlide key={index} className='product-swiper-slide'><HomeCard data={data} /></SwiperSlide>
            )
          })
          }
          {/* <SwiperSlide className='product-swiper-slide'><HomeCard/></SwiperSlide>
          <SwiperSlide className='product-swiper-slide'><HomeCard/></SwiperSlide> */}
          

        </Swiper>
      
      <div className={`${id}-prev-button absolute left-2 top-[50%] cursor-pointer`}><ArrowBackIosNewOutlinedIcon className='text-4xl text-blue-600' /></div>
      <div className={`${id}-next-button absolute right-2 top-[50%] cursor-pointer`}><ArrowForwardIosOutlinedIcon className='text-4xl text-blue-600' /></div>

      </div>
  )
}

export default HomeSlider

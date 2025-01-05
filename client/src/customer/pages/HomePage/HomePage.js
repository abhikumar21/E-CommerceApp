import React from 'react'
import MyCarousel from '../../components/HomeCarousel/MyCarousel'
import HomeCard from '../../components/HomeCards/HomeCard'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Autoplay, Mousewheel, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import './HomePage.css'
import HomeSlider from '../../components/HomeCards/HomeSlider';
import { menTshirt } from '../../../data/mensTshirt';
import { otherProd } from '../../../data/otherProd';



const HomePage = () => {
  return (
    <div>
      <MyCarousel/>
      <HomeSlider id="menTshirt" category={menTshirt} sectionName={"Men's Tshirt"} />
      <HomeSlider id="other" category={otherProd} sectionName={"Other Products"} />
    </div>
  )
}

export default HomePage

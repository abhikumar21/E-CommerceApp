import React, { useEffect, useState } from 'react'
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
import { CategoryData } from '../../../data/Categories';
import axios from 'axios';


const HomePage = () => {
  const [productCategories, setProductCategories] = useState([]); 

  useEffect(()=> {
    setProductCategories([]);
    const getCategoryProduct = async()=> {
      try {
        const arr = [
          ["women", "clothing", "tops"],
          ["women", "clothing", "dress"]
        ]
        let res = [];
        for(let i=0;i<2;i++) {
          const topLevelCategory=arr[i][0]
          const secondLevelCategory=arr[i][1]
          const thirdLevelCategory=arr[i][2]

          res[i] = await axios.get(`/product`, {
            params: {topLevelCategory, secondLevelCategory, thirdLevelCategory}
          });
        }
        setProductCategories([res[0].data, res[1].data]);
      } catch (error) {
        console.log(error)
      }
    }
    getCategoryProduct()
  }, [])


  
  return (
    <div>
      <MyCarousel/>
      {productCategories.map((categoryProducts, index) => {
        return (
          <HomeSlider key={index} id="menTshirt" category={categoryProducts} />
        )
      })}
      {/* <HomeSlider id="menTshirt" category={menTshirt} sectionName={"Men's Tshirt"} /> */}
      {/* <HomeSlider id="other" category={otherProd} sectionName={"Other Products"} /> */}
    </div>
  )
}

export default HomePage

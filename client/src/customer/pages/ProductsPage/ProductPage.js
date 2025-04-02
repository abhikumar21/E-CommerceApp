import React, { useEffect, useState } from 'react'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import './ProductPage.css'
import ProductCard from './ProductCard.js';
import Properties from './Properties.js';
import { womenTops } from '../../../data/womenClothing.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const ProductPage = () => {

  const params = useParams();
  const {levelOne, levelTwo, levelThree} = params;
  const [categoryItems, setCategoryItems] = useState([]);


  
  useEffect(()=> {
    const getCategoryProducts=async()=> {
      const res = await axios.get('/product', {
        params:{
          topLevelCategory:levelOne, 
          secondLevelCategory:levelTwo, 
          thirdLevelCategory:levelThree
        }
      })
      console.log(res.data); //get requests cannot have a body
      setCategoryItems(res.data);
    }
    if(levelOne) {
      getCategoryProducts();
    }
  }, [params]);


  return (
    <div className='productPage mb-5 px-5'>
      <div className="header flex w-full h-[60px] bg-slate-300 align-middle justify-between px-10">
        <h2 className='text-4xl bold flex h-full items-center cursor-pointer'>Product</h2>
        <div className="viewSetting h-full flex items-center gap-8 relative">
          <div className="flex">
            <div className='cursor-pointer'>Sort</div>
            <ArrowDropDownRoundedIcon/>
          </div>
          <div className="icon">
            <GridViewRoundedIcon/>
          </div>
        </div>
      </div>

      <section className='flex flex-col px-10'>
        <h4 className='text-xl'>Filter</h4>
        <section className='grid grid-cols-5 gap-4'>
            <div className="property col-span-1">
               <Properties/>
            </div>
            <div className="products col-span-4 border-solid border-2 flex flex-wrap justify-around border-slate-800 px-2 py-2">
              {categoryItems.map((item)=> {
                // console.log(item)
                return (
                  <ProductCard item={item}/>
                )
              })}

            </div>
        </section>
      </section>
    </div>
  )
}

export default ProductPage

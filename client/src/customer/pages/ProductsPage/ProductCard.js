import React from 'react'
import P1 from './images/a4.webp'
import { useNavigate } from 'react-router-dom'



const ProductCard = ({item}) => {
  const navigate = useNavigate();
  console.log(item);


  return (
    <div onClick={()=>navigate(`/product/${item._id}`)} className="card overflow-x-hidden w-[260px] py-[30px]">
        <div className="image h-[300px] overflow-hidden">
            <img className='object-cover hover:scale-110 ease-in-out duration-500' src={item?.ImageUrls?.[0]} alt="" />
        </div>
        <div className="details flex flex-col cursor-pointer px-2">
            <h4 className='font-bold text-slate-700 my-2'>{item.brand}</h4>
            <p>{item.title}</p>
            <h5 className="text-slate-500 text-sm font-semibold py-1">{item.color}</h5>
            <div className='flex items-center gap-2'>
                <span className="font-bold">${item.discountPrice}</span>
                <span className='text-sm line-through opacity-60'>${item.price}</span>
                <span className='text-green-700'>{Math.floor(((item.price - item.discountPrice)*100)/item.price)}% off</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard

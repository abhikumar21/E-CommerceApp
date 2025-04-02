import React from 'react'
import S6 from '../../../data/Tops/a18.avif'
import { useNavigate } from 'react-router-dom'


const Card_Orders = ({item}) => {
    const navigate = useNavigate();

  return (
    item && (
   <div onClick={()=>navigate(`/product/${item.product?._id}`)} className="card flex bg-white px-3 py-3 gap-4">
        <div className="image-container bg-blue-300">
            <div className="image w-[120px] h-auto max-h-[130px] overflow-hidden">
                <img className='cover w-full h-full' src={item.product?.ImageUrls[0]} alt="" />
            </div>
        </div>
        <div className="details flex flex-col cursor-pointer px-2 relative">
            <h4 className='font-bold text-slate-700 my-2'>{item.brand}</h4>
            <p>{item.product?.title}</p>
            <div className='flex gap-8'>
              <h5 className="text-slate-500 text-sm font-semibold py-1">{item.product?.color}</h5>
              <p className='py-1'><strong>size: </strong>{item.size}</p>
            </div>
            <div className='flex items-center gap-2'>
                <span className="font-bold">${item.product?.discountPrice}</span>
                <span className='text-sm line-through opacity-60'>${item.product?.price}</span>
                <span className='text-green-700'>{Math.floor(((item.product?.price - item.product?.discountPrice)*100)/item.product?.price)}% off</span>
            </div>
        </div>
   </div>
     )
  )
}

export default Card_Orders

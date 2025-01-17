import React from 'react'
import S6 from '../../../data/Tops/a18.avif'


const Card_Cart = ({item}) => {
  return (
   <div className="card flex bg-white px-3 py-3 gap-4">
        <div className="image-container bg-blue-300">
            <div className="image w-[120px] h-auto max-h-[130px] overflow-hidden">
                <img className='cover w-full h-full' src={item.imageUrl} alt="" />
            </div>
            <div className="number flex justify-evenly">
                <span>-</span>
                <span>1</span>
                <span>+</span>
            </div>
        </div>
        <div className="details flex flex-col cursor-pointer px-2 relative">
            <h4 className='font-bold text-slate-700 my-2'>{item.brand}</h4>
            <p>{item.title}</p>
            <h5 className="text-slate-500 text-sm font-semibold py-1">{item.color}</h5>
            <div className='flex items-center gap-2'>
                <span className="font-bold">${item.discountedPrice}</span>
                <span className='text-sm line-through opacity-60'>${item.price}</span>
                <span className='text-green-700'>{Math.floor(((item.price - item.discountedPrice)*100)/item.price)}% off</span>
            </div>
            <div className="remove-btn text-blue-600 absolute bottom-0">REMOVE</div>
        </div>
   </div>
  )
}

export default Card_Cart

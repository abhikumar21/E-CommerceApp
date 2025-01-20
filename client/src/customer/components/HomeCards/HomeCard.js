import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'


const HomeCard = ({data}) => {
  const navigate = useNavigate();

  // useEffect(()=> {
  //   console.log(data);
  // },[]);

  return (
    <div onClick={()=>navigate(`/product/${data.id}`)}
     className='cursor-pointer shadow-[1px_1px_10px_3px_rgba(0,0,0,0.3)] mx-3 my-4 py-2 px-2 w-[220px] h-auto bg-white'>
      <div className="image w-full h-[270px] flex align-middle justify-center">
        <img className='h-full w-full object-contain' src={data.imageUrl} alt="" />
      </div>
      <h3 className="brand font-bold mt-2 mb-1 text-left">{data.brand}</h3>
      <p className="product font-normal text-sm text-gray-800 text-left">Men Printed Round Neck Pure Cotton Red T-Shirt</p>
    </div>
  )
}

export default HomeCard

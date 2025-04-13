import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'


const HomeCard = ({data}) => {
  const navigate = useNavigate();

  // useEffect(()=> {
  //   console.log(data);
  // },[]);

  return (
    <div onClick={()=>navigate(`/product/${data._id}`)}
     className='cursor-pointer mx-3 my-4 py-2 px-0 w-[220px] h-auto bg-white'>
      <div className="image bg-green-300 w-auto h-[300px] flex align-middle justify-center">
        <img className='h-full w-full object-cover' src={data.ImageUrls[0]} alt="" />
      </div>
      <h3 className="brand font-bold mt-2 mb-1 text-left">{data.brand}</h3>
      <p className="product font-normal text-sm text-gray-800 text-left">{data.title}</p>
    </div>
  )
}

export default HomeCard

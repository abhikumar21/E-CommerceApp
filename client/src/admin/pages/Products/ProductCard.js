import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className="card bg-white px-3 py-3 gap-4" style={{display:"grid", gridTemplateColumns: "1.5fr 3fr 1.5fr 1fr 1fr 1fr"}}>
            <div className="image w-[100px] min-h-[120px] h-auto max-h-[130px] overflow-hidden">
                <img className='object-cover w-full h-full' src={item.ImageUrls[0]} alt="" />
            <h4 className='font-bold text-slate-700 my-2'>{item.brand}</h4>
            </div>
            <p>{item.title}</p>
            <h5 className="text-slate-500 text-sm font-semibold py-1">{`${item.topLevelCategory}-${item.thirdLevelCategory}`}</h5>
            <span className="font-bold">${item.discountPrice}</span>
            <div className="quantity">{item.quantity}</div>
            <div className="remove-btn text-blue-600 bottom-0">REMOVE</div>
    </div>
  )
}

export default ProductCard

import React from 'react'

const PriceBox = ({cartDetails}) => {
  return (
   <div className="price-box bg-white px-4 py-4 gap-4 flex flex-col">
    <div className="heading font-bold text-xl text-slate-600">Price Details</div>
    <hr className='h-0.5 bg-slate-300' />
    <div className="price flex justify-between">
      <div className="">Price</div>
      <div className="amt">$ {cartDetails.totalPrice}</div>
    </div>
    <div className="price flex justify-between">
      <div className="">Discount</div>
      <div className="amt">$ {Math.floor(cartDetails.totalPrice - cartDetails.totalDiscountPrice)}</div>
    </div>
    <div className="price flex justify-between">
      <div className="">Delivery Charges</div>
      <div className="amt">$ 30</div>
    </div>
    <hr className='h-0.5 bg-slate-300' />
    <div className="price flex justify-between text-2xl font-medium my-2">
      <div className="">Total Amount</div>
      <div className="amt">${cartDetails.totalDiscountPrice}</div>
    </div>

    <button className="checkout bg-lime-400 py-3 text-blue-800 font-medium text-xl">
      Checkout
    </button>

  </div>
  )
}

export default PriceBox

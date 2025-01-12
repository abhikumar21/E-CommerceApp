import React from 'react'
import Card_Cart from './Card_Cart'
import S6 from '../../../data/Tops/a18.avif'
import { womenTops } from '../../../data/womenClothing'

const Cart = () => {
  return (
    <div className="detailsPage bg-slate-300 pb-10 pt-5">
      <div 
      style={{display: "grid", gridTemplateColumns: "7fr 3fr", gap: "30px"}}
      className="transparent-container bg-transparent mx-20">

        <div className="left-grid bg-transparent flex flex-col gap-2">
          {womenTops.map((item)=> {
            return (
              <Card_Cart item={item} />
            )
          })}
        </div>

        <div className="right-grid">

          <div className="price-box bg-white px-4 py-4 gap-4 flex flex-col">
            <div className="heading font-bold text-xl text-slate-600">Price Details</div>
            <hr className='h-0.5 bg-slate-300' />
            <div className="price flex justify-between">
              <div className="">Price</div>
              <div className="amt">$ 400</div>
            </div>
            <div className="price flex justify-between">
              <div className="">Discount</div>
              <div className="amt">$ 400</div>
            </div>
            <div className="price flex justify-between">
              <div className="">Delivery Charges</div>
              <div className="amt">$ 400</div>
            </div>
            <hr className='h-0.5 bg-slate-300' />
            <div className="price flex justify-between text-2xl font-medium my-2">
              <div className="">Total Amount</div>
              <div className="amt">$ 400</div>
            </div>

            <button className="checkout bg-lime-400 py-3 text-blue-800 font-medium text-xl">
              Checkout
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart

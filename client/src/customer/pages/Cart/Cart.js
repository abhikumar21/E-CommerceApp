import React from 'react'
import CardCart from './CardCart'
import S6 from '../../../data/Tops/a18.avif'
import { womenTops } from '../../../data/womenClothing'
import PriceBox from './PriceBox'

const Cart = () => {
  return (
    <div className="detailsPage bg-slate-300 pb-10 pt-5">
      <div 
      style={{display: "grid", gridTemplateColumns: "7fr 3fr", gap: "30px"}}
      className="transparent-container bg-transparent mx-20">

        <div className="left-grid bg-transparent flex flex-col gap-2">
          {womenTops.map((item)=> {
            return (
              <CardCart item={item} />
            )
          })}
        </div>

        <div className="right-grid">
          <PriceBox/>
        </div>

      </div>
    </div>
  )
}

export default Cart

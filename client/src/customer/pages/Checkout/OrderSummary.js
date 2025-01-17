import React from 'react'
import { womenTops } from '../../../data/womenClothing'
import CardCart from '../Cart/CardCart'
import Cart from '../Cart/Cart'
import PriceBox from '../Cart/PriceBox'


const Details =()=> {
    return (
    <div className="address-details">
        <div className="name">Abhishek</div>
        <div className="address">Mugare, Songaon, Ambedkar-Nagar, Uttar Pradesh, India, 224122</div>
        <div className="phone mb-4">77766677766</div>
    </div>
    )
}

const OrderSummary = () => {
  return (
    <div className='orderSummary'>
      <div className="container mt-10">
        <div className="address px-4 py-4 mb-10" style={{boxShadow: "0 0 10px black"}}><Details/></div>
        <div className="orders mt-10" style={{display: "grid", gridTemplateColumns:"3fr 1fr", gap:"20px"}}>
            <div className="order-cards bg-slate-200">
                {
                    womenTops.map((item)=> {
                        return (
                            <CardCart item={item}/>
                        )
                    })
                }
            </div>
                <PriceBox/>
        </div>
        {/* <Cart/> */}
      </div>
    </div>
  )
}

export default OrderSummary

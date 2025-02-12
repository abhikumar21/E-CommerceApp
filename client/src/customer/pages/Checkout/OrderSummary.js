import React, { useEffect, useState } from 'react'
import { womenTops } from '../../../data/womenClothing'
import CardCart from '../Cart/CardCart'
import Cart from '../Cart/Cart'
import PriceBox from '../Cart/PriceBox'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Card_Orders from './Card_Orders'
import Price_Orders from './Price_Orders'


const Details =({sharedAddress})=> {
    return (
    <div className="address-details">
        <div className="name">{sharedAddress.recieverName}</div>
        <div className="address">{sharedAddress.Address}</div>
        <div className="phone mb-4">{sharedAddress.Phone}</div>
    </div>
    )
}

const OrderSummary = ({sharedAddress}) => {
  const Token = useSelector((state)=>state.auth.token)
  const [cartDetails, setCartDetails] = useState();

  useEffect(()=> {
    const userCart=async()=> {
      try {
        const res = await axios.get('/cart', {
          headers: {Authorization: `Bearer ${Token}`}
        })
        console.log(res.data);
        // setCartItems(res.data.cartItems);
        setCartDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    userCart();
  }, [])

  return (
    <div className='orderSummary'>
      <div className="container mt-10">
        <div className="address px-4 py-4 mb-10" style={{boxShadow: "0 0 10px black"}}><Details sharedAddress={sharedAddress} /></div>
        <div className="orders mt-10" style={{display: "grid", gridTemplateColumns:"3fr 1fr", gap:"20px"}}>
            <div className="order-cards bg-slate-200">
                {
                    cartDetails?.cartItems.map((item)=> {
                        return (
                            <Card_Orders item={item}/>
                        )
                    })
                }
            </div>
                <Price_Orders cartDetails={cartDetails} sharedAddress={sharedAddress}/>
        </div>
        {/* <Cart/> */}
      </div>
    </div>
  )
}

export default OrderSummary

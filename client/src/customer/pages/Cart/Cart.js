import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import CardCart from './CardCart'
import S6 from '../../../data/Tops/a18.avif'
import { womenTops } from '../../../data/womenClothing'
import PriceBox from './PriceBox'
import axios from 'axios'

const Cart = () => {
  const Token = useSelector((state)=> state.auth.token);
  // const [cartItems, setCartItems] = useState([]);
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
    <div className="detailsPage bg-slate-300 pb-10 pt-5">
      <div 
      style={{display: "grid", gridTemplateColumns: "7fr 3fr", gap: "30px"}}
      className="transparent-container bg-transparent mx-20">

        <div className="left-grid bg-transparent flex flex-col gap-2">
          {cartDetails?.cartItems.map((item)=> {
            return (
              <CardCart item={item} />
            )
          })}
        </div>

        <div className="right-grid">
          {cartDetails && 
           <PriceBox cartDetails={cartDetails}/>
          }
        </div>

      </div>
    </div>
  )
}

export default Cart

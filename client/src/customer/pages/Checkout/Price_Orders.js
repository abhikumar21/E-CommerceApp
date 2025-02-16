import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';

//39:52 payment

const Price_Orders = ({cartDetails, sharedAddress}) => {

  const Token = useSelector((state)=>state.auth.token)
  const User = useSelector((state)=> state.auth.user)

  const [orderData, setOrderData] = useState({
    deliveryDate:"",
    shippingAddress: sharedAddress?._id,
    paymentDetails: "",
    totalPrice: cartDetails?.totalPrice,
    totalDiscountPrice: cartDetails?.totalDiscountPrice,
  });

  // console.log(cartDetails?.cartItems)
  
  const handleCreateOrder=async()=> {
    const currentDate = new Date();
    const shippingDate = new Date(currentDate.getTime() + 7*24*60*60*1000);
    await setOrderData({...orderData, deliveryDate: shippingDate.toISOString().split("T")[0] })
    const userId = User._id;

    try {
      // console.log(orderData)
      const res = await axios.post('/order', orderData, {
        headers: {Authorization: `Bearer ${Token}`}
      })
      if(res) {
        const orderId = res.data._id;
        const addProducts = await axios.post(`/order/${orderId}`, {userId})
        console.log(addProducts.data);
        if(addProducts) {
          const {data} = await axios.post(`/payment/${orderId}`);
          console.log(data)
          window.location.href = data.payment_link_url;
        }
      }
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
   <div className="price-box bg-white px-4 py-4 gap-4 flex flex-col">
    <div className="heading font-bold text-xl text-slate-600">Price Details</div>
    <hr className='h-0.5 bg-slate-300' />
    <div className="price flex justify-between">
      <div className="">Price</div>
      <div className="amt">$ {cartDetails?.totalPrice}</div>
    </div>
    <div className="price flex justify-between">
      <div className="">Discount</div>
      <div className="amt">$ {Math.floor(cartDetails?.totalPrice - cartDetails?.totalDiscountPrice)}</div>
    </div>
    <div className="price flex justify-between">
      <div className="">Delivery Charges</div>
      <div className="amt">$ 30</div>
    </div>
    <hr className='h-0.5 bg-slate-300' />
    <div className="price flex justify-between text-2xl font-medium my-2">
      <div className="">Total Amount</div>
      <div className="amt">${cartDetails?.totalDiscountPrice}</div>
    </div>

    <button 
      onClick={handleCreateOrder}
      className="checkout bg-lime-400 py-3 text-blue-800 font-medium text-xl">
       Checkout
    </button>

  </div>
  )
}

export default Price_Orders

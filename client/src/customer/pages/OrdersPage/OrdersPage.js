import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { womenTops } from '../../../data/womenClothing'

const OrderCard=({item})=> {
  return(
    <div className="card bg-white px-3 py-3 gap-4" style={{boxShadow:"0 0 10px 2px black", display:"grid", gridTemplateColumns:"1fr 3fr 1fr 3fr"}}>
      <div className="image-container">
          <div className="image w-[120px] h-auto max-h-[130px] overflow-hidden">
              <img className='cover w-full h-full' src={item.imageUrl} alt="" />
          </div>
      </div>
      <div className="details flex flex-col justify-center cursor-pointer px-2 relative">
          <h4 className='font-bold text-slate-700 my-2'>{item.brand}</h4>
          <p>{item.title}</p>
          <h5 className="text-slate-500 text-sm font-semibold py-1">{item.color}</h5>
      </div>
      <div className="price flex flex-col justify-center">${item.price}</div>
      <div className="status flex flex-col justify-center">
        <div className="p1 font-semibold flex items-center gap-2">
          <div className="green h-[12px] w-[12px] rounded-full bg-green-600"></div>
          <div>Expected delivery on March 14</div>
        </div>
        <div className="p2">Your item has been delivered</div>
      </div>
    </div>
  )
}




const Filters = () => {

  // const location = useLocation();
  // const navigate = useNavigate();




  const handleFilter = (value, propertyId) => {
    // const searchParams = new URLSearchParams(location.search)
    // const existingValues = searchParams.getAll(propertyId);

  }


// const [dropBoxOpen, setDropBoxOpen] = useState({orderStatus: true});


    const OrderStatus = [
        { id: "onTheWay", value: "red", label: "On the way" },
        { id: "delivered", value: "black", label: "Delivered" },
        { id: "cancelled", value: "blue", label: "Cancelled" },
        { id: "returned", value: "green", label: "Returned" }
    ];
    
  


  return (
    <div className='px-4 py-4' style={{boxShadow: "0 0 8px 2px black"}}>
      <div className="head font-bold text-2xl my-2">Filters</div>
      <div className="list style-none px-3">
        <div className="orderStatus text-xl font-semibold py-2">Order Status</div>
        <div className="items-status">
          {OrderStatus.map((item)=> {
            return(
              <span className='flex gap-2 my-2'>
                <input 
                type="checkbox"
                id={`${item.id}`} 
                name={`${item.id}`}
                />
                <label for={`${item.id}`}>{item.label}</label>
              </span>
            )
           })} 
        </div>
      </div>
    </div>
  )
}




const OrdersPage = () => {
  useEffect(()=> {
    console.log(womenTops);
  }, [])

  return (
    <div className='ordersPage'>
      <div className="container px-10 my-10" style={{display: "grid", gridTemplateColumns:"1.5fr 4.5fr"}}>
        <div className="left-container px-2 py-2 mr-[50px]">
          <Filters/>
        </div>
        <div className="right-container gap-10 flex flex-col">
          {womenTops.map((item)=> {
              return(
                <>
                <OrderCard item={item}/>
                </>
              )
            })}
        </div>
      </div>

    </div>
  )
}

export default OrdersPage

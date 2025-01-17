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
        <div className="p1 font-semibold">Expected delivery on March 14</div>
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


const [dropBoxOpen, setDropBoxOpen] = useState({orderStatus: true});


    const PropertiesData = [
      {
        id: "orderStatus",
        name: "Order Status",
        options: [
            { id: 1, value: "red", label: "On the way" },
            { id: 2, value: "black", label: "Delivered" },
            { id: 3, value: "blue", label: "Cancelled" },
            { id: 4, value: "green", label: "Returned" }
        ],
      }
    ];
    
  


  return (
    <div>
      <div className="head font-bold text-2xl my-2">Filters</div>
       <ul className="list style-none border-solid border-2 border-slate-800 px-3">
                    {PropertiesData.map((property)=> {
                      return (
                    <li key={property.id}>
                      <div className="character cursor-pointer text-xl font-medium">
                        <span>{property.name}</span>
                        <span>+</span>
                      </div>
                      {dropBoxOpen[property.id] ? 
                      (<div className="dropBox mx-2 my-2 flex flex-col text-slate-500">
                       {property.options.map((item) => {
                        //  console.log(item);
                        return (
                          <span className='flex gap-2 py-1'>
                            <input 
                            onChange={()=>handleFilter(item.value, property.id)}
                            type="checkbox"
                            id={`${property.id}${item.id}`} 
                            name={`${property.id}`}
                            />
                            <label for={`${property.id}${item.id}`}>{item.label}</label>
                           </span>
                        )
                       })}
                      </div>) : (<></>)
                      }    
                    </li>   
                      )              
                    })}
     
                </ul>
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

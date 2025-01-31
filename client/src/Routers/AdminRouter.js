import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from '../admin/pages/Dashboard/Dashboard'
import AddProduct from '../admin/pages/AddProduct/AddProduct'
import CanteenPage from '../admin/pages/CanteenPage/CanteenPage'
import AdminProducts from '../admin/pages/Products/AdminProducts'


const menu = [
  {name:"Dashboard", path:"/admin"},
  {name:"Products", path:"/admin/product"},
  {name:"Customers", path:"/admin/customers"},
  {name:"Orders", path:"/admin/orders"},
  {name:"AddItem", path:"/admin/product/create"}
]
const AdminRouter = () => {
  const navigate = useNavigate();

  return (
    <div className='flex'>
      <div className="menu-bar w-[200px] h-screen position-fixed top-0 left-0 bg-slate-100">
        <div className="menu-items flex flex-col">
          {menu.map((item, index)=> {
            return(
            <button onClick={()=>navigate(item.path)}
             key={index} 
             className="px-5 py-4 border-b-slate-500 border-b-2 hover:bg-orange-700 hover:text-white">{item.name}</button>
            )
          })}
        </div>
      </div>
      <div className="pages w-full overflow-auto h-screen">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/product/create" element={<AddProduct/>} />
          <Route path="/canteen" element={<CanteenPage/>} />
          <Route path="/product" element={<AdminProducts/>} />


        </Routes>
      </div>
    </div>
  )
}

export default AdminRouter

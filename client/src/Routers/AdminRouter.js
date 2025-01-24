import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../admin/pages/Dashboard/Dashboard'
import AddProduct from '../admin/pages/AddProduct/AddProduct'
import AdminHome from '../admin/AdminHome'

const AdminRouter = () => {
  return (
    <div>
      <AdminHome/>
      {/* <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/product/create" element={<AddProduct/>} />

      </Routes> */}
    </div>
  )
}

export default AdminRouter

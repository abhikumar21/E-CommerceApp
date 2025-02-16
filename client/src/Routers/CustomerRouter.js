import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navigation from '../customer/components/Navigation/Navigation';
import HomePage from '../customer/pages/HomePage/HomePage';
import Cart from '../customer/pages/Cart/Cart';
import Footer from '../customer/components/Footer/Footer';
import ProductPage from '../customer/pages/ProductsPage/ProductPage';
import ProductDetails from '../customer/pages/ProductDetails/ProductDetails';
import Todos from '../customer/pages/TodoPage/Todos';
import Checkout from '../customer/pages/Checkout/Checkout';
import OrdersPage from '../customer/pages/OrdersPage/OrdersPage'
import OrderDeliverPage from '../customer/pages/OrderDeliver/OrderDeliverPage';
import Dashboard from '../admin/pages/Dashboard/Dashboard';
import PaymentSuccess from '../customer/pages/Checkout/PaymentSuccess';

const CustomerRouter = () => {
  return (
    <div>
      <Navigation/>
      <hr className='bg-slate-300' />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:levelOne/:levelTwo/:levelThree" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/todos" element={<Todos/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/account/orders" element={<OrdersPage/>} />
          <Route path="/account/orders/1" element={<OrderDeliverPage/>} />
          <Route path="/admin" element={<Dashboard/>} />
          <Route path="/payment/:id" element={<PaymentSuccess/>} />

        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default CustomerRouter

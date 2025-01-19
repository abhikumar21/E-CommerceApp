import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import MyCarousel from './customer/components/HomeCarousel/MyCarousel';
import HomePage from './customer/pages/HomePage/HomePage';
import Cart from './customer/pages/Cart/Cart';
import Footer from './customer/components/Footer/Footer';
import ProductPage from './customer/pages/ProductsPage/ProductPage';
import ProductDetails from './customer/pages/ProductDetails/ProductDetails';
import Todos from './customer/pages/TodoPage/Todos';
import Checkout from './customer/pages/Checkout/Checkout';
import OrdersPage from './customer/pages/OrdersPage/OrdersPage'
import { Routes, Route } from 'react-router-dom';
import OrderDeliverPage from './customer/pages/OrderDeliver/OrderDeliverPage';


function App() {
  return (
    <div className="app">
      <Navigation/>
      <hr className='bg-slate-300' />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/todos" element={<Todos/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/account/orders" element={<OrdersPage/>} />
          <Route path="/account/orders/1" element={<OrderDeliverPage/>} />

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

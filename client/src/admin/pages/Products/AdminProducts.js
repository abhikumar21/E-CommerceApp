import React, { useEffect, useState } from 'react'
import { womenTops } from '../../../data/womenClothing'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import axios from 'axios'


const AdminProducts = () => {
  const user = useSelector((state)=>state.auth.user)
  const [adminProducts, setAdminProducts] = useState([]);

  useEffect(()=> {
    const getProducts = async()=> {
      const res = await axios.get(`/product/${user._id}`)
      setAdminProducts(res.data);
      console.log(res.data);
    }
    getProducts();
  }, [user])

  return (
    <div className="left-grid bg-transparent flex flex-col gap-2">
      <div className="headings px-3 py-3 font-bold bg-slate-300" style={{display:"grid", gridTemplateColumns: "1.5fr 3fr 1.5fr 1fr 1fr 1fr"}}>
        <div>Image</div>
        <div>Title</div>
        <div>Category</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Delete</div>
      </div>
      {adminProducts.map((item)=> {
        return (
          <ProductCard item={item} />
        )
      })}
    </div>
  )
}

export default AdminProducts

import React, { useEffect, useState } from 'react'
import P1 from '../../../data/Tops/a5.webp'
import S1 from '../../../data/Tops/a9.jpeg'
import S2 from '../../../data/Tops/a10.jpg'
import S3 from '../../../data/Tops/a12.jpg'
import S4 from '../../../data/Tops/a13.jpg'
import S5 from '../../../data/Tops/a14.avif'
import S6 from '../../../data/Tops/a18.avif'

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ProductCard from '../ProductsPage/ProductCard';
import { womenTops } from '../../../data/womenClothing';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'


const ProductDetails = () => {
  const [sideImages, setSideImages] = useState([S5, S3, S4, S1, S6]);
  const [currentItem, setCurrentItem] = useState();
  const [primaryImage, setPrimaryImage] = useState();
  const params = useParams();
  const Token = useSelector((state)=> state.auth.token);
  const [size, setSize] = useState();
  const [productInCartMessage, setProductInCartMessage] = useState("");
  //679bdb769fb909fe01861528

  useEffect(()=> {
    const getProductDetails=async()=> {
      const productId = params.id;
      try {
        const res = await axios.get(`/product/item/${productId}`)
        // console.log(res.data);
        setCurrentItem(res.data);
        setPrimaryImage(res.data.ImageUrls[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getProductDetails();
  }, [])

  const handleChangePrimary = (imageUrl) => {
    try {
      setPrimaryImage(imageUrl);
    } catch (error) {
      console.log(error);
    }
  }


  const handleAddToCart = async(currentItem) => {
    // console.log(Token);
    if(!size) {
      setProductInCartMessage("Please select size first !!")
      return;
    }
    try {
      const res = await axios.post(
        `/cart/add/${currentItem._id}`, 
        {size}, 
        {
          headers: { Authorization: `Bearer ${Token}` }
        }
      );
      console.log(res);
      if(res.status===200) {
        setProductInCartMessage("Item added to cart");
      }
    } catch (error) {
      if(error.response) {
        setProductInCartMessage(error.response.data || "Something went wrong");
      }
      else{
        console.log(setProductInCartMessage("Network error. Please try again later."));
      }
    }
  }


  return (
    <div className="detailsPage bg-slate-300 pb-10">
      <div className="horizontal-padding mx-20 bg-white">

     {currentItem && <>
        <div className="productDetails flex pt-4 pb-4">
          <div className="product-image-section w-5/12 grid grid-cols-7 pl-6">
            <div className="choice-images flex flex-col gap-4 col-span-1 mr-4">
              {currentItem.ImageUrls.map((imageUrl, key) => {
                return (
                  <div key={key}
                   className='w-full h-[105px] overflow-hidden'
                   onMouseEnter={()=>handleChangePrimary(imageUrl)}
                   >
                    <img className='object-cover w-full h-full' src={imageUrl} alt="" />
                  </div>
                )
              })}

            </div>
            <div className="current-image col-span-6">
              <div className='w-full h-[650px] overflow-hidden'>
              <img className='object-cover w-full h-full' src={primaryImage} alt="" />
              </div>
            </div>
          </div>
          <div className="product-info-section w-7/12 pr-8">
            <div className="flex flex-col ml-8">

              <h3 className="brand text-md font-bold text-slate-500">{currentItem.brand}</h3>
              <p className='product-name text-lg'>{currentItem.title}</p>

              <div className="price-rating flex justify-between my-3">
              <div className="price">
                  <div className="flex gap-2 items-center">
                    <p className="text-xl font-semibold">₹{currentItem.price}</p>
                    <p className="text-md text-decoration-line: line-through">₹{currentItem.discountPrice}</p>
                    <p className="text-md font-semibold text-green-600">{parseInt(((currentItem.price - currentItem.discountPrice)*100)/currentItem.price)}% OFF</p>
                  </div>
                  <div className="price-text text-sm text-slate-500">inclusive of all taxes</div>
                </div>

                <div className="rating flex items-center">
                  <StarIcon className='text-yellow-400'/>
                  <p className='pr-1 pl-1 text-md font-semibold text-slate-700'>4.6</p>
                  <p className='px-2 text-md text-slate-700'>|</p>
                  <p className='text-cyan-500 text-md font-semibold'>100 Reviews</p>
                </div>
              </div>

                <div className="select-size flex flex-col mt-2">
                  <div className="head text-xl">Select Size</div>
                  <div className="sizes flex gap-3 mt-2">
                    {currentItem.sizes.map((itemSize, index) => {
                      return (
                        <button 
                        onClick={()=>setSize(itemSize.name)}
                        key={index} 
                        className={`flex items-center align-middle justify-center border border-black w-12 py-2 rounded-md ${size===itemSize.name && "bg-slate-300"}`}>
                          {itemSize.name}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="addtocart my-10">
                 {productInCartMessage &&  <div className='text-green-400'>{productInCartMessage}</div>}
                  <button onClick={()=>handleAddToCart(currentItem)}
                   className='roundButton'>Add to Cart</button>
                </div>

                <div className="description">{currentItem.description}</div>

                <div className="highlights mt-8">
                  <div className="text-md font-bold">
                    Highlights
                  </div>
                  <ul className="list list-disc pl-5">
                    <li className='my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, illo.</li>
                    <li className='my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, illo.</li>
                    <li className='my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, illo.</li>
                  </ul>
                </div>

                <div className="details mt-8">
                  <div className="text-md font-bold">
                    Details
                  </div>
                  <div className="detailPara">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus tenetur ullam officia, architecto voluptas sit. Labore, aperiam. A minima saepe commodi, praesentium cum dolorum necessitatibus! Expedita ipsa nobis sunt?
                  </div>
                </div>

            </div>
          </div>
        </div>

        <hr className='h-4 bg-slate-300' />
       
        <div className="review_rating px-10 py-5">
          <h3 className='font-bold text-lg mb-4'>Recent Reviews and Rating</h3>
          <div className="" style={{display: "grid", gridTemplateColumns : "2fr 1fr"}}>
            <div className="reviews pr-[100px]">

              <div className="review-card my-5" style={{display: "grid", gridTemplateColumns:"1fr 10fr"}}>
                <div className="avataar h-[40px] w-[40px] overflow-hidden rounded-full mt-2 mx-auto"><img src={P1} alt="" className='w-full h-full object-cover' /></div>
                <div className="review-text">
                  <div className="name font-semibold">Ananya</div>
                  <div className="date text-xs text-slate-600">April 6, 2012</div>
                  <div className="stars flex text-yellow-500"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></div>
                  <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab voluptatem id iusto pariatur nemo laborum, voluptatibus autem quia corrupti reprehenderit?</div>
                </div>
              </div>

              <div className="review-card" style={{display: "grid", gridTemplateColumns:"1fr 10fr"}}>
                <div className="avataar h-[40px] w-[40px] overflow-hidden rounded-full mt-2 mx-auto"><img src={P1} alt="" className='w-full h-full object-cover' /></div>
                <div className="review-text">
                  <div className="name font-semibold">Ananya</div>
                  <div className="date text-xs text-slate-600">April 6, 2012</div>
                  <div className="stars flex text-yellow-500"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></div>
                  <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab voluptatem id iusto pariatur nemo laborum, voluptatibus autem quia corrupti reprehenderit?</div>
                </div>
              </div>

            </div>
            <div className="ratings px-2 py-2">
              <div className="review-bar">
                <h2 className='font-semibold my-1'>Product Ratings</h2>
                <div className="no-of-ratings text-yellow-500 mb-4"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></div>
                <div className="grade-col ">

                  <div className="hor flex items-center justify-between pb-1">
                    <div className="text mr-4">Excellent</div>
                    <div className="text-bar bg-gray-300 w-[300px] h-1 flex rounded-lg overflow-hidden">
                      <div className="color-bar bg-green-500 w-[70%] h-full"></div>
                    </div>
                  </div>
                  <div className="hor flex items-center justify-between pb-1">
                    <div className="text mr-4">Good</div>
                    <div className="text-bar bg-gray-300 w-[300px] h-1 flex rounded-lg overflow-hidden">
                      <div className="color-bar bg-green-500 w-[70%] h-1"></div>
                    </div>
                  </div>
                 

                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='h-4 bg-slate-300' />
        </>}
        <div className="related-products-section mt-10 px-4">
          <div className="head text-2xl font-bold mt-4 mb-4">Similar Products</div>
          <div className="related col-span-4 flex flex-wrap justify-around border-slate-800 px-2 py-2 gap-2">
              {womenTops.map((item)=> {
                return (
                  <ProductCard item={item}/>
                )
              })}
          </div>
        </div>

      </div>

    </div>
  )
}

export default ProductDetails

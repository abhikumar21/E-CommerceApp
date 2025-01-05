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
import ProductCard from '../ProductPage/ProductCard';
import { womenTops } from '../../../data/womenClothing';


const ProductDetails = () => {
  const [sideImages, setSideImages] = useState([S5, S3, S4, S1, S6]);
  const [primaryImage, setPrimaryImage] = useState(sideImages[0]);
  const [currentItem, setCurrentItem] = useState(womenTops[0]);

  const handleChangePrimary = (imageUrl) => {
    try {
      setPrimaryImage(imageUrl);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="detailsPage bg-slate-300 pb-10">
      <div className="horizontal-padding mx-20 bg-white">

        <div className="productDetails flex pt-4 pb-4">
          <div className="product-image-section w-5/12 grid grid-cols-7 pl-6">
            <div className="choice-images flex flex-col gap-4 col-span-1 mr-4">
              {sideImages.map((imageUrl, key) => {
                return (
                  <div key={key}
                   className='w-full h-[105px] overflow-hidden bg-green-700'
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
                    <p className="text-md text-decoration-line: line-through">₹{currentItem.discountedPrice}</p>
                    <p className="text-md font-semibold text-green-600">{parseInt(((currentItem.price - currentItem.discountedPrice)*100)/currentItem.price)}% OFF</p>
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
                    {currentItem.size.map((itemSize) => {
                      return (
                        <button className="flex items-center align-middle justify-center border border-black w-12 py-2 rounded-md">{itemSize.name}</button>
                      )
                    })}
                  </div>
                </div>

                <div className="addtocart my-10">
                  <button className='roundButton'>Add to Cart</button>
                </div>

                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis dignissimos repellendus similique inventore qui illo, corporis nesciunt esse veritatis harum voluptate unde! Deleniti mollitia qui repudiandae, ipsam molestias corporis.
                </div>

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

import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useSelector } from 'react-redux';


const AddProduct = () => {
  const user = useSelector((state)=>state.auth.user);

  const [data, setData] = useState({
    adminId:"",
    brand: "", 
    title: "", 
    color:"",
    quantity:"",
    price:"",
    discountPrice:"",
    topLevelcategory:"",
    secondLevelCategory:"",
    thirdLevelCategory:"",
    description:"",
    sizes:[{
      name:"",
      quantity:"",
    }]
  })


  const handleSubmit= async()=> {
    setData((prev)=>({...prev, adminId: user._id}));
    try {
      const res = await axios.post("/admin/create", data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }




  const handleChange = (event) => {
    setData((prev) => ({...prev,[event.target.name]: event.target.value}));
  };


  return (
    <div className="px-5 py-5">
      <div className="container">
        <h2 className="head my-4 font-bold text-3xl">Add New Product</h2>

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <input type="file" className='py-4' />
          <div className="brand-title flex w-full">
            <TextField label="Brand" id="brand" sx={{ m: 1, width: "50%" }} onChange={handleChange} name="brand" value={data.brand}  />

            <TextField label="Title" id="title" sx={{ m: 1, width: "50%" }} onChange={handleChange} name="title" value={data.title}  />
          </div>

          <div className="color-quant flex w-full">
            <TextField label="Color" id="color" sx={{ m: 1, width: "50%" }} onChange={handleChange} name="color" value={data.color}  />

            <TextField
              label="Quantity"
              id="quantity"
              sx={{ m: 1, width: "50%" }}
              name="quantity" value={data.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="prices flex w-full">
            <TextField label="Price" id="price" sx={{ m: 1, width: "50%" }} name="price" value={data.price} onChange={handleChange} />
            <TextField
              label="DiscountedPrice"
              id="discountedprice"
              name='discountPrice'
              value={data.discountPrice}
              onChange={handleChange}
              sx={{ m: 1, width: "50%" }}
            />
          </div>

          <div className="categories flex w-full">
            <FormControl sx={{ m: 1, flex: 1 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Top Level Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="topLevelCategory"
                value={data.topLevelcategory}
                label="Top-Level-Category"
                onChange={handleChange}
              >
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="Kids">Kids</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, flex: 1 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Second Level Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="secondLevelCategory"
                value={data.secondLevelcategory}
                label="Second-Level-Category"
                onChange={handleChange}
              >
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="Accessory">Accessory</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, flex: 1 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Third Level Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="thirdLevelCategory"
                value={data.thirdLevelcategory}
                label="third-Level-Category"
                onChange={handleChange}
              >
                <MenuItem value="Tops">Tops</MenuItem>
                <MenuItem value="Dress">Dress</MenuItem>
                <MenuItem value="T-shirt">T-shirt</MenuItem>
                <MenuItem value="Saree">Saree</MenuItem>
                <MenuItem value="Lehenga">Lehenga</MenuItem>
              </Select>
            </FormControl>
          </div>

          <TextField
            label="Description"
            id="description"
            name="description"
            value={data.description}
            onChange={handleChange}
            multiline
            minRows={3} // Minimum number of rows
            maxRows={10} // Optional: Maximum number of rows
            sx={{
              m: 1,
              width: "100%",
              "& .MuiInputBase-root": {
                resize: "both", // Allows resizing
              },
            }}
          />

          <div className="size-quant flex w-full">
            <TextField label="Size" id="size" sx={{ m: 1, width: "50%" }} />

            <TextField
              label="Quantity"
              id="quantity"
              sx={{ m: 1, width: "50%" }}
            />
          </div>
        </Box>

        <div onClick={handleSubmit} className="button mt-6 px-5 py-3 bg-blue-500 text-white rounded-lg w-[150px] flex justify-center">Submit</div>
      </div>
    </div>
  );
}

export default AddProduct

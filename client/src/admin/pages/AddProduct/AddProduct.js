import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useSelector } from 'react-redux';

const defaultState = {
  ImageUrls: [],
  adminId: "",
  brand: "",
  title: "",
  color: "",
  quantity: "",
  price: "",
  discountPrice: "",
  topLevelCategory: "",
  secondLevelCategory: "",
  thirdLevelCategory: "",
  description: "",
  sizes: [{ name: "", quantity: "" }],
};

const AddProduct = () => {

  const user = useSelector((state)=>state.auth.user);

  const [data, setData] = useState(defaultState)
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleFileChange = (event) => {
    const fileArray = Array.from(event.target.files); // Convert FileList to array
    setFiles(fileArray); // Now files is an <array></array>
  };

const topLevelInput = [
  {
    name: "Men",
    value: "men",
    secondLevelInput: [
      {
        name: "Clothing",
        value: "clothing",
        thirdLevelInput: [
          {
            name: "T-shirt",
            value: "t-shirts",
          },
          {
            name: "Shirt",
            value: "shirts",
          },
          {
            name: "Jeans",
            value: "jeans",
          }
        ]
      },
      {
        name: "Accessory",
        value: "accessory",
        thirdLevelInput: [
          {
            name: "Watch",
            value: "watches",
          },
          {
            name: "Wallet",
            value: "wallets",
          }
        ]
      },
      {
        name: "Sports",
        value: "sports",
        thirdLevelInput: [
          {
            name: "Shoes",
            value: "shoes",
          },
          {
            name: "T-shirt",
            value: "t-shirts",
          }
        ]
      }
    ]
  },
  {
    name: "Women",
    value: "women",
    secondLevelInput: [
      {
        name: "Clothing",
        value: "clothing",
        thirdLevelInput: [
          {
            name: "Dress",
            value: "dresses",
          },
          {
            name: "Saree",
            value: "sarees",
          },
          {
            name: "Lehenga",
            value: "lehengas",
          }
        ]
      },
      {
        name: "Accessory",
        value: "accessory",
        thirdLevelInput: [
          {
            name: "Watch",
            value: "watches",
          },
          {
            name: "Bag",
            value: "bags",
          },
          {
            name: "Jewelry",
            value: "jewelries",
          }
        ]
      },
      {
        name: "Sports",
        value: "sports",
        thirdLevelInput: [
          {
            name: "Shoes",
            value: "shoes",
          },
          {
            name: "T-shirt",
            value: "t-shirts",
          }
        ]
      }
    ]
  },
  {
    name: "Kids",
    value: "kids",
    secondLevelInput: [
      {
        name: "Clothing",
        value: "clothing",
        thirdLevelInput: [
          {
            name: "T-shirt",
            value: "t-shirts",
          },
          {
            name: "Shorts",
            value: "shorts",
          }
        ]
      },
      {
        name: "Accessory",
        value: "accessory",
        thirdLevelInput: [
          {
            name: "Watch",
            value: "watches",
          },
          {
            name: "Bag",
            value: "bags",
          }
        ]
      },
      {
        name: "Sports",
        value: "sports",
        thirdLevelInput: [
          {
            name: "Shoes",
            value: "shoes",
          },
          {
            name: "T-shirt",
            value: "t-shirts",
          }
        ]
      }
    ]
  }
];



  const handleSubmit= async()=> {
    
    setLoading(true);

    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]); // "images" matches the Multer field
      }
  
      const uploadRes = await axios.post("/admin/upload", formData, {
        headers: {"Content-type":"multipart/form-data"}
      })

      // console.log(uploadRes);

      const ImageUrls = uploadRes.data.imageUrls;

      setData((prev) => ({ ...prev, ImageUrls}));
      // console.log("Uploaded Image URL:", ImageUrls);

      const res = await axios.post("/admin/create", {...data, adminId:user._id, ImageUrls});
      console.log(res.data);
      setData(defaultState) 
      setFiles([])

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }




  const handleChange = (event) => {
    setData((prev) => ({...prev,[event.target.name]: event.target.value}));
  };

  const handleSizeChange = (index, field, value) => {
    setData((prevData) => {
      const updatedSizes = [...prevData.sizes];
      
      // Prevent unnecessary updates if value is the same
      if (updatedSizes[index][field] === value) return prevData;
  
      updatedSizes[index] = { ...updatedSizes[index], [field]: value };
      return { ...prevData, sizes: updatedSizes };
    });
  };
  
  const addSizeField = () => {
    setData((prevData) => ({
      ...prevData,
      sizes: [...prevData.sizes, { size: "", quantity: "" }],
    }));
  };




  return (
    <div className="px-5 py-5">
      {loading ? <div>Uploading Product Item...</div> : 
        <div className="container">
          <h2 className="head my-4 font-bold text-3xl">Add New Product</h2>

          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <div className="imageInput">
              <input
                  type="file"
                  onChange={handleFileChange}
                  multiple
                  className="py-4"
                />
                {files.length > 0 && (
                  <div>
                    <p>Uploaded Images:</p>
                    <div className="images flex gap-2 flex-wrap">
                      {files.map((url, index) => (
                      <div key={index} className="image w-[200px] h-[200px] overflow-hidden">
                        <img src={URL.createObjectURL(url)} alt={`Uploaded ${index}`} className='w-full h-full object-cover' />
                      </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>

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

            <div className="mycategories flex w-full">
              <FormControl sx={{ m: 1, flex: 1 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Top Level Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    name="topLevelCategory"
                    value={data.topLevelCategory}
                    label="Top-Level-Category"
                    onChange={handleChange}
                  >
                    {topLevelInput.map((item, index) => (
                      <MenuItem key={index} value={item.value}>
                        {item.name}
                      </MenuItem>
                    ))}
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
                  value={data.secondLevelCategory}
                  label="Second-Level-Category"
                  onChange={handleChange}
                >
                  {topLevelInput.find(item => item.value === data.topLevelCategory)?.secondLevelInput.map((item, index2) => (
                    <MenuItem key={index2} value={item.value}>
                      {item.name}
                    </MenuItem>
                  ))}
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
                  value={data.thirdLevelCategory}
                  label="third-Level-Category"
                  onChange={handleChange}
                >
                {topLevelInput.find(item => item.value === data.topLevelCategory)?.secondLevelInput.find(item => item.value == data.secondLevelCategory)?.thirdLevelInput.map((item, index3)=> (
                  <MenuItem key={index3} value={item.value}>
                    {item.name}
                  </MenuItem>
                ))}
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
                  resize: "none", // Allows resizing
                },
              }}
            />

              {data.sizes.map((sizeObj, idx) => (
              <div key={idx} className="size-quant flex w-full">
                <TextField
                  label="Size"
                  id={`size-${idx}`}
                  variant="outlined"
                  sx={{ m: 1, width: "50%" }}
                  onChange={(e) => handleSizeChange(idx, "name", e.target.value)}
                  value={sizeObj.name}
                />
                <TextField
                  label="Quantity"
                  id={`quantity-${idx}`}
                  variant="outlined"
                  sx={{ m: 1, width: "50%" }}
                  onChange={(e) => handleSizeChange(idx, "quantity", e.target.value)}
                  value={sizeObj.quantity}
                />
              </div>
            ))}
            <button onClick={addSizeField} className='mx-4 my-4'><div className='w-[20px] h-[20px] flex py-4 px-4 justify-center items-center align-middle rounded-full bg-slate-600'>+</div><span>Add Size</span></button>
          </Box>

          <div onClick={handleSubmit} className="button mt-6 px-5 py-3 bg-blue-500 text-white rounded-lg w-[150px] flex justify-center cursor-pointer">Submit</div>
        </div>
      }
    </div>
  );
}

export default AddProduct

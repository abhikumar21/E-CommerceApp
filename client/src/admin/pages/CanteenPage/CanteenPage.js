import React, {useState} from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const CanteenPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [age, setAge] = useState('');
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
      <div className=" px-5 py-5">
        <div className="container">
          <h2 className="head my-4 font-bold text-3xl">Add New Item</h2>

          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <div className="brand-title flex flex-col">
              <input type='file' className='my-4'/>
              <TextField label="Dish Name" id="dish-name" sx={{ m: 1 }} />

              <TextField label="Price" id="price" sx={{ m: 1 }} />
            </div>
             
          </Box>

          <button className='bg-orange-700 my-5 text-white px-4 py-2 rounded-lg'>Submit</button>
        </div>
      </div>
  )
}

export default CanteenPage

import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};


const Properties = () => {
  //2:51

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if page is loaded after a refresh
    if (sessionStorage.getItem('pageReloaded')) {
      sessionStorage.removeItem('pageReloaded'); // Clear flag after reload
    } else {
      sessionStorage.setItem('pageReloaded', 'true');
      navigate(location.pathname, { replace: true }); // Reset the path on page reload
    }
  }, [location.pathname, navigate]);



  const handleFilter = (value, propertyId) => {
    const searchParams = new URLSearchParams(location.search)
    const existingValues = searchParams.getAll(propertyId);
    
    if(propertyId==='discount' || propertyId==='availability') {
        searchParams.delete(propertyId);
        existingValues.filter(v => v===value).forEach(v => searchParams.append(propertyId, v));
    }
    // console.log(existingValues);
    if (existingValues.includes(value)) {
      // Remove the value if it already exists
      searchParams.delete(propertyId); // Clear all existing values for the propertyId
      existingValues
        .filter(v => v !== value) // Exclude the value to be removed
        .forEach(v => searchParams.append(propertyId, v)); // Re-add remaining values
    } else {
      // Append the new value
      searchParams.append(propertyId, value);
    }
    navigate(`${location.pathname}?${searchParams.toString()}`)
  }

  // const handleFilter = (value, sectionId)=> { //black, color
  //   const searchParams = new URLSearchParams(location.search)
  //   let filterValue = searchParams.getAll(sectionId)
    
  //   if(filterValue.length>0 && filterValue[0].split(",").includes(value)) {
  //     filterValue = filterValue[0].split(",").filter((item)=>item!==value);
      
  //     if(filterValue.length===0) {
  //       searchParams.delete(sectionId)
  //     }
  //   }
  //   else{
  //     filterValue.push(value);
  //   }
  //   if(filterValue.length>0) {
  //     searchParams.set(sectionId, filterValue.join(","))
  //   }
  //   const query = searchParams.toString()
  //   navigate({search:`?${query}`})
  // }

    const [dropBoxOpen, setDropBoxOpen] = useState({
      color: false,
      size: false,
      price: false,
      discount: false,
      availability: false,
    });

    const handleDrop = (propertyId) => {
       setDropBoxOpen(prevState => ({
        ...prevState,
        [propertyId] : !prevState[propertyId]
       }))
    }

    const PropertiesData = [
      {
        id: "color",
        name: "Color",
        options: [
            { id: 1, value: "red", label: "Red" },
            { id: 2, value: "black", label: "Black" },
            { id: 3, value: "blue", label: "Blue" },
            { id: 4, value: "green", label: "Green" },
            { id: 5, value: "orange", label: "Orange" },
            { id: 6, value: "pink", label: "Pink" }
        ],
      },
      {
        id: "size",
        name: "Size",
        options: [
            { id: 1, value: "L", label: "L" },
            { id: 2, value: "M", label: "M" },
            { id: 3, value: "XL", label: "XL" },
            { id: 4, value: "XXL", label: "XXL" }
        ],
      },
      // {
      //   id: "price",
      //   name: "Price",
      //   options: [
      //       { id: 1, value: "$10 To $20", label: "$10 To $20" },
      //       { id: 2, value: "$20 To $30", label: "$20 To $30" },
      //       { id: 3, value: "$30 To $40", label: "$30 To $40" },
      //       { id: 4, value: "$40 To $50", label: "$40 To $50" },
      //       { id: 5, value: "$50 To $60", label: "$50 To $60" }
      //   ],
      // }, 
      {
        id:"discount",
        name: "Discount",
        options: [
            { id: 1, value: "10% and Above", label: "10% and Above" },
            { id: 2, value: "20% and Above", label: "20% and Above" },
            { id: 3, value: "30% and Above", label: "30% and Above" },
            { id: 4, value: "40% and Above", label: "40% and Above" },
            { id: 5, value: "50% and Above", label: "50% and Above" }
        ],
      },
      {
        id:"availability",
        name:"Availability",
        options: [
            { id: 1, value: "In Stock", label: "In Stock" },
            { id: 2, value: "Out of Stock", label: "Out of Stock" },
            { id: 3, value: "Coming Soon", label: "Coming Soon" }
        ]
      }
    ];

    const [minValue, setMinValue] = useState(10);
    const [maxValue, setMaxValue] = useState(80)
    
  const clearRange=()=> {

  }


  const handleMinChange=(e)=> {
    setMinValue(e.target.value);
  }
  const handleMaxChange=(e)=> {
    setMaxValue(e.target.value)
  }

  return (
    <div>
       <ul className="list style-none border-solid border-2 border-slate-800 flex flex-col">
        
          <div className='relative w-full h-auto px-4 my-2'>
            <p className='mb-2'>Price</p>
            <Range min={0} max={20} defaultValue={[0, 10]} tipFormatter={value => `${value}%`} className="range" />
          </div>

                    {PropertiesData.map((property)=> {
                      return (
                    <li key={property.id}>
                      <div className="character cursor-pointer" onClick={()=>handleDrop(property.id)}>
                        <span>{property.name}</span>
                        <span>+</span>
                      </div>
                      {dropBoxOpen[property.id] ? 
                      (<div className="dropBox mx-2 my-2 flex flex-col text-slate-500">
                       {property.options.map((item) => {
                        //  console.log(item);
                        return (
                          <span className='flex gap-2'>
                            <input 
                            onChange={()=>handleFilter(item.value, property.id)}
                            type={`${property.id==='discount' || property.id==='availability' ? 'radio' : 'checkbox'}`}
                            id={`${property.id}${item.id}`} 
                            name={`${property.id}`}
                            />
                            <label for={`${property.id}${item.id}`}>{item.label}</label>
                           </span>
                        )
                       })}
                      </div>) : (<></>)
                      }    
                    </li>   
                      )              
                    })}
     
                </ul>
    </div>
  )
}

export default Properties

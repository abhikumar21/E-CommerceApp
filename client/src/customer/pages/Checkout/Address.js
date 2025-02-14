import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useSelector } from 'react-redux';

const inputStyle = "w-full border border-slate-500 h-[42px] rounded-sm px-5";

const Details = [
    {
        recieverName: "Abhishek",
        Address: "Mugare, Songaon, Ambedkar-Nagar, Uttar Pradesh, India, 224122",
        Phone: "77766677766",
    },
    {
        recieverName: "Sachin",
        Address: "Jail Colony, Muzaffar-Nagar, Uttar Pradesh, India, 224122",
        Phone: "22211177722",
    }

]

export const AddressDetails =({addressDetails, setSharedAddress, setActiveStep})=> {
    const navigate = useNavigate();
    const handleClick=()=> {
        setActiveStep(2);
        setSharedAddress(addressDetails);
    }

    return (
        <div className="address-details">
            <div className="name">{addressDetails.firstname} {addressDetails.lastname}</div>
            <div className="address">{addressDetails.streetAddress}</div>
            <div className="city">{addressDetails.city}, <span className="state">{addressDetails.state}</span>
            </div>
            <div className="zipCode">{addressDetails.zipCode}</div>
            <div className="phone mb-4">{addressDetails.mobile}</div>

            <button className='bg-violet-500 h-10 w-[200px]' onClick={handleClick}>Deliver here</button>
        </div>
    )
}


const Address = ({setSharedAddress, setActiveStep}) => {
    const Token = useSelector((state)=> state.auth.token);
    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        streetAddress:"",
        city:"",
        state:"",
        zipCode:"",
        mobile:""
    });
    const [addresses, setAddresses] = useState([]);

    const handleChange=(e)=>{
        setData((prev)=> ({...prev, [e.target.name]:e.target.value}) )
    }
    const handleSubmit=async()=> {
        try {
            const res = await axios.post('/address', data, {
                headers: {Authorization: `Bearer ${Token}`}
            });
            console.log(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        const getAddressDetails = async(req, res)=> {
            if(Token) {
                const res = await axios.get('/address', {
                    headers: {Authorization: `Bearer ${Token}`}
                })
                // console.log(res.data);
                setAddresses(res.data);
                setData({
                    firstname:"",
                    lastname:"",
                    streetAddress:"",
                    city:"",
                    state:"",
                    zipCode:"",
                    mobile:""
                })
            }
            else{
                console.log('token not found')
            }
        }
        getAddressDetails();
    }, [Token])
  
  return (
    <div className='address'>
      <div className="container flex gap-10">
        <div className="left w-[800px] gap-4 flex flex-col px-4 pt-4 rounded-md">
            {addresses.map((address, index)=> {
                return (
                    <AddressDetails key={index} setSharedAddress={setSharedAddress} addressDetails={address} setActiveStep={setActiveStep} />
                )
            })}
        </div>
        <div className="right w-full px-5 py-8" style={{boxShadow:"0px 0px 10px rgb(155, 155, 155)"}}>
            <div className="box flex flex-col w-full gap-6">
                <div className="name flex w-full gap-5">
                    <input onChange={handleChange} value={data.firstname} name='firstname' className={inputStyle} type="text" placeholder='First Name' />
                    <input onChange={handleChange} value={data.lastname} name='lastname' className={inputStyle} type="text" placeholder='Last Name' />
                </div>
                <div className="Address">
                    <textarea onChange={handleChange} value={data.streetAddress} name='streetAddress' className={`${inputStyle} !h-[100px] py-2`} type="text" placeholder='address' />
                </div>
                <div className="cit flex gap-5">
                    <input onChange={handleChange} value={data.city} className={inputStyle} name='city' type="text" placeholder='City' required="true" />
                    <input onChange={handleChange} value={data.state} className={inputStyle} name='state' type="text" placeholder='State/Province/Region' required="true" />
                </div>
                <div className="zi flex gap-5">
                    <input onChange={handleChange} value={data.zipCode} className={inputStyle} name='zipCode' type="text" placeholder='ZIP/Postal Code' required="true" />
                    <input onChange={handleChange} value={data.mobile} className={inputStyle} name='mobile' type="text" placeholder='Phone Number' required="true" />
                </div>
                <button onClick={handleSubmit}
                 className='bg-violet-500 h-12 w-[200px]'>Add Address</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Address


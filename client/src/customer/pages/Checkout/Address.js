import React from 'react'

const Details =()=> {
    return (
    <div className="address-details border-t-2 border-slate-300">
        <div className="name">Abhishek</div>
        <div className="address">Mugare, Songaon, Ambedkar-Nagar, Uttar Pradesh, India, 224122</div>
        <div className="phone mb-4">77766677766</div>

        <button className='bg-violet-500 h-10 w-[200px]'>Deliver here</button>
    </div>
    )
}




const inputStyle = "w-full border border-slate-500 h-[42px] rounded-sm px-5";

const Address = () => {
  


  return (
    <div className='address'>
      <div className="container flex gap-10">
        <div className="left w-[800px] gap-4 flex flex-col px-4 pt-4 rounded-md">
            <Details/>
            <Details/>
        </div>
        <div className="right w-full px-5 py-8" style={{boxShadow:"0px 0px 10px black"}}>
            <div className="box flex flex-col w-full gap-6">
                <div className="name flex w-full gap-5">
                    <input className={inputStyle} type="text" placeholder='First Name' required="true" />
                    <input className={inputStyle} type="text" placeholder='Last Name' required="true" />
                </div>
                <div className="Address">
                    <textarea className={`${inputStyle} !h-[100px] py-2`} type="text" placeholder='address' required="true" />
                </div>
                <div className="cit flex gap-5">
                    <input className={inputStyle} type="text" placeholder='City' required="true" />
                    <input className={inputStyle} type="text" placeholder='State/Province/Region' required="true" />
                </div>
                <div className="zi flex gap-5">
                    <input className={inputStyle} type="text" placeholder='ZIP/Postal Code' required="true" />
                    <input className={inputStyle} type="text" placeholder='Phone Number' required="true" />
                </div>
                <button className='bg-violet-500 h-12 w-[200px]'>Deliver here</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Address


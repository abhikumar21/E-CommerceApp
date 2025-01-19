import React from 'react'
import { AddressDetails } from '../Checkout/Address'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { womenTops } from '../../../data/womenClothing';
import CardCart from '../Cart/CardCart';




const OrderDeliverPage = () => {
    const steps = [
        'Placed',
        'Order Confirmed',
        'Shipped',
        'Out For Delivery',
        'Delivered'
      ];
      
  return (
    <div className='OrderDeliverPage'>
        <div className="container px-60 my-10" >
            <div className="address px-10 py-5" style={{boxShadow: "5px 5px 10px 2px rgb(205, 205, 205)"}}>
              <AddressDetails/>
            </div>
            <div className="stepper flex my-10 pb-5 px-2 pt-10" style={{boxShadow: "5px 5px 10px 2px rgb(205, 205, 205)"}}>
                <Box sx={{ width: '100%' }} className="">
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                </Box>
                <button className="cancel w-[200px] ml-20 text-violet-600">Cancel Order</button>
            </div>

            <div className="cards">
                {womenTops.map((item)=> {
                    return(
                    <>
                    <div className="cards my-10" style={{boxShadow: "5px 5px 10px 2px rgb(205, 205, 205)"}}>
                      <CardCart item={item}  />
                    </div>
                    </>
                    )
                })}
            </div>

        </div>
    </div>
  )
}

export default OrderDeliverPage

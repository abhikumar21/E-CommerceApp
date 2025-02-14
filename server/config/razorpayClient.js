import Razorpay from 'razorpay'

//Merchent Id = api Secret
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: provess.env.RAZORPAY_MERCHANT_ID,
});


import { razorpay } from "../config/razorpayClient.js"
import OrderModel from '../models/orderModel.js'
import UserModel from "../models/userModel.js";


export const createPaymentLink = async(orderId) => {
    try {
        const order = await OrderModel.findById(orderId);
        const user = await UserModel.findById(order.user);
        const paymentLinkRequest = {
            amount: order.totalPrice*100,
            currency: "INR", 
            customer: {
                name: user.firstname + " " + user.lastname,
                contact: user.mobile,
                email: user.email
            },
            notify: {
                sms: true,
                email: true,
            },
            reminder_enable: true,
            callback_url: `http://localhost:3000/payment/${orderId}`, 
            callback_method: 'get'
        }
        
        const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);
        console.log(paymentLink);

        const paymentLinkId = paymentLink.id;
        const payment_link_url = paymentLink.short_url;

        const resData = {
            paymentLinkId,
            payment_link_url,
        }

        return resData;

    } catch (error) {
        throw new Error(error.message);
    }
}

export const updatePaymentInformation = async(reqData) => {
    const paymentId = reqData.payment_id;
    const orderId = reqData.order_id;

    try {
        const order = await OrderModel.findById(orderId);
        const payment = await razorpay.payments.fetch(paymentId);
        if(payment.status=="captured") {
            order.paymentDetails.paymentId = paymentId;
            order.paymentDetails.status = "COMPLETED";
            order.orderStatus="PLACED";

            await order.save();
        }

        const resData = {message: "Your order is placed", success: true}
        return resData;
    } catch (error) {
        throw new Error(error.message);
    }
}
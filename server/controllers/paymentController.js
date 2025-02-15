import { createPaymentLink, updatePaymentInformation } from "../services/paymentService.js"


export const createMyPaymentLink=async(req, res)=> {
    try {
        const paymentLink = await createPaymentLink(req.params.id)
        return res.status(200).send(paymentLink)
    } catch (error) {
        console.log(error)
    }
}

export const updateMyPaymentInformation=async(req, res)=> {
    try {
        await updatePaymentInformation(req.query)
        return res.status(200).send({message: "payment information updated", status: true})
    } catch (error) {
        console.log(error)
    }
}
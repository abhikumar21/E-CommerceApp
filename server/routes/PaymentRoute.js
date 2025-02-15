
import express from "express";
import { authenticate } from '../middlewares/authenticate.js';
import { createMyPaymentLink, updateMyPaymentInformation } from "../controllers/paymentController.js";


const router = express.Router();

router.post('/:id', authenticate, createMyPaymentLink);
router.get('/', authenticate, updateMyPaymentInformation)

export default router;
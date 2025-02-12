import express from 'express'
import { createOrder } from '../controllers/OrderController.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = express.Router();

router.post('/', authenticate, createOrder)
// router.get('/convert', convertSmall)

export default router;
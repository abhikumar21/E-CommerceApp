import express from 'express'
import { addOrderedProducts, createOrder } from '../controllers/OrderController.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = express.Router();

router.post('/', authenticate, createOrder)
router.post(`/:id`, addOrderedProducts)

export default router;
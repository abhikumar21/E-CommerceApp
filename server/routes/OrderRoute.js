import express from 'express'
import { addOrderedProducts, createOrder, getOrder } from '../controllers/OrderController.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = express.Router();

router.post('/', authenticate, createOrder)
router.post(`/:id`, addOrderedProducts)
router.get('/:id', getOrder);

export default router;
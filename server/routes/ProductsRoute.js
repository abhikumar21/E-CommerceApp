import express from 'express'
import { getAdminProducts, getCategoryProduct, getProductDetails } from '../controllers/ProductsController.js';

const router = express.Router();

router.get('/:id', getAdminProducts)
router.get('/', getCategoryProduct);
router.get('/item/:id', getProductDetails)
// router.get('/convert', convertSmall)

export default router;
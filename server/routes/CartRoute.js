import express from "express";
import { addToCart, createCart, findUserCart } from "../controllers/CartController.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();

router.get('/', authenticate, findUserCart);
router.post('/add', createCart);
router.post('/add/:id', authenticate, addToCart);

export default router;
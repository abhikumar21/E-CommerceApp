import express from "express";
import { createCart, findUserCart } from "../controllers/CartController.js";

const router = express.Router();

router.get('/', findUserCart);
router.post('/add', createCart);

export default router;
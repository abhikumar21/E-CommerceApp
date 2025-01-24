import express from "express";
import { createProductItem } from "../controllers/AdminController.js";

const router = express.Router();

router.post('/create', createProductItem);

export default router;
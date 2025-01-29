import express from "express";
import { createProductItem } from "../controllers/AdminController.js";
import upload from "../middlewares/multer.js";
import uploadMultiple from "../uploadImages/uploadMultiple.js";

const router = express.Router();

router.post('/upload', upload.array("images"), uploadMultiple);
router.post('/create', createProductItem);

export default router;
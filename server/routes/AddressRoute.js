
import express from "express";
import { addAddress, getAllAddresses } from "../controllers/AddressController.js";
import { authenticate } from '../middlewares/authenticate.js';


const router = express.Router();

router.post('/', authenticate, addAddress);
router.get('/', authenticate, getAllAddresses)

export default router;
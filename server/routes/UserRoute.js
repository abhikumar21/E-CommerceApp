import express from "express";
import { deleteUser, getAllUsers, getUserById, updataUser } from "../controllers/UserController.js";



const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updataUser);
router.delete('/:id', deleteUser);

export default router;
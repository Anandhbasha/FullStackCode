import express from 'express';
import { deleteUser, insertData, readData, updateData } from '../Controller/Controller.js';
import { loginUser, registerUser } from '../Controller/loginController.js';

const router = express.Router();

router.get("/",readData);
router.post("/",insertData)
router.put("/:email",updateData)
router.delete("/:email",deleteUser)
router.post("/addUser",registerUser)
router.post("/login",loginUser)

export default router;
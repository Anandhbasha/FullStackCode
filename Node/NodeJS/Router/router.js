import express from 'express';
import { deleteUser, insertData, readData, updateData } from '../Controller/Controller.js';

const router = express.Router();

router.get("/",readData);
router.post("/",insertData)
router.put("/:email",updateData)
router.delete("/:email",deleteUser)

export default router;
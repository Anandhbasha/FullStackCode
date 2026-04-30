import express from "express"
import { deleteUser, editUser, insert, read } from "../Controller/Controller.js"
const router = express.Router()

router.get("/",read)
router.post("/",insert)
router.put("/edit/:id",editUser)
router.delete("/delete/:id",deleteUser)

export default router
import express from "express"
import { signup } from "../controller/auth.controller.js"



const router = express.Router()

router.get("/" , (req ,res) => {
    res.send("hello express")
})

router.post("/signup" , signup)

export default router;

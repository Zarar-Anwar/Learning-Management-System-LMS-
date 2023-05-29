const express=require("express")
const controller = require("../controller/controller.js")

const router=express.Router()

router.get('/createStudent',controller.createStudent)
router.get("/getStudent",controller.getStudent)


module.exports=router
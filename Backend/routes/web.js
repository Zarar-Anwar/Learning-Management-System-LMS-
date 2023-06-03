const express=require("express")
const controller = require("../controller/controller.js")

const router=express.Router()

router.get('/createAdmin',controller.createAdmin)
router.get("/getStudent",controller.getStudent)
router.get("/createStudent",controller.createStudent)


module.exports=router
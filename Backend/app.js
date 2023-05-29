const express=require("express")
const router=require('./routes/web')
require('./model/connection')

const app=express()
const port=4000

app.use('/',router)

app.listen(port,()=>{
    console.log(`The Server is Running at https://localhost:${port}`)
})
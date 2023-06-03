const express=require("express")
const router=require('./routes/web')
require('./model/connection')
const cors=require('cors')

const app=express()
const port=4000

app.use('/',router)
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.listen(port,()=>{
    console.log(`The Server is Running at https://localhost:${port}`)
})
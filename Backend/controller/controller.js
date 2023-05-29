const db = require("../model/connection")

const Student=db.student

class controller{
    static createStudent=async(req,res)=>{
    const t=await db.sequelize.transaction()
    try {
      const data=await Student.create({
        name:"Zarar",
       email:"zarar@gmail.com"
      })  
      t.commit()
      res.status(200).send(data)
    } catch (error) {
        t.rollback()
        res.status(400).send("Error")
    }

    }
    static getStudent=async(req,res)=>{
        const data=await Student.findAll({})
        res.send(data)
    }
}


module.exports=controller
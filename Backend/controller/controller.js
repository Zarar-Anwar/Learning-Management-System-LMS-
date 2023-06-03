const db = require("../model/connection")

const User=db.user
const sequelize=db.sequelize
const Student=db.student
class controller{
    static createAdmin=async(req,res)=>{
    const t=await sequelize.transaction()
    try {
      const data=await User.create({
       email:"zala@gmail.com",
       username:"zala",
       password:'zala',
       is_Admin:true
      })  
      t.commit()
      res.status(200).send(data)
    } catch (error) {
        t.rollback()
        res.status(400).send("Invalid Data")
    }

    }

    static getStudent=async(req,res)=>{
        const data = await User.findAll({
           
          });
        res.send(data)
    }

    // static getStudent=async(req,res)=>{
    //     const data = await User.findAll({
    //         include: {
    //           model: Student
    //         }
    //       });
    //     res.send(data)
    // }
    static createStudent=async(req,res)=>{
        const data=await User.create({
            email:"taimoor@gmail.com",
            username:"Taimoor Anwar",
            password:"1234",
            student: {
                profilePic: "profile.jpg",
                cnic: "123456789",
                dob: "1990-01-01",
                phoneNo: "1234567890"
              }
            }, {
              include: Student 
            })
            res.status(200).send("Student Created SuccessFully")
    }
}


module.exports=controller
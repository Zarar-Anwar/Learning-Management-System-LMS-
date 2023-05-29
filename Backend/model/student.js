module.exports=(sequelize,DataTypes)=>{
    const student= sequelize.define('student',{
        name:{type:DataTypes.STRING,
        allowNull:false},
        email:{type:DataTypes.STRING,
        validate:{
            isEmail:true
        },
        allowNull:false,
        unique:true
        }
    })
    return student
}

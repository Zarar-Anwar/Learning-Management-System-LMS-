
module.exports=(sequelize,DataTypes)=>{
    const student= sequelize.define('student',{
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
           },
        profilePic:{type:DataTypes.STRING,
        allowNull:true},
        cnic:{type:DataTypes.STRING,
        allowNull:false,
        unique:true},
        dob:{type:DataTypes.STRING,
        allowNull:false},
        phoneNo:{type:DataTypes.STRING,
            allowNull:false,
            unique:true}
    })
    return student
}
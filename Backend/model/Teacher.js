
module.exports=(sequelize,DataTypes)=>{
    const teacher= sequelize.define('teacher',{
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
           },
        profilePic:{type:DataTypes.STRING,
        allowNull:true},
        phoneNo:{type:DataTypes.STRING,
        allowNull:false,
        unique:true},
        subject:{type:DataTypes.STRING,
        allowNull:false}
    })
    return teacher
}
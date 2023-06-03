module.exports=(sequelize,DataTypes)=>{
    const user= sequelize.define('user',{
        email:{type:DataTypes.STRING,
        validate:{
            isEmail:true
        },
        allowNull:false,
        unique:true
        },
        username:{type:DataTypes.STRING,
        allowNull:false
        },
        password:{type:DataTypes.STRING,
        allowNull:false
        },
        is_Admin:{type:DataTypes.BOOLEAN,
        defaultValue:false
        },
        is_Teacher:{type:DataTypes.BOOLEAN,
        defaultValue:false
        },
        is_Student:{type:DataTypes.BOOLEAN,
        defaultValue:false
        },
    })
    user.hasMany(sequelize.models.student, { foreignKey: 'userId' });
    return user
}

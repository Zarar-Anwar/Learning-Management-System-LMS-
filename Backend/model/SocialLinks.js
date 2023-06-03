
module.exports=(sequelize,DataTypes)=>{
    const social= sequelize.define('social',{
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        facebook:{type:DataTypes.STRING,
        allowNull:true,
        defaultValue:"https://facebook.com"
        },
        instagram:{type:DataTypes.STRING,
        allowNull:true,
        defaultValue:"https://instagram.com"
        },
        twitter:{type:DataTypes.STRING,
        allowNull:true,
        defaultValue:"https://twitter.com"
        },
        youtube:{type:DataTypes.STRING,
        allowNull:true,
        defaultValue:"https://youtube.com"
        },
       
    })
    return social
}

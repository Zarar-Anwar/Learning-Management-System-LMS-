const {Sequelize,DataTypes}=require("sequelize")

const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./db.db',
    logging:false
})

try {
    sequelize.authenticate()
    console.log("Database Connected Successfully")
} catch (error) {
    console.log(error)
}

const db={}
db.sequelize=sequelize
db.Sequelize=Sequelize
db.teacher=require('./Teacher')(sequelize,DataTypes)
db.student=require('./Students')(sequelize,DataTypes)
db.social=require('./SocialLinks')(sequelize,DataTypes)
db.info=require('./Info')(sequelize,DataTypes)
db.user=require('./User')(sequelize,DataTypes)




db.sequelize.sync({})

module.exports=db
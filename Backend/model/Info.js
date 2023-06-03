
module.exports = (sequelize, DataTypes) => {
    const info = sequelize.define("info", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postalCode: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
    })
    return info
}
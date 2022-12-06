const bcrypt = require("bcrypt");
module.exports = (sequelize,dataTypes) => {
    let alias = "User"
    let cols = {
        id_user: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        full_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password_: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    

    let config = {
        tableName: "user_shoes_store",
        timestamps: false
    }
    let User = sequelize.define(alias,cols,config)

    return User
}
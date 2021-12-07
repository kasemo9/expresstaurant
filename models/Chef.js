const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Chef extends Model {

}

Chef.init({
    
    Chef_id: DataTypes.INTEGER,
    Chef_name: DataTypes.STRING,
    Salary: DataTypes.FLOAT,
    Order_id: DataTypes.INTEGER
}, {
    sequelize, 
    timestamps: false
})

module.exports = {Chef}
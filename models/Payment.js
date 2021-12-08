const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Payment extends Model {

}

Payment.init({
    
    Pay_id: DataTypes.INTEGER,
    Cus_id: DataTypes.INTEGER,
    Order_id: DataTypes.INTEGER,
    Pay_type: DataTypes.STRING
}, {
    sequelize, 
    timestamps: false
})

module.exports = {Payment}
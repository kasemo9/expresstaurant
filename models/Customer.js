const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Customer extends Model {

}

Customer.init({
    
    Cus_id: DataTypes.INTEGER,
    Payment_id: DataTypes.INTEGER,
    entree_id: DataTypes.INTEGER
}, {
    sequelize, 
    timestamps: false
})

module.exports = {Customer}
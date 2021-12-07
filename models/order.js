const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')
class order extends Model {

}

order.init({
    
    Order_id: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER,
    Order_date: DataTypes.DATE,
    Cus_id: DataTypes.INTEGER
}, {
    sequelize, 
    timestamps: false
})

module.exports = {order}
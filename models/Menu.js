const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')
class Menu extends Model {

}

Menu.init({
    
    entree_id: DataTypes.INTEGER,
    entree_name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    name: DataTypes.STRING
}, {
    sequelize, 
    timestamps: false
})

module.exports = {Menu}
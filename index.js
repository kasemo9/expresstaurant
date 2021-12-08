const {sequelize,DataTypes,Model} = require('./db')
const {Restaurant} = require('./models/Restaurant')
const {Menu} = require('./models/Menu')
const {Customer} = require('./models/Customer')
//const {order} = require('./models/order')

Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)

Restaurant.belongsTo(Customer)
Customer.hasMany(Restaurant)
module.exports={Restaurant,Menu,Customer,sequelize}
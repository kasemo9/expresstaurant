//const {sequelize} = require('./db')
const { Customer } = require('./models/Customer')
//const { Menu } = require('./models/Menu')
const { Chef } = require('./models/Chef')
const { order } = require('./models/order')
const { Payment } = require('./models/Payment')
//const {Restaurant, Menu, Item} = require('./models/index') //Q: WHY import these models from index vs. from each separate model file?
//const {Restaurant} = require('./models/Restaurant')
const{Restaurant,Menu,sequelize} = require('./index.js')
//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
const seedRestaurant = [
  {
    name: 'AppleBees',
    location: 'Texas',
    cuisine: 'FastFood'
  },
  
  {
    name: 'burgetking',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
  {
    name: 'MCDS',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
]
const seedMenu = [
  {
    entree_id: 78,
    entree_name: 'Steak',
    price: 9.99,
    name: 'AppleBees',
    RestaurantId:1
    
    
  },
  {
    entree_id: 77,
    entree_name: 'Chicken',
    price: 8.99,
    name: 'burgetking',
    RestaurantId:2
    


  },
  {
    entree_id: 76,
    entree_name: 'Salad',
    price: 9.99,
    name: 'MCDS',
    RestaurantId:3

    
  },
  
]

const seedCustomer = [
  {
    Cus_id: 101,
    Payment_id:99,
    entree_id: 78
  
  },
  {
    Cus_id: 102,
    Payment_id: 98,
    entree_id: 77
   
  },
  {
    Cus_id: 103,
    Payment_id: 97,
    entree_id: 76
  
  },
  
]



const seedChef = [
  {
    Chef_id: 10111,
    Chef_name:'Tom',
    Salary: 78000    
  },
  {
    Chef_id: 10112,
    Chef_name:'James',
    Salary: 78000
    
  },
  {
    Chef_id: 10113,
    Chef_name:'Robert',
    Salary: 68000
    
  },
  
]



const seedorder = [
  {
    Order_id: 1001,
    Quantity:2,
    Order_date: '2021-12-01',
    Cus_id:101
    
  },
  {
    Order_id: 1002,
    Quantity:1,
    Order_date: '2021-12-01',
    Cus_id:102
    
  },
  {
    Order_id: 1003,
    Quantity:1,
    Order_date: '2021-12-01',
    Cus_id:103
  

  },
  
]


const seedPayment = [
  {
    Pay_id: 10001,
    Cus_id:101,
    Order_id:1001,
    Pay_type:"VISA"
  },
  {
    Pay_id: 10002,
    Cus_id:102,
    Order_id: 1002,
    Pay_type:"MASTERCARD"
  },
  {
    Pay_id: 10003,
    Cus_id:103,
    Order_id:1003,
    Pay_type:"CASH"
  },
  
]




//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Restaurant.bulkCreate(seedRestaurant, {validate: true})
    await Menu.bulkCreate(seedMenu, {validate: true})
    await Customer.bulkCreate(seedCustomer, {validate: true})
    await Chef.bulkCreate(seedChef, {validate: true})
    await order.bulkCreate(seedorder, {validate: true})
    await Payment.bulkCreate(seedPayment, {validate: true})
    // await Menu.bulkCreate(seedMenu, {validate: true})
    // await Item.bulkCreate(seedItem, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })
const {sequelize} = require('./db')
const { Customer } = require('./models/Customer')
const { Menu } = require('./models/Menu')
const { Chef } = require('./models/Chef')
const { order } = require('./models/order')
//const {Restaurant, Menu, Item} = require('./models/index') //Q: WHY import these models from index vs. from each separate model file?
const {Restaurant} = require('./models/Restaurant')

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
    entree_id: 1111,
    entree_name: 'Steak',
    price: 9.99,
    name: 'AppleBees',
  },
  {
    entree_id: 1232,
    entree_name: 'Chicken',
    price: 8.99,
    name: 'burgetking'
  },
  {
    entree_id: 1232,
    entree_name: 'Salad',
    price: 9.99,
    name: 'MCDS'
  },
  
]

const seedCustomer = [
  {
    Cus_id: 101,
    Payment_id:99,
    Food_id: 78
  },
  {
    Cus_id: 102,
    Payment_id: 98,
    price: 77
  },
  {
    Cus_id: 103,
    Payment_id: 97,
    Food_id: 76
  },
  
]



const seedChef = [
  {
    Chef_id: 10111,
    Chef_name:'Tom',
    Salary: 78000,
    Order_id:11123
  },
  {
    Chef_id: 10112,
    Chef_name:'James',
    Salary: 78000,
    Order_id:11124
  },
  {
    Chef_id: 10113,
    Chef_name:'Robert',
    Salary: 68000,
    Order_id:11122
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

// const seedMenu = [
//   {
//     title: 'Breakfast',
//     RestaurantId : 1,
//   },
//   {
//     title: 'Lunch',
//     RestaurantId : 2,
//   },
//   {
//     title: 'Dinner',
//     RestaurantId : 3,
//   },
// ]

// const seedItem = [
//   {
//     name: 'bhindi masala',
//     image: 'someimage.jpg',
//     price: 9.50,
//     vegetarian: true,
//     MenuId : 3,
//   },
//   {
//     name: 'egusi soup',
//     image: 'someimage.jpg',
//     price: 10.50,
//     vegetarian: false,
//     MenuId : 2,
//   },
//   {
//     name: 'hamburger',
//     image: 'someimage.jpg',
//     price: 6.50,
//     vegetarian: false,
//     MenuId : 1,
//   }
// ]

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
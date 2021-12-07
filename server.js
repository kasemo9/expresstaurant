const express = require('express')
const path = require('path') //node native module
const { Restaurant } = require('./models/Restaurant')
const { Menu } = require('./models/Menu')
const {Customer} = require('./models/Customer')
const {Chef} = require('./models/Chef')
const {order} = require('./models/order')
const app = express()
const port = 3000

//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))

//GET method on /flipcoin route responds with heads or tails
app.get('/flipcoin', (req, res) => {
    let coinflip = Math.floor(Math.random()*2)
    if (coinflip == 1){
        coinflip = 'Heads'
    } else {
        coinflip = 'Tails'
    }
    res.send(coinflip)
})

//GET method on /restaurants route returns all restaurants
app.get('/restaurants', async (req,res) => {
    //find all instances of the Model Restaurant
    const allRestaurants = await Restaurant.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allRestaurants)
})

app.get('/Menu', async (req,res) => {
    //find all instances of the Model Restaurant
    const allMenulist = await Menu.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allMenulist)
})

app.get('/Customer', async (req,res) => {
    //find all instances of the Model Restaurant
    const allCustomerlist = await Customer.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allCustomerlist)
})


app.get('/Chef', async (req,res) => {
    //find all instances of the Model Restaurant
    const allCheflist = await Chef.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allCheflist)
})
app.get('/order', async (req,res) => {
    //find all instances of the Model Restaurant
    const allorderlist = await order.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allorderlist)
})

// app.get('/Customer/:Cus_id', async (req,res) => {
//     //find one specific customter from the customer model
//     const thisCustomer = await Customer.findOne({where:{Cus_id:reg.params.Cus_id}})
//     //respond with allRestaurants as a json objeect
//     res.json(thisCustomer)
// })

app.get('/Customer/:id', async (req,res) => {
    //find one specific customter from the customer model
    const thisCustomer = await Customer.findByPk(req.params.id)
    //respond with allRestaurants as a json objeect
    res.json(thisCustomer)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
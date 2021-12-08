const express = require('express')
const path = require('path') //node native module
//const { Restaurant } = require('./models/Restaurant')
//const { Menu } = require('./models/Menu')
const {Restaurant, Menu,Customer} = require('./index')
//const {Customer} = require('./models/Customer')
const {Chef} = require('./models/Chef')
const {order} = require('./models/order')
const {Payment} = require('./models/Payment')
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
//created get/read method 
app.get('/Menu/:name', async (req,res) => {
    //find all based on entree_id from menu
    const thisMenu = await Menu.findOne({where:{entree_id:req.params.name}})
    //respond with thismenu as a json objeect
    res.json(thisMenu)
})

//created put/update method ---updated menu price
app.put('/Menu/:name', async (req,res) => {
    //find all based on entree_id from menu
    let updateMenu = await Menu.update(req.body,{
        where:{entree_id:req.params.name}})
    //respond with thismenu as a json objeect
    res.send(updateMenu ? "Menu updated" : "update failed") 
})

app.get('/Customer', async (req,res) => {
    //find all instances of the Model Restaurant
    const allCustomerlist = await Customer.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allCustomerlist)
})

//Return one customer based on cus_id
app.get('/Customer/:name', async (req,res) => {
    //find one specific customter from the customer model
    const thisCustomer = await Customer.findOne({where:{Cus_id:req.params.name}})
    //respond with allRestaurants as a json objeect
    res.json(thisCustomer)
})

//created put/update method ---updated entree_id
app.put('/Customer/:name', async (req,res) => {
    
    let updateCustomer = await Customer.update(req.body,{
        where:{Cus_id:req.params.name}})
    //respond with a json objeect
    res.send(updateCustomer ? "Menu updated" : "update failed") 
})


//delete one Customer by Cus_id
app.delete('/Customer/:name', async (req,res) => {
    const deleted = await Customer.destroy({
        where: {Cus_id: req.params.name}
    })
    //use boolen return value from destroy method return to generate a string message
    res.send(deleted ? "Deleted Customer" : "Deletion Failed")
})


//create one new Customer
app.post('/Customer', async (req,res) => {
    //create a customer using the json object passed in the request body
    let newCustomer = await Customer.create(req.body)
    //send a response string
    res.send(newCustomer ? 'Customer created': 'post failed')
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

app.get('/Payment', async (req,res) => {
    //find all instances of the Model Restaurant
    const allPaymentlist = await Payment.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allPaymentlist)
})

app.get('/Chef/:name', async (req,res) => {
    //find all instances of the Model Restaurant
    const allCheflist = await Chef.findOne({where:{Chef_id:req.params.name}})
    //respond with allRestaurants as a json objeect
    res.json(allCheflist)
})


// app.get('/restaurants/:name', async (req,res) => {
//     //find all instances of the Model Restaurant
//     const thisRestaurants = await Restaurant.findOne({where:{name: req.params.name}})
//     //respond with allRestaurants as a json objeect
//     res.json(thisRestaurants)
// })

// //return one musician by name
// app.get('/musician-name/:name', async(req,res)=>{
//     //find one specific instance of the Musician model by name
//     const thisMusician = await Musician.findOne({where:{name: req.params.name}})
//     res.json(thisMusician)
// })

// app.get('/Customer/:id', async (req,res) => {
//     //find one specific customter from the customer model
//     const thisCustomer = await Customer.findByPk(req.params.id)
//     //respond with allRestaurants as a json objeect
//     res.json(thisCustomer)
// })

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
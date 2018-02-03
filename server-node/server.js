/**
 * Main server 
 * 
 * The server is the requests and authentication handler.
 */

/*
 * Express for rounting and HTTP server
 * @see https://expressjs.com/
 */
const express = require('express'), server = express()

/*
 * Services
 */
const Product = require('./services/product')
const Client = require('./services/client')


// Constants
const PORT = 3001
const API_VERSION = 1
const CORS = '*'




/*
 * BEGIN
 */

// Response structure 
let Response = {
    data: {},
    success: true,
    errors: [],
}

/**
 * Authentication
 */

// Many ways to do this. What I usually do is just use basic OATH standard, checking the Token
// bearer that the front end will send with all API requests.
// There are many ways to implement it and many best practices out there. The best way to start
// is to call the developer that knows best about security and authentication. Do we have this guy?

let Authentication = true
if (Authentication) {
    // Nice
} else {
    // 600: Empty token
    // 601: Bad or invalid token
    // 602: Expired token
    // 603: Access denied

    // Kills here
}


server.set('port', process.env.PORT || PORT)


/*
 * Routing
 * 
 * You may need a routing class/component and/or some middleware stuff
 */

server.get('/', (req ,res) => {

    res.append('Access-Control-Allow-Origin', CORS)

    let welcome = "Welcome, this is the sample Node server<br />" 
                + "Example calls:<br />"
                + "localhost:3001/v1/products<br />"
                + "localhost:3001/v1/products/1<br />"
                + "localhost:3001/v1/clients<br />"
                + "localhost:3001/v1/clients/1<br />"
                + "localhost:3001/v1/cart/2<br />"

    res.send(welcome)

})

/**
 * Products API
 * /server/v{version}/products
 * 
 */
server.get('/v' + API_VERSION + '/products', (req ,res) => {

    const p = new Product()
    products = p.get()

    Response.data = products

    res.append('Access-Control-Allow-Origin', CORS)
    res.json(Response)

})

/**
 * Product API
 * /server/v{version}/products/{id}
 * 
 */
server.get('/v' + API_VERSION + '/products/:product_id', (req ,res) => {
    //console.log(req.params.product_id)

    const p = new Product()
    product = p.get(req.params.product_id)

    Response.data = product

    res.append('Access-Control-Allow-Origin', CORS)
    res.json(Response)

})

/**
 * Clients API
 * /server/v{version}/clients
 * 
 */
server.get('/v' + API_VERSION + '/clients', (req ,res) => {

    const c = new Client()
    clients = c.get()

    Response.data = clients

    res.append('Access-Control-Allow-Origin', CORS)
    res.json(Response)

})

/**
 * Client API
 * /server/v{version}/clients/{client_id}
 * 
 */
server.get('/v' + API_VERSION + '/clients/:client_id', (req ,res) => {

    const c = new Client()
    client = c.get(req.params.client_id)

    Response.data = client

    res.append('Access-Control-Allow-Origin', CORS)
    res.json(Response)

})

/**
 * Cart API
 * /server/v{version}/cart/{client_id}
 * 
 */
server.get('/v' + API_VERSION + '/cart/:client_id', (req ,res) => {

    const c = new Client()
    client = c.cart(req.params.client_id)

    Response.data = client

    res.append('Access-Control-Allow-Origin', CORS)
    res.json(Response)

})



 
/**
 * Port binding
 */
server.listen(PORT, ()=>{
  console.log('Server running at port ' . PORT)
})
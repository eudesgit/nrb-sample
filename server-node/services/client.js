/**
 * Client Service
 * 
 * Provides the Client API data layer
 */
 
module.exports = class Client {

    constructor ( ) {

        this.clients = [
            {
                id: 1,
                first_name: 'Mathew',
                last_name: 'Bob',
                username: 'mathew',
                email: 'mathew@a12.com',
                address: '123 Rideau St',
                cart: [],
            },
            {
                id: 2,
                first_name: 'John',
                last_name: 'David',
                username: 'john',
                email: 'john@a12.com',
                address: '445 Rideau St',
                cart: [
                    { 
                        name: 'Product 1',
                        price: 10,
                    },
                    { 
                        name: 'Product 2',
                        price: 15,
                    }
                ],
            },

        ]  

    }
   
    /**
     * Get all clients
     * 
     */
    get ( id = 0 ) {
         
        if ( id <= 0 ) {
            return this.clients
        } else {
            return this.get_by_id(id)
        }        
       
    }

    /**
     * Get a single product
     * 
     * @param int id 
     */
    get_by_id ( id ) {

        let client = {}
  
        client = this.clients.find((client) => {
            return client.id == id
        })

        return client
    } 

    /**
     * Get client's cart data
     * 
     * @param int id 
     */
    cart ( id ) {

        let cart = {}
  
        let client = this.clients.find((client) => {
            return client.id == id
        })

        if (client != undefined) {
            cart = client.cart
        }        

        return cart

    }
};
/**
 * Product Service
 * 
 * Provides the Product API data layer
 */
 
module.exports = class Product {

    constructor ( ) {

        this.products = [
            {
                id: 1,
                name: 'Free',
                price: 0,
                description: '10 users included'
            },
            {
                id: 2,
                name: 'Pro',
                price: 10,
                description: '20 users included'
            },
            {
                id: 3,
                name: 'Enterprise',
                price: 29,
                description: '45 users included'
            },
        ]  

    }
   
    /**
     * Get all products
     * 
     */
    get ( id = 0 ) {
         
        if ( id <= 0 ) {
            return this.products
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

        let product = null
  
        product = this.products.find((product) => {
            return product.id == id
        })

        if (product == null) {
            return null
        } else {
            return product
        }

    } 
};
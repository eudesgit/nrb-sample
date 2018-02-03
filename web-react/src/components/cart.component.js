import React, { Component } from 'react';

/**
 * Classes
 */
import Main from '../class/main.class.js';

class Cart extends Component {

    constructor ( props ) {
        super(props)

        let m = new Main()
        this.api_url = m.api_url
        
        this.state = {
          error: null,
          is_loaded: false,
          data: [],
          no_client: false,
        }

    }

    componentDidMount ( ) {

        if (this.props.client_id === undefined) {
            this.state.no_client = true
            this.state.is_loaded = true
            return false
        }        

        fetch(this.api_url + "/cart/" + this.props.client_id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        is_loaded: true,
                        data: result.data
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    is_loaded: true,
                    error
                });
            }
        )
    }        

    get_cart_total ( ) {

        let cart_total = 0

        this.state.data.forEach( function ( e ) {
            cart_total += e.price
        })

        return cart_total
    }

    render ( ) {

        let cart_items = this.state.data.map( (e, i) =>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <h6 class="my-0">{e.name}</h6>
                <span class="text-muted">${e.price}</span>
            </li>
        )

        if (true == this.state.no_client) {
            return (<p>No logged in client</p>)
        } else if (false === this.state.is_loaded) {
            return (<p>Loading ...</p>)
        } else {
            return (
                <div>
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Your cart</span>
                        <span class="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul class="list-group mb-3">
                        {cart_items}

                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total (CAD)</span>
                            <strong>${this.get_cart_total()}</strong>
                        </li>
                    </ul>
                </div>
            );
        }
        
    }

}
  
export default Cart;
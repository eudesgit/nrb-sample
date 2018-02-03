import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

/**
 * Bootstrap
 */
import './bootstrap-4.0.0/css/bootstrap.min.css';

/**
 * Components
 */
import TopNav from './components/top-nav.component.js';

/**
 * Views
 */
import HomeView from './views/home.view.js';
import Checkout from './views/checkout.view.js';

class App extends Component {

    constructor (props) {
        super(props);

        this.get_menu_items()
    }

    get_menu_items ( ) {
        this.menu_items = [
            'Features', 'Enterprise', 'Support', 'Price'
        ]
    }

    render() {
        return (
            <div className="App">
                <TopNav items={this.menu_items} />
                <Router>
                    <div>
                        <Route exact path="/" component={HomeView}/>
                        <Route exact path="/checkout" component={Checkout}/>
                        <Route exact path="/checkout/:id" component={Checkout}/>
                    </div>
                </Router>    
            </div>
        );
    }
}

export default App;

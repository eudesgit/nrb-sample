import React, { Component } from 'react';

class TopNav extends Component {

    constructor ( props ) {
        super(props)
        this.brand = 'NRB Sample'
    }

    render() {

        let menu_items = this.props.items.map( (item, index) =>
            <a key={index} className="p-2 text-dark" href="#">{item}</a>
        )

        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h5 className="my-0 mr-md-auto font-weight-normal">{this.brand}</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    {menu_items}
                </nav>
                <a className="btn btn-outline-primary" href="#">Sign up</a>
            </div>
        );
    }

}
  
export default TopNav;
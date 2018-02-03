import React, { Component } from 'react';

class BigButton extends Component {

    render() {

        return (
            <a role="button" href="checkout" className="btn btn-lg btn-block btn-outline-primary">{this.props.name}</a>
        );
        
    }

}
  
export default BigButton;
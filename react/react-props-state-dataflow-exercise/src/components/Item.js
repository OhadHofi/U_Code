import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (this.props.shouldDiscount? 
        <div>{this.props.item.item}: {this.props.item.price}$</div> :
        <div>{this.props.item.item}: {this.props.item.price * (1- this.props.item.discount)}$</div>)

    }
}

export default Item
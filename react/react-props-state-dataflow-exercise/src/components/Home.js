import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return (
            <div>
                <h4>Store</h4>
                {this.props.store.map(s => <Item item={s} shouldDiscount={this.props.shouldDiscount} />)}
            </div>
        )
    }
}

export default Home
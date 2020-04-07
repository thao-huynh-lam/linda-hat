import React, { Component } from 'react';
import util from '../util'
export default class Cart extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="alert alert-info">
                {cartItems.length === 0
                    ? " Your cart is empty" :
                    <div>You add {cartItems.length} items to your cart. <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: 25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right' }} className="btn btn-warning btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>Remove</button>
                                    <br />
                                    {item.count} X {util.formatCurrency(item.price)}
                                </li>))
                            }
                        </ul>

                        <b>Sum: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                        <button onClick={() => window.open("https://www.paypal.com/fi/webapps/mpp/account-selection", "_self")} className="btn btn-primary">Pay</button>
                    </div>
                }
            </div>
        )
    }
}

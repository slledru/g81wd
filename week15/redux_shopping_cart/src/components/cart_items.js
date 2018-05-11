import React, { Component } from 'react'
import CartItem from './CartItem'

// { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },

class CartItems extends Component {
  constructor(props) {
    super(props)
    this.state = { cartItems: props.cartItems }
  }

  // this is called when property changes
  componentWillReceiveProps(newProps){
    this.setState({ cartItems: newProps.cartItems })
  }

  calculateTotal = () => {
    const total = this.state.cartItems
      .reduce((sum, item) => sum + item.quantity * item.product.priceInCents, 0)
    return `$${ total / 100.0 }`
  }

  renderCartItem = (cartItem) => {
    return (
      <CartItem key={ cartItem.id }
        name={ cartItem.product.name }
        priceInCents={ cartItem.product.priceInCents }
        quantity={ cartItem.quantity } />
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Items</h1>
        <div className="collection">
          <div className="collection-item row grey lighten-3">
            <div className="col s8">Product</div>
            <div className="col s2">Price</div>
            <div className="col s2">Quantity</div>
          </div>
          <div>
            { this.state.cartItems.map((cartItem) => this.renderCartItem(cartItem)) }
          </div>
        </div>
        <div>
          Total: <span>{ this.calculateTotal() }</span>
        </div>
      </div>
    )
  }
}

export default CartItems

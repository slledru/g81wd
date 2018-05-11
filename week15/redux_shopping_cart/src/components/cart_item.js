import React, { Component } from 'react'

class CartItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      priceInCents: props.priceInCents,
      quantity: props.quantity
    }
  }

  render() {
    return (
      <div className="collection-item">
        <div className="row">
          <div className="col s8">{ this.state.name }</div>
          <div className="col s2">{`${this.state.priceInCents / 100.0 }`}</div>
          <div className="col s2">{ this.state.quantity }</div>
        </div>
      </div>
    )
  }
}

export default CartItem

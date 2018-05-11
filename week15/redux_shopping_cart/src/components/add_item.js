import React from 'react'
import { Row, Input, Button } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createItem } from '../actions/action_items'

const AddItem = ({ products, itemAdded }) => {

  const itemWasAdded = (e) => {
    e.preventDefault()
    itemAdded(
      e.target.quantity.value,
      products.byId[e.target.productId.value]
    )
  }

  return (
    <form className="container" onSubmit={ itemWasAdded } >
      <h3>Add Item</h3>

      <Row>
        <Input s={6} type='select' label="Choose a Product" name="productId" >
          { products.all.map(product => <option key={product.id} value={product.id}>{ product.name }</option>) }
        </Input>
      </Row>

      <Row>
        <Input s={2} type='number' label="Quantity" defaultValue='1' name="quantity"></Input>
      </Row>

      <Button waves='light'>Add Item</Button>

    </form>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  itemAdded: createItem,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem)

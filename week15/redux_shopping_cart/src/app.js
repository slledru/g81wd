import React from 'react'
import CartHeader from './components/cart_header'
import AddItem from './components/add_item'
import CartItems from './components/cart_items'
import CartFooter from './components/cart_footer'
import { connect } from 'react-redux'

const App = ({ copyright, items, products }) => (
  (items.length && products.all.length) ?
    (
      <div>
        <CartHeader />
        <AddItem />
        <CartItems products={ products } items={ items } />
        <CartFooter copyright={ copyright } />
      </div>
    ) :
    (<div>Loading...</div>)
)

const mapStateToProps = state => ({
  items: state.items.all,
  products: state.products,
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

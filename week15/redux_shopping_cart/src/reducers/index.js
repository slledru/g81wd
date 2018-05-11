import { combineReducers } from 'redux'
import { products } from './reducer_products'
import { items } from './reducer_items'

export default combineReducers({
  items,
  products,
})

import { PRODUCTS_RECEIVED } from '../actions/action_products'

function products(state = { byId: {}, all: [] }, action) {
  switch (action.type) {
    case PRODUCTS_RECEIVED:
      const productsById = action.products.reduce((result, product) => {
        result[product.id] = product
        return result
      }, {})

      return {
        ...state,
        byId: productsById,
        all: action.products
      }
    default:
      return state
  }
}

export default products

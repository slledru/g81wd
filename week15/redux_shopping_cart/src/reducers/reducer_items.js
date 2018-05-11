import { ITEMS_RECEIVED, ITEM_CREATED } from '../actions/action_items'

function items(state = { all: [] }, action) {
  switch (action.type) {
    case ITEMS_RECEIVED:
      return {
        ...state,
        all: action.items
      }
    case ITEM_CREATED:
      return {
        ...state,
        all: [
          action.item,
          ...state.all,
        ]
      }
    default:
      return state
  }
}

export default items

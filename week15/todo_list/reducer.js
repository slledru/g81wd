const INITIALIZE = 'initialize'
const ADD_TASK = 'add_task'
const REMOVE_TASK = 'remove_task'
const COMPLETE_TASK = 'complete_task'
const LIST_ALL_TASKS = 'list_all'
const LIST_COMPLETED_TASKS = 'list_completed'
const LIST_NEW_TASKS = 'list_new'
const SELECT_TASK = 'select'

const FILTER_ALL = 'all'
const FILTER_COMPLETED = 'completed'
const FILTER_NEW = 'new'

function reducerToDo(state, action) {
  /* eslint-disable */
  switch (action.type) {
    case INITIALIZE:
      return {
        filter: FILTER_ALL,
        todo: [],
        selected: ''
      }
    case ADD_TASK:
      if (state.todo.filter((item) => item.task === action.payload.task).length === 0) {
        return {
          ...state,
          todo: [
            ...state.todo,
            {
              id: state.todo.length + 1,
              task: action.payload.task,
              status: FILTER_NEW
            }
          ]
        }
      }
      break;
    case REMOVE_TASK:
      return {
        ...state,
        todo: [
          ...state.todo.filter((item) => item.task !== action.payload.task)
        ]
      }
    case COMPLETE_TASK:
      return {
        ...state,
        todo: [
          ...state.todo.map((item) => {
            if (`${item.id}` === action.payload.id) {
              item.status = FILTER_COMPLETED
            }
            return item
          })
        ]
      }
    case SELECT_TASK:
      return {
        ...state,
        selected: action.payload.id
      }
    case LIST_ALL_TASKS:
      return {
        ...state,
        filter: FILTER_ALL
      }
    case LIST_COMPLETED_TASKS:
      return {
        ...state,
        filter: FILTER_COMPLETED
      }
    case LIST_NEW_TASKS:
      return {
        ...state,
        filter: FILTER_NEW
      }
    default:
  }
  /* eslint-enable */
  return state
}

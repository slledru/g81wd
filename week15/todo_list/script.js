
document.addEventListener('DOMContentLoaded', () => {
  // create store with reducer
  const store = Redux.createStore(reducerToDo)
  store.subscribe(render)
  
  store.dispatch({ type: INITIALIZE })

  document.getElementById('task-form').addEventListener('submit', (event) => {
    event.preventDefault()
    store.dispatch({ type: ADD_TASK, payload: event.target.task.value })
  })
  document.getElementById('complete').addEventListener('click', (event) => {
    event.preventDefault()
    store.dispatch({ type: COMPLETE_TASK })
  })
  document.getElementById('all').addEventListener('click', (event) => {
    event.preventDefault()
    store.dispatch({ type: LIST_ALL_TASKS })
  })
  document.getElementById('completed').addEventListener('click', (event) => {
    event.preventDefault()
    store.dispatch({ type: LIST_COMPLETED_TASKS })
  })
  document.getElementById('new').addEventListener('click', (event) => {
    event.preventDefault()
    store.dispatch({ type: LIST_NEW_TASKS })
  })

  function render() {
    console.log('am I here?')
    console.log(store.getState())
  }
})

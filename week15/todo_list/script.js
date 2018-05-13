
document.addEventListener('DOMContentLoaded', () => {
  // create store with reducer
  const store = Redux.createStore(reducerToDo)
  store.subscribe(render)

  store.dispatch({ type: INITIALIZE })

  document.getElementById('to-do-list').addEventListener('click', (event) => {
    event.preventDefault()
    console.log('id', event.target.id)
    store.dispatch({
      type: SELECT_TASK,
      payload: { id: event.target.id }
    })
  })
  document.getElementById('task-form').addEventListener('submit', (event) => {
    event.preventDefault()
    store.dispatch({
      type: ADD_TASK,
      payload: { task: event.target.task.value }
    })
    event.target.reset()
  })
  document.getElementById('complete').addEventListener('click', (event) => {
    event.preventDefault()
    store.dispatch({
      type: COMPLETE_TASK,
      payload: { id: store.getState().selected }
    })
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
    const ol = document.getElementById('to-do-list')
    while (ol.firstChild) {
      ol.removeChild(ol.firstChild)
    }
    const { selected, todo, filter } = store.getState()
    todo.map((item, index) => {
      if (filter === FILTER_ALL ||
          item.status === filter) {
        const li = document.createElement('li')
        li.setAttribute('key', item.id)
        li.setAttribute('id', item.id)
        li.innerText = item.task
        if (`${item.id}` === selected) {
          li.classList.add('selected')
        }
        if (item.status === FILTER_NEW) {
          li.classList.add('new')
        }
        else if (item.status === FILTER_COMPLETED) {
          li.classList.add('completed')
        }
        ol.appendChild(li)
      }
    })
  }
})

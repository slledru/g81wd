document.addEventListener('DOMContentLoaded', () => {
  // reducer
  function counter(state, action) {
    /* eslint-disable */
    switch (action.type) {
      case 'INITIALIZE':
        return 10
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
    /* eslint-enable */
  }

  // create store with reducer
  const store = Redux.createStore(counter)

  // component on the screen
  const valueEl = document.getElementById('current_count')

  // interval
  let interval = null

  store.subscribe(render)

  store.dispatch({ type: 'INITIALIZE' })

  function render() {
    valueEl.innerText = store.getState().toString()
  }

  render()

  document.getElementById('increment').addEventListener('click', (event) => {
    event.preventDefault()
    store.dispatch({ type: 'INCREMENT' })
  })

  document.getElementById('decrement').addEventListener('click', (event) => {
    event.preventDefault()
    store.dispatch({ type: 'DECREMENT' })
  })

  document.getElementById('reset').addEventListener('click', (event) => {
    event.preventDefault()
    store.dispatch({ type: 'INITIALIZE' })
    if (interval !== null) {
      clearInterval(interval)
    }
  })

  document.getElementById('timed').addEventListener('click', (event) => {
    event.preventDefault()
    interval = setInterval(() => store.dispatch({ type: 'INCREMENT' }), 1000)
  })
})

/*
  The code below encapsulates everything inside of a render
  function. Overall this makes it easier to read and allows
  the render function to be more reuseable.
*/

let colors = []

document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('addColorForm')
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    let input = document.getElementById('color-name')
    if (input.value) colors.push(input.value)

    render()
  })
})

function render() {
  let input = document.getElementById('color-name')
  input.value = ''

  let lis = document.querySelectorAll('ul li')
  lis.forEach((li) => {
    li.remove()
  })

  colors.forEach((color) => {
    let ul = document.getElementById('colors')
    let li = document.createElement('li')

    li.textContent = color
    ul.prepend(li)
  })

  document.querySelector('h1 span').textContent = `(${colors.length})`
}

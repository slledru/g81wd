// The code below is highly coupled with the DOM.

document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('addColorForm')
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    let input = document.getElementById('color-name')
    if (input.value) {
      let placeholder = document.getElementById('placeholder')
      if (placeholder) {
        placeholder.remove()
      }

      let ul = document.getElementById('colors')
      let li = document.createElement('li')

      li.textContent = input.value
      ul.prepend(li)

      input.value = ''

      let span = document.querySelector('h1 span')
      let countText = span.textContent.slice(1, -1)
      let countNum = parseInt(countText, 10);
      countNum++
      span.textContent = `(${countNum})`;
    }
  })
})

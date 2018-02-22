/*
  Add code to do the following:

  1. When you click on an `li` it selects it.
  2. If the `li` is already selected, it unselects it.
  3. After each click, update the total count of selected `li`s in the H1.
*/
document.addEventListener('DOMContentLoaded', () => {
  let count = 1;
  document.querySelector('ul').addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'li') {
      if (event.target.classList.contains('selected')) {
        event.target.classList.remove('selected');
        count--;
      } else {
        event.target.classList.add('selected');
        count++;
      }
      let span = document.querySelector('h1 span');
      span.innerText = `(${count})`;
    }
  });
});

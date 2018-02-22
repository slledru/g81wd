// 1. Add an event listener to the button on click
// 2. If either select box does not have an option selected, surface an error
// 3. When you click the button, make a change to the changing element
//   (a) If 'Color' is selected, change the color of the text
//   (b) If 'Background Color' is selected, change the background-color
//   (c) If 'Font Style' is selected, change the font-style
//   (d) If 'Font Weight' is selected, change the font-weight
// 4. Run the transitions in order. Make sure to nest the timeouts!
// 5. When you click the "Go!" button again, it should clear out
//    the styles first before transition to new styles.
document.addEventListener('DOMContentLoaded', () => {
  let goBtn = document.querySelector('#transition');
  let changeA = document.querySelector('#change-A');
  let changeB = document.querySelector('#change-B');
  let error = document.querySelector('#error');
  let changing = document.querySelector('#changing');
  goBtn.addEventListener('click', () => {
    if (changeA.value !== '' || changeB.value !== '') {
      if (changeA.value !== '') {
        switch (changeA.value) {
          case 'color':
            changing.style.color = "red";
            break;
          case 'background':
            changing.style.backgroundColor = 'blue';
            break;
          case 'font-style':
            changing.style.fontStyle = 'italic';
            break;
          case 'font-weight':
            changing.style.fontWeight = 'bold';
            break;
          default:
        }
      }
      if (changeB.value !== '') {
        setTimeout(() => {
          switch (changeB.value) {
            case 'color':
              changing.style.color = 'pink';
              break;
            case 'background':
              changing.style.backgroundColor = 'green';
              break;
            case 'font-style':
              changing.style.fontStyle = 'italic';
              break;
            case 'font-weight':
              changing.style.fontWeight = 'normal';
              break;
            default:
          }
        }, 0);
      }
    } else {
      error.innerText = 'Not all transitions are selected';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  let elements = document.getElementsByTagName('ul');
  if (elements.length > 0) {
    let ul = elements[0];
    for (let i = 0; i < ul.children.length; i++) {
      let li = ul.children[i];
      for (let j = 0; j < li.children.length; j++) {
        let span = li.children[j];
        if (span.tagName.toLowerCase() === 'span') {
          let num = +span.innerText;
          if (num < 5 || num >= 10) {
            span.classList.add('badge-danger');
          } else if (num < 10) {
            span.classList.add('badge-secondary');
          }
        }
      }
    }
  }
});

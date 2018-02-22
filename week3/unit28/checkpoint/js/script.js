(() => {
  const adminCheckBoxClicked = (event) => {
    event.preventDefault();
    let parent = document.getElementById('secret-password').parentElement;
    if (parent.classList.contains('secret-password-show')) {
      parent.classList.remove('secret-password-show');
      parent.classList.add('secret-password-hide');
    } else {
      parent.classList.remove('secret-password-hide');
      parent.classList.add('secret-password-show');
    }
  };

  const allFormsSubmitted = (event) => {
    event.preventDefault();

    let message = document.getElementById('message');
    message.classList.remove('error-message');
    message.classList.remove('success-message');
    let checked = document.getElementById('checkbox').checked;
    if (checked) {
      let password = document.getElementById('secret-password').value;
      if (password.length <= 0) {
        message.innerText = 'The secret password must not be empty.';
        message.classList.add('error-message');
      } else if (password !== secretPassword) {
        message.innerText = 'The secret password does not match.';
        message.classList.add('error-message');
      } else {
        message.innerText = 'You successfully submitted the form!';
        message.classList.add('success-message');
      }
    }
  };

  const secretPassword = 'DOMCONTENTLOADED'
  window.onload = (() => {
    document
      .getElementById('checkbox')
      .addEventListener('change', adminCheckBoxClicked);
    document
      .getElementById('all-forms')
      .addEventListener('submit', allFormsSubmitted);
  });
})();

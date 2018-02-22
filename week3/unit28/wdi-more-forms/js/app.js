(() => {
  const credentialsFormSubmitted = (event) => {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log(`Username: "${username}"   Password: "${password}"`);
  };

  const oopsFormSubmitted = (event) => {
    event.preventDefault();
    let oopsText = document.getElementById('oops').value;
    let doItVal = document.getElementById('oops-count').value;
    let doItNumber = parseInt(doItVal, 10);
    let oopsed = oopsText.repeat(doItNumber);
    document.getElementById('oops-output').innerText = oopsed;
  };

  const radioStationUpdate = () => {
    let stationName = document.querySelector('input[name="radio-station"]:checked').value;
    document.getElementById('radio-station-name').innerText = stationName;
  };
  const radioButtonFormSubmitted = (event) => {
    event.preventDefault();
    radioStationUpdate();
  };

  const updateColor = () => {
    let selectedColor = document.getElementById('colors').value;
    document.getElementById('color-holder').innerText = selectedColor;
  };

  const colorChanged = (event) => {
    event.preventDefault();
    updateColor();
  };

  window.onload = () => {
    document
      .getElementById('credentials-form')
      .addEventListener('submit', credentialsFormSubmitted);

    document
      .getElementById('oops-form')
      .addEventListener('submit', oopsFormSubmitted);

    document
      .getElementById('radio-stations-form')
      .addEventListener('submit', radioButtonFormSubmitted);

    document
      .getElementById('colors')
      .addEventListener('change', colorChanged);

    radioStationUpdate();
    updateColor();
  }
})()

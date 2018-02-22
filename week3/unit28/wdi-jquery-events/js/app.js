$(document).ready(() => {
  const oopser = (str, count) => {
    let result = '';
    for (let i = 0; i < count; i++) {
      result += str;
    }
    return result;
  }
  const credentialsSubmit = (event) => {
    event.preventDefault()
    let username = $('#username').val();
    let password = $('#password').val();
    console.log(`Username: "${username}" Password: "${password}"`);
  }
  const oopsSubmit = (event) => {
    event.preventDefault()
    let oopsVal = $('#oops').val();
    let doItVal = $('#oops-count').val();
    let doItInteger = parseInt(doItVal, 10);
    let result = oopser(oopsVal, doItInteger);
    $('#oops-output').text(result);
    console.log(oopsVal, doItInteger);
  }
  const updateColor = () => {
    let selectedColor = $('#colors').val();
    $('#color-holder').text(selectedColor);
  }
  const colorChanged = (event) => {
    event.preventDefault();
    updateColor();
  }
  const radioStationUpdate = () => {
    let stationName = $('input[name="radio-station"]:checked').val();
    $('#radio-station-name').text(stationName);
  }
  const radioStationsFormSubmit = (event) => {
    event.preventDefault()
    radioStationUpdate()
  }

  $('#credentials-form').submit(credentialsSubmit);
  $('#oops-form').submit(oopsSubmit);
  $('#colors').change(colorChanged);
  $('#radio-stations-form').change(radioStationsFormSubmit);
  // $('#radio-stations-form').submit(radioStationsFormSubmit);

  updateColor();
  radioStationUpdate();
});

// $(document).ready(() => {
//   const credentialsSubmit = (event) => {
//     event.preventDefault()
//     let username = $('#username').val()
//     let password = $('#password').val()
//     console.log(`Username: "${username}" Password: "${password}"`)
//   }
//
//   const oopsSubmit = (event) => {
//     event.preventDefault()
//     let oopsVal = $('#oops').val()
//     let doItVal = $('#oops-count').val()
//     let doItInteger = parseInt(doItVal)
//     $('#oops-output').text(oopsVal.repeat(doItInteger))
//   }
//
//   const updateColor = () => {
//     let selectedColor = $('#colors').val()
//     $('#color-holder').text(selectedColor)
//   }
//
//   const colorChanged = (event) => {
//     event.preventDefault()
//     updateColor()
//   }
//
//   const radioStationUpdate = () => {
//     let stationName = $('input[name="radio-station"]:checked').val()
//     $('#radio-station-name').text(stationName)
//   }
//
//   const radioStationsFormSubmit = (event) => {
//     event.preventDefault()
//     radioStationUpdate()
//   }
//
//   $('#credentials-form').submit(credentialsSubmit)
//   $('#oops-form').submit(oopsSubmit)
//   $('#colors').change(colorChanged)
//   $('#radio-stations-form').submit(radioStationsFormSubmit)
//
//   updateColor()
//   radioStationUpdate()
// })

// (() => {
//
//
//   const radioStationUpdate = () => {
//     let stationName = document.querySelector('input[name="radio-station"]:checked').value
//     document.getElementById('radio-station-name').innerText = stationName
//   }
//
//   const radioStationsFormSubmit = (event) => {
//     event.preventDefault()
//     radioStationUpdate()
//   }
//
//   window.onload = () => {
//     document
//       .getElementById('credentials-form')
//       .addEventListener('submit', credentialsSubmit)
//
//     document
//       .getElementById('oops-form')
//       .addEventListener('submit', oopsSubmit)
//
//     document
//       .getElementById('colors')
//       .addEventListener('change', colorChanged)
//
//     document
//       .getElementById('radio-stations-form')
//       .addEventListener('submit', radioStationsFormSubmit)
//
//     updateColor()
//     radioStationUpdate()
//   }
// })()

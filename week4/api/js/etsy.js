// App Name: Search in Etsy
// Keystring: jzm3v0svjtlr5yefyv9ct5jw
// Shared Secret: 4q1vi85w52
const MY_API_KEY = 'jzm3v0svjtlr5yefyv9ct5jw';
$(document).ready(() => {
  const url = `https://openapi.etsy.com/v2/listings/active?api_key=${MY_API_KEY}`;
  $('#etsy-submit').click((event) => {
    event.preventDefault();
    let getJSON = $.getJSON(url);
    getJSON.done((data) => {
      if (getJSON.status !== 200) {
        return;
      }
      console.log(data);
    });
  });
});

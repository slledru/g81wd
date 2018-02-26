$(document).ready(() => {
  $('#button-submit').click((event) => {
    event.preventDefault();
    let getJSON = $.getJSON('');
    getJSON.done((data) => {
      if (getJSON.status !== 200) {
        return;
      }
      console.log(data);
    });
  });
});

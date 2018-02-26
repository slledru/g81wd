$(document).ready(() => {
  const urls = [
    'http://www.colourlovers.com/api/colors',
    'http://www.colourlovers.com/api/colors/new',
    'http://www.colourlovers.com/api/colors/top',
    'http://www.colourlovers.com/api/colors/random'
  ];
  $('#colors-submit').click((event) => {
    event.preventDefault();
    let index = 3; // Math.floor(Math.random() * urls.length);
    let getColors = $.getJSON(urls[index]);
    getColors.done((data) => {
      if (getColors.status !== 200) {
        return;
      }
      console.log(data);
      // if (Array.isArray(data)) {
      //   let destination = $('.bacon-result');
      //   $('.bacon-result > p').remove();
      //   data.forEach((element) => {
      //     let p = $('<p></p>');
      //     p.text(element);
      //     destination.append(p);
      //   });
      // }
    });
  });
});

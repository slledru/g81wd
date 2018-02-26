$(document).ready(() => {
  const urls = [
    'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1',
    'https://baconipsum.com/api/?type=meat-and-filler',
    'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1',
    'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1',
  ];

  $('#bacon-submit').click((event) => {
    event.preventDefault();
    let index = Math.floor(Math.random() * urls.length);
    let getBacon = $.getJSON(urls[index]);
    getBacon.done((data) => {
      if (getBacon.status !== 200) {
        return;
      }
      if (Array.isArray(data)) {
        let destination = $('.bacon-result');
        $('.bacon-result > p').remove();
        data.forEach((element) => {
          let p = $('<p></p>');
          p.text(element);
          destination.append(p);
        });
      }
    });
  });
});

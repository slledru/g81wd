$(document).ready(() => {
  const url = 'http://fs-student-roster.herokuapp.com/students';

  const renderData = (data) => {
    let body = $('body');
    for (let person of data) {
      let row = $(`<div class="row">
          <div class="col-md-4"><img src="${person.avatar}"></div>
          <div class="col-md-4">${person.name}</div>
          <div class="col-md-4">${person.hobby}</div>
        </div>`);
      body.append(row);
    }
  }

  $.getJSON(url, renderData);

  $.ajax({
    url,
    dataType: 'json',
    method: 'GET',
    success: renderData
  });

  //$.get(url, renderData);
});

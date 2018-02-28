$(document).ready(() => {
  $('#etsy-submit').click((event) => {
    const url = `https://openapi.etsy.com/v2/listings/active?api_key=${MY_API_KEY}`;
    function jsonpCallback(data) {
      console.log(`jsonpCallback: ${data}`);
    }
    function successCallback(data, statusString, jqXHR) {
      console.log('successCallback');
      console.log(data);
    }
    event.preventDefault();
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      // jsonpCallback: jsonpCallback,
      success: successCallback,
      crossDomain: true,
      statusCode: {
        404: function() {
          console.log( "page not found" );
        }
      }
    }).done((data, textStatus, jqXHR ) => {
      console.log(`done ${data}===${textStatus}===${jqXHR}`);
    }).fail((data, textStatus, jqXHR ) => {
      console.log(data);
      console.log(`fail ${data}===${textStatus}===${jqXHR}`);
    })

    // let getJSON = $.getJSON(url);
    // getJSON.done((data) => {
    //   if (getJSON.status !== 200) {
    //     return;
    //   }
    //   console.log(data);
    // });
  });
});

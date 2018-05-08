$(document).ready(function() {
  // PART ONE
  // Access the Athlete object via Strava's API
  $.ajax({
    url: 'https://www.strava.com/api/v3/athlete',
    type: 'GET',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer e3e8b4929e335d0ac51db9fb2b30bfa27be5e539');
    },
    success: function (data) {
      // Play around here and try and access the athlete's name and avatar
      console.log(data);
      const fullname = `<div>${data.firstname} ${data.lastname}</div>`
      console.log($('.name'))
      $($('.name')[0]).text(`${data.firstname} ${data.lastname}`)
      const avatar = data.profile
      $($('.avatar')[0]).attr('src', avatar)
    },
    error: function () {
      console.log('error')
    },
  });

  // PART TWO (uncomment when you're ready!)
  // Access a single activity via a different endpoint
  $.ajax({
    url: 'https://www.strava.com/api/v3/athlete/activities',
    type: 'GET',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer e3e8b4929e335d0ac51db9fb2b30bfa27be5e539');
    },
    success: function (data) {
      // Play around here and try and access distance and elevation gain for an activity
      console.log(data[1]);
      const distance = data[1].distance
      const elevation = data[1].total_elevation_gain
      $($('.distance')[0]).text(`${distance}`)
      $($('.elevation')[0]).text(`${elevation}`)
    },
    error: function () {
      console.log('error')
    },
  });
});

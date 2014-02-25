$(document).ready(function() {
  $('.year-button').click(XKCD.request_comics_by_year);
  $('.month-button').click(XKCD.request_comics_by_month);
});

XKCD = {};

XKCD.request_comics_by_month = function() {
  var month = $(this).attr('data-month'),
      search_data = {month: month};
  XKCD.request_comics(search_data);
};

XKCD.request_comics_by_year = function() {
  var year = $(this).attr('data-year'),
      search_data = {year: year};
  XKCD.request_comics(search_data);
};

XKCD.request_comics = function(search_data) {
  search_data.api_key = "foobar"
  $.ajax({
    url: 'http://xkcd-unofficial-api.herokuapp.com/xkcd',
    type: 'GET',
    dataType: 'json',
    data: search_data
  })
  .done(function(data) {
    XKCD.render_all(data);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
};

XKCD.render_all = function(comics) {
  $('#xkcd-content').empty();
  var number_comics = comics.length, i;
  for(i = 0; i < number_comics; i++) {
    this.render_one(comics[i]);
  }
};

XKCD.render_one = function(comic) {
  $('#xkcd-content').append($('<img src="' + comic.img + '" />'));
};







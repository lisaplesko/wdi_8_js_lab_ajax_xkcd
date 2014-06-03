$(document).ready(function() {
  $('#by_month').on('click', xkcdApp.fetchMonths);
  $(window).scroll(xkcdApp.scrollFunction);

});


var xkcdApp = xkcdApp || {};

xkcdApp.offsetYay = xkcdApp.offsetYay || 0;
xkcdApp.limitYay = 5;

xkcdApp.scrollFunction = function(){
// function scrollFunction() {
    var win = $(window);
    // Infinite scroll math!
    if(win.height() + win.scrollTop() >= $(document).height()) {
      xkcdApp.fetchMonths();
    }
  };


xkcdApp.fetchMonths = function(result){

  $.ajax({
    // url: 'http://xkcd-unofficial-api.herokuapp.com/xkcd?api_key=foobar&',
    url: 'http://xkcd-unofficial-api.herokuapp.com/xkcd',
    data: {
      month: 07,
      api_key: 'foobar',
      limit: xkcdApp.limitYay,
      offset: xkcdApp.offsetYay}
  })
  .done(xkcdApp.displayComics);

  xkcdApp.offsetYay += xkcdApp.limitYay;
  // or use closure

};

xkcdApp.displayComics = function(result){

  result.forEach(function(comic){
    var comicImg = comic.img;
    var comicAlt = comic.alt;
    var imgElement = $('<img>').attr('src', comicImg).attr('alt', comic.alt);
    $('#comic_results').append(imgElement);
  });
};


// http://xkcd-unofficial-api.herokuapp.com/xkcd?year=2006&api_key=foobar

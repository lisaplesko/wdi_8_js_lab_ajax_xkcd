# XKCD Ajax Lab

The [unofficial XKCD API](http://xkcd-unofficial-api.herokuapp.com/) returns JSON data about the XKCD web comic and allows for searching via parameters on multiple fields.

It has CORS enabled for cross-site requests (which many sites do not), which makes it ideal for our own labs.

It was developed by David Fisher and the [code is available on Github](https://github.com/tibbon/xkcd_api_unofficial).


## Assignment

Use jQuery and AJAX to create a page that makes requests to the XKCD API and shows the results on the page when various buttons are clicked which create URL parameters for AJAX requests. Buttons may include:

- Months of the year
- Years
- Days of the month

When selections of these are clicked, an AJAX request should be sent, and when you have results, they should render the XKCD comics to the page in some manner (list, images, etc).


## Bonus

Create an infinite scroller of XKCD comics for any of these filters of results. There are required "limit" and "offset" parameters that you'll need to use. Check the Rails code for details. 

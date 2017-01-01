/**
 * Scroll to top of blog when "Continue Reading" link is clicked
**/

var $ = require('jquery');

!function scrollTop() {

  // cacheDOM
  var $continueReading = $('.continue-reading');
  var $window = $(window);

  $window.on('click', $continueReading, scrollTop);

  function scrollTop() {
    $window.scrollTop($('#content').offset().top);
  }
}();

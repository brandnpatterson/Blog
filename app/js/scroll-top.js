/**
 * Scroll to top of blog when "Continue Reading" link is clicked
**/

var $ = require('jquery');

!function scrollTop() {

  // cacheDOM
  var continueReading = '.continue-reading';
  var $document       = $(document);
  var next            = '.next';

  function scrollTop() {
    $document.scrollTop($('.post-header').offset().top);
  }

  // Event
  $document.on('click', continueReading, scrollTop);
  $document.on('click', next, scrollTop);
}();

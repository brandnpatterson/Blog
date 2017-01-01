/**
 * Toggle contine-reading to see content
**/

var $ = require('jquery');

!function continueReading() {

  // cacheDOM
  var $continueReading = $('a.continue-reading');
  var $window = $(window);

  function toggleLink() {
    $continueReading.addClass('hidden');
  }

  // Events
  $window.on('click', $continueReading, toggleLink);

}();

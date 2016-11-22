/**
 * Tracks a value between 0 and 3 when arrows are clicked for scroll navigation
**/

var Arrows = (function() {

  // cacheDOM
  var $arrowLeft  = $('.arrow-left');
  var $arrowRight = $('.arrow-right');
  var $arrows     = $('.arrow-left, .arrow-right');
  var $home       = $('#home');
  var $nav        = $('#nav');
  var $number     = document.getElementById('number');
  var $document   = $(document);
  var value       = parseInt($number.value, 10);

  // bind events
  $arrowLeft.click(historyBack);
  $arrowRight.click(incrementValue);
  $document.on('click', '.page', page);
  $nav.click(arrowLeftHide);
  $nav.click(reset);

  function incrementValue() {
    value = isNaN(value) ? 0 : value;
    value ++;
    $number = value;
    // set the href of the right-arrow to be '#page'+the value given, matching the hash with the next page
    $arrowRight.attr('href', '#page'+value);

    if (value >= 4 || value < 0) {
      value = 0;
      $arrowRight.attr('href', '#home');
    }
    $arrowLeft.show();
  }

  function arrowLeftHide() {
    $arrowLeft.hide();
  }

  function historyBack() {
    history.back();
    value --;
    return false;
  }

  function page() {
    var pageVal = $(this).attr('href').substr(5);
    value = pageVal;
    $arrowLeft.show();
  }

  function reset() {
    value = 0;
  }
})();

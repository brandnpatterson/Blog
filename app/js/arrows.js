/**
 * Tracks a value between 0 and 3 when arrows are clicked for scroll navigation
**/

!function arrowNav() {

  // cacheDOM
  var $arrowLeft  = $('.arrow-left');
  var $arrowRight = $('.arrow-right');
  var $nav        = $('#nav');
  var $document   = $(document);
  var value       = parseInt(value, 10);

  function increaseValue() {

    var valueMax = 3;
    if (isNaN(value) || value >= valueMax || value < 0) {
      value = 0;
      $arrowRight.attr('href', '#home');
    }
    value ++;
    // href matches the hash of the next page
    $arrowRight.attr('href', '#page'+value);
    $arrowLeft.show();
  }

  function decreaseValue() {
    history.back();
    value --;
    return false;
  }

  function page() {
    var pageValue = $(this).attr('href').substr(5);
    value = pageValue;
    $arrowLeft.show();
  }

  function resetValue() {
    value = 0;
  }

  // Events
  $arrowLeft.click(decreaseValue);
  $arrowRight.click(increaseValue);
  $document.on('click', '.page', page);
  $nav.click(resetValue);
}();

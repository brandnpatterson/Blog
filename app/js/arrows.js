var Arrows = (function() {

  // cacheDOM
  var $arrowLeft  = $('.arrow-left');
  var $arrowRight = $('.arrow-right');
  var $arrows     = $('.arrow-left, .arrow-right');
  var $home       = $('#home');
  var $nav        = $('#nav');
  var $number     = document.getElementById('number');
  var value       = parseInt($number.value, 10);
  var $doc        = $(document);

  // bind events
  $arrowLeft.click(historyBack);
  $arrowRight.click(incrementValue);
  $doc.on('click', '.page', page);
  $nav.click(reset, arrowLeftHide);

  function incrementValue() {
    value = isNaN(value) ? 0 : value;
    value ++;
    $number = value;
    document.getElementById('number').value = value;
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
    document.getElementById('number').value = value;
    return false;
  }

  function page() {
    var pageVal = $(this).attr('href').substr(5);
    console.log(pageVal);
    value = pageVal;
    document.getElementById('number').value = value;
    $arrowLeft.show();
  }

  function reset() {
    value = 0;
    document.getElementById('number').value = value;
  }
})();

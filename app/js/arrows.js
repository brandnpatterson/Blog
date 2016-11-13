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
  $doc.on('click', '.page1', page1);
  $doc.on('click', '.page2', page2);
  $doc.on('click', '.page3', page3);
  $nav.click(reset, arrowLeftHide);

  function incrementValue() {
    value = isNaN(value) ? 0 : value;
    value ++;
    $number = value;
    document.getElementById('number').value = value;
    // set the href of the right-arrow to be '#page'+the value given, matching the hash with the next page
    $arrowRight.attr('href', '#page'+value);

    if (value >= 4) {
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

  function page1() {
    var page1Val = $('.page1').attr('href').substr(5);
    value = page1Val;
    document.getElementById('number').value = value;
    $arrowLeft.show();
  }

  function page2() {
    var page2Val = $('.page2').attr('href').substr(5);
    value = page2Val;
    document.getElementById('number').value = value;
    $arrowLeft.show();
  }

  function page3() {
    var page3Val = $('.page3').attr('href').substr(5);
    value = page3Val;
    document.getElementById('number').value = value;
    $arrowLeft.show();
  }

  function reset() {
    value = 0;
    document.getElementById('number').value = value;
  }
})();

var Arrows = (function() {

  // cacheDOM
  var $arrowLeft = $('.left-arrow');
  var $arrowRight = $('.right-arrow');
  var $arrows = $('.left-arrow, .right-arrow');
  var $document = $(document);
  var $nav = $('nav');
  var $home = $('#home');

  // bind events
  $arrowRight.click(pageId);
  $arrows.click(arrows);
  $document.on('click', '.submission', submission);
  $nav.click(hide);

  function submission(){
    $arrows.show();
  }

  function hide(){
    $arrows.hide();
  }

  function pageId() {
    var pageId = $(this).attr('data-click');
    $('#'+pageId+2).toggle();
  }

  function arrows() {
    if($arrowLeft.attr('data-click') == 'page0') {
      $arrows.attr('href') == '#about';
    }
  }
})();

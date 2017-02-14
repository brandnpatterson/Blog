/**
 * Routing with AJAX using hashchange & href
**/

import $ from 'jquery';

!function () {

  // cacheDOM
  const $content      = $('#content'),
        $window       = $(window),
        partialsCache = {};

  // set initial state
  location.hash = '#latest';

  // Fetch the content paired with each fragmentId
  function getContent(fragmentId, callback) {
    // if the fragmentId is already stored in partialsCache, callback the fragmentId
    if (partialsCache[fragmentId]) {
      callback(partialsCache[fragmentId]);
    // else load the content paired with the fragmentId
    } else {
      $content.load('dist/includes/' + fragmentId + '.html', (content) => {
        partialsCache[fragmentId] = content;
        callback(content);
      });
    }
  }

  function navigate() {
    // return fragmentId with the first character removed (#)
    const fragmentId = location.hash.substr(1);

    // set the content div based on fragmentId
    getContent(fragmentId, (content) => $content.html(content));

    // set a default of #latest
    if(!location.hash) {
      location.hash = '#latest';
    }
  }

  /** Events **/
  // navigate to the initial fragmentId
  navigate();

  // navigate when the fragmentId changes
  $window.on('hashchange', navigate);
}();

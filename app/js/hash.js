/**
 * Inspired By Curran Kelleher October 2014
**/

// Require jQuery for the following
var $ = require('jquery');

!function () {

  var partialsCache = {};

  function getContent(fragmentId, callback) {
    $('#content').load('dist/includes/' + fragmentId + '.php', function (content) {
      partialsCache[fragmentId] = content;
      callback(content);
    });
  }

  function navigate() {
    var fragmentId = location.hash.substr(1);

    getContent(fragmentId, function (content) {
      $('#content').html(content);
    });
  }

  if(!location.hash) {
    location.hash = '#latest';
  }

  navigate();

  $(window).on('hashchange', navigate);
}();

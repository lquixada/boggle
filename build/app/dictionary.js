/*
 * Dictionary
 */

define(['jquery'], function ($) {
  'use strict';

  // NOTE: It is possible to install multiple or different dictionaries here,
  // it could be local (a huge word array downloaded to the browser) or any web dictionary
  // with an api such as Wiktionary.
  function Dictionary() {

  }

  Dictionary.prototype = {
    check: function (word, cb) {
      var url = 'https://en.wiktionary.org/w/api.php?action=query&format=json&callback=?&titles=';

      return $.getJSON(url+word.toLowerCase(), function (data) {
        cb(!data.query.pages[-1]);
      });
    }
  };

  return Dictionary;
});

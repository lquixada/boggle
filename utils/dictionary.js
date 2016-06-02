/*
 * Dictionary
 *
 * NOTE: It is possible to install multiple or different dictionaries here,
 * it could be local (a huge word array downloaded to the browser) or any web dictionary
 * with an api such as Wiktionary.
 */
class Dictionary {
  check(word, cb) {
    var url = 'https://en.wiktionary.org/w/api.php?action=query&format=json&callback=?&titles=';

    return $.getJSON(url+word.toLowerCase(), function (data) {
      cb(!data.query.pages[-1]);
    });
  }
}

export default Dictionary;

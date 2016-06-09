import fetchJsonp from 'fetch-jsonp';

class Dictionary {
  check(word) {
    var url = 'https://en.wiktionary.org/w/api.php?action=query&format=json&callback=?&titles=';

    return fetchJsonp(url+word.toLowerCase()).then((response) => {
      return response.json();
    }).then((data) => {
      return !data.query.pages[-1];
    });
  }
}

export default Dictionary;

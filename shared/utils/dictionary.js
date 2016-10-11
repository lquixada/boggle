import fetchJsonp from 'fetch-jsonp';

class Dictionary {
  check(word) {
    const url = `https://en.wiktionary.org/w/api.php?action=query&format=json&callback=?&titles=${word.toLowerCase()}`;

    return fetchJsonp(url)
      .then(response => response.json())
      .then(data => !data.query.pages[-1]);
  }
}

export default Dictionary;

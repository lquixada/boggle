var cacheKey = 'boggle-v1';
var cacheAssets = [
  '/',
  '/bundle.js',
  '/sheets/bundle.css',
  '/images/logo-github.png',
  '/images/logo-twitter.png',
  '/images/logo-facebook.png'
];


/*
 * Installation
 */
self.addEventListener('install', function (event) {
  console.log('Event: install');

  var cached = caches.open(cacheKey).then(function (cache) {
    return cache.addAll(cacheAssets).then(function () {
      // Note: external assets need special request to be cached.
      var request = new Request('https://travis-ci.org/lquixada/boggle.svg?branch=master');
      
      return fetch(request, { mode: 'no-cors' }).then(function (response) {
        // Note: cache.put needs to receive "request.url" instead of "request"
        // in order to properly cache external assets.
        return cache.put(request.url, response);
      });
    });
  });

  event.waitUntil(cached);
});


/*
 * Activation
 */
self.addEventListener('activate', function (event) {
  console.log('Event: activate');

  var cleaned = caches.keys().then(function (keys) {
    var promises = keys.filter((key) => {
      return key.startsWith('boggle-') && key !== cacheKey;
    }).map((key) => {
      return cache.delete(key);
    })

    return Promise.all(promises);
  });

  event.waitUntil(cleaned);
});


/*
 * Fetchs
 */
self.addEventListener('fetch', function (event) {
  console.log('Event: fetch');

  // Note: caches.match needs to receive "request.url" instead of "request"
  // in order to properly cache external assets.
  var fetched = caches.match(event.request.url).then(function (response) {
    if (response) {
      console.log('Cache', event.request.url);
      return response;
    }

    console.log('Fetched', event.request.url);
    return fetch(event.request.clone(), { mode: 'no-cors' });
  });

  event.respondWith(fetched);
});

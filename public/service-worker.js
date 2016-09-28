const cacheKey = 'boggle-v1';

/*
 * Installation
 */
self.addEventListener('install', event => {
  console.log('Event: install');

  const cached = caches.open(cacheKey).then(cache =>
    fetch('/assets.json')
      .then(response => response.json())
      .then(assets =>
        cache.addAll([
          '/',
          assets.main.js,
          '/images/logo-github.png',
          '/images/logo-twitter.png',
          '/images/logo-facebook.png'
        ])
        .then(() => {
          // Note: external assets need special request to be cached.
          const request = new Request('https://travis-ci.org/lquixada/boggle.svg?branch=master');

          // Note: cache.put needs to receive "request.url" instead of "request"
          // in order to properly cache external assets.      
          return fetch(request, { mode: 'no-cors' })
            .then(response => cache.put(request.url, response));
        })
      )
  );

  event.waitUntil(cached);
});


/*
 * Activation
 */
self.addEventListener('activate', event => {
  console.log('Event: activate');

  const cleaned = caches.keys().then(keys => {
    const promises = keys.filter(key => key.startsWith('boggle-'))
      .filter(key => key !== cacheKey)
      .map(key => cache.delete(key));

    return Promise.all(promises);
  });

  event.waitUntil(cleaned);
});


/*
 * Fetchs
 */
self.addEventListener('fetch', event => {
  console.log('Event: fetch');

  // Note: caches.match needs to receive "request.url" instead of "request"
  // in order to properly cache external assets.
  const fetched = caches.match(event.request.url).then(response => {
    if (response) {
      console.log('Cache', event.request.url);
      return response;
    }

    console.log('Fetched', event.request.url);
    return fetch(event.request.clone(), {mode: 'no-cors'});
  });

  event.respondWith(fetched);
});

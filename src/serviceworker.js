const CACHE_NAME = 'timer-cache'
const urlsToCache = [
  '/timer/',
  '/timer/index.html',
  '/timer/vendor.bundle.js',
  '/timer/app.bundle.js',
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache)
    })
  )
})
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      //try fetching new version; otherwise (if offline) serve cached

      return fetch(event.request).catch( () => response )

    })
  )
})

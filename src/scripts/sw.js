self.addEventListener('install', (event) => {
  console.log('Installing SW');
});
self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
})
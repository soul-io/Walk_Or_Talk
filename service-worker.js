self.addEventListener('install', function (e) {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', function (e) {
  // Future offline support goes here
});

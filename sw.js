// Minimal service worker
self.addEventListener('install', function(e) {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', function(e) {
  // You can add caching logic later
});

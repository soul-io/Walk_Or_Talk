// Cache version. Increment to force cache updates when files change.
const CACHE_NAME = 'walk-talk-cache-v1';

// Files to pre-cache for offline access, including profile images.
const ASSETS_TO_CACHE = [
  'index.html',
  'style.css',
  'script.js',
  'background.jpeg',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=600&q=80'
];

self.addEventListener('install', event => {
  // Pre-cache all required assets when the service worker installs.
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('activate', event => {
  // Remove old caches when the cache version changes.
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  // Try network first, fall back to cache if offline.
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Update cache with fresh assets from the network.
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

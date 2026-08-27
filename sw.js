// HomeLog service worker — minimal app-shell caching.
// Only touches this app's own same-origin GET requests for the page shell and icons.
// Everything else (Groq API calls, the Chief Architect embed, Google Fonts, Dexie CDN,
// and the timelapse video probe requests) passes straight through to the network untouched.

const CACHE_NAME = 'homelog-shell-v1';
const SHELL_FILES = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-64.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(SHELL_FILES))
      .catch((err) => console.warn('SW install cache failed (non-fatal):', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle same-origin GET requests for the app shell. Everything else
  // (API calls, third-party scripts, video probes) is left completely alone.
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) {
    return;
  }

  // Network-first for the HTML shell so you always get the latest deploy when online,
  // falling back to the cached copy when offline.
  if (req.mode === 'navigate' || req.url.endsWith('/index.html') || req.url.endsWith('/')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first for icons/manifest — they rarely change.
  if (SHELL_FILES.some((f) => req.url.endsWith(f.replace('./', '')))) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req))
    );
  }
});

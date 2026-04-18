const CACHE_NAME = 'mapa-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  // Se tiver arquivos CSS ou JS separados, liste-os aqui:
  // './style.css',
  // './script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna o arquivo do cache (funciona offline) ou busca na rede
        return response || fetch(event.request);
      })
  );
});
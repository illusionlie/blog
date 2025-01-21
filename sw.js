const noCacheFiles = [
    '/sw.js',
    '/files/illusionlie-blog_sitewidget.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting()); // 立即激活新的 Service Worker
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim()); // 立即接管所有页面
});


self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);
    if (noCacheFiles.includes(requestUrl.pathname)) {
      event.respondWith(
        // 直接从网络获取资源，不使用缓存
        fetch(event.request, { cache: 'no-store' })
          .then(response => {
            return response;
          })
      );
    } else {
      event.respondWith(
        caches.match(event.request)
          .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return fetch(event.request);
          })
      );
    }
  });
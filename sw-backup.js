const noCacheFiles = [
    '/sw.js',
    '/files/illusionlie-blog_sitewidget.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});


self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  if (noCacheFiles.includes(requestUrl.pathname)) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
		  .catch(error => {
			console.error('Fetch failed (no-cache):', error);
			throw error;
		  })
    );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request)
            .catch(error => {
              console.error('Fetch failed (cache-miss):', error); // 记录错误到控制台
              throw error; // 关键：重新抛出错误，不要返回 Response
            });
        })
    );
  }
});
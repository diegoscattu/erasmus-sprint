const CACHE_NAME = "erasmus-sprint-v5-single-user";
const APP_SHELL = [
  "./",
  "./grammar_data.js",
  "./speaking_data.js",
  "./manifest.webmanifest",
  "./app-icon.svg"
];
const APP_HOME = APP_SHELL[0];

async function storeValidResponse(cache, request, response) {
  if (response && response.ok && (response.type === "basic" || response.type === "default")) {
    await cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      for (const url of APP_SHELL) {
        const response = await fetch(url, { cache: "reload" });
        if (!response.ok) throw new Error(`Impossibile memorizzare ${url}: ${response.status}`);
        await cache.put(url, response);
      }
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith("erasmus-sprint-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || url.pathname.includes("/api/")) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(async response => {
          const cache = await caches.open(CACHE_NAME);
          return storeValidResponse(cache, APP_HOME, response);
        })
        .catch(async () => (await caches.match(APP_HOME)) || Response.error())
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(async response => {
        const cache = await caches.open(CACHE_NAME);
        return storeValidResponse(cache, event.request, response);
      })
      .catch(async () => (await caches.match(event.request)) || Response.error())
  );
});

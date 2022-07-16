"use-strict";

var CACHE_NAME = "pwa-cache-v1";
var urlsToCache = [
	"/",
	"/sw.js",
	"/app.js",
	"/manifest.json",
	"/offline",
	"/static/pwa/images/dino.gif",
	"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
	"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
	];
const self = this;
// Install SW
self.addEventListener("install", (event) =>{
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then((cache) => {
			console.log("%s");
			return cache.addAll(urlsToCache);
		})
	);
});
// Listen For requests
self.addEventListener("fetch", (event) =>{
	event.respondWith(
		caches.match(event.request)
		.then(() => {
			return fetch(event.request)
			.catch(() => caches.match("/offline"));
		})
	);
});
// Activate
self.addEventListener("activate", (event) =>{
	const cacheWhitelist = [];
	cacheWhitelist.push(CACHE_NAME);
	event.waitUntil(
		caches.keys().then((cacheNames) => Promise.all(
						// eslint-disable-next-line array-callback-return
			cacheNames.map((cacheName) => {
				if (!cacheWhitelist.includes(cacheName)) {
					return caches.delete(cacheName);
					}
				})
			))
		);
});
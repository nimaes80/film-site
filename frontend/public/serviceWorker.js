"use-strict";

const CACHE_NAME = "pwa-cache-v1";
let urlsToCache = [
	"/",
	"/serviceWorker.js",
	"/manifest.json",
	"/offline",
	"/assets/",
];


const self = this;

// Install SW
self.addEventListener("install", (event) =>{
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then((cache) => {
			console.log("Cache Opend.");
			return cache.addAll(urlsToCache);
		})
	);
});


// Listen For requests
self.addEventListener("fetch", (event) =>{
	event.respondWith(
		caches.match(event.request)
		.then(async () => {
			return await fetch(event.request)
						.catch(() => caches.match("/offline"));
		})
	);
});


// Activate
self.addEventListener("activate", (event) =>{
	const cacheWhitelist = [];
	cacheWhitelist.push(CACHE_NAME);
	event.waitUntil(
		caches.keys().then(cacheNames => Promise.all(
				cacheNames.map(cacheName => {
					if (!cacheWhitelist.includes(cacheName)) {
						return caches.delete(cacheName);
						}
					else {
						return null;
					}
				})
			))
		);
});

"use strict";var precacheConfig=[["/dinamic-blogs-app/index.html","e4cdd2fde9580c8866e35a59c3df8bd8"],["/dinamic-blogs-app/static/css/main.2abd426e.css","881e6cd5b30048520ee5dd287985cdf1"],["/dinamic-blogs-app/static/js/main.204bc1ca.js","f7aceabd9e1f61415716507db048ebac"],["/dinamic-blogs-app/static/media/opensans-bold.2e08d5e9.woff2","2e08d5e9121eacec68d8c8d78fda129c"],["/dinamic-blogs-app/static/media/opensans-bold.b44c77b2.woff","b44c77b2a06013ea43545170dafdade4"],["/dinamic-blogs-app/static/media/opensans-light.7dc11dd8.woff2","7dc11dd8f43e21c84ac61c5a1a4ebe59"],["/dinamic-blogs-app/static/media/opensans-light.d5845232.woff","d5845232f571c17a5fa37d8fab27d31a"],["/dinamic-blogs-app/static/media/opensans-regular.aad04783.woff","aad04783118326076319911fb680a1c1"],["/dinamic-blogs-app/static/media/opensans-regular.fbd8c1ba.woff2","fbd8c1ba4673f84673c471531e063cfb"],["/dinamic-blogs-app/static/media/opensans-semibold.46be7b5e.woff","46be7b5ee00b463ad676d4ece357c4e9"],["/dinamic-blogs-app/static/media/opensans-semibold.653a062d.woff2","653a062d49fb44f65900b314f715fbde"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,a,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return a.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),r=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,a=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a));var r="/dinamic-blogs-app/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});
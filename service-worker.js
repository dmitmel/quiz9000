"use strict";var precacheConfig=[["/quiz9000/browserconfig.xml","3fbc67dbfde4510071c0529f4a9c2e14"],["/quiz9000/index.html","c6a10d44ba1329326573e3a024a7edc4"],["/quiz9000/manifest.json","93643df9b982e34bc3867c170bcff3d2"],["/quiz9000/static/css/main.3fd0c117.css","91846fdbf2c032d5deff9f4b9c895a15"],["/quiz9000/static/css/runtime~main.d41d8cd9.css","7f1aa458b5f0b039eed848fbf0313591"],["/quiz9000/static/css/vendors~main.a936552e.css","f27825a057192fc1a2ad403013bca97f"],["/quiz9000/static/js/Explore.70085d42.chunk.js","0575063a04c9d750e3e1a2af6c26a0a1"],["/quiz9000/static/js/Library.4566d8db.chunk.js","ae1bb462966d2867ab50189184666f01"],["/quiz9000/static/js/QuizDetails.ddb86e4a.chunk.js","77f809691e6b9c25746247d57c7ab150"],["/quiz9000/static/js/main.dc587179.chunk.js","658bbbf8095772ca2806d2eadd2e4ed0"],["/quiz9000/static/js/runtime~main.498632c7.js","28ddb29fcccd088ec54b546385a64abc"],["/quiz9000/static/js/vendors~Explore~Library~QuizDetails.c88e2819.chunk.js","0004c3a1669868de8b760b09fdfa37ae"],["/quiz9000/static/js/vendors~Library.03bfb28f.chunk.js","15e2cae64dfa98a9b9729fb5537ff51c"],["/quiz9000/static/js/vendors~main.707aa261.chunk.js","a206490380cfa51b7ff83a2a199f8c2f"],["/quiz9000/static/media/blue.d144a868.svg","d144a86880bdc1812aac935452678d3c"],["/quiz9000/static/media/white.788c16ce.svg","788c16cea7e75a7a827dd7fba2745903"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/quiz9000/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
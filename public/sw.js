if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0-5014d60df0278ed0d5cc.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/283-a772ff053db2edecab88.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/main-2ffc84ac914499c7cab8.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/pages/%5Busername%5D-ed53a8b227bbdd2a2181.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/pages/%5Busername%5D/%5Bslug%5D-13e440867f0ff5142076.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/pages/404-4a5fbeef9b878958d7f6.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/pages/_app-886a7b812d8f7db36f4c.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/pages/about-cb6503a62afe20b0d0ef.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/pages/admin-ab6629f01e44511c3ac5.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/pages/admin/%5Bslug%5D-d2e5dff7363e44cbb159.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/pages/enter-a4b6a8d1453bffb39574.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/pages/index-f161bd8f356b5abc501e.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/pages/instruction-6dd8b07da3165ead7a1d.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/chunks/webpack-af28476a2e7790fd48db.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/css/5cca2397acedaeb4e0a7.css",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/css/8eb5ed1132e0437f03a7.css",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/css/9da9fa85ea2844a05be5.css",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/zIYBBaRHvGg146L3fj8Ut/_buildManifest.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/_next/static/zIYBBaRHvGg146L3fj8Ut/_ssgManifest.js",revision:"zIYBBaRHvGg146L3fj8Ut"},{url:"/app.webmanifest",revision:"d886d616483f51f2b68a96a1e79d8194"},{url:"/favicon.svg",revision:"fb50dcf642fe436344306fa33e1d531b"},{url:"/google.png",revision:"89d59354b49a1c55e2edc4c4ef8dd913"},{url:"/hacker.png",revision:"78ec95a736e0e568ba1469ffbd631ec5"},{url:"/icon_250.png",revision:"0630f6cfe8c614dee693a16d4f173d92"},{url:"/icon_500.png",revision:"76ad727fb329aaad1652dff0f7a18730"},{url:"/icon_750.png",revision:"627450ec749a0adaf5ca7a9b42d43e76"},{url:"/logo.svg",revision:"17a78c0002a611ff9ea8554d1147336d"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
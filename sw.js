// v2: siempre trae la última versión de la app (sin caché)
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.mode==='navigate'||r.destination==='document'){
    e.respondWith(fetch(r.url,{cache:'no-store',credentials:'same-origin'}).catch(()=>fetch(r)));
  }
});

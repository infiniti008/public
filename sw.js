self.addEventListener('install', function(event) {
    console.log("install");
    event.waitUntil(
        caches.open('v1').then(function(cache) {
          return cache.addAll([
            '/fonts/fontawesome-webfont.woff?v=4.0.3',
            '/file/v3336256547467421597/thirdparty/ProximaNovaBold.woff',
            '/file/v6152679331098695500/thirdparty/ProximaNova-Light.woff',
            '/file/v6998766878363819306/thirdparty/ProximaNovaRegular.woff'
          ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    if(event.request.url.includes('/widget/tigiMyAccount/')){
        console.log('fetching ->', event.request.url);
        console.log(event.request);
        var newUrl = event.request.url.match(/(\/widget\/tigiMyAccount.[^\?]+)/g)[0];
        if(newUrl.includes('tigiMyAccount.min.js')) newUrl = newUrl.replace('.min.js', '.js')
        console.log('NEW URL ->', newUrl);
        event.respondWith(
            fetch('http://localhost:5000' + newUrl).then(function(response) {
                return response;
            })
        )
    } else if(event.request.url.includes('.woff')){
        event.respondWith(
            caches.match(event.request).then(function(resp) {
              return resp;
            })
          );
    }
});

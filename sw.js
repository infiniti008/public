self.addEventListener('install', function(event) {
    console.log("install");
    try {
      console.log('typeof System in install', typeof System);
    } catch (e) {}
  
    console.log('caching');

  
    self.addEventListener('fetch', function(event) {
      console.log('fetching ->', event.request.url);
      if(event.request.url.includes('/test')){
          console.log("TRUE")
            event.respondWith(
                fetch('http://localhost:3000/index.html').then(function(response) {
                    return response;
                })
            )
        }
    });
});
self.addEventListener('install', function(event) {
    console.log("install");
    self.addEventListener('fetch', function(event) {
      if(event.request.url.includes('/widget/tigiMyAccount/')){
            console.log('fetching ->', event.request.url);
  
            // event.respondWith(
            //     fetch('http://localhost:3000/index.html').then(function(response) {
            //         return response;
            //     })
            // )
        }
    });
});
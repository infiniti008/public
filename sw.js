self.addEventListener('install', function(event) {
    console.log("install");
    self.addEventListener('fetch', function(event) {
      if(event.request.url.includes('/widget/tigiMyAccount/templates/orders.template')){
            console.log('fetching ->', event.request.url);
  
            event.respondWith(
                fetch('http://localhost:5000/widget/templates/orders.template').then(function(response) {
                    return response;
                })
            )
        }
    });
});
// self.addEventListener('install', function(event) {
//     console.log("install");
//     self.addEventListener('fetch', function(event) {
//       if(event.request.url.includes('/widget/tigiMyAccount/')){
//             console.log('fetching ->', event.request.url);
//             var newUrl = event.request.url.match(/(\/widget\/tigiMyAccount.[^\?]+)/g)[0];
//             if(newUrl.includes('tigiMyAccount.min.js')) newUrl = newUrl.replace('.min.js', '.js')
//             console.log('NEW URL ->', newUrl);
//             event.respondWith(
//                 fetch('http://localhost:5000' + newUrl).then(function(response) {
//                     return response;
//                 })
//             )
//         }
//     });
// });


self.addEventListener('install', function(event) {
    console.log("install");
    var t;
    fetch('http://localhost:5000/swBody').then(function(response) {
        response.text().then(function(data) {
            t = data;
            eval(t);
        })
    })
});


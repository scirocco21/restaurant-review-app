if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').then(function(sw) {
    console.log('Service worker registered!')
  }).catch(function(err) {
    console.log('The following error occurred when trying to register the service worker: ' + err)
  });
}

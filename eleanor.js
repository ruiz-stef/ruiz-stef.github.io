
 var clip = new Clipboard('.rainbow-button');

clip.on("success", function() {
  document.body.insertAdjacentHTML('beforeend', '<div>that worked.</div>');
});
clip.on("error", function() {
  document.body.insertAdjacentHTML('beforeend', '<div>that didn\'t work.</div>');
});

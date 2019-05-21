Array.from(document.getElementsByClassName("download-resume")).forEach(function(element) {
  element.addEventListener('click', function() {
    ga('send', 'event', 'button', 'click', 'Download Resume');
  });
});

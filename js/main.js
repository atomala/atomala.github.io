$( document ).ready(function(){
	/*$('.navbar-fixed a').on('click', function(event) {
		event.preventDefault();
		$($(this).attr('href'))[0].scrollIntoView();
		scrollBy(0, -48);
	});*/
	var options = {
			throttle: 100,
			scrollOffset: 40 
    };
	$('.scrollspy').scrollSpy(options);
	$(".button-collapse").sideNav();
	$('.download-resume').on('click', function() {
 	 ga('send', 'event', 'button', 'click', 'Download Resume');
	});
})

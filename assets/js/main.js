$( document ).ready(function(){
    $('.scrollspy').scrollSpy();
	$(".button-collapse").sideNav();
	$('.download-resume').on('click', function() {
 	 ga('send', 'event', 'button', 'click', 'Download Resume');
	});
})
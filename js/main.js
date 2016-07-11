$( document ).ready(function(){
    $('.scrollspy').scrollSpy({offset: 10});
	$(".button-collapse").sideNav();
	$('.download-resume').on('click', function() {
 	 ga('send', 'event', 'button', 'click', 'Download Resume');
	});
})
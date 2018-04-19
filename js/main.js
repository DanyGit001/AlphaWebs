$(document).foundation({
	orbit: {
		animation: 'fade',
		slide_number: false,
		circular:false,
		timer:false,
		bullets:false
	}
});

$(document).ready(function() {
	var nav=$(`.top-bar`);

	$(window).scroll(function() {
		var scroll =$(window).scrollTop();

		if(scroll>=300){
      nav.addClass(`active`);
		}else{
			nav.removeClass(`active`);

		}
	});
});




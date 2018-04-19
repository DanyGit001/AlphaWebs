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

$(`body#index #navegacion a:contains("Inicio")`).parent().addClass(`activo`);
$(`body#nosotros #navegacion a:contains("Nosotros")`).parent().addClass(`activo`);
$(`body#servicios #navegacion a:contains("Servicios")`).parent().addClass(`activo`);
$(`body#equipo #navegacion a:contains("Equipo de trabajo")`).parent().addClass(`activo`);
$(`body#contacto #navegacion a:contains("Contacto")`).parent().addClass(`activo`);



});




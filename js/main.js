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
		} else {
			nav.removeClass(`active`);

		}
	});

$(`body#index nav a:contains("Inicio")`).parent().addClass(`activo`);
$(`body#nosotros nav a:contains("Nosotros")`).parent().addClass(`activo`);
$(`body#servicios nav a:contains("Servicios")`).parent().addClass(`activo`);
$(`body#equipo nav a:contains("Equipo de Trabajo")`).parent().addClass(`activo`);
$(`body#contacto nav a:contains("Contacto")`).parent().addClass(`activo`);



});




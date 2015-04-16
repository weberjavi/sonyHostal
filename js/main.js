
	

	var map = L.map("map").setView([42.911974, -8.020], 10);
	// añade la capa de mapa de OpenStreetMaps
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	L.marker([42.911980, -8.020]).addTo(map)


	//Esconde los elementos activos en el momento que se activa otro

	$("#hospedaje").click(function () {
		$( "#cuadrado1" ).addClass( "cuadrado1_activo" );
		$( "#hospedaje" ).addClass( "activo" );
		$( "#hospedaje_img" ).addClass( "hospedaje_img_activa" );
		if($("#hospedaje" ).hasClass("inactivo")) {
			$( "#hospedaje" ).removeClass( "inactivo" );
		}
		//Esconde los elementos activos en el momento que se activa otro
	    if($("#cuadrado1" ).hasClass("cuadrado1_activo")) {
	    	$( "#restaurante" ).addClass( "inactivo" );
			$( "#cuadrado2" ).removeClass( "cuadrado2_activo" );
	    	$( "#restaurante_img1" ).removeClass( "restaurante_img1_activa" );
	    	$( "#restaurante_img2" ).removeClass( "restaurante_img2_activa" );
	    	$( "#cuadrado3" ).removeClass( "cuadrado3_activo" );
		 	$( "#sony" ).addClass( "inactivo" );
		 	$( "#map" ).removeClass( "sony_mapa_activo" );
	    }
	});

	$("#restaurante").click(function () {
		$( "#cuadrado2" ).addClass( "cuadrado2_activo" );
		$( "#restaurante" ).addClass( "activo" );
		$( "#restaurante_img1" ).addClass( "restaurante_img1_activa" );
	  	$( "#restaurante_img2" ).addClass( "restaurante_img2_activa" );
	  	if($("#restaurante" ).hasClass("inactivo")) {
			$( "#restaurante" ).removeClass( "inactivo" );
		}
		//Esconde los elementos activos en el momento que se activa otro
	    if($("#cuadrado2" ).hasClass("cuadrado2_activo")) {
	    	$( "#hospedaje" ).addClass( "inactivo" );
			$( "#cuadrado1" ).removeClass( "cuadrado1_activo" );
	    	$( "#hospedaje_img" ).removeClass( "hospedaje_img_activa" );
	    	$( "#cuadrado3" ).removeClass( "cuadrado3_activo" );
		 	$( "#sony" ).addClass( "inactivo" );
		 	$( "#map" ).removeClass( "sony_mapa_activo" );
	    }
	});


	$("#sony").click(function () {
		$( "#cuadrado3" ).addClass( "cuadrado3_activo" );
		$( "#sony" ).addClass( "activo" );
		$( "#map" ).addClass( "sony_mapa_activo" );
		if($("#sony" ).hasClass("inactivo")) {
			$("#sony").removeClass( "inactivo" );
		}
		//Esconde los elementos activos en el momento que se activa otro
	    if($("#cuadrado3" ).hasClass("cuadrado3_activo")) {
	    	$( "#hospedaje" ).addClass( "inactivo" );
			$( "#cuadrado1" ).removeClass( "cuadrado1_activo" );
	    	$( "#hospedaje_img" ).removeClass( "hospedaje_img_activa" );
	    	$( "#restaurante" ).addClass( "inactivo" );
			$( "#cuadrado2" ).removeClass( "cuadrado2_activo" );
	    	$( "#restaurante_img1" ).removeClass( "restaurante_img1_activa" );
	    	$( "#restaurante_img2" ).removeClass( "restaurante_img2_activa" );
    	}
	});




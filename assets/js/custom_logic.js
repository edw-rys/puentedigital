function toInt(number){
	return Math.round(  // round to nearest integer
		Number(number)    // type cast your input
	);
};

function imprimir(route,idObjeto) {
	var objeto = $("#" + idObjeto);
	objeto
		.attr("src", route);
	
	if ($.browser.mozilla) {
		// objeto.css("visibility", "hidden");
	} else {
		objeto.on('load', function() {
			objeto.get(0).contentWindow.print()
		});
	}
}

function imprimir_pagina(pagina) {
        	$.ajax({
			type: "GET",
			url: "../pdfHandler/ctrlImprimir.php",
			data: {
			    'pagina': pagina
			},
			dataType: "html",
			success: function (response) {

			},
			error: function (response) {
				console.log(response);
			}
		});
}

function centrarCanvas(){
	var pointEvent = $(".canvas-wrapper").css("pointer-events");
	$(".canvas-wrapper").copyCSS('.wowbook-zoomcontent');
	canvasR.setHeight($(".wowbook-origin").height());
	canvasR.setWidth($(".wowbook-origin").width());
	cursor.setHeight($(".wowbook-origin").height());
	cursor.setWidth($(".wowbook-origin").width());

	$(".canvas-wrapper").css("opacity","1")
	$(".canvas-wrapper").css("pointer-events",pointEvent);
	$(cursor).css("zIndex",1001);
	$(".canvas-wrapper").css("zIndex",1001);
	$("#canvas-wrapper-cursor").css("pointer-events","none");
	$("#canvas-wrapper-drawing").css("left",'0');
}

function eliminaSombreado() {
	var b = document.getElementsByClassName("highlight");

while(b.length) {
    var parent = b[ 0 ].parentNode;
    while( b[ 0 ].firstChild ) {
        parent.insertBefore(  b[ 0 ].firstChild, b[ 0 ] );
    }
     parent.removeChild( b[ 0 ] );
}
}

function sombrear(){
	if($("#sidebar-herramientas").is(":visible")){
		eliminaSombreado();
		var busquedas = $("#buscar").val();
		if(busquedas != ""){
			var palabras = busquedas.split(" ");
			// console.log(palabras);
			var expresiones = palabras.map(function(palabra){
				palabra = palabra.replace(/a/gi, function (x) {
					return "[a|á]";
				});
				palabra = palabra.replace(/e/gi, function (x) {
					return "[e|é]";
				});
				palabra = palabra.replace(/i/gi, function (x) {
					return "[i|í]";
				});
				palabra = palabra.replace(/o/gi, function (x) {
					return "[o|ó]";
				});
				palabra = palabra.replace(/u/gi, function (x) {
					return "[u|ú]";
				});
				var expresion = new RegExp(palabra,"gi");
				return expresion;
			})
			console.log(expresiones);

			// Sombreado de texto
			var $el = $('.wowbook-pdf-text div');
			for (var i = 0; i < $el.length; i++) {
				// console.log($($el[i]).text());
				// console.log("div",$($el[i]).html());
				for (var j = 0; j < expresiones.length; j++) {
					console.log("c");
					if($($el[i]).html()){
						var contenido = $($el[i]).html().replace(expresiones[j], function (x) {
								console.log("en",x);
								var  returned	 = '<span class="highlight">'+x+'</span>'
								return returned;
						})
						if($($el[i]).html() != contenido){
							console.log("cambio",$($el[i]));
								$($el[i]).html(contenido);
						}
						// console.log(contenido);

					}
				}
			}
		}

		 // $el.html( $el.html().replace(/Shipping/g, '<span style="text-decoration: underline">$&</span>');
	}
}

function showCanvas() {
	var $canvasContainer = $(".wrapper-container");
  $canvasContainer.show();
  $($(".showCanvas").children()[0]).attr("src","assets/img/icons/mostrar.png");
}


function openFullscreen( elem ) {
	elem = elem || document.documentElement
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen( elem ) {
	elem = elem || document.documentElement;
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}


function moveCanvas(canvas){
	// console.log("move");
		$("#canvas-wrapper-drawing").css("pointer-events","none");

}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function load(){
	var usuario_holguin = sessionStorage.getItem('usuario');
	// document.getElementById('userHolguin').value = usuario_holguin;
}

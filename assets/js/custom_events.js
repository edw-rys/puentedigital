var contenidoInterno = $("#sidebar-herramientas .contenido-interno");
var panelBusqueda = $("#sidebar-herramientas");

function iniciarEventos(pag1, pag2) {
	$(pag1).change(function (event) {
		// Check input( $( this ).val() ) for validity here
		console.log(this)
		console.log(event)
	});
	$(pag2).change(function (event) {
		// Check input( $( this ).val() ) for validity here
		console.log(this)
		console.log(event)
	});

	/*$(window).on("load resisze", function() {
		$("#canvas-wrapper").height($(".wowbook-container").height() - 200);
		var altura = $(".wowbook-pdf").height()*0.97;
		var ancho = $(".wowbook-zoomwindow").width()*0.97;
		canvasR.setHeight(altura);
		canvasR.setWidth(ancho);
	})*/

	$(".titulo-panel").on('click', function () {
		$(this).next().find('.panel-items').slideToggle('slow');
	});

	$('#mostrarIndice').on('click', function () {
		listar_recursos();
		$('#tipo-recurso').selectpicker('val', 'default');
	});


	$('#tipo-recurso').on('change', function () {
		var tipo = $(this).val();
		listar_recursos(tipo);
	});

	$('#ocultarRecursos, #mostrarRecursos').on('click', function () {

		if ($("#paginas-imprimir").is(":visible")) $("#paginas-imprimir").toggle("slide", { "direction": "right" }, 500);
		$("#recursos").toggle("slide", { "direction": "right" }, 500);

	});

	$("#mostrarImpresion, #ocultarImpresion").on('click', function () {

		if ($("#recursos").is(":visible")) $("#recursos").toggle("slide", { "direction": "right" }, 500);
		$("#paginas-imprimir").toggle("slide", { "direction": "right" }, 500);
	});

	$("#mostrarAyuda").on('click', function () {


		if ($("#wrapper-container").is(":visible")) {
			$("#wrapper-container").hide();
			console.log("Ocultar");
		} else {
			$("#wrapper-container").show();
			console.log("Mostré");
		}

	});

	$("#nombre-archivo").on("keyup", function () {
		$(".menu li h4").html($(this).val());
	})

	$("#captura-activo").on("change", function () {
		if ($(this).is(":checked")) {
			$("#captura-opciones").show();
			$("#captura-ayuda").hide();
			$("#captura-encendida").html("ENCENDIDA");
			$("#captura-encendida").removeClass("label-fail").addClass("label-success");
		} else {
			$("#captura-ayuda").show();
			$("#captura-opciones").hide();
			$("#captura-encendida").html("APAGADA");
			$("#captura-encendida").removeClass("label-success").addClass("label-fail");
		}
	});

	$("#mostrarAudioLibro, #ocultarAudioLibro").on('click', function () {
		var target = $(this).attr('data-target');
		$(target).toggle('slide', { "direction": "right" }, 500);
	})

	$('#ocultarHerramientas, #mostrarHerramientas').on('click', function () {

		$("#sidebar-herramientas").toggle("slide", { "direction": "right" }, 500, function () {
			var isVisible = $(this).is(":visible");

			if (isVisible) {
				// $("#wrapper-container").show();
				console.log("Mostré");
			}
			else {
				// $("#wrapper-container").hide();
				console.log("Oculté");
			}

		});
	});

	// $("#custom").on("change",function() {
	// 		var color = $(this).val()
	// 		console.log("color: ",color)
	// 		canvasR.freeDrawingBrush.color = color;
	// });	

	$("#buscar").on("keyup", function (evt) {

		console.log("entrar");
		if (evt.keyCode == 13) {
			var texto = $(this).val();
			sombrear();

			contenidoInterno.html("")
			var contenedorLoading = $("#sidebar-herramientas .contenedor-loading");
			$.ajax({
				url: "controllers/busqueda.php",
				data: { "busqueda": texto },
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				beforeSend: function () {
					$(".contenedor-paginador").hide();
					contenedorLoading.show();
				}
			})
				.done(function (resultado) {

					contenedorLoading.hide();

					var totalPaginas = resultado["numPaginas"];

					var $pagination = $("#paginationSearch");

					$pagination.twbsPagination('destroy');

					if (totalPaginas > 0) {

						$(".contenedor-paginador").show();

						var defaultOpts = {
							totalPages: totalPaginas,
							visiblePages: 4,
							first: "<<",
							last: ">>",
							prev: "<",
							next: ">",
							onPageClick: function (event, page) {
								contenidoInterno.html("");
								$.ajax({
									type: "GET",
									url: "controllers/busqueda.php",
									data: {
										busqueda: texto,
										paginaActual: page
									},
									dataType: "json",
									beforeSend: function () {
										var contenedorLoading = document.createElement("div");
										console.log("c", contenedorLoading);
										$(contenedorLoading).addClass("text-center");

										var loadingImg = document.createElement("img");
										$(loadingImg).attr("src", "img/loading.gif");
										$(loadingImg).attr("width", "25%");

										$(contenedorLoading).append(loadingImg);
										$(contenidoInterno).append(contenedorLoading);
									}
								})
									.done(function (resultado) {
										contenidoInterno.html("");
										var resultados = resultado["resultados"];
										resultados.forEach(function (resultado) {
											// console.log(resultado);
											var div = $("<div></div>").addClass('titulo-panel');
											div.attr('attr-page', resultado.pagina);
											var pagi = $("<h6></h6>").text('Pag. ' + resultado.pagina + ": ");

											// var textoContenido = decodeURIComponent(resultado.contenido);
											var textoContenido = resultado.contenido;

											var contenido = $("<p></p>").text(textoContenido);
											// var contenido =  $("<p></p>").text('Pag. '+ resultado.pagina+": "+(resultado.contenido));
											div.append(pagi, contenido);
											// console.log(div);
											div.on("click", function () {
												var page = parseInt($(this).attr('attr-page')) - 1;
												console.log(page);
												var wBook = $.wowBook('#book');
												wBook.gotoPage(page);

												// $el.html( $el.html().replace(/Shipping/g, '<span style="text-decoration: underline">Shipping</span>') );
											})
											contenidoInterno.append(div);
											// div.appendTo("#sidebar-herramientas .contenido-interno")
										});

										setearScroll();
									});
							}
						};
						$pagination.twbsPagination(defaultOpts);

					}
					else {
						contenidoInterno.html("");
						$(".contenedor-paginador").hide();
						var div = $("<div></div>").addClass('titulo-panel');
						var contenido = $("<p></p>").text("No se han encontrado resultados");
						div.append(contenido);
						contenidoInterno.append(div);
					}

					/*
					var div2 = $("<div></div>").addClass('titulo-panel');
					var anterior = $("<button></button>").text('<');
					var despues =  $("<button></button>").text('>');
					div2.append(anterior,despues);

					div2.appendTo("#sidebar-herramientas .contenido-interno"); */
				})
				.fail(function (xhr, status, error) {
					// var err = JSON.parse(xhr.responseText);
					console.log(xhr.responseText);
				})
			// var resultados = [{'pagina':5,'contenido':'..'+texto+ '5..'},{'pagina':6,'contenido':'..'+texto+ 'buscar6..'},{'pagina':7,'contenido':'...'+texto+ ' 7'},{'pagina':8,'contenido':'...'+texto+ '8'},{'pagina':9,'contenido':'..'+texto+ '9'}];


		}
	});



	$('body').keydown(function (event) {
		// var letter = String.fromCharCode(event.which);
		// if(event.keyCode == 32){console.log('SPACE BAR');}
		var $canvasContainer = $(".wrapper-container");
		var isVisible = $canvasContainer.is(":visible");
		if (isVisible) {
			if (event.keyCode == 46 || event.keyCode == 8) {
				eliminar(canvasR);
			}
		}

		// console.log(event);
		// console.log(event.keyCode);
	});
}

function utf8_encode(s) {
	return unescape(encodeURIComponent(s));
}

function utf8_decode(s) {
	return decodeURIComponent(escape(s));
}

function setearScroll() {
	var alturaPanelBusqueda = panelBusqueda.height();
	var alturaPaginador = panelBusqueda.find('.contenedor-paginador').height();
	var alturaTitulo = panelBusqueda.find('.titulo-barra').height();

	var alturaInterno = contenidoInterno.height();

	var alturaScroll = parseInt(alturaPanelBusqueda - alturaPaginador - alturaTitulo) - 30;

	console.log("Interno", alturaInterno);
	console.log("Scroll", alturaScroll);

	contenidoInterno.slimScroll({
		height: alturaScroll + "px",
		color: '#ffffff',
		size: "15px",
		railOpacity: 0.8
	});
}

$(window).on('load resize', function () {
	setearScroll();
	// console.log(455245)
	// $('.contenido-interno').slimScroll({
	// 	height: "auto",
	// 	color: '#ffffff',
	// 	size: "15px",
	// 	railOpacity: 0.8
	// });
})

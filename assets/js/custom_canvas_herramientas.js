var isDrawingMode = false;

function iniciarPaleta(selector, showPalette, palette, showPaletteOnly, onchangeColor, inicial, flat) {
	showPalette = showPalette || false;
	palette = palette || [];
	showPaletteOnly = showPaletteOnly || false;
	onchangeColor = onchangeColor || function (e, color) {
		colorA = color;
		canvasR.freeDrawingBrush.color = color.toRgbString();
		var colorText = color.setAlpha(.5).toRgbString();
		canvasR.mousecursor.set('fill', colorText);
		// if (cursor.item(0)) cursor.item(0).setFill(colorText);
		cursor.renderAll();
	}
	inicial = inicial || "black";
	flat = flat || false;
	$(selector).spectrum({
		showPaletteOnly: showPaletteOnly,
		showPalette: showPalette,
		color: inicial,
		showAlpha: true,
		hideAfterPaletteSelect: true,
		// showButtons: false,
		"flat": flat,
		preferredFormat: "rgb",
		chooseText: "Seleccionar",
		cancelText: "Cancelar",
		palette: palette
	});

	$(selector).on('move.spectrum', function (e, color) {
		// console.log('out',color)
		// if(!showPaletteOnly){
		onchangeColor(e, color);
		// }



	});

	$(selector).on('hide.spectrum', function (e, color) {
		// console.log('out',color)
		onchangeColor(e, color);


	});
}

function freeDrawing(canvas) {

	// if (canvas.isDrawingMode) {
	// 	$($(".dibujo").children()[0]).attr("src","icons/no_mano_alzada.png");
	// } else {
	// 	$($(".dibujo").children()[0]).attr("src","icons/mano_alzada.png");
	// }
	$('#canvas-wrapper-drawing').css('cursor', 'auto');
	borrado = false;
	canvas.isDrawingMode = true;
	canvas.discardActiveObject().renderAll();
	if (cursor.getObjects().length == 0) cursor.add(canvas.mousecursor);
	// $($(".dibujo").children()[0]).attr("src","icons/mano_alzada.png");
}

function noDrawing(canvas) {
	$('#canvas-wrapper-drawing').css('pointer-events', 'auto');
	$('#canvas-wrapper-drawing').css('cursor', 'auto');
	borrado = false;
	canvas.isDrawingMode = false;
	cursor.remove(cursor.item(0));
}



function circulo(canvas, color, origenx, origeny, scalex, scaley, id, strokeWidth, angle) {
	origenx = origenx || 743.5;
	origeny = origeny || 479;
	scalex = scalex || 1;
	scaley = scaley || 1;
	id = id || -1;
	strokeWidth = strokeWidth || 3;
	angle = angle || 0;
	var circle = new fabric.Circle({
		radius: 50,
		fill: 'rgba(0,0,0,0)',
		left: origenx,
		top: origeny,
		stroke: 'rgba(' + toInt(color._r) + ',' + toInt(color._g) + ',' + toInt(color._b) + ',1)',
		strokeWidth: strokeWidth,
		scaleX: scalex,
		scaleY: scaley,
		originX: 'center',
		originY: 'center',
	});
	circle.myCustomOptionKeepStrokeWidth = 1;
	circle.set('tipo', 1);
	circle.set('id', id);
	// circle.lockRotation = true;
	circle.set('angle',angle);
	circle.hasBorders = false;
	circle.set({
		cornerColor: 'black',
		cornerSize: 25,
		transparentCorners: true
	});
	canvas.add(circle)

}

function cuadrilatero(canvas, color, origenx, origeny, scalex, scaley, id, strokeWidth, angle) {
	origenx = origenx || 693.5;
	origeny = origeny || 479;
	scalex = scalex || 1;
	scaley = scaley || 1;
	id = id || -1;
	strokeWidth = strokeWidth || 3;
	angle = angle || 0;

	console.log("width: ", strokeWidth);
	var rect = new fabric.Rect({
		originX: 'center',
		originY: 'center',
		left: origenx,
		top: origeny,
		stroke: 'rgba(' + toInt(color._r) + ',' + toInt(color._g) + ',' + toInt(color._b) + ',1)',
		strokeWidth: strokeWidth,
		fill: 'transparent',
		opacity: 1,
		width: 200,
		height: 100,
		cornerSize: 6,
		scaleX: scalex,
		scaleY: scaley
	});

	rect.myCustomOptionKeepStrokeWidth = 1;
	rect.set('tipo', 2);
	rect.set('id', id);
	// rect.lockRotation = true;
	rect.set('angle',angle);
	rect.hasBorders = false;
	rect.set({
		cornerColor: 'black',
		cornerSize: 25,
		transparentCorners: true
	});
	canvas.add(rect)

}


function triangulo(canvas, color, origenx, origeny, scalex, scaley, id, strokeWidth, angle) {
	origenx = origenx || 693.5;
	origeny = origeny || 479;
	scalex = scalex || 1;
	scaley = scaley || 1;
	id = id || -1;
	strokeWidth = strokeWidth || 3;
	angle = angle || 0;
	// console.log("width: ", strokeWidth);
	var rect = new fabric.Triangle({
		originX: 'center',
		originY: 'center',
		left: origenx,
		top: origeny,
		stroke: 'rgba(' + toInt(color._r) + ',' + toInt(color._g) + ',' + toInt(color._b) + ',1)',
		strokeWidth: strokeWidth,
		fill: 'transparent',
		opacity: 1,
		width: 200,
		height: 100,
		cornerSize: 6,
		scaleX: scalex,
		scaleY: scaley
	});

	rect.myCustomOptionKeepStrokeWidth = 1;
	rect.set('tipo', 3);
	rect.set('id', id);
	// rect.lockRotation = true;
	rect.set('angle',angle);
	rect.hasBorders = false;
	rect.set({
		cornerColor: 'black',
		cornerSize: 25,
		transparentCorners: true
	});
	canvas.add(rect)

}



//         function subrayado(canvas,color,origenx=20,origeny=30,scalex=1,scaley=1,id=-1,strokeWidth=1){
//             var rect = new fabric.Rect({
//                 originX: "left",
//                 originY: "top",
//                 left: origenx,
//                 top: origeny,
//                 stroke : 'rgba('+toInt(color._r)+','+toInt(color._g)+','+toInt(color._b)+',1)',
//                 fill: 'rgba('+toInt(color._r)+','+toInt(color._g)+','+toInt(color._b)+',1)',
//                 opacity: 1,
//                 width: 200,
//                 height: 2,
//                 cornerSize: 6,
//                 scaleX : scalex,
//                 scaleY : scaley,
//                 lockScalingY : true,
//                 lockScalingX : false,
// 								strokeWidth : strokeWidth
//             });
//             rect.set('tipo',3);
//             rect.set('id',id);
//             canvas.add(rect);
//
//
// }

// function sombreado(canvas,color,origenx=20,origeny=30,scalex=1,scaley=1,id=-1){
// 	var rect = new fabric.Rect({
// 		originX: "left",
// 		originY: "top",
//         	left: origenx,
//         	top: origeny,
//         	stroke: "transparent",
//         	fill : 'rgba('+toInt(color._r)+','+toInt(color._g)+','+toInt(color._b)+',0.5)',
//         	opacity: 1,
//         	width: 40,
//         	height: 20,
//         	cornerSize: 6,
//         	scaleX : scalex,
//         	scaleY : scaley
//     	});
//
// 	rect.myCustomOptionKeepStrokeWidth = 1;
// 	rect.set('tipo',4);
// 	rect.set('id',id);
// 	canvas.add(rect)
// }

function mostrar() {
	canvasR.getObjects().map(function (o) {
		console.log(o)


	});
}

function eliminar(canvas) {
	noDrawing(canvas);
	$('#canvas-wrapper-drawing').css('cursor', 'crosshair');

	borrado = true;


	// if(canvas.getActiveGroup()){
	// 	canvas.getActiveGroup().forEachObject(function(o){
	// 		var id = o.id;
	// 		var tipo = o.get('type')
	// 		if(id != "-1"){
	// 			if( tipo == "path"){
	// 				deletedLineas.push(id);
	// 			}else{
	// 				deleted.push(id);
	// 			}
	// 		}
	//
	//
	// 		canvas.remove(o)
	// 	});
	// 	canvas.discardActiveObject().renderAll();
	// } else {
	// 	if(canvas.getActiveObject()) {
	// 		var  o = canvas.getActiveObject();
	// 		var id = o.id;
	// 		var tipo = o.get('type')
	// 		if(id != "-1"){
	// 			if( tipo == "path"){
	// 				deletedLineas.push(id);
	// 			}else{
	// 				deleted.push(id);
	// 			}
	// 		}
	// 		canvas.remove(o)
	// 	}
	// 	else{
	// 				$().toastmessage('showToast', {
	// 					text     : 'No hay elementos a borrar',
	// 					sticky   : false,
	// 					position : 'middle-center',
	// 					type     : 'error',
	// 					stayTime:  1500,
	// 					close    : null
	// 				});
	// 	}
	// }





}

function texto(canvas, color, texto, origenx, origeny, squarewidth, scaley, id) {
	color = color || '#ffff00';
	texto = texto || "Mi Nota";
	origenx = origenx || 110;
	origeny = origeny || 150;
	squarewidth = squarewidth || 1;
	scaley = scaley || 1;
	id = id || -1;

	var col = tinycolor(color);
	col.setAlpha(.5);
	noDrawing(canvas);
	var t1 = new fabric.Textbox(texto, {
		width: squarewidth,
		top: origeny,
		left: origenx,
		fontSize: 35,
		textAlign: 'left',
		backgroundColor: col.toRgbString(),
	});
	t1.hasBorders = false;
	t1.set({
		cornerColor: 'black',
		cornerSize: 25,
		transparentCorners: true
	});
	t1.set('tipo', 5);
	t1.set('id', id);
	t1.set('color', color);
	t1.lockRotation = true;
	canvas.add(t1);
}

function trazos(canvas, tipo, color, size, strokeLineCap, strokeLineJoin, scaleX, scaleY, path, id, angle) {
	id = id || -1;
	angle = angle || 0;
	var trazo = new fabric.Path(path, {
		'backgroundColor': 'rgba(0,0,0,0)',
		'scaleX': scaleX,
		'scaleY': scaleY,
		'stroke': color,
		'strokeLineCap': strokeLineCap,
		'strokeLineJoin': strokeLineJoin,
		'strokeWidth': size,
		originX: 'center',
		originY: 'center',
	});
	trazo.set('tipo', 1);
	trazo.set('id', id);
	// trazo.lockRotation = true;
	trazo.set('angle',angle);
	trazo.hasBorders = false;
	trazo.set({
		cornerColor: 'black',
		cornerSize: 25,
		transparentCorners: true
	});
	canvas.add(trazo);
}



var actualPage=0;

function guardado(canvas, book_id, url, url_load, colaborar_id) {

	var figuras = [];
	var lineas = [];
	
	canvas.getObjects().map(function (o) {
		var tipo = o.get('type')
		if (tipo == "path") {
			var color = tinycolor(o.stroke);
			var sX = (o.hasOwnProperty('scaleX')) ? o.scaleX : 1;
			var sY = (o.hasOwnProperty('scaleY')) ? o.scaleY : 1;
			var idF = (o.hasOwnProperty('id')) ? o.id : -1;
			var center = o.getCenterPoint();
			var line = {
				"id": idF,
				"lineColor": color.toRgbString(),
				"path": o.path,
				"strokeLineCap": o.strokeLineCap,
				"strokeLineJoin": o.strokeLineJoin,
				"size": o.strokeWidth,
				"tipo": tipo,
				"scaleX": sX,
				"scaleY": sY,
				"iniciox": center.x,
				"inicioy": center.y,
				"angle": o.angle

			};
			lineas.push(line);

		} else {
			if (o.tipo > 0 && o.tipo < 4) {
				// console.log(o.stroke)
				c = tinycolor(o.stroke);
				figuras.push({ tipo: o.tipo, iniciox: o.left, inicioy: o.top, scalex: o.scaleX, scaley: o.scaleY, id: o.id, color: c.toHexString(), stroke: o.strokeWidth, angle: o.angle })
			}
			if (o.tipo == 4) {
				c = tinycolor(o.fill);
				figuras.push({ tipo: o.tipo, iniciox: o.left, inicioy: o.top, scalex: o.scaleX, scaley: o.scaleY, id: o.id, color: c.toHexString(), stroke: o.strokeWidth, angle: o.angle })
			}

			if (o.tipo == 5) {
				c = tinycolor(o.color);
				// console.log(c.toHexString())
				figuras.push({ tipo: o.tipo, iniciox: o.left, inicioy: o.top, scalex: o.width, scaley: o.scaleY, id: o.id, texto: o.text, color: c.toHexString(), stroke: o.strokeWidth, visible: 1, angle: o.angle })
			}
			if (o.tipo == 7) {
				c = tinycolor(o.color);
				// console.log(c.toHexString())
				figuras.push({ tipo: o.tipo, iniciox: o.left, inicioy: o.top, scalex: o.scaleX, scaley: o.scaleY, id: o.id, texto: o.text || o.texto, color: c.toHexString(), stroke: o.strokeWidth, visible: 1, angle: o.angle })
			}
			if (o.tipo == -1) {
				c = tinycolor(o.color);
				figuras.push({ tipo: 5, iniciox: o.left, inicioy: o.top, scalex: o.width, scaley: o.scaleY, id: o.id, texto: o.texto, color: c.toHexString(), stroke: o.strokeWidth, visible: 0, angle: o.angle })
			}
		}

	})
	// console.log(figuras);
	if (actualPage && url) {
		var SendInfo = { data: lineas, figuras: figuras, page: actualPage, eliminadas: deletedLineas, figures_deleted: deleted,book_id };
		$.ajax({
			type: 'post',
			url: url,
			data:  JSON.stringify(SendInfo),
			contentType: "application/json; charset=utf-8",
			traditional: true,
			// httpHeaders: { Authorization: 'Bearer ' + (localStorage.getItem('access_token_hpd') || '--') },
			error: function (response) {
				console.log(response)
			}, beforeSend: function (request) {
				// $("#"+idBotonGuardado).css('cursor', 'not-allowed');
				request.setRequestHeader("Authorization", 'Bearer ' + (localStorage.getItem('access_token_hpd') || '--') );
			}, complete: function () {
				// $("#"+idBotonGuardado).css('cursor', 'default');
			}, success: function (response) {
				deleted = [];
				deletedLineas = [];

				cargar(actualPage, canvas, url_load,book_id, colaborar_id);
			}, error: function (response) {
			}
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
function mostrarFigura(obj, canvas) {
	// console.log(JSON.stringify(obj));
	if (!obj) {
		// $().toastmessage('showToast', {
		// 	text: 'No hay nota seleccionada',
		// 	sticky: false,
		// 	position: 'middle-center',
		// 	type: 'error',
		// 	stayTime: 1500,
		// 	close: null
		// });
		return
	}
	if (obj.tipo == 5) {
		var id = obj.id;
		var textoText = obj.text;
		var col = tinycolor(obj.backgroundColor);
		var icono = '/assets/img/icons/nota' + col.toHexString().substr(1) + '.png'
		fabric.Image.fromURL(icono, function (img) {
			img.set({
				left: obj.left,
				top: obj.top,
				// lockMovementX : true,
				// lockMovementY : true,
				lockScalingX: true,
				lockScalingY: true,
				lockRotation: true
			});
			img.set('tipo', -1);
			img.set('id', id);
			img.set('texto', textoText);
			img.set('text', textoText);
			img.set('color', col.toHexString());
			img.perPixelTargetFind = false;
			img.on("mouseup", function (e) {
				mostrarFigura(e.target, canvasR);
			})
			if (obj.remove) {
				obj.remove();
			}else{
				canvas.remove(obj);
			}
			img.lockRotation = true;
			canvas.add(img);
			var json = canvas.toJSON()
			var objs = json.objects;
			canvas.setActiveObject(canvas.item(objs.length - 1))
		});

	}
	else if (obj.tipo == -1) {
		// debugger
		var id = obj.id;
		console.log(id);
		if (obj.remove) {
			obj.remove();
		}else{
			canvas.remove(obj);
		}
		texto(canvas, obj.color, obj.texto, obj.left, obj.top, obj.scaleX, obj.scaleY, obj.id);
		var json = canvas.toJSON()
		var objs = json.objects;
		canvas.setActiveObject(canvas.item(objs.length - 1))
		// $.ajax({
		//     type: 'get',
		//     url: 'figurasList.php?id='+id,
		//     contentType: "application/json; charset=utf-8",
		//     traditional: true,
		//     success: function (data) {
		//         JSON.parse(data).map(function(o) {
		//             console.log(o);
		//             if(o.tipo==5){
		//
		//                 var json = canvas.toJSON();
		//     		    var objs = json.objects;
		//     		    canvas.setActiveObject(canvas.item(objs.length-1))
		//             }
		//
		//
		//         });
		//
		//     },
		//     error: function(response){
		//         	console.log(response);
		//     }
		// });
	}

}

function cargar(pagina, canvas, url, book_id, colaborar_id = null) {
	// console.log("cargar");
	centrarCanvas();
	if (!canvas.discardActiveObject) {
		return;
	}
	canvas.discardActiveObject().renderAll();
	canvas.clear();
	let finalUrl = url +'/'+book_id+'/'+pagina ;
	if (colaborar_id && colaborar_id != undefined) {
		finalUrl += '?colaborar_id='+colaborar_id
	}
	$.ajax({
		type: 'get',
		url: finalUrl,
		contentType: "application/json; charset=utf-8",
		traditional: true,
		beforeSend: function (request) {
			request.setRequestHeader("Authorization", 'Bearer ' + (localStorage.getItem('access_token_hpd') || '--') );
		}, 
		success: function (data) {
			try {
				var datos = JSON.parse(data);
			} catch (error) {
				var datos = data;
			}
			loadItemsHerramientas(datos, canvas);
		},
		error: function (response) {
			console.log("err");
			console.log(response);
		}
	});

	//canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
}
/**
 * 
 * @param {*} datos 
 * @param {*} canvas 
 */
function loadItemsHerramientas(datos, canvas) {
	datos =datos.data;
	datos["trazos"].forEach(function (o) {
		var paths = o.path.map(function (x) {
			for (var i = 1; i < x.length; i++) {
				x[i] = parseFloat(x[i]);
			}
			return x;

		});
		// trazos(canvas,tipo,color,size,strokeLineCap,strokeLineJoin,scaleX,scaleY,path,id=-1,angle=0)
		var trazo = new fabric.Path(paths, {
			stroke: o.line_color,
			strokeWidth: parseInt(o.size),
			fill: null,
			top: parseFloat(o.y),
			left: parseFloat(o.x),
			strokeLineCap: o.strokeLineCap,
			strokeLineJoin: o.strokeLineJoin,
			scaleX: parseFloat(o.scale_x),
			scaleY: parseFloat(o.scale_y),
			originX: "center",
			originY: "center",
			mode: "trazo",

		});
		trazo.set('angle',o.angle);
		trazo.set('tipo', o.type);
		trazo.set('id', o.id);
		trazo.hasBorders = false;
		trazo.set({
			cornerColor: 'black',
			cornerSize: 25,
			transparentCorners: true
		});
		// trazo.lockRotation = true;
		canvas.add(trazo);
	});
	datos["figures"].forEach(function (o) {

		//console.log(o)
		if (o.type == 1) {
			c = tinycolor(o.color)
			circulo(canvas, c, parseFloat(o.origenX), parseFloat(o.origenY), parseFloat(o.scale_x), parseFloat(o.scale_y), parseInt(o.id), parseFloat(o.stroke), parseFloat(o.angle));
		}
		if (o.type == 2) {
			c = tinycolor(o.color)
			console.log("cuadrado stroke:", o.stroke);
			cuadrilatero(canvas, c, parseFloat(o.origenX), parseFloat(o.origenY), parseFloat(o.scale_x), parseFloat(o.scale_y), parseInt(o.id), parseFloat(o.stroke), parseFloat(o.angle));
		}
		if (o.type == 3) {
			c = tinycolor(o.color)
			triangulo(canvas, c, parseFloat(o.origenX), parseFloat(o.origenY), parseFloat(o.scale_x), parseFloat(o.scale_y), parseInt(o.id), parseFloat(o.stroke), parseFloat(o.angle));
		}
		if (o.type == 4) {
			c = tinycolor(o.color)
			sombreado(canvas, c, parseFloat(o.origenX), parseFloat(o.origenY), parseFloat(o.scale_x), parseFloat(o.scale_y), parseInt(o.id), parseFloat(o.angle));
		}
		if (o.type == 5 ) {
			// debugger
			texto(canvas, o.color, o.texto, parseFloat(o.origenX), parseFloat(o.origenY), parseFloat(o.scale_x), parseFloat(o.scale_y), parseInt(o.id), parseFloat(o.angle));
			
			if (o.visible == 0 || o.visible == 1) {
				var json = canvas.toJSON();
				var objs = json.objects;
				mostrarFigura(canvas.item(objs.length - 1), canvas);
			}
		}
		if (o.type == 7) {
			// debugger
			componentTextToSpeech(canvas, o.texto, parseFloat(o.origenX), parseFloat(o.origenY), parseFloat(o.scale_x), parseFloat(o.scale_y), parseInt(o.id), parseFloat(o.stroke), parseFloat(o.angle));

			
			// if (o.visible == 0 || o.visible == 1) {
			// 	var json = canvas.toJSON();
			// 	var objs = json.objects;
			// 	mostrarFigura(canvas.item(objs.length - 1), canvas);
			// }
		}
		

	});
}

function cargar2(pagina, canvas) {

	$.ajax({
		type: 'get',
		url: 'figurasList.php?page=' + pagina,
		contentType: "application/json; charset=utf-8",
		traditional: true,
		success: function (data) {
			canvas.clear();
			JSON.parse(data).forEach(function (o) {

				//console.log(o)
				if (o.tipo == 1) {
					c = tinycolor(o.color)
					circulo(canvas, c, parseFloat(o.origenX), parseFloat(o.origenY), parseFloat(o.scaleX), parseFloat(o.scaleY), parseInt(o.id));
				}
				if (o.tipo == 2) {
					c = tinycolor(o.color)
					cuadrilatero(canvas, c, parseFloat(o.origenX), parseFloat(o.origenY), parseFloat(o.scaleX), parseFloat(o.scaleY), parseInt(o.id));
				}
				if (o.tipo == 3) {
					c = tinycolor(o.color)
					subrayado(canvas, c, parseFloat(o.origenX), parseFloat(o.origenY), parseFloat(o.scaleX), parseFloat(o.scaleY), parseInt(o.id));
				}
				if (o.tipo == 4) {
					c = tinycolor(o.color)
					sombreado(canvas, c, parseFloat(o.origenX), parseFloat(o.origenY), parseFloat(o.scaleX), parseFloat(o.scaleY), parseInt(o.id));
				}
				if (o.tipo == 5) {
					texto(canvas, o.texto, parseFloat(o.origenX), parseFloat(o.origenY), parseFloat(o.scaleX), parseFloat(o.scaleY), parseInt(o.id));

					if (o.visible == 0) {
						var json = canvas.toJSON();
						var objs = json.objects;
						mostrarFigura(canvas.item(objs.length - 1), canvas);
					}

				}

				if (o.tipo == 7) {
					componentTextToSpeech(canvas, o.texto, parseFloat(o.origenX), parseFloat(o.origenY), parseFloat(o.scale_x), parseFloat(o.scale_y), parseInt(o.id), parseFloat(o.stroke), parseFloat(o.angle));
				}



			});

		},
		error: function (response) {

		}
	});

	//canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
}

function textToSpeech(canvas){
	let text = prompt('Escriba el texto para a leer.');
	if (!(text == null || text == "")) {
	  showCanvas();
	  noDrawing(canvas)
	  $("#canvas-wrapper").css("pointer-events", "auto");

	  var colorA = new tinycolor;

	  componentTextToSpeech(canvas, text)
	}
}


function textToAudio(msg) {
	let speech = new SpeechSynthesisUtterance();
	speech.lang = "es-ES";
	
	speech.text = msg;
	speech.volume = 100;
	speech.rate = 1;
	speech.pitch = 5;
	
	window.speechSynthesis.speak(speech);
}
/**
 * 
 * @param {*} canvas 
 * @param {*} textToAud 
 * @param {*} origenx 
 * @param {*} origeny 
 * @param {*} scalex 
 * @param {*} scaley 
 * @param {*} id 
 * @param {*} strokeWidth 
 * @param {*} angle 
 */
function componentTextToSpeech(canvas, textToAud,origenx, origeny, scalex, scaley, id, strokeWidth, angle ) {
	// origenx = origenx || 20;
	// origeny = origeny || 20;

	origenx = origenx || 110;
	origeny = origeny || 150;
	// squarewidth = squarewidth || 50;
	scalex = scalex || 1;
	scaley = scaley || 1;
	strokeWidth = strokeWidth || 3;
	angle = angle || 0;
	// scalex = scalex || 1;
	// scaley = scaley || 1;
	id = id || -1;
	// debugger;
	var img = fabric.Image.fromURL('/assets/img/icons/text-to-speech.png', function(myImg) {
		//i create an extra var for to change some image properties
		myImg.on('mousedblclick', ()=> {textToAudio(textToAud)});
		myImg.on('mouseover', (e)=> {
			$('.toolTip-master-canvas-show').css({
				visibility : 'visible',
			});
			setTimeout(()=>{
				$('.toolTip-master-canvas-show').css({
					visibility : 'hidden'
				});
			}, 8000);
		});
		myImg.on('mouseout', function (e) {
			$('.toolTip-master-canvas-show').css({
				visibility : 'hidden'
			});
		})


		myImg.set('tipo', 7);
		myImg.set('id', id);
		myImg.set('texto', textToAud);
		myImg.set('text', textToAud);


		var img1 = myImg.set({ 
			originX: 'center',
			originY: 'center',
			left: origenx, 
			top: origeny ,
			

			strokeWidth: strokeWidth,
			// fill: 'transparent',
			opacity: 1,
			// width: 50,
			// height: 50,
			// cornerSize: 6,
			scaleX: scalex,
			scaleY: scaley
			
		});
		canvas.add(img1); 
	});
}


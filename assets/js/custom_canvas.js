function ajustar(canvas, book){
	var transform = $($($(book).children()[0]).children()[0]).css('transform');
	var values = transform .match(/-?[\d\.]+/g);
	// console.log( values );
	$("#canvas-wrapper").css('transform',$($($(book).children()[0]).children()[0]).css('transform'));

	var altura = $($($(book).children()[0]).children()[0]).height()*0.99;

	var ancho = $($($(book).children()[0]).children()[0])*0.99;
	windowWidth = $(window).width();
	var left = parseFloat($(".wowbook-pdf").css("marginLeft")) * 1.1;

	windowHeight = $(window).height();
	var top = windowHeight - altura;
	// top = top /2
	top =  Math.round( top ) //+$(".parent-box").height()
	top = (top < $(".parent-box").height()) ? $(".parent-box").height(): top;


	altura = (altura > (windowHeight-(2*$(".parent-box").height())))?(windowHeight-(2*$(".parent-box").height())):altura;

	// canvas.setHeight(altura);
	// canvas.setWidth(ancho);

	// $("#canvas-wrapper").height($(".wowbook-origin").height());
	// $("#canvas-wrapper").width($(".wowbook-origin").width());
	// $("#pageR").height($(".wowbook-origin").height());
	// $("#pageR").width($(".wowbook-origin").width());
	// $(".upper-canvas").height($(".wowbook-origin").height());
	// $(".upper-canvas").width($(".wowbook-origin").width());
	// $("#canvas-wrapper").css("top",0);
	// $("#canvas-wrapper-drawing").css("left",'-262px');

	var book1=$.wowBook('#book');
	// book1.zoom(1.25);
	canvasR.setHeight($(".wowbook-origin").height());
	canvasR.setWidth($(".wowbook-origin").width());
	// $("#pageR").height($(".wowbook-origin").height());
	// $("#pageR").width($(".wowbook-origin").width());
	// $(".upper-canvas").height($(".wowbook-origin").height());
	// $(".upper-canvas").width($(".wowbook-origin").width());
	// book1.zoom(1.1);
	// book1.zoom(1);

}

function iniciarCursor() {
	var cursor = new fabric.StaticCanvas("cursor");
	return cursor;
}

function iniciarCanvas(idCanvas,cursor){
	var canvas = new fabric.Canvas(idCanvas);
	canvas.freeDrawingBrush.width = 15;
	canvas.targetFindTolerance =  20;
	canvas.perPixelTargetFind = true;
	canvas.freeDrawingCursor= 'none';
	var cursorOpacity = .5;
	var mousecursor = new fabric.Circle({
	  left: -100,
	  top: -100,
	  radius: canvas.freeDrawingBrush.width / 2,
	  fill: "rgba(0,0,0," + cursorOpacity + ")",
	  stroke: "black",
	  originX: 'center',
	  originY: 'center'
	});

	// cursor.add(mousecursor);
	canvas.set("mousecursor",mousecursor);
	canvas.on('selection:created',function (evt) {
		// console.log(evt);
	})
	canvas.on('mouse:up',function (evt) {
		if(borrado){
			if(canvas.getActiveObjects()){
				canvas.getActiveObjects().forEach(function(o){
					var id = o.id;
					var tipo = o.get('type')
					if(id != "-1"){
						if( tipo == "path"){
							deletedLineas.push(id);
						}else{
							deleted.push(id);
						}
					}


					canvas.remove(o)
				});
				canvas.discardActiveObject().renderAll();
			} else {
				if(canvas.getActiveObject()) {
					var  o = canvas.getActiveObject();
					var id = o.id;
					var tipo = o.get('type')
					if(id != "-1"){
						if( tipo == "path"){
							deletedLineas.push(id);
						}else{
							deleted.push(id);
						}
					}
					canvas.remove(o)
				}

			}
		}
	})
	canvas.on('mouse:move', function (evt) {
		var mouse = this.getPointer(evt.e);

	  canvas.mousecursor
	  	.set({
	      top: mouse.y,
	      left: mouse.x
	    })
	    .setCoords();
		 cursor.renderAll();
	});

	// canvas.on('mouse:out', function () {
	//   // put circle off screen
	//   mousecursor
	//   	// .set({
	//     //   top: canvas.mousecursor.originalState.top,
	//     //   left: canvas.mousecursor.originalState.left
	//     // })
	//     .setCoords()
	//    canvas.renderAll();
	// });

	canvas.on({
            'object:scaling': function(e) {
                var obj = e.target;
                if(obj.myCustomOptionKeepStrokeWidth){
                    var newStrokeWidth = obj.myCustomOptionKeepStrokeWidth / ((obj.scaleX + obj.scaleY) / 5);
                    obj.set('strokeWidth',newStrokeWidth);
                }
            },
						'before:selection:cleared':function (e) {
							var obj = (this.getActiveObject());
							if(obj){
								if(obj.tipo == 5){
									mostrarFigura(obj,this);
								}
							}else{
								canvas.getActiveObjects().forEach(function(o){
									if(o.tipo == 5){
											mostrarFigura(o,canvas);
									}


								});
							}
						}

        });
	// canvas.perPixelTargetFind = true;
        return canvas;
}

function oMousePosScale(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
        return {
        x: (evt.clientX - ClientRect.left) / scaleX,
        y: (evt.clientY - ClientRect.top) / scaleY
    }
  }

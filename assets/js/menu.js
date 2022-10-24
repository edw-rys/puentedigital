var borrado =false;
var tab = false;
var timeOut;
var deleted = [];
var deletedLineas = [];
function Item(icon, backgroundColor, title, click, properties, is_principal = false) {
    backgroundColor = backgroundColor || '';
    properties = properties || {};
    this.$element = $(document.createElement("div"));
    this.icon = icon;
    this.$element.addClass("item simptip-position-top");
    if(!is_principal){
        this.$element.addClass("subnivel-menu-pront-hi");
    }
    this.$element.attr("data-menu", false);
    this.$element.attr("data-toggle", "tooltip");
    this.$element.attr("data-tooltip", title);
    this.$element.attr("title", title);
    this.$element.attr("onClick", click);
    this.$element.css("background-color", backgroundColor);

    if (properties.hasOwnProperty("colorPicker")) {
        if (properties["colorPicker"]) {
            var input = document.createElement("input");
            $(input).addClass("custom");
            $(input).attr("type", "text");
            $(input).attr("id", "custom");
            this.$element.append(input);
        }
    }
    else {
        //var i = document.createElement("i");
        var i = document.createElement("img");
        $(i).attr("src", icon);
        $(i).css("width", "30px");
        //$(i).addClass("fa fa-" + icon);
        this.$element.append(i);
    }

    if (properties.hasOwnProperty("childElement")) {
        var childElement = properties["childElement"];
        this.$element.attr("data-menu", true);
        this.$element.append(childElement);
        this.$element.on("click", function () {
            $(childElement).toggle("blind", {}, 500);
        })
    }

    if (properties.hasOwnProperty("showCanvas")) {
        this.$element.on("click", function () {
            var $canvasContainer = $(".wrapper-container");
            var image = $(this).children()[0];
            console.log(image);
            var isVisible = $($canvasContainer[0]).is(":visible");
            noDrawing(canvasR);
            if (!isVisible) {
                $(this).attr("data-original-title", "Ocultar Lienzo");
                $(image).attr("src", "assets/img/icons/mostrar.png");
                $(this).tooltip();
                $canvasContainer.show();
                showCanvas();

            }
            else {
                $(this).attr("data-original-title", "Mostrar Lienzo");
                $(image).attr("src", "assets/img/icons/no-mostrar.png");
                $(this).tooltip();
                $canvasContainer.hide();
            }
        })

    }
    if (properties.hasOwnProperty("showAlwaysCanvas")) {
        this.$element.on("click", function () {
            showCanvas();
        })
    }

    if (properties.hasOwnProperty("classcss")) {

        for (var i = 0; i < properties["classcss"].length; i++) {
            var classN = properties["classcss"][i];
            this.$element.addClass(classN);
        }

    }

    this.prev = null;
    this.next = null;
    this.isMoving = false;
    var element = this;
    this.$element.on("click", function () {
        centrarCanvas();
        var siblings = $(element.$element).siblings(".item");

        siblings.removeClass("active");

        siblings.each(function () {
            var submenu = $(this).children(".submenu");

            if (submenu.length > 0) {
                var isVisible = submenu.is(':visible');

                if (isVisible) {
                    submenu.toggle("blind", {}, 500);
                }
            }

        })

        if (properties.hasOwnProperty("toggleActive")) {
            if (!$(element.$element).hasClass("active")) {
                $(element.$element).addClass("active");
            }
        }

    })
    this.$element.on("mousemove", function () {
        movido = true;
        clearTimeout(timeOut);
        timeOut = setTimeout(function () {
            if (element.next && element.isMoving) {
                element.next.moveTo(element);
            }
        }, 10);
    });

}

Item.prototype.getElement = function () {
    return this.$element;
}
Item.prototype.moveTo = function (item) {

    anime({
        targets: this.$element[0],
        left: item.$element.css("left"),
        top: item.$element.css("top"),
        duration: 700,
        elasticity: 500
    });
    if (this.next) {
        this.next.moveTo(item);
    }
}
Item.prototype.updatePosition = function () {

    anime({
        targets: this.$element[0],
        left: this.prev.$element.css("left"),
        top: this.prev.$element.css("top"),
        duration: 200
    });

    if (this.next) {
        this.next.updatePosition();
    }
}

function Menu(menu) {
    this.$element = $(menu);
    this.size = 0;
    this.first = null;
    this.last = null;
    this.timeOut = null;
    this.hasMoved = false;
    this.status = "closed";
    this.start = true;

}

Menu.prototype.add = function (item) {
    var dis = (tab) ? {
        distance: 30
    } : { distance: 5 }
    var menu = this;
    if (this.first == null) {
        this.first = item;
        this.last = item;
        this.first.$element.on("mouseup", function () {
            if (menu.first.isMoving) {
                menu.first.isMoving = false;
            } else {
                menu.click();
            }
        });
        item.$element.draggable(
            {
                start: function () {
                    item.isMoving = true;
                    menu.close();

                }
            },
            {
                drag: function () {
                    if (item.next) {
                        item.next.updatePosition();
                    }
                }
            },
            {
                stop: function () {
                    item.isMoving = false;
                    item.next.moveTo(item);

                }
            },
            dis
        );
    } else {
        this.last.next = item;
        item.prev = this.last;
        this.last = item;
    }
    this.$element.after(item.$element);


}
Menu.prototype.open = function () {

    this.status = "open";
    var current = this.first.next;
    var iterator = 1;
    var head = this.first;
    var sens = head.$element.css("left") < head.$element.css("right") ? 1 : -1;
    while (current != null) {
        $(current.$element[0]).show();
        anime({
            targets: current.$element[0],
            left: parseInt(head.$element.css("left"), 10) + (sens * (iterator * 50)),
            top: head.$element.css("top"),
            duration: 500
        });
        iterator++;
        current = current.next;
    }
    var $canvasContainer = $(".wrapper-container");
    $canvasContainer.show();
}
Menu.prototype.close = function () {

    if (!this.first.isMoving && !this.start) {
        guardado(canvasR);
        var $canvasContainer = $(".wrapper-container");
        $canvasContainer.hide();
    }
    this.status = "closed";
    var current = this.first.next;
    var head = this.first;
    var iterator = 1;

    while (current != null) {
        anime({
            targets: current.$element[0],
            left: head.$element.css("left"),
            top: head.$element.css("top"),
            duration: 500
        });
        iterator++;

        $(current.$element[0]).hide();

        current = current.next;
    }

}

Menu.prototype.click = function () {
    console.log("clck en menu");
    if (this.status == "closed") {
        this.open();
    } else {
        this.close();
    }
}


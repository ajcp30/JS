$(document).ready(function(){
    // mouseover y mouseout
    var caja =  $("#caja");
    /*
    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","orange");
    });
    */

    function cambiaRojo(){
        $(this).css("background","red");

    }

    function cambiaNaranja(){
        $(this).css("background","orange");

    }

    //hover
    caja.hover(cambiaRojo, cambiaNaranja);

    // click y docble click

    caja.click(function(){
        $(this).css("background", "blue")
                .css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "pink")
                .css("color", "yellow");
    });

    // focus y blur
    var nombre =  $("#nombre");
    var datos = $("#datos");

    nombre.focus(function(){
        $(this).css("border","2px solid green");
    });
    nombre.blur(function(){
        $(this).css("border","1px solid #ccc");
        //coje datos del input de formulkario
        //::>>  $(this).val();
        datos.text($(this).val()).show();
    });
    // mousedown y mouseup

    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color", "orange");
    });

        //mousemove
    $(document).mousemove(function(){
        console.log("En X: "+event.clientX);
        console.log("En Y:" +event.clientY);
            // siguimiento de raton
            var sigueme =  $("#sigueme");
            // ocultar mouse
            //$('body').css("cursor","none");
            // .........
            sigueme.css("left", event.clientX);
            sigueme.css("top", event.clientY);
    });




});


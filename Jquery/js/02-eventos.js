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
    nombre.focus(function(){
        $(this).css("border","2px solid green");
    });
    nombre.blur(function(){
        $(this).css("border","1px solid #ccc");
        //coje datos del input de formulkario
        //::>>  $(this).val();
        $("#datos").text($(this).val()).show();
    });
    // mousedown y mouseup

    

});


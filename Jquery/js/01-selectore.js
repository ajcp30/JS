$(document).ready(function(){

            // selector ID

            $("#rojo").css("background","red")
                      .css("color","white") ;

            $("#amarillo").css("background","yellow")
                                        .css("color","green");
            $("#verde").css("background","green")
                                        .css("color","white");

        //selectores de clase

        var mi_clase = $('.zebra').css("padding","5px");
        

        $('.sin_borde').click(function(){
            console.log("Click dado")
            $(this).addClass('zebra');
        });

        // Selectores de etiquetas

        var parrafos = $('p').css("cursor","pointer");

        parrafos.click(function(){
            var that = $(this);
            if(!that.hasClass('grande')){
                that.addClass('grande');

            }else{
                that.removeClass('grande');

            }
          });
          // selectores por atributo
          $('[title="google"]').css('background','green');
          $('[title="marca"]').css('background','red')
          $('[title="udemy"]').css('background','yellow')

    });
'use strict'

window.addEventListener('load', () => {
    // focos
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log("esta dentro del imput");
    });
    // blur
    input.addEventListener('blur', function(){
        console.log("esta fuera del imput");
    });

    //keyddown

    input.addEventListener('keydown', function(event){
        console.log("esta pulsando esat tecla", String.fromCharCode(event.keycode));
    });

    //keypress
    input.addEventListener('keypress', function(event){
        console.log("tecla presionada ", String.fromCharCode(event.keycode));
    });
    // jeyup

    input.addEventListener('keyup', function(event){
        console.log("tecla soltada ", String.fromCharCode(event.keycode));
    });

}); // gfinal load
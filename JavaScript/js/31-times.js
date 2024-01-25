'use strict'

window.addEventListener('load', function () {
    function intervalo() {
        // timer
        var tiempo = setInterval(() => {
            console.log("set interval ejecutado");
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize === "50px") {
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px";
            }
        }, 300);

        return tiempo;
    }

    var tiempoIntervalo = intervalo(); 

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function () {
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempoIntervalo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", function () {
        alert("Has iniciado el bucle");
        tiempoIntervalo = intervalo(); 
    });
});

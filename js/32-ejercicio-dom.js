document.addEventListener("DOMContentLoaded", function () {
    // Espera a que el DOM esté completamente cargado

    // Obtener referencias a los elementos del formulario y resultado
    var formulario = document.getElementById("miFormulario");
    var nombreInput = document.getElementById("nombre");
    var apellidosInput = document.getElementById("apellidos");
    var edadInput = document.getElementById("edad");
    var resultadoDiv = document.getElementById("resultado");

    // Ocultar el div de resultados inicialmente
    resultadoDiv.style.display = "none";

    // Agregar evento al formulario
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        mostrarDatos();
    });

    // Agregar evento al botón para mostrar datos actuales del formulario
    var mostrarDatosButton = document.getElementById("mostrarDatosButton");
    mostrarDatosButton.addEventListener("click", function () {
        mostrarDatos();
    });

    // Función para mostrar datos en el div de resultado
    function mostrarDatos() {
        var nombre = nombreInput.value;
        var apellidos = apellidosInput.value;
        var edad = edadInput.value;

        // Verificar si hay datos antes de mostrar el resultado
        if (nombre || apellidos || edad) {
            var mensaje = "Nombre: " + nombre + "<br>Apellidos: " + apellidos + "<br>Edad: " + edad;
            resultadoDiv.innerHTML = mensaje;
            resultadoDiv.style.display = "block"; // Mostrar el div de resultados
        } else {
            resultadoDiv.style.display = "none"; // Ocultar el div de resultados si no hay datos
        }
    }
});

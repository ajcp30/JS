'use strict';

var formulario = document.querySelector("#formpelicula");

formulario.addEventListener('submit', function(){

    var titulo = document.querySelector('#addpelicula').value;
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);

    }
});

var ul = document.querySelector('#lista-pelis');
for(var i in localStorage){
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
    
}

var formulariob = document.querySelector("#formBorrarPelicula");

formulariob.addEventListener('submit', function(){

    var titulo = document.querySelector('#borraPelicula').value;
    
    if(titulo.length >= 1){
        localStorage.removeItem(titulo);

    }
});

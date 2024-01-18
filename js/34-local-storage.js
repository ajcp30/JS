'use strict'

//local storage existe

if(typeof(Storage) !== 'undefined'){
    console.log("localstorage disponible");
}else{
    console.log("local storage no disponible");
};

// guardar datos

localStorage.setItem("titulo","curso synfony");

//recupera elelmento

document.querySelector("#peliculas").innerHTML= (localStorage.getItem("titulo"));

// objetos guardar

var usuario = {
    nombre: 'antonio',
    email: 'hola@hola.com',
    web: 'hola.com'
};

localStorage.setItem("usuario",JSON.stringify(usuario));

// recupera objeto ateriuo de json

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#peliculas").append(" "+userjs.web);
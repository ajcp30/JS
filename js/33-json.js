'use strict';

//JSON

var pelicula = {
    titulo: 'batman',
    year: 2019,
    pais: 'tu casa'
};

var peliculas = [
    {titulo: "yo", year: 2018, pais: "España"},
    pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}

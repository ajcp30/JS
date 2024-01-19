var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minuto = fecha.getMinutes();
var textoHora = `
    El año es: ${year} ,
    El mes es ${mes} ,
    El dia es ${dia},
    La hora es ->  ${hora}:${minuto} 

`;

console.log(textoHora);
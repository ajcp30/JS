//string
let cadena: string = "Antonio";

//number
let numero: number = 12 ;

//boleano

let verdader_falso: boolean = true;

//any
let cualquiera: any = "hola";

//array

var lenguajes: Array<string> = ["PHP","JS","CSS"];

let years: number[] = [12, 13, 14, 15]

// varios

let cadena1: string | number = "Antonio Jose";

cadena1 = 1;

// nuevo tipo d datos

type alfanumerico = string | number ;


let cadena2: alfanumerico = "Jose";

// let o var ??

// let bloque var global
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44 //solo actua aqui
    var numero2 = 55 

    console.log(numero1, numero2);
}




console.log(numero1, numero2); // var desde el principio


console.log(cadena, numero, verdader_falso, cualquiera, lenguajes, years, cadena1);
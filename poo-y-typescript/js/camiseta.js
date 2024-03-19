// clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    // metodos (funcione o aciones del objeto)
    // contructor
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // fin constructor
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    ;
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("rojo", "manga larga", "adidas", "S", 10);
var playera = new Camiseta("marron", "manga corta", "junk", "M", 12);
console.log(camiseta, playera);

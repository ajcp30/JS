// clase (molde del objeto)
class Camiseta{
    // propiedades (caracteristicas del objeto)
    // public permite poder cacceder desde cualquier lugar
    // private solo desde la clase que se define solo se puede en el mismo sitio
    //--> o usar metodos
    //protect se pude aceder metodo o atributo desde la clase que lod efine 
    // --> y desde cualquier otra parte

    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // metodos (funcione o aciones del objeto)

    // contructor
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // fin constructor

    public setColor(color){
        this.color = color;
    };

    public getColor(){
        return this.color; 
    }   


}

var camiseta = new Camiseta("rojo","manga larga","adidas","S", 10);


var playera = new Camiseta("marron","manga corta","junk","M", 12);




console.log(camiseta, playera);


import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
   public titulo: string = "componente de zapatilla";
   public zapatillas: Array<Zapatilla>;
   public marcas: string[]; // Inicializa el array de marcas
   public color: string;
   public mi_marca: string;

    constructor() {
        this.mi_marca = 'Fila '
        this.color = 'red';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Nike', 180, "Nike", "rojo", false),
            new Zapatilla('li', 250, "adidas", "rojo", false),
            new Zapatilla('fr', 55, "gay", "azul", true),
            new Zapatilla('lm', 45, "marika", "azul", false),
            new Zapatilla('Rb', 55, "john", "amarillo", false)
        ];
    }

    ngOnInit() {
        console.log(this.zapatillas);
        this.getMarcas(); // Llama al método obtenerMarcas
    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, indice) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0 ){
                this.marcas.push(zapatilla.marca); // Añade la marca al array de marcas

            }
            console.log(indice);
        });
        console.log(this.marcas); // Muestra las marcas en la consola

    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }
    borrarmarca(index: number){
        //delete this.marcas[index];
        this.marcas.splice(index, 1)
    }
    onBlur(){
        console.log("a salido del imput");
    }
    mostrarPalabra(){
        alert(this.mi_marca);
    }
    altoprecio(){

    }
}

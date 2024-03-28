import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { FormsModule } from "@angular/forms";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit {
   public titulo: string = "componente de zapatilla";
   public zapatillas: Array<Zapatilla> = []; // Inicializa zapatillas como un array vacío
   public marcas: string[] = []; // Inicializa el array de marcas
   public color: string;
   public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.mi_marca = 'Fila '
        this.color = 'red';
    }

    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatillas();
        //alert(this._zapatillaService.getTexto());
        this.getMarcas(); 
    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, indice) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0 ){
                this.marcas.push(zapatilla.marca); 

            }
            console.log(indice);
        });
        console.log(this.marcas); 

    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }
    borrarmarca(index: number){
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

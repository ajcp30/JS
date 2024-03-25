import { Component } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
              
    
    
})

export class VideojuegoComponent{
    public titulo: string;
    public listado: string;
    constructor(){
        this.titulo = "componentes de videojuego";
        this.listado = "listado de videojuegos";
        console.log("componente videojuego cargado");
    }
    
}
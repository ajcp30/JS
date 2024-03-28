import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
              
    
    
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;
    constructor(){
        this.titulo = "componentes de videojuego";
        this.listado = "listado de videojuegos";
        console.log("componente videojuego cargado");
    }

    ngOnInit(){
        //console.log("OnInt ejecutado");
    }

    ngDoCheck(){
       // console.log("DoCheck ejecutado")
            
    }
    ngOnDestroy(){
        //console.log("ONDestroy ejejcutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componentes";
    }


    
}
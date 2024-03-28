import { Component } from '@angular/core';
import {configuracion} from './models/configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 public  title = 'Curso de Angular y JS';
 public descripcion: string;
 public mostrar_videojuegos: boolean = true;
 public config;

 constructor(){
  this.config = configuracion;
  this.title = configuracion.titulo;
  this.descripcion = configuracion.Descripcion;

 }

 ocultarVideojuegos(value: boolean){
  this.mostrar_videojuegos = value;
 }
}

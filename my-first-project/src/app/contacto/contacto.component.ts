import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  public usuario: ContactoUsuario;
  constructor(){
    this.usuario = new ContactoUsuario('','','','');
  }

  onSubmit(form: any){
    //form.reset();
    console.log("evento submit lamnzado");
    console.log(this.usuario);
  }
}

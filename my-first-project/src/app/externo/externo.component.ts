import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { response } from 'express';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;
  public  new_user: any ;
  public usuario_add: any;
  constructor(
    private _PeticionesService: PeticionesService
  ) {
    this.userId = 1 ;
    this.new_user = {
        "name": "",
        "job": ""
  }
  }

  ngOnInit() {
    this.fecha = new Date();
    this.CargaUsuario();
    
    
  }

  onSubmit(form: any){
    console.log("evento submit lamnzado");
    this._PeticionesService.addUser(this.new_user).subscribe(
      response => {
        this.usuario_add = response
        console.log(response);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    )
   }

  CargaUsuario(){
    this.user = false;
    this._PeticionesService.getUser(this.userId).subscribe(
      result => {
          this.user = result.data; 
      },
      error => {
        console.log(<any>error);
       }
    )
      }

    
  

}

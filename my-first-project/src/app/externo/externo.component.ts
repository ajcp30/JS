import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  constructor(
    private _PeticionesService: PeticionesService
  ) {
    this.userId = 1 ;
  }

  ngOnInit() {
    this.CargaUsuario();
    
  }

  CargaUsuario(){
    this.user = false
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

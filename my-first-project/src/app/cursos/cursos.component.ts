import { Component } from '@angular/core';
import {Router, ActivatedRoute , Params} from '@angular/router'


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  public nombre: string = '';
  public followers: number = 0;

  constructor(
    private _route : ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
      this.followers = +params['followers'];


      if(this.nombre == 'ningtuno'){
        this._router.navigate(['/home'])
      }
    });
  }
  redirigir(){
    this._router.navigate(['/zapatillas'])
  }
}

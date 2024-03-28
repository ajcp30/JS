import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Nike', 180, "Nike", "rojo", false),
            new Zapatilla('li', 250, "adidas", "rojo", false),
            new Zapatilla('fr', 55, "gay", "azul", true),
            new Zapatilla('lm', 45, "marika", "azul", false),
            new Zapatilla('Rb', 55, "john", "amarillo", false)
        ];
    }
    getTexto(){
        return "Hola mundo desdes ervicio";
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}
// importar moudlos de route d eangular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// componentes
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";

// array confi rutas

const appRoutes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'home',component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'cursos/:nombre', component: CursosComponent},
    {path: 'cursos', component: CursosComponent},
    {path: '**', component: HomeComponent}



];

// exporta modulo routing

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);

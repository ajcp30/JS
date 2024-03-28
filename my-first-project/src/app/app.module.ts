import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app-routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    routing 
  ],
  providers: [
    provideClientHydration(),
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

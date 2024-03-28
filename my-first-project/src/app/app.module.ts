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
import { ExternoComponent } from './externo/externo.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    routing ,
    HttpClientModule,
    CommonModule
  ],
  
  providers: [
    provideClientHydration(),
    appRoutingProviders,
    provideHttpClient(withFetch()) 

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class ExternoModule { }


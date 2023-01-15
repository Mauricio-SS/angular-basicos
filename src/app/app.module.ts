import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//crear modulo para el contador 
import { ContadorModule } from './contador/contador.module'

import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    //importar contador aqui 
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

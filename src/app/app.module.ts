import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
/* import { PrimeNgModule } from './prime-ng/prime-ng.module'; */
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-AR';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common' //Esto es una funcion que recibe data
registerLocaleData( localeEs );
registerLocaleData( localeFr ); //Con esto yo ya tengo registrado el español y en providers establezco este idioma de manera global

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    VentasModule
    /* PrimeNgModule */
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es-AR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

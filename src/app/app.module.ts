import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { FiltroComponent } from './filtro/filtro.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material';
// import { ConversorComponent } from './conversor/conversor.component';


@NgModule({
  declarations: [
    AppComponent,
    SucursalComponent,
    FiltroComponent,
    // ConversorComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

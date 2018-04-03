import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../model/Sucursal';
import { DatosService } from '../services/datos.service';
import { GeolocationService } from '../geolocation.service';
import { Store } from '@ngrx/store';
import { AppStore, UserLocationStatesSlice } from '../reducers/reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lista-page',
  templateUrl: './lista-page.component.html',
  styleUrls: ['./lista-page.component.css']
})
export class ListaPageComponent implements OnInit {
  sucursales: Sucursal[] = [];
  resultadoBusqueda: Sucursal[] = [];
  coordenada: Coordinates;
  userLocation$: Observable<UserLocationStatesSlice>;

  constructor(private datos: DatosService,
    private store: Store<AppStore>
  ) {
    // this.resultadoBusqueda = this.datos.getSucursales();
    this.userLocation$ = this.store.select('userLocation');

    // this.store.select('userLocation')
  }

  ngOnInit() {
    this.datos.getSucursales().then(r => {
      this.resultadoBusqueda = r;
      this.sucursales = r;
    });
  }

  filtrar(texto: string) {
    console.log(`filtrando: ${texto}`);
    if (texto.length === 0) {
      this.resultadoBusqueda = this.sucursales;
    }
    this.resultadoBusqueda =
      this.sucursales.filter(elemento => elemento.direccion.toLowerCase().indexOf(texto.toLowerCase()) >= 0);

  }

  clickSucursal(s: Sucursal) {
    console.log('Sucursal tocada' + s.numero);
  }
}

import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../model/Sucursal';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-lista-page',
  templateUrl: './lista-page.component.html',
  styleUrls: ['./lista-page.component.css']
})
export class ListaPageComponent implements OnInit {
  sucursales: Sucursal[] = [];
  resultadoBusqueda: Sucursal[] = [];

  constructor(private datos: DatosService) {
    // this.resultadoBusqueda = this.datos.getSucursales();
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

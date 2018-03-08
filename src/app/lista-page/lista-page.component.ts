import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../model/Sucursal';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-lista-page',
  templateUrl: './lista-page.component.html',
  styleUrls: ['./lista-page.component.css']
})
export class ListaPageComponent implements OnInit {

  resultadoBusqueda: Sucursal[] = [];

  constructor(private datos: DatosService) {
    this.resultadoBusqueda = this.datos.getSucursales();
  }

  ngOnInit() {
  }

  filtrar(texto: string) {
    console.log(`filtrando: ${texto}`);
    if (texto.length === 0) {
      this.resultadoBusqueda = this.datos.getSucursales();
    }
    this.resultadoBusqueda =
      this.datos.getSucursales().filter(elemento => elemento.direccion.toLowerCase().indexOf(texto.toLowerCase()) >= 0);

  }

  clickSucursal(s: Sucursal) {
    console.log('Sucursal tocada' + s.numero);
  }
}

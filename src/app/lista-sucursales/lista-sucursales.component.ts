import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sucursal } from '../model/Sucursal';

@Component({
  selector: 'app-lista-sucursales',
  templateUrl: './lista-sucursales.component.html',
  styleUrls: ['./lista-sucursales.component.css']
})
export class ListaSucursalesComponent implements OnInit {

  @Input() lista: Sucursal[];
  @Output() select = new EventEmitter<Sucursal>();
  sucursalSeleccionada: Sucursal;

  constructor() { }

  ngOnInit() {
  }

  clickSucursal(s: Sucursal) {
    this.sucursalSeleccionada = s;
    this.select.emit(s);
  }

}

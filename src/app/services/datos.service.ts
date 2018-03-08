import { Injectable } from '@angular/core';
import { Sucursal } from '../model/Sucursal';

@Injectable()
export class DatosService {

  sucursales = [
    new Sucursal('1', 'Rivadavia 500', '4500-0000'),
    new Sucursal('2', 'Corrientes 124', '4500-0000'),
    new Sucursal('3', 'Florida 50', '4500-0000'),
  ];

  getSucursales(): Sucursal[] {
    return this.sucursales;
  }

  addSucursal (s: Sucursal) {
    this.sucursales.push(s);
  }

}

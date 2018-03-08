import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../model/Sucursal';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-agregar-page',
  templateUrl: './agregar-page.component.html',
  styleUrls: ['./agregar-page.component.css']
})
export class AgregarPageComponent implements OnInit {

  sucursal = new Sucursal(null, null, null);

  constructor(private datos: DatosService) { }

  ngOnInit() {
  }

  agregar() {
    this.datos.addSucursal(this.sucursal);
  }

}

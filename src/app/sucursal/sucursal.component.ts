import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sucursal } from '../model/Sucursal';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  @Input() sucursal: Sucursal;
  @Output() select = new EventEmitter<Sucursal>();
  @Input() selected: boolean;
  @Input() coords: any;

  constructor(private geo: GeolocationService) { }

  distanciaActual() {
    return this.geo.distance(
      this.sucursal.latitud,
      this.sucursal.longitud,
      this.coords.latitude, this.coords.longitude
    );
    // -34.598340, -58.371976
  }

  ngOnInit() {
    // console.log(this.sucursal);
  }

  clickSucursal() {
    if (this.select) { this.select.emit(this.sucursal); }
  }

}

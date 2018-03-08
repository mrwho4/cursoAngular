import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sucursal } from '../model/Sucursal';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  @Input() sucursal: Sucursal;
  @Output() select = new EventEmitter<Sucursal>();
  @Input() selected: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.sucursal);
  }

  clickSucursal() {
    if (this.select) { this.select.emit(this.sucursal); }
  }

}

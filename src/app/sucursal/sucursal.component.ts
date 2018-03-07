import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sucursal } from '../model/Sucursal';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  @Input() sucursal: Sucursal;
  // @Output() select = new  EventEmitter();
  @Output() select: EventEmitter<Sucursal> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  clickSucursal() {
    this.select.emit(this.sucursal);
  }

}

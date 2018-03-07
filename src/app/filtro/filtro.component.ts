import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  @Output() change = new EventEmitter<string>();

  constructor() { }



  ngOnInit() {
  }

  onChange(texto: string) {
    this.change.emit(texto);
  }

}

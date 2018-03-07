import { Component, OnInit } from '@angular/core';
import { Sucursal } from './model/Sucursal';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Mi primera app angular';


  sucursales = [
    new Sucursal('1', 'Rivadavia 500', '4500-0000'),
    new Sucursal('2', 'Corrientes 124', '4500-0000'),
    new Sucursal('3', 'Florida 50', '4500-0000'),
  ];

  resultadoBusqueda: Sucursal[] = [];

  constructor(private overlay: OverlayContainer) {
    this.resultadoBusqueda = this.sucursales;
  }

  ngOnInit() {
    document.body.classList.add('purple-green', 'mat-app-background');
    this.overlay.getContainerElement().classList.add('purple-green');
  }

  filtrar(texto: string) {
    console.log(`filtrando: ${texto}`);
    if (texto.length === 0) {
      this.resultadoBusqueda = this.sucursales;
    }
    this.resultadoBusqueda =
      this.sucursales.filter(elemento => elemento.direccion.toLowerCase().indexOf(texto.toLowerCase()) >= 0);

  }

  agregar() {
    this.sucursales.push(new Sucursal('4', 'Mitre 200', '4555-9879'));
  }

  clickSucursal(s: Sucursal) {
    console.log('Sucursal tocada' + s.numero);
  }

 /*  toggleTheme(): void {
    if (this.overlay.getContainerElement().classList.contains('deeppurple-amber')) {
      this.overlay.getContainerElement().classList.remove('deeppurple-amber');
      this.overlay.getContainerElement().classList.add('purple-green');
    } else if (this.overlay.getContainerElement().classList.contains('purple-green')) {
      this.overlay.getContainerElement().classList.remove('purple-green');
      this.overlay.getContainerElement().classList.add('deeppurple-amber');
    } else {
      this.overlay.getContainerElement().classList.add('purple-green');
    }
    if (document.body.classList.contains('deeppurple-amber')) {
      document.body.classList.remove('deeppurple-amber');
      document.body.classList.add('purple-green');
    } else if (document.body.classList.contains('purple-green')) {
      document.body.classList.remove('purple-green');
      document.body.classList.add('deeppurple-amber');
    } else {
      document.body.classList.add('purple-green');
    }
  } */
}

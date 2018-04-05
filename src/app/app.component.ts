import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { GeolocationService } from './geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('animacionApp', [
    state('visible', style({
      opacity: 1,
      // transform : '0 0 white',
      // transform: 'scale(0.7)'
      letterSpacing: '0'
    })),
    state('invisible', style({
      opacity: 0,
      // transform: 'scale(0)'
      letterSpacing: '100px'
    })),
    transition('* <=> *', animate('2s'))
  ])]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.geo.start();
  }
  constructor(private geo: GeolocationService) {

  }

  estado = 'visible';

  toggleVisible() {
    this.estado = this.estado === 'visible' ? 'invisible' : 'visible';
  }

}
// post message api
// shared worker

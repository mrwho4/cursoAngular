import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalComponent } from './sucursal.component';
import { GeolocationService } from '../geolocation.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Sucursal } from '../model/Sucursal';

describe('SucursalComponent', () => {
  let component: SucursalComponent;
  let fixture: ComponentFixture<SucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SucursalComponent],
      providers: [{
        // utilizando mocks
        provide: GeolocationService, useValue: { // construyo un mock del servicio
          distancia: () => {
            return 40;
          }
        }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // component = new SucursalComponent(TestBed.get(SucursalComponent));
    fixture = TestBed.createComponent(SucursalComponent);
    component = fixture.componentInstance;
    component.sucursal = new Sucursal('1', 'ejemplo', 'acae');
    component.sucursal.latitud = 10;
    component.sucursal.longitud = 10;
    fixture.detectChanges(); // primer update del template
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should distance', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;
    expect(nativeElement.querySelectorAll('p')[1].textContent)
      .toBe('Distancia acá');

    // const debugElement =  fixture.debugElement;
    // expect (debugElement.query(By.css('p:nth-child(2)'))).toBe(2);
  });
});

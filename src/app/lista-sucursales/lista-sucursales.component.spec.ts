import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSucursalesComponent } from './lista-sucursales.component';
import { SucursalComponent } from '../sucursal/sucursal.component';
import { HttpClientModule } from '@angular/common/http';
import { Sucursal } from '../model/Sucursal';

describe('ListaSucursalesComponent', () => {
  let component: ListaSucursalesComponent;
  let fixture: ComponentFixture<ListaSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSucursalesComponent, SucursalComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // siempre ejecutar el fixture.detectChanges para q tome los cambios en los inputs
  it('should render as many', () => {
    component.lista = [new Sucursal('1', '', ''), new Sucursal('2', '', '')];
    fixture.detectChanges();
    const ne = fixture.nativeElement as HTMLElement;

    expect (ne.querySelector('ul').children.length).toBe(2);
  });
});

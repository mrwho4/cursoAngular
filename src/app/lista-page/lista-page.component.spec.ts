import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPageComponent } from './lista-page.component';
import { FiltroComponent } from '../filtro/filtro.component';
import { ListaSucursalesComponent } from '../lista-sucursales/lista-sucursales.component';
import { DatosService } from '../services/datos.service';
import { SucursalComponent } from '../sucursal/sucursal.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListaPageComponent', () => {
  let component: ListaPageComponent;
  let fixture: ComponentFixture<ListaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPageComponent, FiltroComponent, ListaSucursalesComponent, SucursalComponent ],
      providers: [DatosService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

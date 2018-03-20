import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSucursalesComponent } from './lista-sucursales.component';
import { SucursalComponent } from '../sucursal/sucursal.component';
import { HttpClientModule } from '@angular/common/http';

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
});

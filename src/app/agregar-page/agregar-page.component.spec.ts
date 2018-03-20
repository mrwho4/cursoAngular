import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPageComponent } from './agregar-page.component';
import { FormsModule } from '@angular/forms';
import { DatosService } from '../services/datos.service';
import { HttpClientModule } from '@angular/common/http';

describe('AgregarPageComponent', () => {
  let component: AgregarPageComponent;
  let fixture: ComponentFixture<AgregarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ AgregarPageComponent ],
      providers: [DatosService]
      // providers: {
      //   provide: DatosService,
      //   useClass : DatosServiceMock
      // }
    })
    .compileComponents();
  }));

  // let mock: Partial<DatosService> = {
  //   getSucursales() {return Promise.C}
  // }

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

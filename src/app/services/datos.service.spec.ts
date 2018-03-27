import { TestBed, inject } from '@angular/core/testing';

import { DatosService } from './datos.service';
import { HttpClientModule } from '@angular/common/http';

describe('DatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([DatosService], (service: DatosService) => {
    expect(service).toBeTruthy();
  }));
});

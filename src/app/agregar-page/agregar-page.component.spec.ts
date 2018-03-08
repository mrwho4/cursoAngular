import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPageComponent } from './agregar-page.component';

describe('AgregarPageComponent', () => {
  let component: AgregarPageComponent;
  let fixture: ComponentFixture<AgregarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

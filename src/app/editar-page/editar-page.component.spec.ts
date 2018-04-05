import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPageComponent } from './editar-page.component';

describe('EditarPageComponent', () => {
  let component: EditarPageComponent;
  let fixture: ComponentFixture<EditarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

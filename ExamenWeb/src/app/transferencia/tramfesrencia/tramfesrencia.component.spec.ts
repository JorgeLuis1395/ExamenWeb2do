import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TramfesrenciaComponent } from './tramfesrencia.component';

describe('TramfesrenciaComponent', () => {
  let component: TramfesrenciaComponent;
  let fixture: ComponentFixture<TramfesrenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramfesrenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TramfesrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

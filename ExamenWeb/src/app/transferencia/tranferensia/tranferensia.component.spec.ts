import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferensiaComponent } from './tranferensia.component';

describe('TranferensiaComponent', () => {
  let component: TranferensiaComponent;
  let fixture: ComponentFixture<TranferensiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranferensiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferensiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

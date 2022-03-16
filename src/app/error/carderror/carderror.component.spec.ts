import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarderrorComponent } from './carderror.component';

describe('CarderrorComponent', () => {
  let component: CarderrorComponent;
  let fixture: ComponentFixture<CarderrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarderrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarderrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

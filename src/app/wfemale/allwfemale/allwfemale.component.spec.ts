import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllwfemaleComponent } from './allwfemale.component';

describe('AllwfemaleComponent', () => {
  let component: AllwfemaleComponent;
  let fixture: ComponentFixture<AllwfemaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllwfemaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllwfemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

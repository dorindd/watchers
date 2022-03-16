import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllnewComponent } from './allnew.component';

describe('AllnewComponent', () => {
  let component: AllnewComponent;
  let fixture: ComponentFixture<AllnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

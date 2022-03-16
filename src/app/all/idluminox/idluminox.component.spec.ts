import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdluminoxComponent } from './idluminox.component';

describe('IdluminoxComponent', () => {
  let component: IdluminoxComponent;
  let fixture: ComponentFixture<IdluminoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdluminoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdluminoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

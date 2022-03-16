import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminoxComponent } from './luminox.component';

describe('LuminoxComponent', () => {
  let component: LuminoxComponent;
  let fixture: ComponentFixture<LuminoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuminoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuminoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

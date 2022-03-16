import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankyouComponent } from './tankyou.component';

describe('TankyouComponent', () => {
  let component: TankyouComponent;
  let fixture: ComponentFixture<TankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

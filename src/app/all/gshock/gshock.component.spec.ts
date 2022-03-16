import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GshockComponent } from './gshock.component';

describe('GshockComponent', () => {
  let component: GshockComponent;
  let fixture: ComponentFixture<GshockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GshockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GshockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

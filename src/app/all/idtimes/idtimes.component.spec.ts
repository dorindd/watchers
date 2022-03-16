import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdtimesComponent } from './idtimes.component';

describe('IdtimesComponent', () => {
  let component: IdtimesComponent;
  let fixture: ComponentFixture<IdtimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdtimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

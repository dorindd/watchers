import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdarchetypeComponent } from './idarchetype.component';

describe('IdarchetypeComponent', () => {
  let component: IdarchetypeComponent;
  let fixture: ComponentFixture<IdarchetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdarchetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdarchetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

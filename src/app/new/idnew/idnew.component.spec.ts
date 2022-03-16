import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdnewComponent } from './idnew.component';

describe('IdnewComponent', () => {
  let component: IdnewComponent;
  let fixture: ComponentFixture<IdnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

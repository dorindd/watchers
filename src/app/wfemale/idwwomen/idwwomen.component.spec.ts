import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdwwomenComponent } from './idwwomen.component';

describe('IdwwomenComponent', () => {
  let component: IdwwomenComponent;
  let fixture: ComponentFixture<IdwwomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdwwomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdwwomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

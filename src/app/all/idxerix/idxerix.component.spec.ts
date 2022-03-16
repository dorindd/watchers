import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdxerixComponent } from './idxerix.component';

describe('IdxerixComponent', () => {
  let component: IdxerixComponent;
  let fixture: ComponentFixture<IdxerixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdxerixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdxerixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

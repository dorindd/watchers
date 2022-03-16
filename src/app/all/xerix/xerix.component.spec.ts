import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XerixComponent } from './xerix.component';

describe('XerixComponent', () => {
  let component: XerixComponent;
  let fixture: ComponentFixture<XerixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XerixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XerixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

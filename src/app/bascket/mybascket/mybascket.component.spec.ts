import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybascketComponent } from './mybascket.component';

describe('MybascketComponent', () => {
  let component: MybascketComponent;
  let fixture: ComponentFixture<MybascketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybascketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybascketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

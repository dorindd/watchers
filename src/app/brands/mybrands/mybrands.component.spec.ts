import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybrandsComponent } from './mybrands.component';

describe('MybrandsComponent', () => {
  let component: MybrandsComponent;
  let fixture: ComponentFixture<MybrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

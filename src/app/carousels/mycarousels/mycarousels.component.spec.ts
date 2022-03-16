import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycarouselsComponent } from './mycarousels.component';

describe('MycarouselsComponent', () => {
  let component: MycarouselsComponent;
  let fixture: ComponentFixture<MycarouselsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycarouselsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycarouselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagemptyComponent } from './bagempty.component';

describe('BagemptyComponent', () => {
  let component: BagemptyComponent;
  let fixture: ComponentFixture<BagemptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagemptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

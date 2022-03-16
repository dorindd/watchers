import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymottoComponent } from './mymotto.component';

describe('MymottoComponent', () => {
  let component: MymottoComponent;
  let fixture: ComponentFixture<MymottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MymottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

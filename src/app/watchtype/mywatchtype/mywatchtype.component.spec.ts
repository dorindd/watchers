import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MywatchtypeComponent } from './mywatchtype.component';

describe('MywatchtypeComponent', () => {
  let component: MywatchtypeComponent;
  let fixture: ComponentFixture<MywatchtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MywatchtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MywatchtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

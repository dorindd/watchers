import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdundoneComponent } from './idundone.component';

describe('IdundoneComponent', () => {
  let component: IdundoneComponent;
  let fixture: ComponentFixture<IdundoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdundoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdundoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcaEditComponent } from './exca-edit.component';

describe('ExcaEditComponent', () => {
  let component: ExcaEditComponent;
  let fixture: ComponentFixture<ExcaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

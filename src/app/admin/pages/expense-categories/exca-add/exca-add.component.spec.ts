import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcaAddComponent } from './exca-add.component';

describe('ExcaAddComponent', () => {
  let component: ExcaAddComponent;
  let fixture: ComponentFixture<ExcaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

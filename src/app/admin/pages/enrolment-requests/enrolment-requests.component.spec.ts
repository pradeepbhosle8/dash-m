import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolmentRequestsComponent } from './enrolment-requests.component';

describe('EnrolmentRequestsComponent', () => {
  let component: EnrolmentRequestsComponent;
  let fixture: ComponentFixture<EnrolmentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolmentRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolmentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrReqListComponent } from './enr-req-list.component';

describe('EnrReqListComponent', () => {
  let component: EnrReqListComponent;
  let fixture: ComponentFixture<EnrReqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrReqListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrReqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

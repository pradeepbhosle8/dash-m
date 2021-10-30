import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcaListComponent } from './exca-list.component';

describe('ExcaListComponent', () => {
  let component: ExcaListComponent;
  let fixture: ComponentFixture<ExcaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

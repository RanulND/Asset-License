import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtReservationExamDashboardComponent } from './dmt-reservation-exam-dashboard.component';

describe('DmtReservationExamDashboardComponent', () => {
  let component: DmtReservationExamDashboardComponent;
  let fixture: ComponentFixture<DmtReservationExamDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmtReservationExamDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtReservationExamDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

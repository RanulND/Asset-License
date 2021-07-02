import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtReservationMedicalDashboardComponent } from './dmt-reservation-medical-dashboard.component';

describe('DmtReservationMedicalDashboardComponent', () => {
  let component: DmtReservationMedicalDashboardComponent;
  let fixture: ComponentFixture<DmtReservationMedicalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmtReservationMedicalDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtReservationMedicalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

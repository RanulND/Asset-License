import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtReservationMedicalComponent } from './dmt-reservation-medical.component';

describe('DmtReservationMedicalComponent', () => {
  let component: DmtReservationMedicalComponent;
  let fixture: ComponentFixture<DmtReservationMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmtReservationMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtReservationMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

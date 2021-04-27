import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtReservationExamComponent } from './dmt-reservation-exam.component';

describe('DmtReservationExamComponent', () => {
  let component: DmtReservationExamComponent;
  let fixture: ComponentFixture<DmtReservationExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmtReservationExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtReservationExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

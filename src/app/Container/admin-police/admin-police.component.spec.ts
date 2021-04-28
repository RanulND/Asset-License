import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPoliceComponent } from './admin-police.component';

describe('AdminPoliceComponent', () => {
  let component: AdminPoliceComponent;
  let fixture: ComponentFixture<AdminPoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPoliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

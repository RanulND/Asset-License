import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtAdminNavbarComponent } from './dmt-admin-navbar.component';

describe('DmtAdminNavbarComponent', () => {
  let component: DmtAdminNavbarComponent;
  let fixture: ComponentFixture<DmtAdminNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmtAdminNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtAdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtUserDashboardComponent } from './dmt-user-dashboard.component';

describe('DmtUserDashboardComponent', () => {
  let component: DmtUserDashboardComponent;
  let fixture: ComponentFixture<DmtUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmtUserDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

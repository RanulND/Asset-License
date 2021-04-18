import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDMTComponent } from './admin-dmt.component';

describe('AdminDMTComponent', () => {
  let component: AdminDMTComponent;
  let fixture: ComponentFixture<AdminDMTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDMTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDMTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

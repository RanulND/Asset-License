import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtUserComponent } from './dmt-user.component';

describe('DmtUserComponent', () => {
  let component: DmtUserComponent;
  let fixture: ComponentFixture<DmtUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmtUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

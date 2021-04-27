import { TestBed } from '@angular/core/testing';

import { PoliceAdminGuardGuard } from './police-admin-guard.guard';

describe('PoliceAdminGuardGuard', () => {
  let guard: PoliceAdminGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PoliceAdminGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

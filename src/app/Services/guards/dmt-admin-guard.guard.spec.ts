import { TestBed } from '@angular/core/testing';

import { DmtAdminGuardGuard } from './dmt-admin-guard.guard';

describe('DmtAdminGuardGuard', () => {
  let guard: DmtAdminGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DmtAdminGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

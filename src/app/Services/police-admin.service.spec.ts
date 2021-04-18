import { TestBed } from '@angular/core/testing';

import { PoliceAdminService } from './police-admin.service';

describe('PoliceAdminService', () => {
  let service: PoliceAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliceAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

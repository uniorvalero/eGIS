import { TestBed } from '@angular/core/testing';

import { BusinesspermitService } from './businesspermit.service';

describe('BusinesspermitService', () => {
  let service: BusinesspermitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinesspermitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

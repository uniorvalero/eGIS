import { TestBed } from '@angular/core/testing';

import { ReleasingpermitService } from './releasingpermit.service';

describe('ReleasingpermitService', () => {
  let service: ReleasingpermitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReleasingpermitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

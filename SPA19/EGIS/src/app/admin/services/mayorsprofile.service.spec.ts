import { TestBed } from '@angular/core/testing';

import { MayorsprofileService } from './mayorsprofile.service';

describe('MayorsprofileService', () => {
  let service: MayorsprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MayorsprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

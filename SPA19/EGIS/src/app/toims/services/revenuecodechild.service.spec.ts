import { TestBed } from '@angular/core/testing';

import { RevenuecodechildService } from './revenuecodechild.service';

describe('RevenuecodechildService', () => {
  let service: RevenuecodechildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevenuecodechildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

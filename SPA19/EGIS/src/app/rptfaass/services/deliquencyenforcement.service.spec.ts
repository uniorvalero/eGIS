import { TestBed } from '@angular/core/testing';

import { DeliquencyenforcementService } from './deliquencyenforcement.service';

describe('DeliquencyenforcementService', () => {
  let service: DeliquencyenforcementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliquencyenforcementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TaxComputationService } from './tax-computation.service';

describe('TaxComputationService', () => {
  let service: TaxComputationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxComputationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

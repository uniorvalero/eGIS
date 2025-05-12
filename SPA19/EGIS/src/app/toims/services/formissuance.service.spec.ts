import { TestBed } from '@angular/core/testing';

import { FormissuanceService } from './formissuance.service';

describe('FormissuanceService', () => {
  let service: FormissuanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormissuanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

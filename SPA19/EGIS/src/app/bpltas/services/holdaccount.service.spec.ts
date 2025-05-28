import { TestBed } from '@angular/core/testing';

import { HoldaccountService } from './holdaccount.service';

describe('HoldaccountService', () => {
  let service: HoldaccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoldaccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

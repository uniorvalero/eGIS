import { TestBed } from '@angular/core/testing';

import { CashticketService } from './cashticket.service';

describe('CashticketService', () => {
  let service: CashticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

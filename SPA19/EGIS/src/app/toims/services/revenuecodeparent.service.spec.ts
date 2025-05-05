import { TestBed } from '@angular/core/testing';

import { RevenuecodeparentService } from './revenuecodeparent.service';

describe('RevenuecodeparentService', () => {
  let service: RevenuecodeparentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevenuecodeparentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

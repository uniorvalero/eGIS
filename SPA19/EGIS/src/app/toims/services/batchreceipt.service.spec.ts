import { TestBed } from '@angular/core/testing';

import { BatchreceiptService } from './batchreceipt.service';

describe('BatchreceiptService', () => {
  let service: BatchreceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchreceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

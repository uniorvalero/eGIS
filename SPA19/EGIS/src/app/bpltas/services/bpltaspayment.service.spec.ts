import { TestBed } from '@angular/core/testing';

import { BpltaspaymentService } from './bpltaspayment.service';

describe('BpltaspaymentService', () => {
  let service: BpltaspaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpltaspaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

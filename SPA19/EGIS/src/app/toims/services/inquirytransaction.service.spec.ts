import { TestBed } from '@angular/core/testing';

import { InquirytransactionService } from './inquirytransaction.service';

describe('InquirytransactionService', () => {
  let service: InquirytransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquirytransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

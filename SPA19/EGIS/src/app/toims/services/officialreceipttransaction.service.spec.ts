import { TestBed } from '@angular/core/testing';

import { OfficialreceipttransactionService } from './officialreceipttransaction.service';

describe('OfficialreceipttransactionService', () => {
  let service: OfficialreceipttransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficialreceipttransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

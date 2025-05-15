import { TestBed } from '@angular/core/testing';

import { OfficialreceipttransactiondetailsService } from './officialreceipttransactiondetails.service';

describe('OfficialreceipttransactiondetailsService', () => {
  let service: OfficialreceipttransactiondetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficialreceipttransactiondetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

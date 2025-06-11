import { TestBed } from '@angular/core/testing';

import { RptassubcodeService } from './rptassubcode.service';

describe('RptassubcodeService', () => {
  let service: RptassubcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RptassubcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

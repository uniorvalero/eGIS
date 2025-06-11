import { TestBed } from '@angular/core/testing';

import { RptascodeService } from './rptascode.service';

describe('RptascodeService', () => {
  let service: RptascodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RptascodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

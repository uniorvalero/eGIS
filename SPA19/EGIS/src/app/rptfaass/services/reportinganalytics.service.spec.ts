import { TestBed } from '@angular/core/testing';

import { ReportinganalyticsService } from './reportinganalytics.service';

describe('ReportinganalyticsService', () => {
  let service: ReportinganalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportinganalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

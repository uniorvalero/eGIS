import { TestBed } from '@angular/core/testing';

import { RenewalassessmentService } from './renewalassessment.service';

describe('RenewalassessmentService', () => {
  let service: RenewalassessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenewalassessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReassessmentService } from './reassessment.service';

describe('ReassessmentService', () => {
  let service: ReassessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReassessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

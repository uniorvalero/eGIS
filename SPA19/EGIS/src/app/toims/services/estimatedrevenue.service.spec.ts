import { TestBed } from '@angular/core/testing';

import { EstimatedrevenueService } from './estimatedrevenue.service';

describe('EstimatedrevenueService', () => {
  let service: EstimatedrevenueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimatedrevenueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

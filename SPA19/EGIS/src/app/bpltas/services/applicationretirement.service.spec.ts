import { TestBed } from '@angular/core/testing';

import { ApplicationretirementService } from './applicationretirement.service';

describe('ApplicationretirementService', () => {
  let service: ApplicationretirementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationretirementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

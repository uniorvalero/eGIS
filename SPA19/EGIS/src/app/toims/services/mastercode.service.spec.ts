import { TestBed } from '@angular/core/testing';

import { MastercodeService } from './mastercode.service';

describe('MastercodeService', () => {
  let service: MastercodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MastercodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

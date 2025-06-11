import { TestBed } from '@angular/core/testing';

import { ActualuseService } from './actualuse.service';

describe('ActualuseService', () => {
  let service: ActualuseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualuseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

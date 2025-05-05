import { TestBed } from '@angular/core/testing';

import { MastersubcodeService } from './mastersubcode.service';

describe('MastersubcodeService', () => {
  let service: MastersubcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MastersubcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

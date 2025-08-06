import { TestBed } from '@angular/core/testing';

import { BpltasuserService } from './bpltasuser.service';

describe('BpltasuserService', () => {
  let service: BpltasuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpltasuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BpltasbankService } from './bpltasbank.service';

describe('BpltasbankService', () => {
  let service: BpltasbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpltasbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

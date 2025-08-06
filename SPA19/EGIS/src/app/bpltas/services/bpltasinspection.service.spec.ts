import { TestBed } from '@angular/core/testing';

import { BpltasinspectionService } from './bpltasinspection.service';

describe('BpltasinspectionService', () => {
  let service: BpltasinspectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpltasinspectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BpltasapplicationService } from './bpltasapplication.service';

describe('BpltasapplicationService', () => {
  let service: BpltasapplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpltasapplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

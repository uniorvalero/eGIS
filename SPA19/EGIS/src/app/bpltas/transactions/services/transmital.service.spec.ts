import { TestBed } from '@angular/core/testing';

import { TransmitalService } from './transmital.service';

describe('TransmitalService', () => {
  let service: TransmitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

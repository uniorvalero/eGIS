import { TestBed } from '@angular/core/testing';

import { TellertransactionService } from './tellertransaction.service';

describe('TellertransactionService', () => {
  let service: TellertransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TellertransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

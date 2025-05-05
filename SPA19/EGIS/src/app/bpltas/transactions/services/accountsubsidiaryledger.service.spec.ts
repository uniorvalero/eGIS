import { TestBed } from '@angular/core/testing';

import { AccountsubsidiaryledgerService } from './accountsubsidiaryledger.service';

describe('AccountsubsidiaryledgerService', () => {
  let service: AccountsubsidiaryledgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsubsidiaryledgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

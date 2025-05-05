import { TestBed } from '@angular/core/testing';

import { AccountadjustmentService } from './accountadjustment.service';

describe('AccountadjustmentService', () => {
  let service: AccountadjustmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountadjustmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

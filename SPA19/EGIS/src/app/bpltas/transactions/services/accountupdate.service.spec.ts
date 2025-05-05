import { TestBed } from '@angular/core/testing';

import { AccountupdateService } from './accountupdate.service';

describe('AccountupdateService', () => {
  let service: AccountupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

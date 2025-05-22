import { TestBed } from '@angular/core/testing';

import { CheckreceiveddayService } from './checkreceivedday.service';

describe('CheckreceiveddayService', () => {
  let service: CheckreceiveddayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckreceiveddayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

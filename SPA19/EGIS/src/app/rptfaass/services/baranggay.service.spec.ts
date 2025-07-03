import { TestBed } from '@angular/core/testing';

import { BaranggayService } from './baranggay.service';

describe('BaranggayService', () => {
  let service: BaranggayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaranggayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

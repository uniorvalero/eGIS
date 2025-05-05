import { TestBed } from '@angular/core/testing';

import { ManagingtemplateService } from './managingtemplate.service';

describe('ManagingtemplateService', () => {
  let service: ManagingtemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagingtemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

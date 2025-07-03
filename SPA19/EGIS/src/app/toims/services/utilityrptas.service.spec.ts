import { TestBed } from '@angular/core/testing';

import { UtilityrptasService } from './utilityrptas.service';

describe('UtilityrptasService', () => {
  let service: UtilityrptasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityrptasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

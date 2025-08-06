import { TestBed } from '@angular/core/testing';

import { UtilitybpltasService } from './utilitybpltas.service';

describe('UtilitybpltasService', () => {
  let service: UtilitybpltasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilitybpltasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

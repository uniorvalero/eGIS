import { TestBed } from '@angular/core/testing';

import { CollectionsummaryService } from './collectionsummary.service';

describe('CollectionsummaryService', () => {
  let service: CollectionsummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

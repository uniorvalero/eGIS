import { TestBed } from '@angular/core/testing';

import { CollectionsummarydetailsService } from './collectionsummarydetails.service';

describe('CollectionsummarydetailsService', () => {
  let service: CollectionsummarydetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsummarydetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

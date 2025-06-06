import { TestBed } from '@angular/core/testing';

import { PostingrecordService } from './postingrecord.service';

describe('PostingrecordService', () => {
  let service: PostingrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostingrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

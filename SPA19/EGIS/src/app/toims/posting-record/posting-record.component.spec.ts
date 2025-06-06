import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingRecordComponent } from './posting-record.component';

describe('PostingRecordComponent', () => {
  let component: PostingRecordComponent;
  let fixture: ComponentFixture<PostingRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostingRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

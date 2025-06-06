import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingRecordConfirmDialogComponent } from './posting-record-confirm-dialog.component';

describe('PostingRecordConfirmDialogComponent', () => {
  let component: PostingRecordConfirmDialogComponent;
  let fixture: ComponentFixture<PostingRecordConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostingRecordConfirmDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostingRecordConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

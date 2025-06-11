import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchInputReceiptDialogComponent } from './batch-input-receipt-dialog.component';

describe('BatchInputReceiptDialogComponent', () => {
  let component: BatchInputReceiptDialogComponent;
  let fixture: ComponentFixture<BatchInputReceiptDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchInputReceiptDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchInputReceiptDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

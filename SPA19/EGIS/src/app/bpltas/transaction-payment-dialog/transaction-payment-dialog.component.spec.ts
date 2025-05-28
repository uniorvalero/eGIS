import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPaymentDialogComponent } from './transaction-payment-dialog.component';

describe('TransactionPaymentDialogComponent', () => {
  let component: TransactionPaymentDialogComponent;
  let fixture: ComponentFixture<TransactionPaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionPaymentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

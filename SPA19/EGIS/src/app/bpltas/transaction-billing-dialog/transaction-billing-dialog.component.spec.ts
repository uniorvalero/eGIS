import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBillingDialogComponent } from './transaction-billing-dialog.component';

describe('TransactionBillingDialogComponent', () => {
  let component: TransactionBillingDialogComponent;
  let fixture: ComponentFixture<TransactionBillingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionBillingDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionBillingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

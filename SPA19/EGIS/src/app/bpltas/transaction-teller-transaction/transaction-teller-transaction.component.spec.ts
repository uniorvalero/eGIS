import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTellerTransactionComponent } from './transaction-teller-transaction.component';

describe('TransactionTellerTransactionComponent', () => {
  let component: TransactionTellerTransactionComponent;
  let fixture: ComponentFixture<TransactionTellerTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionTellerTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionTellerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

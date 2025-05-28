import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAccountSubsLedgerComponent } from './transaction-account-subs-ledger.component';

describe('TransactionAccountSubsLedgerComponent', () => {
  let component: TransactionAccountSubsLedgerComponent;
  let fixture: ComponentFixture<TransactionAccountSubsLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionAccountSubsLedgerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionAccountSubsLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

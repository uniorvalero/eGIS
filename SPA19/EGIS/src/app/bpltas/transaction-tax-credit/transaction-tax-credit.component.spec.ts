import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTaxCreditComponent } from './transaction-tax-credit.component';

describe('TransactionTaxCreditComponent', () => {
  let component: TransactionTaxCreditComponent;
  let fixture: ComponentFixture<TransactionTaxCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionTaxCreditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionTaxCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

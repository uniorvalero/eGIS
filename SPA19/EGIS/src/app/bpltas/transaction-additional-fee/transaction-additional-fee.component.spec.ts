import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAdditionalFeeComponent } from './transaction-additional-fee.component';

describe('TransactionAdditionalFeeComponent', () => {
  let component: TransactionAdditionalFeeComponent;
  let fixture: ComponentFixture<TransactionAdditionalFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionAdditionalFeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionAdditionalFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

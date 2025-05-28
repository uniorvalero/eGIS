import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHoldUnholdAccountComponent } from './transaction-hold-unhold-account.component';

describe('TransactionHoldUnholdAccountComponent', () => {
  let component: TransactionHoldUnholdAccountComponent;
  let fixture: ComponentFixture<TransactionHoldUnholdAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionHoldUnholdAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionHoldUnholdAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

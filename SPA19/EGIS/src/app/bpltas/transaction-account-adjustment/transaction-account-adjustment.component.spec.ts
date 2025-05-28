import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAccountAdjustmentComponent } from './transaction-account-adjustment.component';

describe('TransactionAccountAdjustmentComponent', () => {
  let component: TransactionAccountAdjustmentComponent;
  let fixture: ComponentFixture<TransactionAccountAdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionAccountAdjustmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionAccountAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

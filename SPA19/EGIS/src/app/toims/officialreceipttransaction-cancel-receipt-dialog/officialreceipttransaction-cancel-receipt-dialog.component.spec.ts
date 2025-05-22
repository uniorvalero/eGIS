import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialreceipttransactionCancelReceiptDialogComponent } from './officialreceipttransaction-cancel-receipt-dialog.component';

describe('OfficialreceipttransactionCancelReceiptDialogComponent', () => {
  let component: OfficialreceipttransactionCancelReceiptDialogComponent;
  let fixture: ComponentFixture<OfficialreceipttransactionCancelReceiptDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficialreceipttransactionCancelReceiptDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialreceipttransactionCancelReceiptDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

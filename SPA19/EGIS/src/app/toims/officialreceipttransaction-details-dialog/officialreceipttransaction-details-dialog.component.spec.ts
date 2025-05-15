import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialreceipttransactionDetailsDialogComponent } from './officialreceipttransaction-details-dialog.component';

describe('OfficialreceipttransactionDetailsDialogComponent', () => {
  let component: OfficialreceipttransactionDetailsDialogComponent;
  let fixture: ComponentFixture<OfficialreceipttransactionDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficialreceipttransactionDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialreceipttransactionDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

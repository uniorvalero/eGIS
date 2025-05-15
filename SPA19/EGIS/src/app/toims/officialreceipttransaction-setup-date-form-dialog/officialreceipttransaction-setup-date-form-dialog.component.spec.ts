import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialreceipttransactionSetupDateFormDialogComponent } from './officialreceipttransaction-setup-date-form-dialog.component';

describe('OfficialreceipttransactionSetupDateFormDialogComponent', () => {
  let component: OfficialreceipttransactionSetupDateFormDialogComponent;
  let fixture: ComponentFixture<OfficialreceipttransactionSetupDateFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficialreceipttransactionSetupDateFormDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialreceipttransactionSetupDateFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSubsidiaryLedgerComponent } from './account-subsidiary-ledger.component';

describe('AccountSubsidiaryLedgerComponent', () => {
  let component: AccountSubsidiaryLedgerComponent;
  let fixture: ComponentFixture<AccountSubsidiaryLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSubsidiaryLedgerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSubsidiaryLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

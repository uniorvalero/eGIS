import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashTicketTellerDialogComponent } from './cash-ticket-teller-dialog.component';

describe('CashTicketTellerDialogComponent', () => {
  let component: CashTicketTellerDialogComponent;
  let fixture: ComponentFixture<CashTicketTellerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashTicketTellerDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashTicketTellerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

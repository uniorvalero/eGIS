import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashTicketDialogComponent } from './cash-ticket-dialog.component';

describe('CashTicketDialogComponent', () => {
  let component: CashTicketDialogComponent;
  let fixture: ComponentFixture<CashTicketDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashTicketDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashTicketDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

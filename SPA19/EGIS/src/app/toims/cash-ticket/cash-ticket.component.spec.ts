import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashTicketComponent } from './cash-ticket.component';

describe('CashTicketComponent', () => {
  let component: CashTicketComponent;
  let fixture: ComponentFixture<CashTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

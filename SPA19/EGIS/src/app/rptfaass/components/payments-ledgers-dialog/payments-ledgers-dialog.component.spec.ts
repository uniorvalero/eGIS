import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsLedgersDialogComponent } from './payments-ledgers-dialog.component';

describe('PaymentsLedgersDialogComponent', () => {
  let component: PaymentsLedgersDialogComponent;
  let fixture: ComponentFixture<PaymentsLedgersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsLedgersDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsLedgersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

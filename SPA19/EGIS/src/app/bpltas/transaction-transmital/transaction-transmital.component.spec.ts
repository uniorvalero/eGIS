import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTransmitalComponent } from './transaction-transmital.component';

describe('TransactionTransmitalComponent', () => {
  let component: TransactionTransmitalComponent;
  let fixture: ComponentFixture<TransactionTransmitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionTransmitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionTransmitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

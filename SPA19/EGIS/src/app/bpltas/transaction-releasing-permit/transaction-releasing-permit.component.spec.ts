import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionReleasingPermitComponent } from './transaction-releasing-permit.component';

describe('TransactionReleasingPermitComponent', () => {
  let component: TransactionReleasingPermitComponent;
  let fixture: ComponentFixture<TransactionReleasingPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionReleasingPermitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionReleasingPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

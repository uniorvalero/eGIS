import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRenewalAssesmentComponent } from './transaction-renewal-assesment.component';

describe('TransactionRenewalAssesmentComponent', () => {
  let component: TransactionRenewalAssesmentComponent;
  let fixture: ComponentFixture<TransactionRenewalAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionRenewalAssesmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionRenewalAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

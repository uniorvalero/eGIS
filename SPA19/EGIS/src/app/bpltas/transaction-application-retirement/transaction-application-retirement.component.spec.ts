import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionApplicationRetirementComponent } from './transaction-application-retirement.component';

describe('TransactionApplicationRetirementComponent', () => {
  let component: TransactionApplicationRetirementComponent;
  let fixture: ComponentFixture<TransactionApplicationRetirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionApplicationRetirementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionApplicationRetirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

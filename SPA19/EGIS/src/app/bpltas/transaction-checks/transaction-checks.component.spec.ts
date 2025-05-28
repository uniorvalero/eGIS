import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionChecksComponent } from './transaction-checks.component';

describe('TransactionChecksComponent', () => {
  let component: TransactionChecksComponent;
  let fixture: ComponentFixture<TransactionChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionChecksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

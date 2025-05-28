import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionChecksDialogComponent } from './transaction-checks-dialog.component';

describe('TransactionChecksDialogComponent', () => {
  let component: TransactionChecksDialogComponent;
  let fixture: ComponentFixture<TransactionChecksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionChecksDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionChecksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

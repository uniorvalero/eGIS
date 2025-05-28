import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAccountUpdateComponent } from './transaction-account-update.component';

describe('TransactionAccountUpdateComponent', () => {
  let component: TransactionAccountUpdateComponent;
  let fixture: ComponentFixture<TransactionAccountUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionAccountUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionAccountUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

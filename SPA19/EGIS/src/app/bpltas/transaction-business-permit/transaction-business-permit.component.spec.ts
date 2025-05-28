import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBusinessPermitComponent } from './transaction-business-permit.component';

describe('TransactionBusinessPermitComponent', () => {
  let component: TransactionBusinessPermitComponent;
  let fixture: ComponentFixture<TransactionBusinessPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionBusinessPermitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionBusinessPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

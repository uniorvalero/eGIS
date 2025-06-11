import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchInputReceiptComponent } from './batch-input-receipt.component';

describe('BatchInputReceiptComponent', () => {
  let component: BatchInputReceiptComponent;
  let fixture: ComponentFixture<BatchInputReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchInputReceiptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchInputReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

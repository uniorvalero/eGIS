import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxComputationDialogComponent } from './tax-computation-dialog.component';

describe('TaxComputationDialogComponent', () => {
  let component: TaxComputationDialogComponent;
  let fixture: ComponentFixture<TaxComputationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxComputationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxComputationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

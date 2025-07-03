import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxComputationComponent } from './tax-computation.component';

describe('TaxComputationComponent', () => {
  let component: TaxComputationComponent;
  let fixture: ComponentFixture<TaxComputationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxComputationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxComputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

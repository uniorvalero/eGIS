import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCreditComponent } from './tax-credit.component';

describe('TaxCreditComponent', () => {
  let component: TaxCreditComponent;
  let fixture: ComponentFixture<TaxCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxCreditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

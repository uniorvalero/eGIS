import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTaxpayerCorporateCodeComponent } from './setup-taxpayer-corporate-code.component';

describe('SetupTaxpayerCorporateCodeComponent', () => {
  let component: SetupTaxpayerCorporateCodeComponent;
  let fixture: ComponentFixture<SetupTaxpayerCorporateCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupTaxpayerCorporateCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupTaxpayerCorporateCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

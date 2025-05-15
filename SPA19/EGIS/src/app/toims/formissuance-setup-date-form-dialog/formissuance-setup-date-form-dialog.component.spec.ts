import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormissuanceSetupDateFormDialogComponent } from './formissuance-setup-date-form-dialog.component';

describe('FormissuanceSetupDateFormDialogComponent', () => {
  let component: FormissuanceSetupDateFormDialogComponent;
  let fixture: ComponentFixture<FormissuanceSetupDateFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormissuanceSetupDateFormDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormissuanceSetupDateFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
